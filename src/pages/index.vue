<script setup lang="ts">
import { InjectionKey } from 'vue'
import { registerConfig } from '~/utils/editor-config'
import { returnType } from '~/utils/editor-config'
import Editor from '~/components/Editor'
import data from '~/utils/data.json'
const state = $ref(data)


provide(configKey, registerConfig)


</script>
<script lang="ts">
export const configKey: InjectionKey<returnType> = Symbol('editor-config')
</script>
<template>
  <div h="1/1">
    <Editor :modelValue="state"></Editor>
  </div>
</template>
