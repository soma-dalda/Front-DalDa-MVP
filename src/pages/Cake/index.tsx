import React from 'react'
import { AiOutlineLeft, AiOutlineUser, AiTwotoneHeart } from 'react-icons/ai'
import * as Styled from './Cake.styles'

function Cake() {
  return (
    <Styled.MainContainer>
      <Styled.MainWrapper>
        <div className="w-[calc(100%-15px)] border px-2 py-1 mt-2 rounded-lg flex items-center">
          <button aria-label="뒤로가기 버튼" type="button">
            <AiOutlineLeft className="cursor-pointer h-5 w-5 mr-2" />
          </button>
          <h4>피드</h4>
        </div>
        <div className="w-[calc(100%-15px)] border mt-2 rounded-lg">
          <figure className="w-full">
            <div className="w-[100%] flex items-center">
              <div className="rounded-full border w-fit p-1 border-slate-200 bg-violet-100 ml-2 mt-2">
                <AiOutlineUser className="w-[24px] h-[24px]" />
              </div>
              <p className="ml-2 mt-2 text-sm flex items-center text-slate-800">userName</p>
            </div>
            <div className="w-full text-sm ml-2 mt-2">디스크립션</div>
            <div className="w-full text-sm flex justify-end">
              <p className="mr-1 text-sm text-gray-700">200</p>
              <AiTwotoneHeart color="red" className="w-5 h-5 mr-2" />
            </div>
            <div className="w-[100%] rounded-lg overflow-hidden">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              />
            </div>
          </figure>
        </div>
      </Styled.MainWrapper>
    </Styled.MainContainer>
  )
}

export default Cake
