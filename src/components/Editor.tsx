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

    return () => <div className="flex h-full">
      <div className="w-250px bg-pink h-full p-2">
        {
          config.componentList.map(component => (
            <div className="pos-relative block m-4 p-8 cursor-move bg-#fff box-border after:(content-none bg-#333 pos-absolute left-0 top-0 bottom-0 right-0 opacity-20)" draggable>
              <span className="pos-absolute left-0 top-0 bg-blueGray">{component.label}</span>
              {component.preview()}
            </div>
          ))
        }
      </div>
      <div className="flex-1 relative mx-10px">
        <div className="absolute p-2 w-1/1 h-100px top-0 bg-dark">菜单栏</div>
        <div className="pt-110px p-2 h-full bg-orange">
          <div className="h-full overflow-scroll">
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
      <div className="w-200px p-2 bg-amber h-full">属性控制区</div>
    </div>
  }
})