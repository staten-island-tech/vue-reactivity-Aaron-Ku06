<template>
  <div>
    <h1>{{ Destination.name }}</h1>
    <img :src="Destination.image" alt=""/>
    <button @click="viewspace">View</button>
  </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});
</script>

<style lang="scss" scoped>

</style>