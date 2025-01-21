import React from 'react';
import Skeleton from '../Skeleton';

type field = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
};
interface InputFieldProps {
  field: field;
  className?: string;
}
const InputField = React.memo(({ field, className }: InputFieldProps) => {
  const classNameCustom = className || 'relative w-full lg:w-[48.5%]';

  if (!field?.name) return <Skeleton name='input' />;

  return (
    <>
      <div className={classNameCustom}>
        <input
          id={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className='input'
          min={0}
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

export default InputField;
