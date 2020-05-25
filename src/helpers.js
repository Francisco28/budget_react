export const reviewBudget = (budget, remaining) => {
    let _class;

    if( ( budget / 4 ) > remaining ) {
        _class = 'alert alert-danger';
    } else if ( (budget / 2) > remaining ){
        _class = 'alert alert-warning';
    } else {
        _class = 'alert alert-success';
    }

    return _class;
}