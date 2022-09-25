import React from 'react';
import './lending.scss'
import { Header } from '../header/Header';
import { Offer } from './offer/Offer';
import { LendingForm } from './form/LendingForm';
import { Feedbacks } from './feedbacks/Feedbacks';
import { Price } from './price/Price';
import { AvailableTime } from './availableTime/AvailableTime';

function Lending({
  feedbacks,
  feedState,
  setFeedState,
  arrNum,
  setArrNum
}) {
  return (
    <>
      <Header />
      <div className='bg'>
        <Offer />
      </div>
      <Feedbacks
        feedbacks={feedbacks}
        feedState={feedState}
        setFeedState={setFeedState}
        arrNum={arrNum}
        setArrNum={setArrNum} />
      <Price />
      <AvailableTime />
      <LendingForm />
    </>
  );
}

export default Lending;