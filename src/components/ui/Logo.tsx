import Icon from '@components/ui/Icon';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to='/'>
      <h1 className='flex items-center gap-4 text-primary'>
        <Icon name='UtensilsCrossed' className='icon' strokeWidth={'2.5px'} />
        Restoran
      </h1>
    </Link>
  );
}
