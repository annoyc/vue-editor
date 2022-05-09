<script setup lang="ts">
import Editor from '~/components/Editor'
import data from '~/utils/data.json'
const state = $ref(data)





</script>

<template>
  <div h="1/1">
    <Editor :modelValue="state"></Editor>
  </div>
</template>
