<template>
  <SingleBlog :slug="slug" />
</template>

<script>
export default {
  name: 'post',

  data() {
    return {
      slug: '',
    }
  },

  methods: {
    async setSlug() {
      return new Promise((resolve, reject) => {
        this.slug = this.$route.params.slug

        resolve()
      })
    },
  },

  mounted() {
    this.setSlug()
  },
}
</script>

<style></style>
