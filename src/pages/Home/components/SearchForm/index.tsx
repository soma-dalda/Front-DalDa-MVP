import React from 'react'
import { useSearchForm } from '../../../../features/search/hooks/useSearchForm'
import Form from '../../../../features/search/components/SearchForm'
import Input from '../../../../features/search/components/SearchForm/SearchInput'
import SearchButton from '../../../../features/search/components/SearchForm/SearchButton'
import { SearchTitle } from './SearchInput.styles'

type Props = {
  title?: React.ReactNode | JSX.Element
}

function SearchForm({
  title,
  className,
  disabled,
  ...props
}: Props & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'title'>) {
  const { value, handleSubmit, handleChange } = useSearchForm('')
  return (
    <div className="flex w-full h-full flex-col">
      {title && <SearchTitle>{title}</SearchTitle>}
      <Form
        onSubmit={handleSubmit}
        input={<Input type="text" value={value} onChange={handleChange} {...props} />}
        rightButton={<SearchButton disabled={disabled} className={disabled ? 'bg-red-200' : ''} />}
      />
    </div>
  )
}

export default SearchForm
