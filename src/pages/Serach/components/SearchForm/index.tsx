import React from 'react'
import Form from '../../../../features/search/components/SearchForm'
import BackButton from '../../../../features/search/components/SearchForm/BackButton'
import Input from '../../../../features/search/components/SearchForm/SearchInput'

type Props = {
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (e: React.FormEvent) => void
  onButtonClick?: (e: React.MouseEvent) => void
  value?: string
  disabled?: boolean
}

function SearchForm({ value, onChangeValue, onButtonClick, disabled, onSubmit }: Props) {
  return (
    <div className="w-[calc(100%-15px)] flex items-center">
      <Form
        onSubmit={onSubmit}
        leftButton={
          <BackButton
            onClick={onButtonClick}
            disabled={disabled}
            className={disabled ? 'bg-gray-200 animate-pulse' : ''}
          />
        }
        input={
          <Input
            className={`pl-10 ${disabled ? 'bg-gray-200 animate-pulse' : ''}`}
            type="text"
            value={value}
            onChange={onChangeValue}
            placeholder={disabled ? '로딩중...' : '우리 동네 케이크를 검색하세요'}
          />
        }
      />
    </div>
  )
}

export default SearchForm
