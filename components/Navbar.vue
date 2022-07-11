<template>
  <div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg bg-light navbar-dark gradient-custom fixed-top m-3 p-2 rounded-5"
    >
      <!-- Container wrapper -->
      <div class="container-fluid">
        <!-- Navbar brand -->
        <a class="navbar-brand fw-bold fs-4" href="#">
          <img src="~assets/images/logo.png" class="pe-2" alt="" />
          BloggerWorld</a
        >

        <!-- Toggle button -->
        <button
          id="navBarButton"
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="ri-menu-2-line"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <!-- Link -->
            <li class="nav-item">
              <NuxtLink
                to="/"
                class="nav-link px-2 d-inline-block text-uppercase"
                exact-active-class="fw-bolder text-white"
                >Home</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/about"
                class="nav-link px-2 d-inline-block text-uppercase"
                exact-active-class="fw-bolder text-white"
                >About</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/blog"
                class="nav-link px-2 d-inline-block text-uppercase"
                exact-active-class="fw-bolder text-white"
                >Blog</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/privacypolicy"
                class="nav-link px-2 d-inline-block text-uppercase"
                exact-active-class="fw-bolder text-white"
                >PRIVACY POLICY</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/contactus"
                class="nav-link px-2 d-inline-block text-uppercase"
                exact-active-class="fw-bolder text-white"
                >Contact Us</NuxtLink
              >
            </li>
          </ul>

          <ul class="navbar-nav d-flex flex-row me-1">
            <li class="nav-item me-3 me-lg-0">
              <NuxtLink to="/login" class="nav-link fw-bold fst-italic fs-5"
                >LOGIN</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  watch: {
    $route: function () {
      let navbar = document.getElementById('navbarSupportedContent')
      if (navbar.classList.contains('show')) {
        document.getElementById('navBarButton').click()
      }
    },
  },
}
</script>

<style scoped>
.custom {
  color: white !important;
  /* background-image: linear-gradient(to right, #e52d27, #f4d03f) !important; */
  /* background-clip: text !important; */
}
/* .custom {
  color: transparent !important;
  background-image: linear-gradient(to right, #e52d27, #f4d03f) !important;
  background-clip: text !important;
} */
.gradient-custom {
  background: linear-gradient(to right, #e52d27, #f4d03f);
}
</style>
