<template>
  <div class="q-mb-md q-mx-md q-pt-md">
    <q-card class="my-card transparent q-py-md" flat>
      <div class="text-h5 text-bold q-my-md text-center text-white">
        Education
      </div>
      <div class="text-subtitle1 text-white">
        <div v-for="n in education" :key="n.title" class="transparent row justify-evenly q-gutter-md" :style="{
          marginLeft: '20%',
          marginRight: '20%',
          backgroundColor: '',
        }">
          <div class="col-md-10">
            <q-item-label class="text-h6">{{n.title}}
            </q-item-label>
            <q-item-label>{{n.school}}</q-item-label>
            <q-item-label class="text-caption">{{n.period}}</q-item-label>
            <q-item-label caption class="text-white">Specialization: {{n.specialization}}</q-item-label>
          </div>

          <div class="col float-right">
            <q-item-label class="text-subtitle2 q-mb-md text-white">{{n.grade}}/10</q-item-label>

            <q-avatar>
              <img
                src="data:image/png;base64,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" />
            </q-avatar>
          </div>
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
  name: "Education",
  components: {},
  methods: {},
  setup() {
    const education = ref([
      {
        title: "Bachelor of X",
        school: "Y University",
        period: "From 2012 to 2016",
        specialization: "Machine Learning",
        grade: "8.0"
      }
    ])
    return {
      education,
    };
  },
};
</script>
