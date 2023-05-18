import PropTypes from 'prop-types';
import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div class={css.profile}>
    <div class={css.description}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        class={css.avatar}
      />
      <p class={css.name}>Petra Marica</p>
      <p class={css.tag}>@pmarica</p>
      <p class={css.location}>Salvador, Brasil</p>
    </div>

    <ul class={css.stats}>
      <li>
        <span class={css.label}>Followers</span>
        <span class={css.quantity}>1000</span>
      </li>
      <li>
        <span class={css.label}>Views</span>
        <span class={css.quantity}>2000</span>
      </li>
      <li>
        <span class={css.label}>Likes</span>
        <span class={css.quantity}>3000</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.string,
};
export default Profile;
