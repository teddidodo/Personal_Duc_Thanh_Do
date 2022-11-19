<template>
  <div class="q-mb-md q-mx-md q-pt-md">
      <div class="text-h5 text-bold q-my-md text-center text-white">Skills</div>
      <div class="text-subtitle1 text-bold q-my-md">
        <div
          class="text-center row q-gutter-md justify-center"
          :style="{ marginLeft: '20%', marginRight: '20%' }"
        >
          <q-expansion-item
            v-for="n in skills"
            :key="`xs-${n.name}`"
            class="col-md-5"
            :style="{ maxWidth: '40rem' }"
            :label="n.name"
            expand-icon="add"
            expanded-icon="close"
            header-class="text-white expand-border"
            expand-icon-class="text-white"
            v-model="expanded[n.name]"
          >
            <div class="q-mx-md q-my-md">
              <div class="column q-gutter-sm">
                <q-item
                  v-for="tool in n.tools"
                  :key="`xs-${tool}`"
                  color="orange"
                  class="col"
                >
                  <q-badge
                    class="absolute-center transparent"
                    multi-line
                    :label="tool"
                  />
                </q-item>
              </div>
            </div>
          </q-expansion-item>
        </div>
      </div>
  </div>
</template>
<style>
</style>

<script>
import { ref } from "vue";

export default {
  name: "Skills",
  components: {},
  methods: {},
  setup() {

    const skills = ref([
      {
        name: "Data Collection",
        tools: ["Web Scraping"]
      },
      {
        name: "General Skills",
        tools: [
          "HTML/CSS",
          "Java",
          "JavaScript",
          "Python3",
          "Docker",
          "Github",
          "Gitlab",
          "Redux"
        ],
      },
      {
        name: "Data Analysis",
        tools: [
          "NumPy",
          "Pandas"
        ]
      },

      {
        name: "Databases",
        tools: [
          "PostgreSQL",
          "MySQL", 
          "MongoDB", 
          "Firebase"
        ]
      },
      {
        name: "Data Visualisation",
        tools: [
          "Matplotlib", 
          "Plotly", 
          "Dash", 
          "Seaborn"
        ]
      },
      {
        name: "Backend Technologies",
        tools: [
          "NodeJS", 
          "PHP", 
          "Python3 FastAPI"
        ]
      },

      {
        name: "Machine Learning",
        tools: ["Scikit Learn"]
      },

      {
        name: "Frontend Technologies",
        tools: [
          "VueJS 3", 
          "ReactJS"
        ],
      },
    ]);

    const expanded = ref({
      "Data Collection": false,
      "General Skills": false,
      "Data Analysis": false,
      "Databases": false,
      "Data Visualisation": false,
      "Backend Technologies": false,
      "Machine Learning": false,
    });

    return {      
      skills,
      expanded,
    };
  },
};
</script>
<style lang="sass">
.expand-border
  border: 1px solid white
</style>
