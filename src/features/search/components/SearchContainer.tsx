import React, { Suspense } from 'react'
import Spinner from '../../../components/Spinner'
import Form from './Form'
import Input from './Form/Input'
import { Search } from './Search'
import { SearchTitle } from './Search/Search.styles'

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
      <Search
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
