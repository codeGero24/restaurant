import { Review } from '@types.app/index';
import { create } from 'zustand';

type ReviewsState = {
  reviews: Review[];
};

type ReviewsActions = {
  addReview: (review: Review) => void;
  setReviews: (reviews: Review[]) => void;
};

const initialState: ReviewsState = {
  reviews: [],
};

const useReviewsStore = create<ReviewsState & ReviewsActions>(set => ({
  ...initialState,
  setReviews: (reviews: Review[]) => set({ reviews }),
  addReview: (review: Review) => set(state => ({ reviews: [...state.reviews, review] })),
}));

// SETTERS
const setReviews = (state: ReviewsActions) => state.setReviews;
const addReview = (state: ReviewsActions) => state.addReview;

// GETTERS
const getReviews = (state: ReviewsState) => state.reviews;

export { setReviews, addReview, getReviews };

export default useReviewsStore;
