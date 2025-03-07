import React from 'react';
import { clsx } from 'clsx';
import Card from '@components/ui/Card';
import Image from '@components/ui/Image';
import Icon from '@components/ui/Icon';

// - Types
import { Member } from '@types.app/index';
interface CardMemberProps {
  member: Member;
}

const CardMember = React.memo(({ member }: CardMemberProps) => {
  return (
    <>
      <Card.Root
        className={clsx(
          'grid cursor-pointer grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm md:p-6',
          'h-[calc(100%-40px)] place-items-center overflow-hidden pb-0 md:pb-0',
          'hover:h-[100%] hover:transition-all hover:duration-500 hover:ease-linear'
        )}
      >
        <Card.Header className='grid grid-cols-1 place-items-center gap-2'>
          <Image
            {...member.img}
            style={{ borderRadius: '50%', aspectRatio: '1/1' }}
            className='w-[252px] hover:scale-110 hover:transition-all hover:duration-500 hover:ease-linear'
          />
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle>{member.role}</Card.Subtitle>
        </Card.Header>
        <Card.Footer className='mt-2'>
          <ul className='grid grid-cols-3 gap-2'>
            {member.socials.map(social => (
              <li
                key={social.name}
                className={clsx(
                  'border-rounded-full rounded-tl-[20px] rounded-tr-[20px] bg-primary px-1 pb-1 pt-3',
                  'hover:brightness-110 hover:transition-all hover:duration-500 hover:ease-linear'
                )}
              >
                <a href={social.link} target='_blank' rel='noreferrer'>
                  <Icon size={24} className='h-[24px] w-[24px]' name={social.icon.name} />
                </a>
              </li>
            ))}
          </ul>
        </Card.Footer>
      </Card.Root>
    </>
  );
});

export default CardMember;
