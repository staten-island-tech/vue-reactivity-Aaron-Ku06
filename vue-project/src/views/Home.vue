<template>
<div>
    <Createcard
    v-for="destination in cards"
    :key="destination.Name"
    :Destination="destination"
/>
</div>
</template>

<script setup>
import Createcard from '../components/Createcard.vue';
import Milotic from '../../public/Milotic.png'
import Charizard from '../../public/Charizard.png'
import Ninetales from '../../public/Ninetales.png'

const cards = [
    {
        Name: "Milotic",
        Image: Milotic,
    },
    {
        Name: "Charizard",
        Image: Charizard,
    },
    {
        Name: "Ninetales",
        Image: Ninetales,
    },
];
</script>

<style lang="scss" scoped>

</style>