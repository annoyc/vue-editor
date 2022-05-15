import { describe, expect, test} from 'vitest'
import { PageElement, Project, Page } from '../index'

describe('pageElement', () => {
  const project = Project.create()

  test('initial Page Length', () => {
  
    expect(project.pages.length).toBe(1)
  })
})
