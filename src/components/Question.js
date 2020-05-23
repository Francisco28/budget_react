import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = ({saveBudget, saveRemaining}) => {

    //define the "state"
    const [amount, saveAmount ] = useState(0);
    const [error, saveError] = useState(false);

    //function that read the budget
    const defineBudget = e => {
        saveAmount(parseInt(e.target.value, 10));
    }

    //submit for define budget
    const addBudget = e => {
        e.preventDefault(); //no envie el query en la url y tampoco recargue la pagina
        
        //validate
        if (amount < 1 || isNaN(amount)) { 
            saveError(true);
            return;
        }
        //if pass the validate
        saveError(false);
        saveBudget(amount);
        saveRemaining(amount);
    }

    return ( 
        <Fragment>
            <h2>Put your budget</h2>

            { error ? <Error message="The budget is incorrect" /> : null }

            <form
                onSubmit={ addBudget }
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Put your budget"
                    onChange={ defineBudget }
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                />
            </form>

        </Fragment>
     );
}
 
export default Question;