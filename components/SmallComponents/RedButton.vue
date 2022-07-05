<template>
  <div>
     <a href="#!" class="btn btn-primary" style="background-color: #e52d27"
        > {{ message }} </a>
  </div>
</template>

<script>
export default {
  name: 'RedButton',

  props: {
    message: {
      type: String,
      default: 'Button',
    },
  },
}
</script>

<style>

</style>
