import React from 'react';
import './feedback.scss';

export const Feedback = ({ viewFeedback }) => {
  console.log("map comnp: ", viewFeedback)
  return (
    <div className='feedback'>
      <p className='feedback__author'>{viewFeedback.author}</p>
      <p className='feedback__description'>{viewFeedback.description}</p>
    </div>
  )
}