<script setup lang="ts">
import { defineProps } from 'vue'

const { src } = defineProps<{
  src: string
}>()
console.log(11, src)

</script>




<template>
  <div>
    <img :src="src" />
    <h1 style="color: red">helloworld</h1>
  </div>
</template>