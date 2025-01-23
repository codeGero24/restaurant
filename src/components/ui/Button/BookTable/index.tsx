import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export default function BookTable() {
  return (
    <li className='py-2'>
      <NavLink
        to='/'
        className={clsx('button', 'w-1/2 px-6 py-3 font-[500] uppercase lg:w-full')}
      >
        Book A Table
      </NavLink>
    </li>
  );
}
