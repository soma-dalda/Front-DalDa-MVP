import React, { useState } from 'react'

export const useSearchForm = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, setValue, handleChange] as const
}
