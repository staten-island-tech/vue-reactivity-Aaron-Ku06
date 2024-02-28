<template>
  <div>
    <h1>{{ Destination.name }}</h1>
    <img :src="Destination.image" alt=""/>
    <h2>{{ Destination.blurb }}</h2>
    <button @click="viewspace">View</button>
  </div>
</template>

<script setup>
const models = defineModels({
  Destination: Object,
});
</script>

<style lang="scss" scoped>

</style>