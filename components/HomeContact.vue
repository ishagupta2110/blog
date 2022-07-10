<template>
  <div class="container me-5">
    <div class="row">
      <div
        class="col-lg-4 col-md-6 col-sm-12 col-12 d-sm-none d-md-block d-none d-sm-block"
      >
        <img
          src="~assets/images/contact1.png"
          class="img-fluid"
          style="height: 50vh"
          alt=""
        />
      </div>
      <div class="col-lg-8 col-md-6 col-sm-12 col-12 my-4 my-md-0">
        <div
          class="d-flex flex-column align-items-center align-items-lg-start justify-content-center h-100"
        >
          <h2 class="text-black">Need to get in touch with us?</h2>
          <SmallComponentsRedButton :message="'Contact Now'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeContact',
}
</script>

<style></style>
