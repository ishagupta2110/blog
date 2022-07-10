<template>
  <div class="card" >
    <img
      src="~assets/images/post3.jpg"
      class="card-img-top img-fluid"
      style="height: 45vh"
      alt="Fissure in Sandstone"
    />
    <div class="card-body">
      <h5 class="card-title fw-bold text-dark">
        Boho Girl  Wedding Lehenga By Sabyasachi.
      </h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
     <NuxtLink to="/blog/singleblog"><SmallComponentsRedButton :message="'Read More'"  /></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post3',
}
</script>

<style></style>
