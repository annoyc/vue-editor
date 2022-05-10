import { PropType } from "vue"
import { BlockItem } from "./Editor"
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
    console.log(block)
    return () => <>
      <h1>block</h1>
    </>
  }
})