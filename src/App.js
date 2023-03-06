import user from './user.json';
import './App.css';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="App">
   

<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
    </div>
  );
}

export default App;
