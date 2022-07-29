import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import { ImageSkeleton } from './ImageSkeleton'

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
          ref={entry?.isIntersecting ? ref : imageRef}
          onLoad={handleLoaded}
          onError={handleLoaded}
          src={imageSrc}
          {...props}
          alt=""
        />
      </>
    )
  }
)

export default Image
