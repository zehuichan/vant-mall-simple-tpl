// components
import SvgIcon from '@/components/SvgIcon'

const components = [
  SvgIcon,
]

function plugin(Vue, opt) {
  if (plugin.installed) {
    return
  }
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default plugin