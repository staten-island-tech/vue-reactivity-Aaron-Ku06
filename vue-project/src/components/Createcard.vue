<template>
  <div>
    <h1>{{ Destination.Name }}</h1>
    <img :src="Destination.Image" alt=""/>
    <router-link to="/Milotic">View</router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});
</script>

<style lang="scss" scoped>

</style>