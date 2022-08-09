import React from 'react'
import useForm from '../../hooks/useForm'
import Avatar from '../Avatar'
import SendButton from '../SendButton'

function CardCommentForm() {
  const [comment, , handleChangeComment] = useForm()

  return (
    <div className="w-full border mt-2">
      <form>
        <span className="sr-only">Your message</span>
        <div className="flex items-center py-2 px-3 bg-[#FBF7F2]">
          <Avatar className="w-[30px] h-[25px] flex justify-center items-center" />
          <textarea
            tabIndex={0}
            onChange={handleChangeComment}
            value={comment}
            id="chat"
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm 
            text-gray-900 bg-white border border-gray-300 focus:ring-gray-500 focus:border-gray-500 outline-neutral-200"
            placeholder="댓글을 작성 해주세요"
          />
          <SendButton />
        </div>
      </form>
    </div>
  )
}

export default CardCommentForm
