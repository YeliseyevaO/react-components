import user from './user.json';
import './App.css';
import Profile from './components/profile/Profile';
import data from './data.json';
import Statistics from './components/statistics/Statistics';

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

<Statistics title="Upload stats" stats={data} />;
<Statistics stats={data} />;
    </div>
  );
}

export default App;
