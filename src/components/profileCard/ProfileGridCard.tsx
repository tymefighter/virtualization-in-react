// Components
import { Card } from 'baseui/card';

// Types
import type { Profile } from 'types/profile';

interface ProfileGridCardProps {
  profile: Profile;
}

export const ProfileGridCard = ({
  profile,
}: ProfileGridCardProps): JSX.Element => (
  <Card
    headerImage={profile.profileImageUrl}
    title={profile.name}
  />
)
