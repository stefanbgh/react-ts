import { FC, RefObject } from 'react'

interface IProps {
    textAreaRef: RefObject<HTMLTextAreaElement>;
}

const PostFormTextArea: FC<IProps> = ({ textAreaRef }): JSX.Element => {
    return (
        <div className="flex flex-wrap -mx-3">
				<div className="w-full px-3">
					<label
						className="block tracking-wide text-xs font-bold mb-2"
						htmlFor="postContent"
					>
					</label>
					<textarea
                        ref={textAreaRef}
						className="appearance-none bg-transparent resize-none block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
						id="postContent"
						rows={6}
						placeholder="Enter your post"
						required
					/>
				</div>
			</div>
    )
}

export default PostFormTextArea