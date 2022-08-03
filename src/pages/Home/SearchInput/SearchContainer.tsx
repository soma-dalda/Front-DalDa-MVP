import React, { Suspense } from 'react'
import Form from '../Form'
import Input from '../Form/Input'
import { SearchInput } from '.'
import { SearchTitle } from './Search.styles'
import Spinner from '../../../components/Spinner'

function SearchContainer() {
  return (
    <Suspense
      fallback={
        <div className="flex w-full h-full flex-col">
          <SearchTitle>
            <Spinner />
          </SearchTitle>
          <Form
            input={<Input placeholder="로딩중..." className="bg-red-200" disabled />}
            disabled
          />
        </div>
      }
    >
      <SearchInput
        placeholder="우리 동네 케이크를 검색하세요"
        title={
          <h3>
            <b>주문 제작케이크</b>를 주문하고 싶으면?
          </h3>
        }
      />
    </Suspense>
  )
}

export default SearchContainer
