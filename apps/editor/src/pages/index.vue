<script setup lang="ts">
import { registerConfig } from '~/utils/editor-config'
import Editor from '~/components/Editor'
import data from '~/utils/data.json'
// const configKey: InjectionKey<returnType> = Symbol('editor-config')
const state = $ref(data)


provide('configKey', registerConfig)


</script>
<template>
  <div h="1/1">
    <Editor :modelValue="state"></Editor>
  </div>
</template>
