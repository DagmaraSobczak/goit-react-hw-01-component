import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        const { id, avatar, name, isOnline } = friend;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
        );
      })}
    </ul>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
