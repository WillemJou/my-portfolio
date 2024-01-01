import data from '../assets/data.json'

export const useFindProject = (id: string | undefined) => {
  const project = data.find((project) => project.id === id)
  return { project }
}
