import React, { useContext, useState, useEffect } from 'react';
import { TrendingTweets } from '../Home/TweetForm/TweetForm';
import Feed from '../Home/Feed/Feed';
import dp from '../../images/dp.jpeg';
import './RightNav.css';
const RightNav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trendings, setTrendings] = useState('');
  //   const trendingTweets = useContext(TrendingTweets);
  //   setTrendings(trendingTweets);

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  //   useEffect(() => {
  //     console.log('trendings', trendings);
  //   }, [0]);
  return (
    <>
      <div className='flex flex-col'>
        <input
          type='text'
          value={searchTerm}
          onChange={searchHandler}
          placeholder='Search...'
          className='searchInput pl-6 py-2  '></input>
      </div>
      <div></div>
      <Feed dp={dp} tweet={trendings} />;
    </>
  );
};
export default RightNav;
