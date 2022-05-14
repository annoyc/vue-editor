import { PropType } from "vue"
import { BlockItem } from "./Editor"
import { returnType } from '~/utils/editor-config'

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

    const config = inject('configKey') as returnType

    const component = config.componentMap[block.key]

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