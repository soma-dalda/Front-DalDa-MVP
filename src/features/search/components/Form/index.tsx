import React from 'react'
import Button from './Button'
import SearchIcon from './SearchIcon'

type Props = {
  input: React.ReactNode
  disabled?: boolean
}

function Form({ input, disabled, ...props }: Props & React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="flex items-center w-[calc(100%-15px)]" {...props}>
      <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        {input}
      </div>
      <Button disabled={disabled} className={disabled ? 'bg-red-200' : ''} />
    </form>
  )
}

export default Form
