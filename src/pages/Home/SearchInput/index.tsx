import React, { useCallback } from 'react'
import { useSearchForm } from '../../../features/search/hooks/useSearchForm'
import { useInternalRouter } from '../../../hooks/useInternalRouter'
import Form from '../../../features/search/components/Form'
import Input from '../../../features/search/components/Form/Input'
import SearchButton from '../../../features/search/components/Form/SearchButton'
import { SearchTitle } from './SearchInput.styles'

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
      push(`/search?keyword=${value}`)
    },
    [value]
  )

  return (
    <div className="flex w-full h-full flex-col">
      {title && <SearchTitle>{title}</SearchTitle>}
      <Form
        onSubmit={onSubmit}
        input={<Input type="text" value={value} onChange={onChangeValue} {...props} />}
        rightButton={<SearchButton disabled={disabled} className={disabled ? 'bg-red-200' : ''} />}
      />
    </div>
  )
}
