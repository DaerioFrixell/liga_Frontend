import React from 'react';
import './lending.scss'
import { Offer } from './offer/Offer';
import { LendingForm } from './form/LendingForm';
import { Feedbacks } from './feedbacks/Feedbacks';

function Lending() {
  return (
    <div className='lending'>
      <Offer />
      <Feedbacks></Feedbacks>
      <LendingForm />

    </div>
  );
}

export default Lending;