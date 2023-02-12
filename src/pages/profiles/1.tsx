// Libraries
import dynamic from 'next/dynamic';
import { useWindowSize } from 'react-use';

// Components
import { Block } from 'baseui/block';
import { ProfilesPageHeader } from 'components/ProfilesPageHeader';

const ProfileList = dynamic(
  () => import('components/ProfileList').then(mod => mod.ProfileList), {
    ssr: false
  }
);

const ProfilesPage = (): JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <Block>
      <ProfilesPageHeader />
      <ProfileList 
        height={height - 80}
        width={width}
      />
    </Block>
  )
}

export default ProfilesPage;
