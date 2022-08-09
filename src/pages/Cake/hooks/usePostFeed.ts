import axios from 'axios'
import { useCallback } from 'react'
import { useMutation, UseMutationOptions } from 'react-query'

const postRequest = async ({ description }: { description: string }) => {
  const { data } = await axios.post('/api/feed', { description })
  return data
}

type MutationOption = Omit<
  UseMutationOptions<
    any,
    unknown,
    {
      description: string
    },
    unknown
  >,
  'mutationFn'
>

const usePostFeed = (options?: MutationOption) => {
  const mutation = useMutation(postRequest, { ...options })

  const handleFeedSumbit = useCallback(
    ({ description }: { description: string }) =>
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate({ description })
      },
    []
  )

  return { ...mutation, handleFeedSumbit }
}

export default usePostFeed
