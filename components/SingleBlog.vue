<template>
  <div class="bg-light">
    <div class="container py-5 pt-5 pb-2 mt-5 text-center">
      <div class="card" v-if="loading">
        <div class="card_body">
          <h4>loading....</h4>
        </div>
      </div>

      <div class="card" v-else>
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            :src="singlePost.featured_image"
            style="height: 45vh"
            class="img-fluid mt-3"
          />
        </div>

        <div class="card-body">
          <h2 class="card-title fw-bold text-danger">
            {{ singlePost.title }}
          </h2>
          <span class="fs-5">- {{ singlePost.author }}</span>
          <div
            class="card-text text-black"
            id="content"
            v-html="singlePost.content"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleblog',

  data() {
    return {
      singlePost: {},
      loading: true,
    }
  },

  props: {
    slug: {
      type: String,
      required: true,
    },
  },

  methods: {
    async getSinglePost(slug) {
      return new Promise((resolve, reject) => {
        this.singlePost = this.$api.blog.single(slug)

        resolve()
      })
    },
  },

  mounted() {
    let id
    // split the string at _ create its array
    id = this.$route.params.slug.split('_')
    // get the last element of the array
    id = id[id.length - 1]

    this.getSinglePost(id)
      .then(() => {
        this.loading = false
      })
      .then(() => {
        let content = document.getElementById('content')
        // get list of all img elements
        content.querySelectorAll('img').forEach((img) => {
          // add class to each img element
          img.classList.add('img-fluid', 'hover-shadow', 'my-3')
        })
      })
  },
}
</script>

<style></style>
