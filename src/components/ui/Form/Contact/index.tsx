import React from 'react';
import { clsx } from 'clsx';
import AnimationWrapper from '@components/layout/AnimationWrapper';

/* Types */
import { animation } from '@types.app/index';

interface FormContactProps {
  className?: string;
  animation?: animation;
}
const FormContact = React.memo(
  ({ className, animation = 'animate-slide-in-up' }: FormContactProps) => {
    const classNameCustom = className || 'flex flex-wrap gap-3 lg:grid-cols-2';

    return (
      <AnimationWrapper as='form' animation={animation} className={classNameCustom}>
        <>
          <div className='relative w-full lg:w-[49%]'>
            <input id='name' type='text' name='name' className='input' />
            <label htmlFor='name' className='label'>
              Your Name
            </label>
          </div>
          <div className='relative w-full lg:w-[49%]'>
            <input id='email' type='text' name='email' className='input' />
            <label htmlFor='email' className='label'>
              Your Email
            </label>
          </div>

          <div className='relative w-full'>
            <input
              id='subject'
              type='text'
              name='subject'
              className='input border-gray-300'
            />
            <label htmlFor='subject' className='label'>
              Subject
            </label>
          </div>

          <div className='relative w-full'>
            <textarea id='notes' name='notes' className='textarea' maxLength={256} />
            <label htmlFor='notes' className='label'>
              Message
            </label>
          </div>
          <button
            type='submit'
            className={clsx('button', 'w-full px-4 py-3 uppercase lg:py-4')}
          >
            Send Message
          </button>
        </>
      </AnimationWrapper>
    );
  }
);

export default FormContact;
