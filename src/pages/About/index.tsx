import AboutUs from '@components/ui/AboutUs';
import TeamMembers from '@components/ui/TeamMembers';

import { MEMBERS } from '@mock/index';

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <TeamMembers members={MEMBERS} />
    </>
  );
}
