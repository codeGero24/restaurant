import useScroll from '@hooks/useScroll';
import Icon from '../Icon';

export default function SrollUp() {
  const { isScrolled, scrollToRef } = useScroll({ threshold: 50, scrollTo: 0 });

  return (
    <>
      {isScrolled && (
        <button
          type="button"
          className="fixed bottom-[45px] right-[45px] z-50 flex h-[48px] w-[48px] items-center justify-center rounded-sm bg-primary p-2 text-white shadow-md hover:brightness-110"
          onClick={scrollToRef}
        >
          <Icon name="MoveUp" className="h-[20px] w-[20px]" />
        </button>
      )}
    </>
  );
}
