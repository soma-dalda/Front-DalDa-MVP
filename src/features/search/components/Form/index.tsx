import React from 'react'
import SearchIcon from './SearchIcon'

type Props = {
  input: React.ReactNode
  disabled?: boolean
  leftButton?: React.ReactNode
  rightButton?: React.ReactNode
}

function Form({
  input,
  disabled,
  rightButton,
  leftButton,
  ...props
}: Props & React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="flex items-center w-[calc(100%-15px)]" {...props}>
      {leftButton}
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        {input}
      </div>
      {rightButton}
    </form>
  )
}

export default Form
