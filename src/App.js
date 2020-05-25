import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';

function App() {


  //define the state - hooks
  const [ budget, saveBudget ] = useState(0); 
  const [ remaining, saveRemaining ] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);

  return (
    <div className="container">
        <header>
          <h1>Weekly expense</h1>
          
          <div className="content-main content">
            { showQuestion ? 
              ( 
                <Question
                    saveBudget={saveBudget}
                    saveRemaining={saveRemaining}
                    updateQuestion={updateQuestion}
                />
              ) : 
              (
                <div className="row">
                  <div className="one-half column">
                    <Form />
                  </div>
                  <div className="one-half column">
                    2
                  </div>
                </div>
              )  
            }

          </div>
        </header>
    </div>
  );
}

export default App;
