<template>
  <div class="container my-5 pt-2">
    <h2 class="fw-bold text-center text-danger mt-5">Blogs</h2>
    <SmallComponentsBorderBottom />
    <div class="row my-5 g-4">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        v-for="item in 12"
        :key="item"
      >
        <BlogPost2 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
}
</script>

<style></style>
