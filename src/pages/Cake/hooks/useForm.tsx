import React, { useCallback, useState } from 'react'

const useForm = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue ?? '')

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }, [])

  return [value, setValue, handleChangeValue] as const
}

export default useForm
