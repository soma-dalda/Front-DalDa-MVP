import React, { useCallback } from 'react'
import { useSearchForm } from '../../../features/search/hooks/useSearchForm'
import { useInternalRouter } from '../../../hooks/useInternalRouter'
import Form from '../Form'
import Input from '../Form/Input'
import { SearchTitle } from '../SearchInput/Search.styles'

type Props = {
  title?: React.ReactNode | JSX.Element
}

export function SearchInput({
  title,
  className,
  disabled,
  ...props
}: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'title'>) {
  const [value, , onChangeValue] = useSearchForm('')
  const { push } = useInternalRouter()

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      push(`/search/${value}`)
    },
    [value]
  )

  return (
    <div className="flex w-full h-full flex-col">
      {title && <SearchTitle>{title}</SearchTitle>}
      <Form
        onSubmit={onSubmit}
        input={<Input type="text" value={value} onChange={onChangeValue} {...props} />}
      />
    </div>
  )
}
