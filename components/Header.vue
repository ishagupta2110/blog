<template>
  <header>
    <div>
      <img src="~assets/images/homebg1.jpg" alt="" class="h-90 w-100" />

      <div class="card position-absolute top-15 start-10" style="width: 22rem">
        <div class="card-body">
          <h3 class="card-title">Writing is the painting of the voice.</h3>
          <p class="card-text">
            So What You Waiting For, Put Your Awe-Inspiring Words In Your Blog.
          </p>
          <a class="btn btn-primary" style="background-color: #e52d27">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style >
.h-90 {
  height: 90vh;
}
.start-10 {
  left: 10rem;
}
.top-15 {
  top: 15rem;
}
</style>
