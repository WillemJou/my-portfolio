import data from '../data.json'

type StackType = {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}[]

export const selectedProjects = (id: string | undefined) => {
  const selectedProject = data.selectedWorks.find(
    (project) => project.id === id
  )
  return { selectedProject }
}

export const otherProjects = (id: string | undefined) => {
  const otherProject = data.otherWorks.find((project) => project.id === id)
  return { otherProject }
}

export const selectedStacks = () => {
  const stacks: StackType = data.stacks
  return { stacks }
}
