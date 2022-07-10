<template>
    <div class="">
  <!-- Footer -->
  <footer class="text-center text-white bg-dark">
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Links -->
      <section class="">
        <!-- Grid row-->
        <div class="row text-center d-flex justify-content-center pt-5">
          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink to="/about" class="text-white">About</NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink to="/blog" class="text-white">Blog</NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink to="/privacypolicy" class="text-white">Privacy Policy</NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <NuxtLink to="/contactus" class="text-white">Contact Us</NuxtLink>
            </h6>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row-->
      </section>
      <!-- Section: Links -->

      <hr class="my-5" />

      <!-- Section: Text -->
      <section class="mb-4">
        <div class="row d-flex flex-column justify-content-center align-items-center">
          <div class="col-lg-8">
            <NuxtLink to="/" class="text-white fw-bold fs-3"> BloggerWorld </NuxtLink>
            <p class="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
          </div>
        </div>
      </section>
      <!-- Section: Text -->

      <!-- Section: Social -->
      <section class="text-center mb-5">
        <a href="" class="text-white me-4">
          <i class="ri-facebook-fill fs-3"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="ri-twitter-fill fs-3"></i>
        </a>
        <a href="" class="text-white me-4">
         <i class="ri-instagram-line fs-3"></i>
        </a>
        <a href="" class="text-white me-4">
          <i class="ri-github-fill fs-3"></i>
        </a>
      </section>
      <!-- Section: Social -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div
         class="text-center p-3"
         style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © 2022 Copyright:
      <a class="text-white" href=""
         >BloggerWorld</a
        >
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</div>
<!-- End of .container -->
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style></style>
