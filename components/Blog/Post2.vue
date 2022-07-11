<template>
  <div class="card">
    <img
      :src="post.featured_image"
      class="card-img-top img-fluid"
      style="height: 45vh"
      alt="Fissure in Sandstone"
    />
    <div class="card-body">
      <h5 class="card-title fw-bold text-dark">
        {{ post.title }}
      </h5>
      <p class="card-text">
        {{ post.excerpt }}
      </p>
      <NuxtLink :to="`/blog/${post.slug}`"
        ><SmallComponentsRedButton :message="'Read More'"
      /></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post2',

  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
