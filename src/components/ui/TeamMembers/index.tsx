import React from 'react';
import Section from '@components/layout/Section';
import AnimationWrapper from '@components/layout/AnimationWrapper';
import CardMember, { type Member } from '@components/ui/Card/Member';

import MOCK_DATA from '@mock/index';

interface TeamMembersProps {
  members?: Member[];
}

const TeamMembers: React.FC<TeamMembersProps> = React.memo(({ members }) => {
  const teamMembers = members || (MOCK_DATA.members as Member[]);

  return (
    <Section title="Team Members" subTitle="Our Team Members">
      {teamMembers.map((member, index) => (
        <AnimationWrapper
          key={`member-${index}`}
          animation="animate-slide-in-up"
          delay={true}
        >
          <CardMember member={member} />
        </AnimationWrapper>
      ))}
    </Section>
  );
});

export default TeamMembers;
