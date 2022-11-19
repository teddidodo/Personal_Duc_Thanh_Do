<template>
  <div class="q-mb-md q-mx-md q-pt-md">
    <q-card class="my-card transparent q-py-md" flat>
      <div class="text-h5 text-bold q-my-md text-center text-white">
        Certifications
      </div>
      <div
        class="text-subtitle1 text-white row justify-center"
        :style="{
          marginLeft: '10%',
          marginRight: '10%',
        }"
      >
        <q-intersection
          v-for="n in certifications"
          :key="`xs-${n.name}`"
          transition="scale"
          class="col-md-6"
        >
          <q-card
            class="q-ma-sm bg-blue-9"
            :flat="!n.effect ? true : false"
            @mouseover="n.effect = true"
            @mouseleave="n.effect = false"
          >
            <q-card-section>
              <div class="row justify-center">
                <div class="col">
                  <div class="text-h6">{{ n.name }}</div>
                  <a
                    :href="n.link"
                    target="_blank"
                    :style="{ textDecoration: 'none', color: 'white' }"
                    class="text-caption"
                    >See Credentials</a
                  >

                  <div>
                    <q-badge rounded :color="'green'" :label="n.date" />
                  </div>
                </div>

                <div class="col-md-6">
                  <q-avatar
                    v-for="sponsor in n.sponsors"
                    :key="`xs-${sponsor}`"
                    size="40px"
                    class="q-pb-sm float-right"
                  >
                    <img :src="sponsor" />
                  </q-avatar>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </q-card>
  </div>
</template>
<style>
</style>

<script>

import { ref } from "vue";

export default {
  name: "Certifications",
  components: {},
  methods: {},

  setup() {

    const certifications = ref([
      {
        name: "Cerfitication A",
        link: "B",
        sponsors: [
          "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
        ],
        date: "19 November, 2022",
        effect: false,
      },
      {
        name: "Certification AB",
        link: "B",
        sponsors: [
          "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
          "data:image/png;base64,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",
        ],

        date: "19 November, 2022",
        effect: false,
      },
    ]);

    return {
      certifications,
    };
  },
};
</script>
