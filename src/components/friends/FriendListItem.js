import s from "./FriendList.module.css";
import PropTypes from 'prop-types';

 export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <>
            <span className ={ isOnline? s.status:s.onLine}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        
    </>
    );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};