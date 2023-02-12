// Components
import { HeadingLarge } from 'baseui/typography';

// Hooks
import { useStyletron } from 'baseui';

export const ProfilesPageHeader = (): JSX.Element => {
  const [css] = useStyletron();
  
  return (
    <HeadingLarge className={css({
      height: '80px',
      marginBottom: 0,
      marginTop: 0,
      position: 'sticky'
    })}>
      Profiles
    </HeadingLarge>
  );
}
