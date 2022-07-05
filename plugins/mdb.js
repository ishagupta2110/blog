import * as mdb from 'mdb-ui-kit'

import '~/assets/scss/styles.scss'

export default ({ app }, inject) => {
  inject('mdb', mdb)
}
