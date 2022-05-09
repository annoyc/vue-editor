import { defineComponent } from 'vue'


export default defineComponent({
  name: 'Editor',
  props: {
    data: {
      type: Object
    }
  },
  setup(props) {
    return () => <div className="flex h-1/1">
      <div className="w-200px bg-pink h-1/1 p-2">左侧物料区</div>
      <div className="flex-1 relative mx-10px">
        <div className="absolute p-2 w-1/1 h-100px top-0 bg-dark">菜单栏</div>
        <div className="pt-110px p-2 h-1/1 bg-orange">main-container</div>
      </div>
      <div className="w-200px p-2 bg-amber h-1/1">属性控制区</div>
    </div>
  }
})