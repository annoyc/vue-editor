import { defineStore } from 'pinia'
import { IProject, Project, PageElement} from '@zyc/shared'

const p = Project.create()

export const useProjectStore = defineStore('project', () => {
  let project = $ref<IProject>(p.getJSON());
  const currentPageIndex = $ref<number>(0);
  const currentPage = $computed(() => project.pages[currentPageIndex]);
  const currentPageElements = $computed(() => project.pages[currentPageIndex].elements);

  function addElement(ele: PageElement) {
    p.pages[currentPageIndex].addElement(ele)
    project = p.getJSON()
  }

  return {
    project, 
    currentPage,
    addElement,
    currentPageElements,
  }
})
