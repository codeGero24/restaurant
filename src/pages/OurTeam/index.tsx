import TeamMembers from '@components/TeamMembers';

// - Mock
import { MEMBERS } from '@mock/index';

export default function OurTeamPage() {
  return (
    <>
      <TeamMembers members={MEMBERS.concat(MEMBERS)} />
    </>
  );
}
