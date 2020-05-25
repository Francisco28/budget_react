import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import ControlBudget from './components/ControlBudget';


function App() {


  //define the state - hooks
  const [ budget, saveBudget ] = useState(0); 
  const [ remaining, saveRemaining ] = useState(0);
  const [ showQuestion, updateQuestion ] = useState(true);
  const [ expenses, saveExpenses] = useState([]);
  const [ expense, saveExpense] = useState({});
  const [ createExpense, saveCreateExpense ] = useState(false);


  //useEffect that update the remaining
  useEffect(() => {
    if (createExpense) {
          
          //add the new budget
          saveExpenses([
            ...expenses,
            expense
          ]);

          //rest of the current bduget 
          const budgetRemaining = remaining - expense.amount;
          saveRemaining(budgetRemaining);

          
          //reset hook to false
          saveCreateExpense(false);
    }
  }, [expense, createExpense, expenses, remaining]);
  

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
                        saveExpense={saveExpense}
                        saveCreateExpense={saveCreateExpense}
                      />
                  </div>
                  <div className="one-half column">
                      <List 
                        expenses={expenses}
                      />
                      <ControlBudget 
                        budget={budget}
                        remaining={remaining}
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
