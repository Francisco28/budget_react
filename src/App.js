import React, { useState } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';


function App() {


  //define the state - hooks
  const [ budget, saveBudget ] = useState(0); 
  const [ remaining, saveRemaining ] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expenses, saveExpenses] = useState([]);

  
  //when we add an new expense
  const addNewExpense = expense => {
    saveExpenses([
      ...expenses,
      expense
    ]);
  }

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
                    <Form
                      addNewExpense={addNewExpense}
                    />
                  </div>
                  <div className="one-half column">
                    <List 
                      expenses={expenses}
                    />
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
