import './App.css';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import TransactionHistory from './components/transaction/TransactionHistory';
import FriendList from './components/friends/FriendList';
import transactions from './transactions.json';  
import user from './user.json';
import data from './data.json';
import friends from './friends.json';

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

<Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
   
      <FriendList friends={friends} />
  

<TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
