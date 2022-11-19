<template>
  <q-layout class="bg-light-blue-10">
    <q-header elevated class="text-white">
      <q-page-sticky expand position="top" :class="
        toolbar_sticky >= 500 && toolbar_sticky <= 3250
          ? 'bg-blue-grey-9 mobile-hide platform-ios-hide platform-android-hide'
          : ''
      ">
        <q-toolbar class="justify-center">
          <div v-if="$q.screen.gt.sm" class="
              GL__toolbar-link
              q-gutter-md
              text-body2 text-weight-bold
              row
              items-center
              no-wrap
            ">
            <a href="#1" v-smooth-scroll :class="click_page == 1 || getScroll() == 1 ? 'text-blue' : 'text-white'"
              @click="clickPage(1)">Home</a>
            <a href="#2" v-smooth-scroll :class="click_page == 2 || getScroll() == 2 ? 'text-blue' : 'text-white'"
              @click="clickPage(2)">
              About
            </a>
            <a href="#3" v-smooth-scroll :class="click_page == 3 || getScroll() == 3 ? 'text-blue' : 'text-white'"
              @click="handleScroll">
              Skills
            </a>
            <a href="#4" v-smooth-scroll :class="click_page == 4 || getScroll() == 4 ? 'text-blue' : 'text-white'"
              @click="clickPage(4)">
              Education
            </a>
            <a href="#5" v-smooth-scroll :class="click_page == 5 || getScroll() == 5 ? 'text-blue' : 'text-white'"
              @click="clickPage(5)">
              Certifications
            </a>
            <a href="#6" v-smooth-scroll :class="click_page == 6 || getScroll() == 6 ? 'text-blue' : 'text-white'"
              @click="clickPage(6)">
              Experience
            </a>
            <a href="#7" v-smooth-scroll :class="click_page == 7 || getScroll() == 7 ? 'text-blue' : 'text-white'"
              @click="clickPage(7)">
              Projects
            </a>
          </div>
        </q-toolbar>
      </q-page-sticky>
    </q-header>

    <q-footer id="8" class="text-center row bg-image">
      <q-toolbar>
        <div class="column col">
          <div class="absolute-top">
            <a href="#1" v-smooth-scroll :style="{ textDecoration: 'none' }">
              <q-btn fab icon="keyboard_arrow_up" class="text-white" />
            </a>
          </div>
          <div class="text-subtitle2">Thanks for your visit!</div>
          <div class="text-subtitle2">@Created by Thanh Do</div>
        </div>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <div class="">
        <Home id="1" />
        <About id="2" />
        <Skills id="3" />
        <Education id="4" />
        <Certifications id="5" />
        <Experience id="6" />
        <Projects id="7" />
        <q-scroll-observer @scroll="onScroll" />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>

import { inject, ref } from "vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Education from "./components/Education.vue";
import Certifications from "./components/Certifications.vue";
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";

export default {
  components: {
    Home,
    About,
    Skills,
    Education,
    Certifications,
    Experience,
    Projects,
  },

  methods: {
    clickPage(value) {
      this.click_page = value;
    },

    getScroll() {
      if (this.toolbar_sticky <= 200) { this.click_page = 1; return 1; }
      if (this.toolbar_sticky >= 200 && this.toolbar_sticky <= 1104) { this.click_page = 2; return 2; }
      if (this.toolbar_sticky >= 1105 && this.toolbar_sticky <= 1470) { this.click_page = 3; return 3; }
      if (this.toolbar_sticky >= 1471 && this.toolbar_sticky <= 1734) { this.click_page = 4; return 4; }
      if (this.toolbar_sticky >= 1735 && this.toolbar_sticky <= 2015) { this.click_page = 5; return 5; }
      if (this.toolbar_sticky >= 2016 && this.toolbar_sticky <= 2622) { this.click_page = 6; return 6; }
      this.click_page = 7;
      return 7;
    }
  },
  name: "App",
  setup() {
    const myEl = ref(0);
    const constant = ref(400);
    const click_page = ref(1);
    const smoothScroll = inject("smoothScroll");
    const scrollToMyEl = () => {

      smoothScroll({
        scrollTo: myEl.value - constant.value,
        hash: "#sampleHash",
      });
    };
    const scrollInfo = ref({});
    const toolbar_sticky = ref(false);
    return {
      click_page,
      toolbar_sticky,
      scrollInfo,
      onScroll(info) {
        scrollInfo.value = info;
        toolbar_sticky.value = scrollInfo.value.position.top;
      },
      smoothScroll,
      scrollToMyEl,
    };
  },
};
</script>

<style lang="sass">
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden
    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible
  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7
  &__menu-link:hover
    background: #0366d6
    color: white
  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important
  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9
  &__toolbar-select.q-field--focused
    width: 40rem !important
    .q-field__append
      display: none

.bg-image
  background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(./assets/milky.png)
  background-repeat: no-repeat
  background-size: 100% 100%

  height: 100vh
</style>
