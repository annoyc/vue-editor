import { uuid } from '../utils'

export interface IProject {
  name: string
  description: string
  pages: IPage[];
}

export interface IPage {
  id: string
  name: string
  description: string
  elements: IElement[];
}

export interface IElement {
  id: string
  name: string
  mId: number
  mVersion: string
}

export class Project implements IProject {
  public name: string = 'New Project';
  public description: string = 'New Project Description';
  public pages: Page[] = [];

  public static create(p?: IProject) {
    const project = new Project()
    if (p) {
      project.name = p.name
      project.description = p.description
      project.pages = p.pages.map(page => Page.create(page))
    } else {
      project.addPage(Page.create())
    }
    return project
  }

  constructor() {
  }

  public addPage(page: Page) {
    this.pages.push(page)
  }
  public removePage(page: Page) {
    this.pages = this.pages.filter(p => p.id !== page.id)
  }
  public insertPage(page: Page, index: number) {
    this.pages.splice(index, 0, page)
  }
  public getJSON() {
    return {
      name: this.name,
      description: this.description,
      pages: this.pages.map(p => p.getJSON())
    }
  }
}

export class Page implements IPage {
  public static create(p?: IPage) {
    const page = new Page()
    if (p) {
      page.id = p.id
      page.name = p.name
      page.description = p.description
      page.elements = p.elements.map(element => PageElement.create(element))
    }
    return page
  }
  public id: string = uuid();
  public name: string = 'New Page';
  public description: string = 'New Page Description';
  public elements: PageElement[] = [];
  constructor() {
  }
  public addElement(element: PageElement) {
    this.elements.push(element)
  }
  public removeElement(element: PageElement) {
    this.elements = this.elements.filter(e => e.id !== element.id)
  }
  public insertElement(element: PageElement, index: number) {
    this.elements.splice(index, 0, element)
  }
  public getJSON() {
    return {
      name: this.name,
      description: this.description,
      elements: this.elements.map(e => e.getJSON())
    }
  }
}

export class PageElement implements IElement {
  public static create(e?: IElement) {
    const element = new PageElement()
    if (e) {
      element.id = e.id
      element.name = e.name
      element.mId = e.mId
      element.mVersion = e.mVersion
    }
    return element
  }
  public id: string = '';
  public name: string = 'New Element';
  public mId: number = 0;
  public mVersion: string = '0.0.0';
  public getJSON() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion
    }
  }
  constructor() {
  }
} 

