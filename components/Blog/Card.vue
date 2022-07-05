<template>
  <div>
    <div class="card">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        class="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          {{ message }}
        </p>
        <a href="#!" class="btn btn-primary">Button</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',

  props: {
    message: {
      type: String,
      default: 'A Card',
    },
  },
}
</script>

<style></style>
