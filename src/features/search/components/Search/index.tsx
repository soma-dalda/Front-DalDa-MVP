import React from 'react'
import { useSearch } from '../../hooks/useSearch'
import Form from '../Form'
import Input from '../Form/Input'
import { SearchTitle } from './Search.styles'

type Props = {
  title?: React.ReactNode | JSX.Element
}

export function Search({
  title,
  className,
  disabled,
  ...props
}: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'title'>) {
  const {
    value,
    onChangeValue,
    onSubmit,
    queryData: { isLoading },
  } = useSearch('')

  return (
    <div className="flex w-full h-full flex-col">
      <SearchTitle>{title}</SearchTitle>
      <Form
        disabled={isLoading}
        onSubmit={(e) => {
          e.preventDefault()
          onSubmit(e)
        }}
        input={
          <Input
            type="text"
            value={value}
            onChange={onChangeValue}
            className={isLoading ? 'bg-red-200' : ''}
            {...props}
          />
        }
      />
    </div>
  )
}
