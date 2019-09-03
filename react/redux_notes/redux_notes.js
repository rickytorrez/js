// redux notes on codepen

console.clear();

// people dropping off a form (action creator)
const createPolicy = (name, amount) => {
  return { // a form in our analogy (action)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    }
  };
};

// people dropping off a form (action creator)
const deletePolicy = (name) => {
  return { // a form in our analogy (action)
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  };
};

// people dropping off a form (action creator)
const createClaim = (name, amountOfMoneyToCollect) =>{
  return { // a form in our analogy (action)
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amountOfMoneyToCollect: amountOfMoneyToCollect 
    }
  };
};


// departments (reducers)
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // we care about this action (FORM)
    return [...oldListOfClaims, action.payload];
  }
  // else, we dont care about the action (form)
  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if(action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === 'CREATE_POLICY'){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if(action.type === 'CREATE_POLICY'){
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === 'DELETE_POLICY'){
    return listOfPolicies.filter(name => name !== action.payload.name);
  }
  return listOfPolicies;
};

// redux setup
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers ({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

// form receiver (dispatch)
store.dispatch(createPolicy('alex', 20));
store.dispatch(createPolicy('bob', 210));
store.dispatch(createPolicy('jim', 90));
store.dispatch(createPolicy('jill', 30));

store.dispatch(createClaim('alex', 100));
store.dispatch(createClaim('jim', 20));

store.dispatch(deletePolicy('bob'));

console.log(store.getState());