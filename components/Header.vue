<template>
  <header>
    <div>
      <img src="~assets/images/homebg1.jpg" alt="" class="h-90 w-100" />

      <div class="card position-absolute top-15 start-10 w-22">
        <div class="card-body">
          <h3 class="card-title">Writing is the painting of the voice.</h3>
          <p class="card-text">
            So What You Waiting For, Put Your Awe-Inspiring Words In Your Blog.
          </p>
          <SmallComponentsRedButton :message="'Get Started'" />
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

<style>
.h-90 {
  height: 90vh;
}
.w-22 {
  width: 22rem;
}
.start-10 {
  left: 10rem;
}
.top-15 {
  top: 15rem;
}
@media screen and (min-width: 420px) and (max-width: 691px) {
  .start-10 {
    left: 3rem;
  }
}
@media screen and (min-width: 220px) and (max-width: 420px) {
  .start-10 {
    left: 1rem;
  }
  .w-22{
    width: 15rem;
  }
  .top-15{
    top: 10rem;
  }
}
</style>
