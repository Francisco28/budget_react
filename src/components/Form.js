import React, { useState } from 'react';

const Form = () => {

    //states - Hooks
    const [name, saveName] = useState('');
    const [amount, saveAmount] = useState(0);

    
    //when the user add an expense
    const addExpense = e => {
        e.preventDefault();
        
        //validate

        //build an expense

        //pass the expense to main component

        //reset the form
    }
    

    return ( 
        <form
            onSubmit={addExpense}
        >
            <h2>Add your expenses here</h2>

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