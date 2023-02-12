// Libraries
import dynamic from 'next/dynamic';
import { useStyletron } from 'styletron-react';

// Components
import { Block } from 'baseui/block';
import { ProfilesPageHeader } from 'components/ProfilesPageHeader';

const WindowScrolledProfileList = dynamic(
  () => import('components/WindowScrolledProfileList').then(mod => mod.WindowScrolledProfileList), {
    ssr: false
  }
);

const ProfilesPage = (): JSX.Element => {
  const [css] = useStyletron();

  return (
    <Block className={css({
      position: 'relative'
    })}>
      <ProfilesPageHeader />
      <WindowScrolledProfileList />
    </Block>
  )
}

export default ProfilesPage;
