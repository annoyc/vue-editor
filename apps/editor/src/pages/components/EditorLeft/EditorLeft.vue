<script setup lang="ts">
import MaterialBLock from '../MaterialBlock/MaterialBLock.vue';
import { materialList } from '~/data'
</script>
<template>
<div v-for="item in materialList" :key="item.id" >
  <MaterialBLock :title="item.title" />
</div>
</template>