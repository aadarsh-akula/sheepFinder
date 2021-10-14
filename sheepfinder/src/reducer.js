const initialState = {
  isWaiting: false,
  authenticated: false,
  jwt: "",
  user: {},
  email: "",
  categories: [],
  currentBudget: {},
  budgets: [],
  notification: {},
  expenses: [],
  oneTimeExpenses: [],
  recurringExpenses: [],
};

function reducer(state = initialState, action) {}

export default reducer;
