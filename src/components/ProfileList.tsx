// Components
import { List as _List, ListRowRenderer } from 'react-virtualized'; 
import { ProfileCard } from 'components/profileCard';
import { Block } from 'baseui/block';

// Constants
import { PROFILES } from 'constants/profiles';

const List = _List as any;

const rowRenderer: ListRowRenderer = ({
  index,
  style
}) => {
  const profile = PROFILES[index];
  return (
    <Block style={style}>
      <ProfileCard
        key={profile.email}
        profile={profile}
      />
    </Block>
  );
};

interface ProfileListProps {
  height: number;
  width: number;
}

export const ProfileList = ({
  height,
  width
}: ProfileListProps): JSX.Element => (
  <List
    height={height}
    width={width}
    rowCount={PROFILES.length}
    rowHeight={140}
    rowRenderer={rowRenderer}
  />
)
