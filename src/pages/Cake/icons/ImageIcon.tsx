import React, { forwardRef } from 'react'

type Props = {}

const ImageIcon = forwardRef<SVGSVGElement, Props>(({ ...props }, ref) => {
  return (
    <svg
      aria-hidden="true"
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clipRule="evenodd"
      />
    </svg>
  )
})

export default ImageIcon
