import useScroll from '@hooks/useScroll';
import Icon from '../Icon';
import { clsx } from 'clsx';

export default function SrollUp() {
  const { isScrolled, scrollToRef } = useScroll({ threshold: 50, scrollTo: 0 });

  return (
    <>
      <button
        type="button"
        className={clsx(
          'button',
          'fixed bottom-[45px] right-[45px] z-50 flex h-[48px] w-[48px] items-center justify-center p-2 shadow-md',
          'transition-all duration-700 ease-out',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
        onClick={scrollToRef}
      >
        <Icon name="MoveUp" size={20} />
      </button>
    </>
  );
}
