import React from 'react'
import { SearchForm as Form, BackButton, SearchInput } from '@/features/search/components'
import { useSearchForm } from '@/features/search/hooks/useSearchForm'

type Props = {
  onButtonClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}

function SearchForm({ onButtonClick, disabled }: Props) {
  const { value, handleSubmit, handleChange } = useSearchForm('')

  return (
    <div className="w-[calc(100%-15px)] flex items-center">
      <Form
        onSubmit={handleSubmit}
        leftButton={
          <BackButton
            onClick={onButtonClick}
            disabled={disabled}
            className={disabled ? 'bg-gray-200 animate-pulse' : ''}
          />
        }
        input={
          <SearchInput
            className={`pl-10 ${disabled ? 'bg-gray-200 animate-pulse' : ''}`}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={disabled ? '로딩중...' : '우리 동네 케이크를 검색하세요'}
          />
        }
      />
    </div>
  )
}

export default React.memo(SearchForm)
