import React, { useCallback, useState } from 'react'
import { useInternalRouter } from '../../../hooks/useInternalRouter'

export const useSearchForm = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const { push } = useInternalRouter()

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleSubmit = useCallback(
    (e: React.FormEvent<Element>) => {
      e.preventDefault()
      push(`/search?query=${value}`)
    },
    [value]
  )

  return { value, setValue, handleChange, handleSubmit } as const
}
