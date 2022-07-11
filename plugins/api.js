import Blog from '~/api/blog'

export default (context, inject) => {
  // inidtialize factories
  const factories = {
    blog: Blog(),
  }

  // inject factories to context
  inject('api', factories)
}
