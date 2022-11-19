<template>
  <div class="q-mb-md q-mx-md q-pt-md">
    <q-card
      class="transparent"
      flat
      :style="{ marginLeft: '18%', marginRight: '18%' }"
    >
      <div class="text-h5 text-bold q-my-md text-center text-white">
        Experience
      </div>
      <div class="text-subtitle1 text-grey">
        <div
          v-for="n in companies"
          :key="`xs-${n.name}`"
          class="text-white row q-gutter-sm"
          :style="{}"
        >
          <q-timeline dark color="secondary">
            <q-timeline-entry
              :title="n.title"
              :subtitle="n.period"
              :avatar="n.logo"
            >
              <div>
                <li
                  v-for="work in n.works"
                  :key="`xs-${work}`"
                  class="
                    text-weight-bold
                    q-pr-md
                    text-white text-subtitle2
                    full-width
                  "
                >
                  {{ work }}
                </li>

                


                <a
                  href=""
                  :style="{ textDecoration: 'none' }"
                >
                  <li class="text-blue-grey-2 text-overline">
                    Company: {{n.name}}
                  </li>
                </a>
              </div>
            </q-timeline-entry>
          </q-timeline>
        </div>
      </div>
    </q-card>
  </div>
</template>
<style>
</style>

<script>
import { ref } from "vue";


export default {
  name: "Experience",
  components: {},
  methods: {},
  
  setup() {
    const companies = ref([
      {
        name: "Google",
        logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQFjJwmXIgPZ1g/company-logo_200_200/0/1519886932003?e=2147483647&v=beta&t=cwLr-2ZBrEt6Ono6SuE0lqXl3TZMIKSFhWVveIYxsBk",
        title: "Software Manager",

        period: "From November 2022 to December 2023",
        skills: ["VueJS 3", "NodeJS", "MongoDB", "JavaScript", "Gitlab"],
        location: "E",
        works: [
          "Develop a front-end Release Manager application in VueJS 3.",
          "Develop a backend service in NodeJS with MongoDB for the Release Manager application.",
        ],
      },
    ]);
    return {
      companies,
    };
  },
};
</script>
