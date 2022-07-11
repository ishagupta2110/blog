<template>
  <div class="container my-5 pt-2">
    <h2 class="fw-bold text-center text-danger mt-5">Blogs</h2>
    <SmallComponentsBorderBottom />
    <div class="row my-5 g-4">
      <div
        class="col-lg-3 col-md-4 col-sm-6 col-12"
        v-for="post in posts"
        :key="post.id"
      >
        <BlogPost2 :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',

  data() {
    return {
      posts: [],
    }
  },

  methods: {
    async getBlogPosts() {
      return new Promise((resolve, reject) => {
        this.posts = this.$api.blog.list()

        resolve({ status: 'success' })
      })
    },
  },

  mounted() {
    this.getBlogPosts()
  },
}
</script>

<style></style>
