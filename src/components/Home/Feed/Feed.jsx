import React, { useEffect, useState } from 'react';
const Feed = (props) => {
  return (
    <>
      <div className='flex  flex-row justify-start items-center py-5 px-2 '>
        <img className='w-16 rounded-full' src={props.dp}></img>
        <div className='flex flex-col px-5'>
          <h1 className='text-white'>{`Muddasar`}</h1>
          <h2 className='text-white'>{`20-05-22`}</h2>
          <p className='text-white'>{props.tweet}</p>
        </div>{' '}
      </div>
    </>
  );
};
export default Feed;
