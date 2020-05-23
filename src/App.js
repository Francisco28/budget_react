import React, { useState } from 'react';
import Question from './components/Question';

function App() {


  //define the state - hooks
  const [ budget, saveBudget ] = useState(0); 
  const [ remaining, saveRemaining ] = useState(0);

  return (
    <div className="container">
        <header>
          <h1>Weekly expense</h1>
          
          <div className="content-main content">
              <Question
                  saveBudget={saveBudget}
                  saveRemaining={saveRemaining}
              />
          </div>
        </header>
    </div>
  );
}

export default App;
