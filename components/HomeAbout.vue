<template>
  <div class="container my-4">
    <h2 class="fw-bold text-center text-danger">Blog Related</h2>
    <SmallComponentsBorderBottom />
    <div class="row my-5">
      <div
        class="col-lg-6 col-md-12 col-sm-12 col-12 d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block"
      >
        <img
          src="~assets/images/about1.png"
          style="width: 50vw"
          class="ms-n5 text-center"
          alt=""
        />
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-12">
        <div class="row">
          <div class="col-lg-12 col-md-6 col-sm-12 col-12 my-3">
            <div class="card text-center">
              <div
                class="bg-image hover-overlay ripple my-3"
                data-mdb-ripple-color="light"
              >
                <img src="~assets/images/about2.png" class="img-fluid" />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold text-black">Fashion</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-6 col-sm-12 col-12 my-3">
            <div class="card text-center">
              <div
                class="bg-image hover-overlay ripple my-3"
                data-mdb-ripple-color="light"
              >
                <img src="~assets/images/about3.png" class="img-fluid" />
              </div>
              <div class="card-body">
                <h5 class="card-title fw-bold text-black">Beauty</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeAbout',
}
</script>

<style>
.pt-6 {
  padding-top: 6rem;
}
.pb-12 {
  padding-bottom: 12rem;
}
</style>
