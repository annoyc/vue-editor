import App from './App.vue'
export default {
  render: App,
  editorProps: {
    src: {
      type: 'string',
      defaultValue: '//cdn.lowcode.cn/123.png'
    }
  }
}