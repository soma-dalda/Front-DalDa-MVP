import { useEffect, useRef } from 'react'

export function useDebouncedCallback<A extends unknown[]>(
  callback: (...args: A) => void,
  wait: number,
  leading?: boolean
) {
  const argsRef = useRef<A>()
  const timeout = useRef<ReturnType<typeof setTimeout>>()

  function cleanup() {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
  }

  useEffect(() => cleanup, [])

  return function debouncedCallback(...args: A) {
    argsRef.current = args

    cleanup()

    const isLeadingEdge = leading && !timeout.current

    timeout.current = setTimeout(() => {
      if (argsRef.current) {
        callback(...argsRef.current)
      }
    }, wait)

    if (isLeadingEdge) {
      callback(...argsRef.current)
    }
  }
}
