<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    class: 'h-full'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})

</script>

<style>
#__nuxt {
  height: 100%;
}
</style>