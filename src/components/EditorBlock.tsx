import { PropType } from "vue"
import { BlockItem } from "./Editor"
import { configKey } from '~/pages/index.vue'


export default defineComponent({
  name: 'EditorBlock',
  props: {
    block: {
      type: Object as PropType<BlockItem>,
      required: true
    }
  },
  setup(props) {
    const block = $ref(props.block)
    const config = inject(configKey)
    const component = config?.componentMap[block.key]

    const RenderComponent = component.render()


    const blockStyle = $computed(() => ({
      top: block.top + 'px',
      left: block.left + 'px', 
      zIndex: block.zIndex
    }))
    return () => <>
      <div className="pos-absolute" style={blockStyle}>
        {RenderComponent}
      </div>
    </>
  }
})