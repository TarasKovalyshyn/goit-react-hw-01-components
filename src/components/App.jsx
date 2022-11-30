import { Profile } from './ProfileTask/Profile';
import user from '../data/user.json';

import { Transactions } from './TransactionsTask/Transactions';
import transactions from '../data/transactions.json';

import { Statistics } from './StatisticsTask/Statistics';
import statistics from 'data/statistics.json';

import { Friends } from './FriendsTask/Friends';
import friends from 'data/friends.json';


export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Transactions items={transactions} />
      <Statistics items={statistics} />
      <Friends items={friends} />

      
    </>
  );
}
