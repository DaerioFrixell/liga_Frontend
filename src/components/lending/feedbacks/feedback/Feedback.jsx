import React from 'react';
import './feedback.scss';

export const Feedback = ({ feedState }) => {
  return (
    <div className='feedback'>
      <p className='feedback__author'>{feedState.author}</p>
      <p className='feedback__description'>{feedState.description}</p>
    </div>
  )
}