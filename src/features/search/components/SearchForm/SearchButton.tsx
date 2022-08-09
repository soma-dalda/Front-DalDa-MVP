import React from 'react'
import SearchBigIcon from './SearchBigIcon'

function SearchButton({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="submit"
      className={`p-3 ml-2 text-sm font-medium bg-[#FBF7F2] rounded-lg ${className}`}
      {...props}
    >
      <SearchBigIcon />
      <span className="sr-only">Search</span>
    </button>
  )
}

export default React.memo(SearchButton)
