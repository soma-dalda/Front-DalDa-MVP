import React, { useCallback } from 'react'
import { useInternalRouter } from '../../../hooks/useInternalRouter'
import Form from '../../../features/search/components/Form'
import BackButton from '../../../features/search/components/Form/BackButton'
import Input from '../../../features/search/components/Form/Input'

type Props = {
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  disabled?: boolean
}

function SearchForm({ value, onChangeValue, disabled }: Props) {
  const { push, goBack } = useInternalRouter()
  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      push(`/search?keyword=${value}`)
    },
    [value]
  )

  return (
    <div className="w-[calc(100%-15px)] flex items-center">
      <Form
        onSubmit={onSubmit}
        leftButton={
          <BackButton
            onClick={() => goBack()}
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
