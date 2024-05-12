import { FC, useContext, Context } from "react";

import { AiFillStar } from "react-icons/ai";
import { stars } from "../../../../../constants/stars";
import DarkThemeContext from "../../../../../context/ThemeContext";
import { IDarkThemeContext } from "../../../../../ts/interfaces/IDarkThemeContext/IDarkThemeContext";

interface IProps {
	ratingReviews: number;
}

const ProductRatingsProgress: FC<IProps> = ({ ratingReviews }): JSX.Element => {
	const { darkTheme } = useContext(DarkThemeContext as Context<IDarkThemeContext>);

	return (
		<div className="flex flex-col-reverse p-6 w-4/12">
			{
				stars.map((star) => {
					const { starId, starRating } = star;

					return (
						<div key={starId} className="flex items-center gap-2">
							<div className="flex items-center gap-1">
								<AiFillStar size={24} fill="#ffcc00" />
								<p>{starRating}</p>
							</div>
							<div className={`
								${ darkTheme ? "bg-gray-700" : "bg-gray-200" }
								w-full rounded-full h-2.5
							`}>
								<div
									className={`
										${starRating === ratingReviews ? "w-full" : "w-0"}
										${ darkTheme ? "bg-blue-600" : "bg-blue-400" }
										h-2.5 rounded-full
									`}
								></div>
							</div>
						</div>
					)
				})
			}
		</div>
	);
};

export default ProductRatingsProgress;
