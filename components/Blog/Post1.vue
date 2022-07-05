<template>
  <div class="card" style="height: 80vh">
    <img
      src="~assets/images/post1.jpg"
      class="card-img-top"
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
      <SmallComponentsRedButton :message="'Read More'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post1',
}
</script>

<style></style>
