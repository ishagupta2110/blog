<template>
  <div class="container my-4">
    <h2 class="fw-bold text-center text-danger">Popular Blogs</h2>
    <SmallComponentsBorderBottom />
    <div class="row my-4">
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <BlogPost1 />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <BlogPost2 />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <BlogPost3 />
      </div>
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <BlogPost4 />
      </div>
    </div>
    <div class="text-center my-4">
      <SmallComponentsRedButton :message="'+Explore More'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlog',
}
</script>

<style></style>
