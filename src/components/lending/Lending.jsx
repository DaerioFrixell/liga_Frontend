import React from 'react';
import './lending.scss'
import { Header } from '../header/Header';
import { Offer } from './offer/Offer';
import { LendingForm } from './form/LendingForm';
import { Feedbacks } from './feedbacks/Feedbacks';

function Lending() {
  return (
    <>
      <div className='bg'>
        <Header />
        <div className='lending'>
          <Offer />
        </div>
      </div>
      <Feedbacks />
      <LendingForm />
    </>
  );
}

export default Lending;