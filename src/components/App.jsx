import { Profile } from './userTask/User';
import user from '../data/user.json';

import { Transactions } from './transactionsTask/transactions';
import transactions from '../data/transactions.json';

import statistics from 'data/statistics.json';
import { Statistics } from './statisticsTask/statistics';

import friends from 'data/friends.json';
import { Friends } from './friendsTask/friends';

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
