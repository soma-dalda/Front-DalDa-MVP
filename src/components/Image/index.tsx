import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

function ImageSkeleton({ isLoading, height }: { isLoading: boolean; height: string }) {
  return (
    <div className={`w-full h-full ${isLoading ? 'block' : 'hidden'}`}>
      <div
        className={`w-full animate-pulse h-full min-h-[${height}] flex items-center justify-center bg-gray-300 dark:bg-gray-700 ${
          isLoading ? 'block' : 'hidden'
        }`}
      >
        <svg
          className="w-12 h-12 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512"
        >
          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
    </div>
  )
}

const Image = forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ onLoad, onError, className, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true)
    const [imageSrc, setImageSrc] = useState<string>()
    const imageRef = useRef<HTMLImageElement>(null)
    const [entry, observer] = useIntersectionObserver(imageRef)

    useEffect(() => {
      if (entry?.isIntersecting) {
        const target = entry.target as HTMLImageElement
        setImageSrc(target.dataset.src)
        observer?.unobserve(entry.target)
      }
    }, [entry, observer])

    const handleLoaded = useCallback(
      (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        if (onLoad) {
          onLoad(e)
        }

        if (onError) {
          onError(e)
        }
        setIsLoading(false)
      },
      [onError, onLoad]
    )

    return (
      <>
        <ImageSkeleton height={props.height?.toString() ?? ''} isLoading={isLoading} />
        <img
          className={`${isLoading ? 'hidden' : ''} ${className}`}
          alt=""
          ref={entry?.isIntersecting ? ref : imageRef}
          onLoad={handleLoaded}
          onError={handleLoaded}
          src={imageSrc}
          {...props}
        />
      </>
    )
  }
)

export default Image
