import React, { Dispatch, FC, FormEvent, SetStateAction, useRef, useContext, Context } from 'react'

import { ReviewFormRating, ReviewFormTitle, ReviewFormTextArea, ReviewFormButton } from "../../../components"
import { useAddReviewMutation } from '../../../features/API/reviewsAPI';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DarkThemeContext from '../../../context/ThemeContext';
import { IDarkThemeContext } from '../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext';
import { IGetUser } from '../../../ts/interfaces/IUser/IGetUser';

interface IProps {
	setLoading: Dispatch<SetStateAction<boolean>>;
	user: IGetUser;
	userId: string;
}

const ReviewForm: FC<IProps> = ({ setLoading, user, userId }): JSX.Element => {
	const { productId } = useParams();
	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

	const [ currentFillStar, setCurrentFillStar ] = React.useState<number>(0);
	const [ chooseStar, setChooseStar ] = React.useState<boolean>(false);

	const reviewTitleRef = useRef<HTMLInputElement>(null);
	const reviewTextRef = useRef<HTMLTextAreaElement>(null);

	const [ addReview ] = useAddReviewMutation();
	const theme = darkTheme ? "dark" : "light";

	const handleFillStar = (star: number) => {
		if (chooseStar) return;
		setCurrentFillStar(star)
	};

	const handleEmptyStar = () => { 
		if (chooseStar) return;
		setCurrentFillStar(0);
	};

	const handleChooseStar = (star: number) => {
		if (chooseStar) {
			setChooseStar(false);

			return;
		}

		setCurrentFillStar(star);
		setChooseStar(true);
	};

	const handleAddReview = (e: FormEvent<HTMLFormElement>) => { 
		e.preventDefault();

		if (currentFillStar === 0) { 
			toast.error("Please, choose your rating stars", { theme });

			return;
		}

		setLoading(true);

		const reviewTitle = reviewTitleRef.current!.value;
		const reviewText = reviewTextRef.current!.value;

		const timestamp = new Date().getTime();

		addReview({
			phoneId: productId!,
			userId: userId,
			username: user.username,
			reviewRating: currentFillStar,
			timestamp,
			reviewTitle,
			reviewText,
		});

		reviewTitleRef.current!.value = "";
		reviewTextRef.current!.value = "";
		setCurrentFillStar(0);
		setChooseStar(false);
	};

    return (
        <form 
			onSubmit={handleAddReview}
			className="w-full p-6 border border-gray-400 mb-4"
		>
			<div className='mb-6'>
				<h3 className="text-xl font-bold">Add a Review</h3>
				<ReviewFormRating
					currentFillStar={currentFillStar}
					handleClickStar={handleChooseStar}
					handleEmptyStar={handleEmptyStar}
					handleFillStar={handleFillStar}
				/>
			</div>
			<div className="flex flex-wrap -mx-3">
				<ReviewFormTitle
					reviewTitleRef={reviewTitleRef}
				/>
			</div>
			<div className="flex flex-wrap -mx-3">
				<ReviewFormTextArea
					reviewTextRef={reviewTextRef}
				/>
			</div>
			<ReviewFormButton/>
		</form>
    )
}

export default ReviewForm