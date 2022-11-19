<template>
  <div class="q-my-md q-pt-md">
    <div class="text-h5 text-bold q-my-md text-center text-white">
      About me
    </div>
    <ul class="row justify-center">
      <li v-for="n in words" :key="n" class="text-grey-3 text-subtitle1 q-mr-lg">{{n}}</li>
    </ul>
    <div class="text-subtitle1 text-white text-center" :style="{ marginLeft: '25%', marginRight: '25%' }">
      
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia.
    </div>

    <div class="text-h5 text-bold q-my-md text-center">
      <transition name="fade">
        <q-card-section>
          <a :href="'https://drive.google.com/file/d/19pAvPI-Wkv03xR_dENXhiSDhZ77GJnM8/view?usp=share_link'" class=""
            :style="{ textDecoration: 'none' }" target="_blank">
            <q-btn outline color="white" label="Download CV" />
          </a>
        </q-card-section>
      </transition>

      <q-btn class="text-caption text-white" flat @click="openContact">or Contact me?</q-btn>
      <div v-if="persistent" class="q-gutter-md q-my-md" :style="{border: '1px solid white'}">
      <span class="text-white text-subtitle2"><q-icon name="phone" class="q-mr-sm"/>{{ info.phone }}</span>
      <br/>
      <span class="text-white text-subtitle2"><q-icon name="mail" class="q-mr-sm"/>{{ info.email }}</span>
    </div>
    </div>
  </div>
</template>
<style>

</style>

<script>
import { ref } from "vue";

export default {
  name: "About",
  components: {},
  methods: {
    openContact() {
      this.persistent = !this.persistent;
    }
  },
  setup() {
    const persistent = ref(false);
    const info = ref({
      address: "A",
      city: "B",
      province: "C",
      postcode: "D",
      phone: "E",
      email: "F",
    });
    const words = ref([
      "Lorema", "Loremb", "Loremc", "Loremd"
    ]);

    return {
      info,
      persistent,
      words
    };
  },
};
</script>
