import AboutUs from '@components/AboutUs';
import TeamMembers from '@components/TeamMembers';

import { MEMBERS } from '@mock/index';

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <TeamMembers members={MEMBERS} />
    </>
  );
}
