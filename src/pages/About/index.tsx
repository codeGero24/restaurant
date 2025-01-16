import TeamMembers from '@components/ui/TeamMembers';

import { MEMBERS } from '@mock/index';

export default function AboutPage() {
  return (
    <>
      <TeamMembers members={MEMBERS} />
    </>
  );
}
