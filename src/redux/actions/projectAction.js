import axios from "axios";

export const getManagerProject = () => async (dispatch) => {
  try {
    dispatch({ type: "ProjectRequest" });

    const { data } = await axios.get("/api/v1/manager/project/data");
    dispatch({ type: "ProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({ type: "ProjectFail", payload: err.response.data.message });
  }
};
export const getClientProject = () => async (dispatch) => {
  try {
    dispatch({ type: "ProjectRequest" });

    const { data } = await axios.get("/api/v1/client/project/data");
    dispatch({ type: "ProjectSuccess", payload: data.project });
  } catch (err) {
    dispatch({ type: "ProjectFail", payload: err.response.data.message });
  }
};
export const createExpenses = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddExpensesRequest" });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/project/expenses",
      userData,
      config
    );
    dispatch({ type: "AddExpensesSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddExpensesFail", payload: err.response.data.message });
  }
};
export const deleteExpenses = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteExpensesRequest" });

    const { data } = await axios.delete(
      `/api/v1/delete/project/expenses/${id}`
    );
    dispatch({ type: "DeleteExpensesSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteExpensesFail",
      payload: err.response.data.message,
    });
  }
};

export const createDeposit = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "AddDepositRequest" });
    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/v1/project/deposit",
      userData,
      config
    );
    dispatch({ type: "AddDepositSuccess", payload: data });
  } catch (err) {
    dispatch({ type: "AddDepositFail", payload: err.response.data.message });
  }
};
export const deleteDeposit = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DeleteDepositRequest" });

    const { data } = await axios.delete(`/api/v1/delete/project/deposit/${id}`);
    dispatch({ type: "DeleteDepositSuccess", payload: data });
    // console.log(userData);
  } catch (err) {
    dispatch({
      type: "DeleteDepositFail",
      payload: err.response.data.message,
    });
  }
};

//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Success
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};
