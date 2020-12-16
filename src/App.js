import React, {useState} from 'react';
import './App.css';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);

  console.log(data);
  return (
    <div className="main">
      <div className="container">
        <div className='header'>
          <div className="header-text">
            <h1>Several windows stacked on each other</h1>
            <p>The accordion is a graphical control element comprising a vertically stacked list of items, such as labels or thumbnails. </p>
          </div>
        </div>
        <section className='questions-container'>
          <div>
            {questions.map(question => {
              return <Question key={question.id} {...question} />
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
