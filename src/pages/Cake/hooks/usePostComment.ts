import { API } from '@/constants'
import axios from 'axios'
import { useCallback } from 'react'
import { useMutation, UseMutationOptions } from 'react-query'
import { CardUser } from '../types/index'

type CommentVariables = {
  comment: string
  user: CardUser
  id: string
}

const postCommentRequest = async ({ comment, user, id }: CommentVariables) => {
  const data = await axios.post(`${API.PATH.FEED.POST_COMMENT}/${id}`, { comment, user })

  return data.status
}

type MutationOptions = Omit<
  UseMutationOptions<number, unknown, CommentVariables, unknown>,
  'mutationFn'
>

const usePostComment = (options?: MutationOptions) => {
  const mutation = useMutation(postCommentRequest, { ...options })

  const handleSubmit = useCallback(
    ({ comment, user, id }: CommentVariables) =>
      (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutation.mutate({ comment, user, id })
      },
    []
  )

  return { ...mutation, handleSubmit }
}

export default usePostComment
