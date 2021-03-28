<template>
  <div class="home">
    <div class="background-image-holder" :style="{'background-image': 'url(' + require('@/assets/images/cover.jpg') + ')'}">
      <div class="content">
        <div class="header">
          <div class="name">Arnab Sarkar</div>
          <div class="links" :class="{'show': active}">
            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/resume">Resume</router-link></li>
              <li><router-link to="/projects">Projects</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="mobile-links" @click="showmenu"><img src="@/assets/images/menu.svg" alt=""></div>
        </div>
        <div class="main-content">
          <h1 class="title">ARNAB SARKAR</h1>
          <h2 class="subtitle">I'm a
            <VueTyper
            :text='["Designer.", "Developer.", "Freelancer."]' 
            caret-animation='smooth'
            :repeat='Infinity'
            :shuffle='true'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='100'
            erase-style='backspace'
            :erase-on-complete='false'
            ></VueTyper>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer';
export default {
  name: 'Home',
  components: {
    VueTyper,
  },
  data() {
    return {
      active: false
    }
  },
  watch: {
      '$route' () {
          this.active = false;
      }
  },
  methods: {
    showmenu() {
      this.active = !this.active;
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  height: 100vh;
  .content {
    min-height: 100px;
    color: $white;
    text-align: left;
    .header {
      padding: 1.5em 2em;
      display: flex;
      justify-content: space-between;
      .name {
        font-size: 24px;
        letter-spacing: 2px;
      }
      .links {
        ul {
          list-style-type: none;
          margin: 0;
          li {
            display: inline-block;
            margin-right: 24px;
            line-height: 34px;
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
      .mobile-links {
        display: none;
      }
    }
    .main-content {
      padding: 8em 4em;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      h1.title {
        text-align: center;
        font-size: 96px;
        letter-spacing: 1rem;
        text-shadow: 0 8px 10px rgba(0, 0, 0, 0.6);
      }

      h2.subtitle {
        text-align: center;
        font-size: 32px;
        letter-spacing: 4px;
        text-shadow: 0 8px 8px rgba(0, 0, 0, 0.8);
        /deep/ .vue-typer .custom.char {
          color: #FFFFFF;
        }
      }
    }
  }
  @media (max-width: 767px), (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
    .content {
      .header {
        padding: 1.2em 1.5em;
        .links {
          display: none;
          &.show {
            display: block;
            position: absolute;
            top: 60px;
            right: 32px;
            ul {
              width: 150px;
              background-color: #161616;
              padding: 8px 16px;
              li {
                display: block;
                line-height: 48px;
              }
            }
          }
        }
        .mobile-links {
          display: inline;
        }
      }
      .main-content {
        padding: 4em 1.5em;
        bottom: 10%;
        h1.title {
          font-size: 68px;
          letter-spacing: 0.2rem;
          line-height: 80px;
        }
        h2.subtitle {
          font-size: 26px;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    .content {
      .main-content {
        h1.title {
          line-height: 120px;
        }
      }
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape) {
    .content {
      .main-content {
        h1.title {
          font-size: 88px;
          line-height: 120px;
        }
      }
    }
  }
}
</style>

