<script  lang="ts" setup>

interface Props {
  title: string
}

const item = defineProps<Props>()

</script>
<template>
<div>
  {{ item.title }}
</div>
</template>