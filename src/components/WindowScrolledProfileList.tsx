// Libraries
import { WindowScroller as _WindowScroller, WindowScrollerProps } from 'react-virtualized';

// Components
import { List as _List, ListRowRenderer } from 'react-virtualized'; 
import { ProfileCard } from 'components/profileCard';
import { Block } from 'baseui/block';

// Constants
import { PROFILES } from 'constants/profiles';

const List = _List as any;
const WindowScroller = _WindowScroller as unknown as (props: WindowScrollerProps) => JSX.Element;

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

export const WindowScrolledProfileList = (): JSX.Element => (
  <WindowScroller>
    {({ height, width, isScrolling }) => (
      <List
        height={height}
        width={width}
        rowCount={PROFILES.length}
        rowHeight={140}
        rowRenderer={rowRenderer}
        isScrolling={isScrolling}
        autoHeight
      />
    )}
  </WindowScroller>
)
