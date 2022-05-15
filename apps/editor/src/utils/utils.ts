

export function loadScript(src: string) {
  return new Promise((resolve, reject) => {
    const sc = document.createElement('script')
    function onLoad() {
      resolve(src)
      sc.onload = sc.onerror = null
    }
    sc.onerror = () => {
      reject()
    }
    sc.onload = onLoad
    sc.onerror = reject
    sc.src = src
    document.head.append(sc)
  })
}