<template>
  <div class="border">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlogBorder',
}
</script>

<style scoped>
.border {
  border: 2px solid red;
}
</style>
