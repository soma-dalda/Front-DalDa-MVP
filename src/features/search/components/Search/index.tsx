import React from 'react'
import { useInternalRouter } from '../../../../hooks/useInternalRouter'
import { useSearchForm } from '../../hooks/useSearchForm'
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
  const [value, , onChangeValue] = useSearchForm('')
  const { push } = useInternalRouter()

  return (
    <div className="flex w-full h-full flex-col">
      <SearchTitle>{title}</SearchTitle>
      <Form
        onSubmit={(e) => {
          e.preventDefault()
          push('/search/keyword')
        }}
        input={<Input type="text" value={value} onChange={onChangeValue} {...props} />}
      />
    </div>
  )
}
