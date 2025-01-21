import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Button from '@components/ui/Button';
import Spinner from '@components/ui/Spinner';

import useReviewsStore from '@stores/reviews.store';
import useSettingsStore from '@stores/settings.store';

import {
  GET_REVIEWS_KEY,
  GET_SETTINGS_KEY,
  INVALIDATION_KEY,
  fetchQuery,
  getReviews,
  getSettings,
} from '@services/index';

export default function RootLayout() {
  const queryClient = useQueryClient();
  const { setReviews } = useReviewsStore();
  const { setSettings } = useSettingsStore();

  React.useEffect(() => {
    const preFetch = async () => {
      const fetchReviews = fetchQuery({
        queryClient,
        queryKey: [INVALIDATION_KEY, GET_REVIEWS_KEY],
        queryFn: getReviews,
      });

      const fetchSettings = fetchQuery({
        queryClient,
        queryKey: [INVALIDATION_KEY, GET_SETTINGS_KEY],
        queryFn: getSettings,
      });

      Promise.all([fetchReviews, fetchSettings]).then(values => {
        const [reviews, settings] = values;
        if (reviews && Array.isArray(reviews)) {
          setReviews(reviews);
        }

        if (settings) {
          setSettings(settings);
        }
      });
    };

    preFetch();
  }, []);

  return (
    <>
      <div className='mx-auto max-w-screen-xl'>
        <Spinner />
        <Button type='button' variant='sroll-up' />
        <Header />
        <main id='l-main' className='bg-gray-50'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
