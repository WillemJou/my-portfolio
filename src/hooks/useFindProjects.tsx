import data from '../assets/data.json'

export const useFindProject = (id: string | undefined) => {
  const projects = data.find((project) => project.id === id)
  return { projects }
}
