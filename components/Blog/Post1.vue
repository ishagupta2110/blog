<template>
  <div class="card">
    <img
      src="~assets/images/post1.jpg"
      class="card-img-top img-fluid img-cover"
      style="height: 45vh"
      alt="Fissure in Sandstone"
    />
    <div class="card-body">
      <h5 class="card-title fw-bold text-dark">
        Styling Trouser In 5 Different Ways.
      </h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <NuxtLink to="/blog/singleblog"
        ><SmallComponentsRedButton :message="'Read More'"
      /></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post1',
}
</script>

<style scoped>
.img-cover {
  object-fit: cover;
  object-position: center;
}

.bg-cover{
  background-size: cover;
  background-position: center;
}
</style>
