import React, { ButtonHTMLAttributes } from 'react'
import { AiOutlineLeft } from 'react-icons/ai'
import { Spinner } from '../../../../components'

function BackButton({ className, disabled, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-label="뒤로가기 버튼"
      className={`p-3 text-sm font-medium mr-2 bg-[#FBF7F2] rounded-lg ${className}`}
      {...props}
    >
      {disabled ? (
        <Spinner />
      ) : (
        <AiOutlineLeft className="text-2xl cursor-pointer text-gray-500 w-[20px] h-[20px]" />
      )}
      <span className="sr-only">뒤로가기버튼</span>
    </button>
  )
}

export default BackButton
