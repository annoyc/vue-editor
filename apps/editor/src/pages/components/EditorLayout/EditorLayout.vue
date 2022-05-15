<script setup lang="ts">
import EditorLeft from '../EditorLeft/EditorLeft.vue';
import EditorRight from '../EditorRight/EditorRight.vue';
import EditorContent from '../EditorContent/EditorContent.vue';



</script>

<template>
  <div flex h-full>
    <div w-180px h-full bg="#333">
      <EditorLeft />
    </div>
    <div flex-1>
      <EditorContent />
    </div>
    <div w-220px h-full bg="#333">
      <EditorRight />
    </div>
  </div>
</template>