import React from 'react';
import TweetForm from './TweetForm/TweetForm';
import Feed from './Feed/Feed';

const Home = () => {
  return (
    <>
      <div className='flex flex-col'>
        <TweetForm />
      </div>
    </>
  );
};
export default Home;
