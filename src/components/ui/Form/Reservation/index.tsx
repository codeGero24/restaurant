import React from 'react';
import { clsx } from 'clsx';
import AnimationWrapper from '@components/layout/AnimationWrapper';

/* Types */
import { animation } from '@types.app/index';
import { formatDate } from '@utils/index';

interface FormReservationProps {
  className?: string;
  animation?: animation;
}
const FormReservation = React.memo(
  ({ className, animation = 'animate-slide-in-up' }: FormReservationProps) => {
    const classNameCustom = className || 'flex flex-wrap gap-4 lg:grid-cols-2';
    const defaulDateValue = formatDate(new Date());
    console.log(defaulDateValue);

    return (
      <AnimationWrapper as='form' animation={animation} className={classNameCustom}>
        <>
          <div className='relative w-full lg:w-[48.5%]'>
            <input
              id='name'
              type='text'
              name='name'
              className='input'
            />
             <label htmlFor='name' className='label' >Your Name</label>
          </div>
          <div className='relative w-full lg:w-[48.5%]'>
            <input
              id='email'
              type='text'
              name='email'
              className='input'
            />
            <label htmlFor='email' className='label' >Your Email</label>
          </div>
          <div className='relative w-full lg:w-[48.5%]'>
            <input
              id='date'
              type='datetime-local'
              name='datetime-local'
              defaultValue={defaulDateValue}
              className='input'
            />
            <label htmlFor='datetime-local' className='label'>
              Data & Time
            </label>
          </div>
          <div className='relative w-full lg:w-[48.5%]'>
            <select id='people' name='people' defaultValue='people-1' className='select'>
              <option value='people-1'>People 1</option>
              <option value='people-2'>People 2</option>
              <option value='people-3'>People 2</option>
            </select>
            <label className='label' htmlFor='people'>
              No Of People
            </label>
          </div>
          <div className='relative w-[99.5%]'>
            <textarea id='notes' name='notes' className='textarea' maxLength={256} />
            <label htmlFor='email' className='label'>
              Special Request
            </label>
          </div>
          <button
            type='submit'
            className={clsx('button', 'w-full px-4 py-3 uppercase lg:py-4')}
          >
            Book Now
          </button>
        </>
      </AnimationWrapper>
    );
  }
);

export default FormReservation;
