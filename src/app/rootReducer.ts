import { combineReducers } from "@reduxjs/toolkit";

import rootAPI from "../features/API/rootAPI";

import { allProductsSlice } from "../features/slices/allProductsSlice";
import { phonesSlice } from "../features/slices/phonesSlice";
import { tabletsSlice } from "../features/slices/tabletsSlice";
import { laptopsSlice } from "../features/slices/laptopsSlice";
import { televisionsSlice } from "../features/slices/televisionsSlice";
import { filterProductsSlice } from "../features/slices/filterProductsSlice";
import { sortProductsSlice } from "../features/slices/sortProductsSlice";
import { paginationProductsSlice } from "../features/slices/paginationProductsSlice";
import { reviewsSlice } from "../features/slices/reviewsSlice";
import { viewSlice } from "../features/slices/viewSlice";
import { supportMessagesSlice } from "../features/slices/supportMessagesSlice";
import { wishlistSlice } from "../features/slices/wishlistSlice";
import { cartSlice } from "../features/slices/cartSlice";
import { postsSlice } from "../features/slices/postsSlice";
import { commentsSlice } from "../features/slices/commentsSlice";
import { repliesSlice } from "../features/slices/repliesSlice";
import { profilePictureSlice } from "../features/slices/profilePictureSlice";

const rootReducer = combineReducers({
	[rootAPI.reducerPath]: rootAPI.reducer,
	phones: phonesSlice.reducer,
	tablets: tabletsSlice.reducer,
	laptops: laptopsSlice.reducer,
	televisions: televisionsSlice.reducer,
	filters: filterProductsSlice.reducer,
	sorts: sortProductsSlice.reducer,
	pagination: paginationProductsSlice.reducer,
	reviews: reviewsSlice.reducer,
	view: viewSlice.reducer,
	support_messages: supportMessagesSlice.reducer,
	wishlist: wishlistSlice.reducer,
	cart: cartSlice.reducer,
	posts: postsSlice.reducer,
	comments: commentsSlice.reducer,
	replies: repliesSlice.reducer,
	allProducts: allProductsSlice.reducer,
	profile_picture: profilePictureSlice.reducer 
});

export default rootReducer;