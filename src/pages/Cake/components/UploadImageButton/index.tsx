import React, { ButtonHTMLAttributes } from 'react'
import ImageIcon from '../../icons/ImageIcon'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

function UploadImageButton({ className, ...props }: Props) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 ${className}`}
      {...props}
    >
      <ImageIcon />
      <span className="sr-only">Upload image</span>
    </button>
  )
}

export default UploadImageButton
