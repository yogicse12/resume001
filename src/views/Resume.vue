<template>
  <div class="resume">
    <router-link tag="a" to="/" class="close">
        <img src="@/assets/images/close.svg" alt="" />
    </router-link>
    <div class="heading">
        <h2 class="section-subtitle">Check out my Resume</h2>
        <h1 class="font-black section-title">Resume</h1>
        <div class="line"></div>
    </div>
    <div class="px-4 py-20 md:container lg:px-8 md:mx-auto">
      <div class="grid grid-cols-1 gap-16 text-left lg:grid-cols-2">
        <div class="education">
          <h4 class="mb-4 text-3xl font-extrabold">Education</h4>
          <div>
            <div class="item">
              <h5 class="text-xl font-extrabold">Bachelor Degree <span class="float-right text-lg font-thin">2010 - 2014</span></h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Vellore Institute of Technology, Vellore, Tamil Nadu</p>
                <p>B.Tech graduate in Computer Science, 7.83 CGPA</p>
              </div>
            </div>
            <div class="item">
              <h5 class="text-xl font-extrabold">Senior Secondary <span class="float-right text-lg font-thin">2010</span></h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Maharaja Sawai Bhawani Singh School, Jaipur</p>
                <p>Senior Secondary Certificate in Science, 96.6%</p>
              </div>
            </div>
            <div class="item">
              <h5 class="text-xl font-extrabold">Secondary (CBSE) <span class="float-right text-lg font-thin">2008</span></h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Delhi Public School, Ahmedabad</p>
                <p>Secondary Certificate, 9.4 CGPA</p>
              </div>
            </div>
          </div>
        </div>
        <div class="experience">
          <h4 class="mb-4 text-3xl font-extrabold">Experience</h4>
          <div>
            <div class="item">
              <h5 class="text-xl font-extrabold">UI/UX Designer</h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Discord / 2019 - Present</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="item">
              <h5 class="text-xl font-extrabold">Back-End Developer</h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Google / 2017 - 2018</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="item">
              <h5 class="text-xl font-extrabold">Software Engineer</h5>
              <div class="mt-4 details">
                <p class="mb-2 font-bold">Adobe / 2015 - 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-32 text-left">
        <h2 class="section-subtitle">My level of knowledge in some tools</h2>
        <h1 class="font-black section-title">My Skills</h1>
        <div class="grid grid-cols-1 gap-16 mt-12 lg:grid-cols-2">
          <progress-bar :percentage="95" :stroke-width="10" title="HTML/CSS"></progress-bar>
          <progress-bar :percentage="75" :stroke-width="10" title="Vue JS"></progress-bar>
          <progress-bar :percentage="95" :stroke-width="10" title="Web Design"></progress-bar>
          <progress-bar :percentage="90" :stroke-width="10" title="JavaScript"></progress-bar>
          <progress-bar :percentage="85" :stroke-width="10" title="Node.js"></progress-bar>
          <progress-bar :percentage="80" :stroke-width="10" title="Express.js"></progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from '@/components/ProgressBar.vue';
export default {
  name: 'Resume',
  components: {
      ProgressBar
  }
}
</script>

<style lang="scss" scoped>
  .resume {
    padding: 6em 8em;
    .close {
        position: fixed;
        right: 32px;
        top: 24px;
    }
    .heading {
        .line {
            position: relative;
            margin-top: 24px;
            &:before {
                content: "";
                position: absolute;
                background-color: $color-1;
                height: 4px;
                width: 64px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    .education, .experience {
      .item {
        padding: 24px 40px;
        background-color: #161616;
        border-left: 2px solid $color-1;
        border-bottom: 0.8px solid #313131;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          width: 0; 
          height: 0; 
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid $color-1;
          top: 26px;
          left: 0;
        }
        .details {
          p {
            color: #9f9f9f;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
    @media (max-width: 767px), (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      padding: 4em 1em;
      .close {
          position: fixed;
          right: 12px;
          top: 12px;
          width: 32px;
      }
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait) {
        padding: 4em 2em;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape) {
        padding: 4em 2em;
    }
  }
</style>