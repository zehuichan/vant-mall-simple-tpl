// components
import SvgIcon from '@/components/SvgIcon'
import VRecommend from '@/components/VRecommend'

const components = [
  SvgIcon,
  VRecommend,
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