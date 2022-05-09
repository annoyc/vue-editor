import { defineComponent, PropType } from 'vue'

interface PropData {
  container: Container
  blocks: Block
}
interface Container {
  width: number | string,
  height: number | string
}
interface BlockItem {
  top: number,
  left: number,
  zIndex: number,
  key: string,
}
interface Block {
  [key: number]: BlockItem
}

export default defineComponent({
  name: 'Editor',
  props: {
    modelValue: {
      type: Object as PropType<PropData>,
      required: true
    }
  },

  setup(props) {
    const { modelValue } = $$(props)
    console.log(modelValue.container)
    return () => <div className="flex h-1/1">
      <div className="w-200px bg-pink h-1/1 p-2">左侧物料区</div>
      <div className="flex-1 relative mx-10px">
        <div className="absolute p-2 w-1/1 h-100px top-0 bg-dark">菜单栏</div>
        <div className="pt-110px p-2 h-1/1 bg-orange">
          <div className="w">

          </div>
        </div>
      </div>
      <div className="w-200px p-2 bg-amber h-1/1">属性控制区</div>
    </div>
  }
})