<template>
  <div class="flex flex-col min-h-screen">
    <div class="relative md:mb-0 bg-gradient-to-br from-gray-900 from-5% via-purple-800 via-60% to-pink-500">
      <SvgViewBox />
      <Header />
      <div
        class="container relative z-10 px-4 mx-auto lg:max-w-6xl md:px-8 xl:px-0 z-10 mt-8 mb-0 md:mb-16 mb:mt-8 lg:mt-24">
        <section class="credential-area">
          <div class="container relative">
            <div class="flex flex-col items-center md:items-start md:flex-row min-h-screen items-start justify-center">
              <!-- credential-sidebar-wrap -->
              <div
                class="credential-sidebar-wrap top-20 md:sticky md:ml-8 mx-auto aos-init aos-animate mb-8 md:mb-0 md:mr-8"
                data-aos="zoom-in">
                <div class="credential-sidebar text-center">
                  <div class="shadow-box">
                    <img src="/about/bg1.png" alt="BG" class="bg-img">
                    <div class="img-box">
                      <NuxtLink to="/">
                        <img src="/about/psk3.png" alt="About Me">
                      </NuxtLink>
                    </div>
                    <h2>Prasanth Sasikumar</h2>
                    <a href="https://x.com/get2psk">
                      <p class="pt-4">@get2psk</p>
                    </a>
                    <ul class="social-links flex justify-center">
                      <li><a href="https://scholar.google.com/citations?hl=en&user=85RKyZMAAAAJ"><i
                            class="iconoir-graduation-cap"></i></a></li>
                      <li><a href="https://www.linkedin.com/in/prasanth-sasikumar/"><i class="iconoir-linkedin"></i></a>
                      </li>
                      <li><a href="https://www.instagram.com/psk._/"><i class="iconoir-instagram"></i></a></li>
                      <li><a href="https://www.facebook.com/sasikumar.prasanth"><i class="iconoir-facebook-tag"></i></a>
                      </li>
                    </ul>
                    <NuxtLink to="/contact" class="contact-btn">Contact Me</NuxtLink>
                  </div>
                </div>
              </div>
              <!-- Right Scrollable Text Section -->
              <div class="credential-content flex-1 md:ml-4 lg:ml-16">
                <div class="credential-about aos-init aos-animate" data-aos="zoom-in">
                  <h2>About Me</h2>
                  <p>I'm an avid explorer with an insatiable curiosity for understanding how different societies have
                    evolved and shaped our world. My trusty CFMOTO 650 has been my companion across New Zealand's
                    diverse landscapes, from the rugged Southern Alps to the pristine beaches of the Coromandel. In
                    Singapore, my KTM became my ticket to frequent Malaysian adventures, while Indonesia's challenging
                    off-road trails have tested my skills and rewarded me with unforgettable experiences.</p>

                  <p>My passion for two-wheelers runs deep, with a particular fondness for Yamaha machines - there's
                    something about their reliability and spirit that resonates with my adventurous soul. Whether it's
                    navigating through remote villages, camping under star-filled skies, or sharing stories with fellow
                    travelers at roadside cafes, I find my greatest joy in the journey itself.</p>

                  <p>Each expedition teaches me something new about human resilience and cultural diversity. I'm
                    particularly fascinated by how ancient trade routes have shaped modern communities and how
                    traditional practices persist in our rapidly changing world. Photography and journaling help me
                    document these discoveries, capturing the essence of places and people I encounter along the way.
                  </p>

                  <p>When I'm not planning my next adventure or maintaining my bikes, you'll find me poring over maps,
                    researching historical trade routes, or connecting with fellow adventure riders to share tales from
                    the road. Life, for me, is about collecting stories, understanding cultures, and experiencing the
                    world from the saddle of a motorcycle.</p>
                  <p>I'm a Research Fellow in Singapore, working with Meta and NUS to create the largest dataset for
                    studying motion sickness in VR.
                    We're trying to figure out how to solve motion sickness in virtual reality. On the side, I'm also
                    working on some cool AR/VR projects to solve real-world problems.</p>

                  <p>Previously, I pursued my Ph.D. research at the Empathic Computing Lab, The University of Auckland,
                    exploring the integration of multimodal inputs for remote collaboration and scene reconstruction.
                  </p>

                  <p>I hold a Master's degree in Human-Computer Interaction from the University of Canterbury, where I
                    conducted research on incorporating haptic devices into VR, supported by MBIE. My professional
                    journey spans over three years in IT, encompassing XR development, web technologies, and airline IT
                    product innovation.</p>

                  <p>I regularly work with Unity and Unreal Engine, and I have a solid proficiency in programming
                    languages like C#, C++, Java, JavaScript, Angular, and Node.js.
                    I have experience with agile development methodologies & I am actively pursuing avenues to
                    commercialize my research findings. :)</p>
                </div>
                <div class="credential-edc-exp credential-experience" id="work-experience">
                  <h2 data-aos="fade-up" class="aos-init aos-animate">Adventures</h2>
                  <div class="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                    <h4>2023</h4>
                    <h3>The Forgotten Highway Expedition</h3>
                    <h5>North Island, New Zealand</h5>
                    <p>Embarked on a soul-stirring journey through New Zealand's historic Forgotten World Highway,
                      navigating 155km of winding roads through pristine wilderness. Crossed 12 bridges, conquered
                      unsealed sections, and discovered hidden valleys while exploring abandoned settlements that tell
                      tales of pioneering spirits.</p>
                  </div>
                  <div class="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                    <h4>2022</h4>
                    <h3>Trans-Malaysian Adventure</h3>
                    <h5>Malaysia</h5>
                    <p>Led a group of riders on a cross-country expedition from Singapore through Malaysia's hidden
                      trails, exploring remote kampongs and ancient rainforests. Discovered secret waterfalls, shared
                      meals with local families, and documented traditional ways of life that still thrive away from
                      tourist routes.</p>
                  </div>
                </div>

                <div class="credential-edc-exp credential-education" id="education">
                  <h2 data-aos="fade-up" class="aos-init aos-animate">What else?</h2>
                  <div class="credential-edc-exp-item aos-init aos-animate" data-aos="zoom-in">
                    <h4>2017 onwards</h4>
                    <h3>Virtual & Augmented Reality</h3>
                    <h5>New Zealand | Singapore</h5>
                    <p>In my Ph.D. research, I focused on AR for local collaboration and VR for remote expertise,
                      studying
                      various techniques to facilitate teamwork. Using depth cameras for environment reconstruction and
                      physiological cues to infer collaborators' emotions, I aimed to enhance collaboration efficiency.
                    </p>
                  </div>
                </div>

                <div class="skills-wrap">
                  <h2 data-aos="fade-up" class="aos-init">Adventure Skills</h2>
                  <div class="grid grid-cols-2 skill-items gap-24 flex-wrap">
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">95%</span>
                      <h3 class="name">Off-Road Riding</h3>
                      <p>Mud, Gravel, Mountain Trails</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">88%</span>
                      <h3 class="name">Bike Maintenance</h3>
                      <p>Trail Repairs, Preventive Care</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">92%</span>
                      <h3 class="name">Navigation</h3>
                      <p>Maps, GPS, Star Navigation</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">85%</span>
                      <h3 class="name">Cultural Adaptation</h3>
                      <p>Local Customs, Basic Languages</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">91%</span>
                      <h3 class="name">Survival Skills</h3>
                      <p>Camping, Trail Cooking, First Aid</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">87%</span>
                      <h3 class="name">Photography</h3>
                      <p>Trail Documentation, Night Sky</p>
                    </div>
                  </div>
                </div>

                <div class="skills-wrap awards-wrap">
                  <h2 data-aos="fade-up" class="aos-init">My Steel Horses</h2>
                  <div class="d-grid skill-items gap-24 flex-wrap">
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">Current</span>
                      <h3 class="name">CFMOTO 650NK</h3>
                      <p>New Zealand's backroads conqueror, my trusty companion across the islands</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">Current</span>
                      <h3 class="name">KTM Duke</h3>
                      <p>My Singapore-Malaysia border runner, perfect for Southeast Asian adventures</p>
                    </div>
                    <div class="skill-item aos-init" data-aos="zoom-in">
                      <span class="percent">Previous Love</span>
                      <h3 class="name">Yamaha MT-07</h3>
                      <p>The reliable beast that started my two-wheeled journey</p>
                    </div>
                    <br><br>
                  </div>
                </div>
                <br>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />

  </div>
</template>
<script setup>
import AOS from 'aos';
const route = useRoute()
const tagName = route.params.slug
onMounted(() => {
  AOS.init({ once: true });
  scrollToHash();
});
function scrollToHash() {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
</script>

<style lang="css" scoped>
/* Ensure the scrollable area doesn't extend beyond the screen height */
.max-h-screen {
  max-height: 100vh;
}
</style>
<style lang="css" scoped>
@import '~/assets/css/style.css';
@import '~/assets/css/iconoir.css';
</style>
