import data from '../data.json'

type StackType = {
  title: string
  id: number
  topics: string[]
  frameworks: string[]
  icon: string
}[]

export const SelectedProjects = (id: string | undefined) => {
  const project = data.selectedWorks.find((project) => project.id === id)
  return { project }
}

export const selectedStacks = () => {
  const stacks: StackType = data.stacks
  return { stacks }
}
