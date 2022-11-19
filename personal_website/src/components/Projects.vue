<template>
  <div class="q-mb-md q-mx-md q-py-md">
    <q-card class="transparent q-mb-md" flat>
      <q-card-section>
        <div class="text-h5 text-bold q-my-md text-center text-white">
          Personal Projects
        </div>
        <div class="text-subtitle1 text-grey">
          <div class="row justify-center q-gutter-md">
            <q-intersection v-for="project in projects" :key="project.name" transition="scale"
              class="example-item q-my-md">
              <a :href="project.url" target="_blank" :style="{ textDecoration: 'none' }">
                <q-card class="q-ma-sm">
                  <img :src="project.image" />
                  <q-card-section>
                    <div class="text-h6">{{ project.name }}</div>
                    <div class="overflow-hidden">
                      <span v-for="tool in project.technologies" :key="tool" class="text-subtitle2 q-pr-xs">#{{ tool
                      }}</span>
                    </div>
                    <q-badge rounded :color="project.status == 'Finished' ? 'green' : 'orange'"
                      :label="project.status" />
                  </q-card-section>
                </q-card>
              </a>
            </q-intersection>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<style>

</style>

<script>
import { ref } from "vue";
import personal_portfolio from "../assets/portfolio.png";
import ibm_ds from "../assets/ibm_ds.png";
import work_in_progress from "../assets/work-in-progress.png";

export default {
  name: "Projects",
  components: {},
  methods: {},

  setup() {
    const projects = ref([
      {
        name: "A",
        image: personal_portfolio,
        technologies: ["VueJS3", "Quasar"],
        status: "Finished",
        url: ""
      },
      {
        name: "C",
        image: ibm_ds,
        technologies: [
          "Python3",
          "ScikitLearn",
          "NumPy",
          "Pandas",
          "Dash",
          "Plotly",
        ],
        status: "Finished",
        url: ""
      },
      {
        name: "E",
        image: work_in_progress,
        technologies: [],
        status: "In Progress",
        url: ""
      },
    ]);

    return {
      projects,
    };
  },
};
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>
