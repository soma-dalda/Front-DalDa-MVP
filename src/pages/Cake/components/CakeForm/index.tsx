import React from 'react'
import useForm from '../../hooks/useForm'
import useGetFeedList from '../../hooks/useGetFeedList'
import usePostFeed from '../../hooks/usePostFeed'
import Avatar from '../Avatar'
import SendButton from '../SendButton'
import UploadImageButton from '../UploadImageButton'

function CakeForm() {
  const [description, setDescription, handleChangeDescription] = useForm()

  const { refetch } = useGetFeedList({
    enabled: false,
    suspense: true,
  })

  const { handleFeedSumbit } = usePostFeed({
    onSuccess: () => {
      refetch()
      setDescription('')
    },
  })

  return (
    <div className="w-[calc(100%-15px)] border rounded-lg mt-2">
      <form onSubmit={handleFeedSumbit({ description })}>
        <span className="sr-only">Your message</span>
        <div className="flex items-center py-2 px-3 bg-[#FBF7F2] rounded-lg ">
          <Avatar className="w-[30px] h-[25px] flex justify-center items-center" />
          <UploadImageButton className="hover:rounded-full" />
          <textarea
            tabIndex={0}
            onChange={handleChangeDescription}
            value={description}
            id="chat"
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm 
            text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 outline-neutral-200"
            placeholder="여러분의 생각을 보여주세요"
          />
          <SendButton />
        </div>
      </form>
    </div>
  )
}

export default CakeForm
