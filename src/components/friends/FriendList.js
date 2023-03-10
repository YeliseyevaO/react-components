import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";
import PropTypes from 'prop-types';

export default function FriendList({friends}) {
    return (
        <div className={s.friendList}>
            <ul>
                {friends.map(fr => (
                    <li className={s.item} key={fr.id}>
                        <FriendListItem
                            avatar={fr.avatar}
                            name={fr.name}
                            isOnline={fr.isOnline}
                        />
                    </li>))}
            </ul>
        </div>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};