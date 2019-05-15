import hardpass from 'hardpass'

export default VueHardpass {
  install: function (Vue, options) {
    Vue.directive('vue-hardpass', {
      bind (el, binding, vnode, oldVnode) {
        // TODO
      }
    })

    Vue.mixin({
      hardpass: function (password) {
        return hardpass(password)
      }
    })

    Vue.prototype.$hardpass = function (password) {
      return hardpass(password)
    }
  }
};
