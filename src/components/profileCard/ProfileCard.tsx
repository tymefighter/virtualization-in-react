// Types
import type { Profile } from 'types/profile';

interface ProfileCardProps {
  profile: Profile;
}

export const ProfileCard = ({
  profile,
}: ProfileCardProps): JSX.Element => <div />;
