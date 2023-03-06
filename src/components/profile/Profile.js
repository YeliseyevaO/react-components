import s from "./Profile.module.css";

  export  default function Profile({ username, tag, location, avatar, stats }) {
    const {followers,views,likes}=stats
    return (
        <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
                    <span class={s.quantity}>{views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{likes}</span>
    </li>
  </ul>
        </div>
    );
}