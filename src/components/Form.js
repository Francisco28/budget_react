import React, { useState } from 'react';
import Error from './Error';
import showid from 'shortid';
import shortid from 'shortid';

const Form = () => {

    //states - Hooks
    const [name, saveName] = useState('');
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false);
    
    //when the user add an expense
    const addExpense = e => {
        e.preventDefault();
        
        //validate
        if (amount < 1 || isNaN(amount) || name.trim() === '') {
            saveError(true);
            return;
        }
        saveError(false);

        
        //build an expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }
        console.log(expense);
        //pass the expense to main component

        //reset the form
    }
    

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

            { error ? <Error message="Both fields are obligatory or the budget is incorrect" /> 
                    : null 
            }

            <div className="campo">
                <label>Name expense</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ex. Transport"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Amount expense</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ex. 300"
                    value={amount}
                    onChange={e => saveAmount(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Add budget"
            />

        </form>
     );
}
 
export default Form;