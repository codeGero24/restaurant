import MOCK_DATA from '@mock/index';
import TeamMembers from '@components/ui/TeamMembers';

export default function OurTeamPage() {
  const { members } = MOCK_DATA;

  return (
    <>
      <TeamMembers members={members.concat(members)} />
    </>
  );
}
