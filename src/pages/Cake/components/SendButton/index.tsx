import React, { ButtonHTMLAttributes } from 'react'
import FlightIcon from '../../icons/FlightIcon'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

function SendButton({ className, ...props }: Props) {
  return (
    <button
      type="submit"
      className={`inline-flex justify-center p-2 text-gray-600 rounded-full cursor-pointer hover:bg-blue-100${className}`}
      {...props}
    >
      <FlightIcon />
      <span className="sr-only">Send message</span>
    </button>
  )
}

export default SendButton
