<template>
  <div>
    <div class="container my-5">
      <h2 class="fw-bold text-center text-danger pt-5">Contact Us</h2>
      <SmallComponentsBorderBottom />
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 text-center mt-5">
          <form>
            <!-- Name input -->
            <div class="form-outline mb-4">
              <input type="text" id="form4Example1" class="form-control" />
              <label class="form-label" for="form4Example1">Name</label>
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4">
              <input type="email" id="form4Example2" class="form-control" />
              <label class="form-label" for="form4Example2"
                >Email address</label
              >
            </div>

            <!-- Message input -->
            <div class="form-outline mb-4">
              <textarea
                class="form-control"
                id="form4Example3"
                rows="4"
              ></textarea>
              <label class="form-label" for="form4Example3">Message</label>
            </div>

            <!-- Submit button -->
            <SmallComponentsRedButton :message="'Send'" />
          </form>
        </div>
        <div
          class="col-lg-6 col-md-6 col-sm-12 col-12 d-sm-none d-md-block d-none d-sm-block"
        >
          <img
            src="~assets/images/contactus.png"
            alt=""
            class="img-fluid"
            style="height: 60vh"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactus',

  mounted() {
    // initialize form elements
    document.querySelectorAll('.form-outline').forEach((formOutline) => {
      new this.$mdb.Input(formOutline).init()
    })
  },
}
</script>

<style scoped>
.form-control:focus .active {
  border-color: var(--mdb-danger) !important;
}
</style>
