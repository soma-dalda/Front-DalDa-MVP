import { API } from '@/constants'
import axios from 'axios'
import { useCallback } from 'react'
import { useMutation, UseMutationOptions } from 'react-query'

type RequestParams = {
  description: string
}

const postRequest = async ({ description }: RequestParams) => {
  const { data } = await axios.post(API.PATH.FEED.POST_FEED, { description })
  return data
}

type MutationOption = Omit<UseMutationOptions<any, unknown, RequestParams, unknown>, 'mutationFn'>

const usePostFeed = (options?: MutationOption) => {
  const mutation = useMutation(postRequest, { ...options })

  const handleFeedSumbit = useCallback(
    ({ description }: RequestParams) =>
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate({ description })
      },
    []
  )

  return { ...mutation, handleFeedSumbit }
}

export default usePostFeed
