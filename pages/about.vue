<template>
  <div>
    <div class="maindiv dark:bg-gray-900">
      <div class="relative mb-8 md:mb-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-500">
        <SvgViewBox />
        <Header />
        <div
          class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-16">
          <div class="flex flex-col items-center text-white">
            <div class="relative mb-4 lg:mb-4 invisible lg:visible">
              <div class="relative z-10 w-full">
                <!-- <div class="font-extrabold tracking-wide text-center text-purple-700 uppercase bg-white rounded-full shadow px-4 py-2 text-2xl">PSK</div> -->
              </div>
            </div>
            <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full">
              <br><br><br></div>
            <div class="relative  mb-4 lg:mb-4">
              <div
                class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded-full">
              </div>
              <div class="relative z-10 w-full" data-aos="flip-left">
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-50 -50 400 400"
                  class="fill-current">
                  <path
                    d="M37.7,138.9c0.4-0.5,0.7-1.3,0.7-1.9c0-8.6,0-17.1,0-25.7c0-1.2,0.4-1.7,1.6-1.7c0.8,0,1.7,0.2,2.5,0.2 c5,0.1,10,0.2,15,0.2c35.3,0,70.6-0.1,106-0.2c11.4,0,22.9-0.1,34.3-0.2c0.5,0,1.3-0.3,1.6-0.7c2.6-2.9,5.1-5.9,7.7-8.9 c16.7-19.4,33.4-38.7,50-58.1c7.1-8.3,14.3-16.5,21.4-24.8c0.3-0.4,0.6-1.1,0.5-1.6c0-0.2-0.9-0.5-1.4-0.5 c-6.6,0-13.3,0.2-19.9,0.2c-44.7,0-89.4-0.1-134.2-0.1c-15,0-30.1-0.1-45.1-0.1c-1.8,0-2,0.3-2,2c0,6.4,0,12.8,0,19.2 c0,2.8,0,2.8,2.7,2.8c3.8,0,7.7,0.1,11.5,0.1c43,0,85.9,0,128.9,0c0.7,0,1.4,0,2,0.1c0.5,0.1,1,0.4,1.2,0.8c0.7,1,0.3,3.9-0.5,4.8 c-10.8,12.3-21.5,24.6-32.3,36.9c-0.9,1.1-2.1,1.6-3.6,1.6c-14.6-0.1-29.1-0.1-43.7-0.1c-33.5,0-67,0-100.6,0c-0.4,0-0.7,0-1.1,0 c-1.8-0.2-2.7-1.2-2.7-2.9c0-15.9,0-31.8,0-47.6c0-5.4,0-10.8,0-16.2c0-1.5-0.3-1.7-1.8-1.6c-1,0.1-2,0.2-3,0.2 c-5.1,0-10.2-0.1-15.4-0.2c-1.4,0-1.5,0.2-1.4,1.5c0.1,1.4,0.2,2.7,0.2,4.1c0,22.6,0,45.1,0,67.7c0,17.8-0.1,35.6-0.1,53.4 c0,6.9,0,13.8,0,20.9c0.4-0.4,0.6-0.7,0.9-0.9C24.5,154.1,31.1,146.5,37.7,138.9z" />
                  <path
                    d="M141.6,183.8c2-2.3,4-4.7,6.1-7.2c-0.7,0-1.2,0-1.7,0c-30.1,0-60.2,0-90.3,0c-0.4,0-0.7,0-1.1,0c-3-0.2-4.2-2.4-2.7-4.9 c0.4-0.7,0.9-1.4,1.5-2c2.6-3,5.2-6,7.7-9.1c3.5-4.4,6.9-8.8,10.4-13.2c0.9-1.1,2.1-1.5,3.5-1.5c2,0.1,3.9,0.4,5.9,0.4 c7.8,0.1,15.7,0.1,23.5,0.1c22-0.1,43.9-0.2,65.9-0.3c0.8,0,1.2-0.3,1.7-0.8c7-8.5,14-17.1,21-25.6c0.5-0.6,0.7-1.2,1.2-2 c-2.3,0-4.3,0-6.4,0c-28.3,0.2-56.5,0.3-84.8,0.5c-11.5,0.1-23,0.1-34.4,0.2c-0.9,0-1.7,0-2.4,0.9c-15.9,18.6-31.8,37.2-47.6,55.9 c-0.4,0.5-0.7,1.3-0.7,1.9c0,7.4,0,14.9,0,22.3c0,0.4,0,0.8,0.1,1.3c0.5,0,1,0,1.5,0c20.4,0,40.9,0,61.3,0c2.9,0,5.8,0,8.8,0 c2.3,0,3.2,1.2,2.2,3.3c-0.6,1.2-1.3,2.4-2.1,3.5c-9.8,11.6-19.7,23.2-29.5,34.7c-1.4,1.6-3.1,2.6-5.2,2.9 c-1.6,0.2-3.2,0.3-4.8,0.2c-10.3-0.1-20.6-0.1-30.8-0.2c-0.4,0-0.8,0-1.3,0c0,9,0,17.9,0,26.8c0.3,0,0.5,0.1,0.8,0.1 c15.6,0,31.3,0,46.9,0c0.4,0,1-0.3,1.3-0.6c9.5-11,19-22.1,28.4-33.1C110.6,220,126.1,201.9,141.6,183.8z" />
                  <path
                    d="M196.7,132.9c-13.4,17.8-26.8,35.4-40.1,53.1c0.3,0.4,0.6,0.8,0.8,1.1c21.2,27.7,42.3,55.4,63.5,83.1 c0.5,0.6,0.9,0.9,1.8,0.9c26.7,0,53.4,0,80,0c0.3,0,0.7,0,1.2-0.1C268.1,225,232.5,179,196.7,132.9z" />
                  <path
                    d="M147.4,195.8c-19.5,25.1-39,50.1-58.5,75.3c19.9,0,39.6,0,59.5,0c-0.2-25.2-0.5-50.2-0.7-75.3 C147.6,195.8,147.5,195.8,147.4,195.8z" />
                </svg>
              </div>
            </div>
            <div class="flex-grow font-extrabold text-center md:mb-4 md:w-2/3 lg:w-full text-3xl lg:text-8xl"
              data-aos="zoom-out">Prasanth Sasikumar</div>
            <div class="flex flex-col items-center pb-8 text-center lg:text-left lg:items-start">
              <div class="lg:hidden"><br><br></div>
              <div class="whitespace-pre-line lg:text-lg lg:mt-4 text-pink-50 text-center" data-aos="fade-up"> Research
                Fellow at the National University of Singapore. Specialize in using multimodal input in remote
                collaboration and scene reconstruction. Interested in all things virtual and augmented.</div>
            </div>
          </div>
        </div>
        <br>
        <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full"><br><br>
        </div>
      </div>

      <!-- <div class="flex flex-col gap-4 lg:gap-12 lg:grid lg:grid-cols-3">
        <div class="lg:col-span-2">
          <div class="relative ">
              <div class="absolute w-full h-full transform bg-white opacity-25 dark:bg-gray-800 mix-blend-overlay -rotate-3 rounded"></div>
              <div class="relative z-10 mx-auto">
                  <NuxtImg src="/about.jpg" width="1200" height="700" class="w-full mt-2 rounded shadow-xl md:mt-4 bg-gradient-to-br from-gray-800 to-gray-700"/>
              </div>
          </div> 
        </div>
        <div class="flex flex-col items-center pb-8 text-center lg:text-left lg:items-start">
          <div class="hidden w-2/3 text-3xl font-extrabold text-white lg:block md:text-4xl lg:text-5xl lg:w-full" ><br><br><br></div>              
          <div class="whitespace-pre-line lg:text-lg lg:mt-4 text-pink-50"> {{post.abstract}} </div>
        </div>
      </div> -->

      <!-- Body Part -->
      <div
        class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 flex flex-col-reverse justify-between mt-8 lg:space-x-24 lg:flex-row lg:mt-16">

        <!--Left side navigation. Disappars on mobile -->
        <div class="relative">
          <div
            class="p-4 py-8 -mx-4 rounded-lg md:p-8 lg:p-4 md:-mx-8 lg:py-4 lg:mx-0 bg-gray-50 dark:bg-gray-900 sticky lg:mt-0 top-20 lg:max-w-80 lg:w-80">
            <NuxtImg src="/about/psk2.png" width="1200" height="700"
              class="w-full mt-2 rounded-lg shadow-xl md:mt-4 bg-gradient-to-br from-gray-800 to-gray-700" />
            <br>
            <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Github</h3>
            <a href="https://github.com/prasanthsasikumar" target="_blank"
              class="flex items-stretch overflow-hidden text-sm text-white text-gray-500 bg-gray-900 rounded dark:bg-gray-100 mb-4 md:mb-8">
              <div
                class="flex items-center justify-center p-4 text-gray-300 bg-gray-800 dark:bg-white dark:text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                  </path>
                </svg>
              </div>
              <div class="p-4 text-gray-300 dark:text-gray-500"> Explore my projects <span
                  class="text-white dark:text-gray-700"> on GitHub.</span></div>
            </a>

            <h3 class="mb-4 text-xs font-bold tracking-wide text-gray-400 uppercase dark:text-gray-600">Checkout my Tags
            </h3>
            <div class="flex flex-wrap text-xs font-bold uppercase mb-4 md:mb-8">
              <NuxtLink to="/tags/MagicMirror"
                class="block px-2 py-1 mb-2 mr-2 text-purple-400 transition-colors duration-100 bg-purple-500 rounded-sm whitespace-nowrap hover:bg-pink-500 hover:text-pink-300">
                <span class="-mr-px">#</span> <span class="text-white">MagicMirror</span>
              </NuxtLink>
              <NuxtLink to="/tags/AugmentedReality"
                class="block px-2 py-1 mb-2 mr-2 text-purple-400 transition-colors duration-100 bg-purple-500 rounded-sm whitespace-nowrap hover:bg-pink-500 hover:text-pink-300">
                <span class="-mr-px">#</span> <span class="text-white">Augmented Reality</span>
              </NuxtLink>
            </div>
            <button onclick="location.href='/contact'"
              class="w-full bg-gray-800 hover:bg-gray-300 text-gray-300 hover:text-black font-bold py-2 px-4 rounded-lg">Get
              in touch with me.</button>
          </div>
        </div>

        <article class="min-w-0 prose prose-lg prose-pink max-w-none dark:prose-dark dark:text-white"
          data-aos="fade-up">
          <p class="text-center">XR Developer | HCI Researcher.
          </p>
          <p>As a Research Fellow based in Singapore, I am currently working on the largest VR dataset project in
            collaboration with Meta and NUS, to study motion sickness in virtual reality. My work involves innovative
            AR/VR applications aimed at solving industrial problems. My Ph.D. research at the <a
              href="http://empathiccomputing.org/team/prasanth-sasikumar/">Empathic Computing Lab, The University of
              Auckland</a>, focuses on using multimodal inputs for remote collaboration and scene reconstruction.
          </p>
          <p>My educational background includes a Master's in Human-Computer Interaction from the <a
              href="https://www.hitlabnz.org/">Human Interface Lab, University of Canterbury</a> in 2018, where my
            research centered on integrating haptic devices in VR, a project sponsored by MBIE. Professionally, I have
            over three years of experience in IT, spanning XR development and web technologies, including airline IT
            product development. My expertise covers Unity and Unreal Game Engines, programming in C#, C++, Java,
            JavaScript, Angular, and Node.js, and agile development methodologies. I am also working towards the
            commercialization of my research.
          </p>
          <p><a href="/credentials">Education & Experience</a></p>
          <br><br>
        </article>

      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import AOS from 'aos';
export default {
  head() {
    return {
      title: 'About',
      meta: [
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: 'XR Developer | HCI Researcher' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://prasanthsasikumar.com/about.svg`,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'XR Developer | HCI Researcher.',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://prasanthsasikumar.com/about.svg`,
        },
      ],
    }
  },
  data() {
    return {
      contactForm: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
      showPopup: false,
      showValidation: false
    }
  },
  methods: {
    submitToServer() {
      return new Promise((resolve, reject) => {
        fetch(`${process.env.functions}/mail`, {
          mode: "no-cors",
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
      const isEmpty = str => !str.trim().length;
      if (isEmpty(this.contactForm.name) || isEmpty(this.contactForm.email) || isEmpty(this.contactForm.subject) || isEmpty(this.contactForm.message)) {
        this.showValidation = true;
        return null
      }
      this.showValidation = false;

      this.submitToServer().then(response => {
        const body = response.json();
        if (Number(response.status) == 200 || Number(response.status) == 308) {
          this.showPopup = true;
          this.clearForm()
          console.log('Form was submitted!')
        } else {
          this.showPopup = true;
          this.clearForm()
          console.log('Error submitting the form.')
          console.log(response)
        }
      })
    },
    clearForm() {
      this.contactForm.name = '';
      this.contactForm.email = '';
      this.contactForm.subject = '';
      this.contactForm.message = '';
    }
  },
  mounted: function () {
    AOS.init();
  }
}
</script>
<style>
/* The actual popup */
.popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: relative;
  z-index: 1;
  bottom: 125%;
}

/* Popup arrow */
.popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
