import React, { createContext, useEffect, useState } from 'react';
import './TweetForm.css';
import dp from '../../../images/dp.jpeg';
import Feed from '../Feed/Feed';
import RightNav from '../../RightNav/RightNav';
// const TrendingTweets = createContext();
const TweetForm = () => {
  const [tweet, setTweet] = useState('');
  const [tweetArr, setTweetArr] = useState([]);

  const tweetHandler = (e) => {
    setTweet(e.target.value);
    console.log(tweet);
  };

  const onTweet = () => {
    setTweetArr([...tweetArr, tweet]);
    setTweet('');
    console.log(tweetArr);
  };

  useEffect(() => {
    console.log(tweetArr);
  }, [tweetArr]);
  return (
    <>
      <div className='flex  flex-row justify-start items-center py-5 px-2 '>
        <img className='w-16 rounded-full' src={dp}></img>
        <input
          type='text'
          value={tweet}
          onChange={tweetHandler}
          placeholder={`What's happening!`}
          className='input pl-4 py-4 '></input>

        {tweet == '' ? (
          <button className='tbutton cursor-not-allowed'>Tweet</button>
        ) : (
          <button className='tbutton' id='tb' onClick={onTweet}>
            Tweet
          </button>
        )}
      </div>
      <div className='flex flex-col'>
        {tweetArr.map((tweet) => {
          return (
            <Feed
              dp={dp}
              name='Muddasar'
              username='muddasar-de'
              tweet={tweet}
            />
          );
        })}
      </div>
      {/* <TrendingTweets.Provider value='tweet'></TrendingTweets.Provider> */}
    </>
  );
};
export default TweetForm;
// export { TrendingTweets };
