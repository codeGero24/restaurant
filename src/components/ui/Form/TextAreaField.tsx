import React from 'react';
import Skeleton from '../Skeleton';

interface TextAreaFieldProps {
  field: {
    name: string;
    placeholder?: string;
  };
  className?: string;
}
const TextAreaField = React.memo(({ field, className }: TextAreaFieldProps) => {
  const classNameCustom = className || 'relative w-[99.5%]';

  if (!field?.name) return <Skeleton name='textarea' />;

  return (
    <>
      <div className={classNameCustom}>
        <textarea
          id={field.name}
          name={field.name}
          className='textarea'
          placeholder={field.placeholder}
          maxLength={256}
        />

        {field.placeholder && (
          <label htmlFor={field.name} className='label'>
            {field.placeholder}
          </label>
        )}
      </div>
    </>
  );
});

export default TextAreaField;
