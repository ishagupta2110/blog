<template>
  <a
    class="btn btn-primary"
    style="background-color: #e52d27"
    :class="[
      {
        '': size == '',
        'btn-sm': size == 'sm',
        'btn-lg': size == 'lg',
      },
      colWidth,
    ]"
  >
    {{ message }}
  </a>
</template>

<script>
export default {
  name: 'RedButton',

  props: {
    message: {
      type: String,
      default: 'Button',
    },
    size: {
      type: String,
      default: '',
    },
    colWidth: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
