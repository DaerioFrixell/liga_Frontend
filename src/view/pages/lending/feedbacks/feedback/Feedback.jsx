import React, { memo } from 'react';
import './feedback.scss';

export const Feedback = memo(({ viewFeedback }) => {
  return (
    <div className='feedback'>
      <p className='feedback__author'>{viewFeedback.author}</p>
      <p className='feedback__description'>{viewFeedback.description}</p>
    </div>
  )
})