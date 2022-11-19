<template>
  <div class="text-white text-bold flex column flex-center text-h2 bg-image">
    <q-avatar class="q-my-md" size="10rem" font-size="52px">
      <img :src="personal_pic" class="" />
    </q-avatar>
    <div class="text-center">
      <div>Your name</div>
      <div class="text-h6">
        <q-separator class="q-mx-xl q-my-sm text-center" dark />
        Position
      </div>
    </div>

    <div class="row q-gutter-md">
      <div class="col">
        <a href="A" target="_blank">
          <q-btn round class="shadow-9 bg-blue">
            <q-avatar class="" round square size="2rem" font-size="52px">
              <img :src="github_icon" />
            </q-avatar>
            <q-tooltip> Github </q-tooltip>
          </q-btn>
        </a>
      </div>
      <div class="col">
        <a href="B" target="_blank">
          <q-btn round class="shadow-9 bg-blue">
            <q-avatar square size="2rem" font-size="52px">
              <img :src="linked_ing_icon" /> </q-avatar
            ><q-tooltip> LinkedIn </q-tooltip></q-btn
          >
        </a>
      </div>
      <div class="col">
        <a href="C" target="_blank">
          <q-btn round class="shadow-9 bg-blue">
            <q-avatar square size="2rem" font-size="52px">
              <img :src="leetcode_icon" /> </q-avatar
            ><q-tooltip> Leetcode </q-tooltip></q-btn
          >
        </a>
      </div>

      <div class="col">
        <a
          href="D"
          target="_blank"
        >
          <q-btn round class="shadow-9 bg-blue">
            <q-avatar square size="1.5rem" font-size="52px">
              <img :src="hacker_rank" /> </q-avatar
            ><q-tooltip> HackerRank </q-tooltip></q-btn
          >
        </a>
      </div>

      <div class="col">
        <a href="E" target="_blank">
          <q-btn round class="shadow-9 bg-blue">
            <q-avatar square size="2rem" font-size="52px">
              <img :src="codewars_icon" /> </q-avatar
            ><q-tooltip> Codewars </q-tooltip></q-btn
          >
        </a>
      </div>
    </div>

    <a
      href="#2"
      :style="{ textDecoration: 'none' }"
      v-smooth-scroll
      class="text-white relative-bottom"
    >
      <q-btn fab icon="keyboard_arrow_down" />
    </a>
  </div>
</template>
<style>
</style>

<script>
import personal_pic from "../assets/personal_pic.png";
import leetcode_icon from "../assets/leetcode.png";
import github_icon from "../assets/github.png";
import linked_ing_icon from "../assets/linked_in.png";
import codewars_icon from "../assets/codewars.png";
import hacker_rank from "../assets/hacker_rank.png";

export default {
  name: "Home",
  props: {},
  methods: {},
  setup() {
    return {
      personal_pic,
      github_icon,
      linked_ing_icon,
      leetcode_icon,
      codewars_icon,
      hacker_rank,
    };
  },
};
</script>
