import { PropType } from 'vue'
import EditorBlock from './EditorBlock'
import { returnType } from '~/utils/editor-config'
interface PropData {
  container: Container
  blocks: Block
}
interface Container {
  width: number | string,
  height: number | string
}
export interface BlockItem {
  top: number,
  left: number,
  zIndex: number,
  key: string,
}
type Block = BlockItem[]

export default defineComponent({
  name: 'Editor',
  props: {
    modelValue: {
      type: Object as PropType<PropData>,
      required: true
    }
  },

  setup(props) {

    const data: PropData = $computed({
      get() {
        return props.modelValue
      },
      set(value) { }
    })

    const config = inject('configKey') as returnType


    const containerStyle = $computed(() => ({
      width: data.container.width + 'px',
      height: data.container.height + 'px'
    }))

    return () => <div className="flex h-1/1">
      <div className="w-200px bg-pink h-1/1 p-2">
        {
          config.componentList.map(component => (
            <div className="block m-4">
              {component.preview()}
            </div>
          ))
        }
      </div>
      <div className="flex-1 relative mx-10px">
        <div className="absolute p-2 w-1/1 h-100px top-0 bg-dark">菜单栏</div>
        <div className="pt-110px p-2 h-1/1 bg-orange">
          <div className="h-1/1 overflow-scroll">
            <div className="bg-yellow pos-relative" style={containerStyle}>
              {
                data.blocks.map(block => (
                  <EditorBlock block={block} />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-200px p-2 bg-amber h-1/1">属性控制区</div>
    </div>
  }
})