import { request } from '.';
import { AxiosRequestConfig } from 'axios';

// - Types
import { ReviewesResponse, Review } from '@types.app/index';

export const normalizeReviews = (res: ReviewesResponse): Review[] | undefined => {
  if (res.data) {
    return res.data.map((item, index) => ({
      id: item.id,
      name: item.customer_name,
      profession: item.customer_job,
      review: item.text,
      img: {
        src: `https://themewagon.github.io/restoran/img/testimonial-${index + 1}.jpg`,
        alt: `testimonial-${item.id}`,
      },
    }));
  }
};

export const getReviews = async () => {
  const config: AxiosRequestConfig = {
    url: '/reviews',
    method: 'get',
  };
  const res = await request({ config });
  const reviews = normalizeReviews(res.data);
  return reviews;
};
