import React from 'react';
import './lending.scss'
import FirstBlock from './firstBlock/FirstBlock';
import SecondBlock from './secondBlock/SecondBlock';
import ThirdBlock from './thirdBlock/ThirdBlock';

function Lending() {
  return (
    <div className='lending'>
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
  );
}

export default Lending;