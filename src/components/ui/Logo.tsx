import Icon from '@components/ui/Icon';
// - import { useGetSettings } from '@queries/settings';
import { Link } from 'react-router-dom';

export default function Logo() {
  // - const { data } = useGetSettings();
  // - data?appName

  return (
    <Link to='/'>
      <h1 className='flex items-center gap-4 text-primary'>
        <Icon name='UtensilsCrossed' className='icon' strokeWidth={'2.5px'} />
        {'Reastaurant'}
      </h1>
    </Link>
  );
}
