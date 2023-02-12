// Components
import { Block } from 'baseui/block';
import { Avatar } from 'baseui/avatar';
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';
import { useStyletron } from 'baseui';

// Types
import type { Profile } from 'types/profile';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({
  profile,
}: ProfileCardProps): JSX.Element => {
  const [css] = useStyletron();
  const noMarginClassName = css({ marginTop: 0, marginBottom: 0 })

  return (
    <Block className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    })}>
      <Block>
        <Avatar
          name={profile.name}
          initials={profile.name[0]}
          src={profile.profileImageUrl}
          size="80px"
        />
      </Block>
      <Block className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '2px'
      })}>
        <HeadingMedium className={noMarginClassName}>
          {profile.name}
        </HeadingMedium>
        <ParagraphMedium className={noMarginClassName}>
          {profile.email}
        </ParagraphMedium>
        <ParagraphMedium className={noMarginClassName}>
          {profile.phone}
        </ParagraphMedium>
      </Block>
    </Block>
  )
}
