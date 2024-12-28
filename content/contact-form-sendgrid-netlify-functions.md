---
title: "Contact Form: Sendgrid & Netlify Functions"
date: 2021-10-01T00:41:16.847Z
abstract: Let's look at setting up a contact form in a serverless architecture. 
length: 5
github: https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail
series: Website
tags:
  - Website
  - Netlify
image: /website/contact_form.png
---
## TL:DR;

* Install the netlify-lambda package
* Add the scripts netlify-lambda serve lambdaand netlify-lambda build lambdato your npm config
* Create a netlify.toml with the right path to your functions
* Add the path of the function as a functions environment variable to your Nuxt config
* Create your function as a JavaScript file in your ./lambda folder, e.g., ./lambda/mail.js
* Export a handler method that receives event, context, and callback
* Make an AJAX call to process.env.functions+"/mail.js" in your Vue Component to call the function

## Why Netlify functions?
Suppose you created your website as I described in the previous post. In that case, you will likely want a static website with several benefits. But one of their downsides is processing user data because there is no server behind. So many people will probably just use a mailto link to receive emails. Well, this might work for some point, but that way, you can’t really process those data. It’s hard to collect them, change their status, and whatsoever. So without a server, we can’t process data. Period.

And here comes Netlify Functions! Those allow you to create server-side code using JavaScript functions which is absolutely everything we need. While Netlify Functions would work out of the box, some setup is required to test them locally.

### The package
First, install the netlify-lambda npm package via npm install netlify-lambda --save . At the time of writing this post, I am using the 6.14 version of the package.
### The scripts
Then add the commands to your npm scripts like so:
```js
"scripts": {
    "build": "nuxt build",
    "dev": "set NODE_ENV=development && nuxt && yarn functions:serve",
    "start": "nuxt start",
    "generate": "set NODE_ENV=production && nuxt generate && yarn functions:build",
    "functions:serve": "netlify-lambda serve lambda",
    "functions:build": "netlify-lambda build lambda",
    "precommit": "npm run lint"
  },
```

  The important parts are functions:serve to run a dev server of the functions and functions:build to prepare them for production. The lambdain that line is source folder of your functions. Also notice: on the line "dev": "set NODE_ENV=development && nuxt && yarn functions:serve" I am starting the nuxt and the functions dev server in parallel.

### The config
To make everything work we need to define where those functions will be found. Simply create a netlify.toml and add those lines:

```
[build]
  command = "yarn generate"
  publish = "dist"
  functions = "/.netlify/functions"
  ```
The publish directory is dist because that’s the default when you create a static site with nuxt generate. The path to functions describes the path when building your functions. Also you should add the url of your functions to the nuxt.config.js to use the correct paths on development or production:
```
env: {
    functions: process.env.NODE_ENV === 'production' ? `https://prasanthsasikumar.com/.netlify/functions` : 'http://localhost:9000',
  }
```
### Creating a function
To create a function you must simply create a file in your lambda folder, e.g. lambda/mail.js . Each functions must expose a handler method which will receive three arguments event , context and callback 
```
exports.handler = function(event, context, callback) {
}
```
The event contains any information about the event that triggered the function. In our case we simply need the event.body which we can parse as JSON via JSON.parse(event.body) . The context contains any information about the context the function was called, like user information. The callback is used to send a respond, like success or error messages.

### Creating a mail function
Our use case for functions is the submission of emails. To submit an email, we will also need a mail server. For this, I am using [Sendgrid](https://sendgrid.com/), but you could also use [Postmark](https://postmarkapp.com/), [Mailgun](https://www.mailgun.com/), or even your own mail server. To use Sendgrid, we will first install their Node package via npm install --save @sendgrid/mail. Then create the lambda/mail.js file and add the following lines:

```js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx);//sgMail.setApiKey('process.env.SENDGRID_API_KEY');
const headers = {
    "Access-Control-Allow-Origin" : "https://prasanthsasikumar.com", // better change this for production
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type"
  };
  
  exports.handler = function(event, context, callback) {
    console.log(event.body)
    console.log(event.httpMethod)
    // only allow POST requests
    if (event.httpMethod !== "POST") {
      return callback(null, {
        statusCode: 410,
        body: JSON.stringify({
          message: 'Only POST requests allowed.',
        }),
      });
    }
  
    // parse the body to JSON so we can use it in JS
    const payload = JSON.parse(event.body);
  
    // validate the form
    if (
      !payload.name ||
      !payload.subject ||
      !payload.email ||
      !payload.message
    ) {
      return callback(null, {
        statusCode: 422,
        headers,
        body: JSON.stringify({
          message: 'Required information is missing.',
        }),
      });
    }
    var msg = {
        to: 'prasanth.sasikumar.psk@gmail.com',//Where I receive the notification
        from: 'psas598@aucklanduni.ac.nz',//email I used to register sendgrid
        subject: payload.email+' says : '+payload.subject,//This might not be the best method
        text: payload.message,
        html: '<strong>'+payload.message+'</strong>',
    };

    sgMail.send(msg).then(() => {}, error => {
        console.error(error);
        if (error.response) {
                console.error(error.response.body)
        }
    });
  
  }
```
I commented the important lines in the code, I hope that’s enough for understanding everything, otherwise just let me know.

### Calling the function in VueJS
To use the function you basically just have to make an Ajax call to your function and pass the right parameters. You can see an example of that in the code below. Pay special attention to the submitToServer method! It’s using the fetch API to make an Ajax call, will then use the data of the Vue component via JSON.stringify(this.contactForm) and return the response as a Promise so you can use this in the handleSubmit method.

```html
<template lang="html">
  <div>
    <form @submit="handleSubmit">
      <input
        v-model="contactForm.name"
        name="name"
        type="text"
      >
      <input
        v-model="contactForm.email"
        name="email"
        type="text"
      >
      <input
        v-model="contactForm.subject"
        name="subject"
        type="text"
      >
      <textarea
        v-model="contactForm.message"
        name="message"
        cols="30"
        rows="10"
      />
      <button @click="handleSubmit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    }
  },
  methods: {
    submitToServer() {
      return new Promise((resolve, reject) => {
        fetch(`${process.env.functions}/mail`, {
          method: "POST",
          body: JSON.stringify(this.contactForm)
        }).then(response => {
          resolve(response);
        }).catch(err => {
          reject(err);
        });
      })
    },
    handleSubmit() {
      this.submitToServer().then(response => {
        const body = response.json();
        if (Number(response.status) !== 200) {
          console.log('Error submitting the form.')
        } else {
          console.log('Form was submitted!')
          this.$router.push('/contact/thank-you')
        }
      })
    },
  }
}
</script>
```

## That's it!

