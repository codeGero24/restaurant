import React from 'react';
import Skeleton from '../Skeleton';

type option = {
  value: string;
  label: string;
};
type field = {
  name: string;
  options?: option[];
  defaultValue?: string;
  placeholder?: string;
};

interface SelectFieldProps {
  field: field;
  className?: string;
}

const SelectField = React.memo(({ field, className }: SelectFieldProps) => {
  const classNameCustom = className || 'relative w-full lg:w-[48.5%]';

  if (!field?.name) return <Skeleton name='input' />;

  return (
    <>
      <div className={classNameCustom}>
        <select id={field.name} defaultValue={field?.defaultValue} className='select'>
          {field.options?.map(option => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        {field.placeholder && (
          <label htmlFor={field.name} className='label'>
            {field.placeholder}
          </label>
        )}
      </div>
    </>
  );
});

export default SelectField;
