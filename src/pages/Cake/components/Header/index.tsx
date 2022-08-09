import React from 'react'
import { useInternalRouter } from '@/hooks/useInternalRouter'
import { AiOutlineLeft } from 'react-icons/ai'

function Header() {
  const { goBack } = useInternalRouter()
  return (
    <div className="w-[calc(100%-15px)] border px-2 py-1 mt-2 rounded-lg flex items-center">
      <button onClick={goBack} aria-label="뒤로가기 버튼" type="button">
        <AiOutlineLeft className="cursor-pointer h-5 w-5 mr-2" />
      </button>
      <h4>피드</h4>
    </div>
  )
}

export default Header
