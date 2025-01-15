import React from 'react';
import { clsx } from 'clsx';
import Card from '@components/ui/Card';
import Image from '@components/ui/Image';
import Icon from '@components/ui/Icon';

import { nameIcon } from '@types.app/ludice';

type Social = {
  name: string;
  icon: nameIcon;
  link: string;
};

export type Member = {
  img: string;
  name: string;
  role: string;
  socials: Social[];
};

interface MemberCardProps {
  member: Member;
}

const MemberCard = React.memo(({ member }: MemberCardProps) => {
  return (
    <>
      <Card.Root
        className={clsx(
          'h-[calc(100%-40px)] place-items-center overflow-hidden pb-0 md:pb-0',
          'hover:h-[100%] hover:transition-all hover:duration-500 hover:ease-linear',
        )}
      >
        <Card.Header className="grid grid-cols-1 place-items-center gap-2">
          <Image
            src={member.img}
            alt={member.name}
            className="w-[252px] hover:scale-110 hover:transition-all hover:duration-500 hover:ease-linear"
            style={{ borderRadius: '50%', aspectRatio: '1/1' }}
          />
          <Card.Title>{member.name}</Card.Title>
          <Card.Subtitle>{member.role}</Card.Subtitle>
        </Card.Header>
        <Card.Footer className="mt-2">
          <ul className="grid grid-cols-3 gap-2">
            {member.socials.map(social => (
              <li
                key={social.name}
                className={clsx(
                  'border-rounded-full rounded-tl-[20px] rounded-tr-[20px] bg-primary px-1 pb-1 pt-3',
                  'hover:brightness-110 hover:transition-all hover:duration-500 hover:ease-linear',
                )}
              >
                <a href={social.link} target="_blank" rel="noreferrer">
                  <Icon size={24} className="h-[24px] w-[24px]" name={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </Card.Footer>
      </Card.Root>
    </>
  );
});

export default MemberCard;
