import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import Spinner from '../../../components/Spinner'
import Input from '../../Home/Form/Input'

type Props = {
  buttonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onSubmit: (e: React.FormEvent) => void
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  disabled?: boolean
}

function SearchForm({ buttonClick, onSubmit, value, onChangeValue, disabled }: Props) {
  return (
    <div className="w-[calc(100%-15px)] flex items-center">
      <button
        type="button"
        onClick={buttonClick}
        aria-label="뒤로가기 버튼"
        className={`p-3 text-sm font-medium mr-2 bg-[#FBF7F2] rounded-lg ${
          disabled ? 'bg-gray-200 animate-pulse' : ''
        }`}
        disabled
      >
        {disabled ? (
          <Spinner />
        ) : (
          <AiOutlineLeft className="text-2xl cursor-pointer text-gray-500 w-[20px] h-[20px]" />
        )}
        <span className="sr-only">Search</span>
      </button>
      <form className="w-full" onSubmit={onSubmit}>
        <Input
          className={`pl-3 ${disabled ? 'bg-gray-200 animate-pulse' : ''}`}
          type="text"
          value={value}
          onChange={onChangeValue}
          placeholder={disabled ? '로딩중...' : '우리 동네 케이크를 검색하세요'}
        />
      </form>
    </div>
  )
}

export default SearchForm
