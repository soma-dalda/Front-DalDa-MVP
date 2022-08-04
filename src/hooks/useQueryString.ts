import { useLocation } from 'react-router-dom'

export const useQueryString = (name: string) => {
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  return params.get(name) ?? ''
}
