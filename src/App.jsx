import React, { useState } from "react";
import Lending from './components/lending/Lending';
import './app.scss'

function App() {
  const feedbacks = [
    {
      id: 1,
      author: 'Daerio Frixell',
      description: 'очень хорошо давай еще',
    },
    {
      id: 2,
      author: 'Niggaдяй',
      description: 'отправил обезьяну, а она научилась!',
    },
    {
      id: 3,
      author: 'папич лягуха',
      description: 'третий отзыв',
    },
    {
      id: 4,
      author: 'какой-то поц',
      description: 'хоба епта отзыв',
    },
    {
      id: 5,
      author: 'anonimus',
      description: 'ну и последний тож',
    },
  ]
  const [arrNum, setArrNum] = useState(0)
  const [feedState, setFeedState] = useState(feedbacks[arrNum])

  return (
    <section className="app">
      <Lending
        feedbacks={feedbacks}
        feedState={feedState}
        setFeedState={setFeedState}
        arrNum={arrNum}
        setArrNum={setArrNum} />
    </section>
  );
}

export default App;
