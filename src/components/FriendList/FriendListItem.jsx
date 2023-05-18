import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={css.item}>
    <span
      className={`${css.status} ${
        isOnline ? css['status--online'] : css['status--offline']
      }`}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendListItem;
