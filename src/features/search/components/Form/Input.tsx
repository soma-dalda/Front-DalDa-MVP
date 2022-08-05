import React from 'react'

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      id="simple-search"
      className={`text-sm rounded-lg block w-full outline-neutral-200 pl-10 p-3 bg-[#FBF7F2] ${className}`}
      placeholder="Search"
      required
      {...props}
    />
  )
}

export default Input
