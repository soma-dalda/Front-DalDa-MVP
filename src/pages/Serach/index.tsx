import React, { useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import Card from './Card'
import { useSearchForm } from '../../features/search/hooks/useSearchForm'
import Input from '../Home/Form/Input'
import { useInternalRouter } from '../../hooks/useInternalRouter'

function Search() {
  const { keyword } = useParams()
  const [value, , onChangeValue] = useSearchForm(keyword ?? '')
  const { push, goBack } = useInternalRouter()

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      push(`/search/${value}`)
    },
    [value]
  )

  return (
    <div className="ml-[15px] mt-3 w-[calc(100%-15px)]">
      <div className="w-[calc(100%-15px)] flex items-center">
        <button
          type="button"
          onClick={goBack}
          aria-label="뒤로가기 버튼"
          className="p-3 text-sm font-medium mr-2 bg-[#FBF7F2] rounded-lg"
        >
          <AiOutlineLeft className="text-2xl cursor-pointer text-gray-500 w-[20px] h-[20px]" />
          <span className="sr-only">Search</span>
        </button>
        <form className="w-full" onSubmit={onSubmit}>
          <Input
            className="pl-4"
            type="text"
            value={value}
            onChange={onChangeValue}
            placeholder="우리 동네 케이크를 검색하세요"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 w-[calc(100%-15px)]  gap-[5px] mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Search
