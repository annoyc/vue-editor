// 左侧列表展示的组件
// 根据key找到对应的组件
interface CMap {
  key: string,
  label: string,
  preview: () => string | JSX.Element,
  render: () => string | JSX.Element,
}
export type EditorConfigType = () => returnType

export type returnType = {
  componentList: CMap[],
  componentMap: any,
  register: (component: CMap) => void
}

const createEditorConfig: EditorConfigType = () => {

  const componentList: CMap[] = []
  const componentMap: any = new Map()

  return {
    componentList,
    componentMap,
    register: (component: CMap) => {
      componentList.push(component)
      componentMap[component.key] = component
    }

  }
}

export const registerConfig = createEditorConfig()
registerConfig.register({
  key: 'text',
  label: '文本',
  preview: () => '预览文本',
  render: () => '渲染文本'
})
registerConfig.register({
  key: 'button',
  label: '按钮',
  preview: () =><el-button type="primary">预览按钮</el-button>,
  render: () => <el-button>渲染按钮</el-button>
})
registerConfig.register({
  key: 'input',
  label: '输入框',
  preview: () => <el-input placeholder="预览输入框"></el-input>,
  render: () => <el-input placeholder="渲染输入框"></el-input>,
})

