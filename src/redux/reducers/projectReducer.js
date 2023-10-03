import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  ploading: true,
};

export const projectReducer = createReducer(initialState, {
  ProjectRequest: (state) => {
    state.ploading = true;
  },
  ProjectSuccess: (state, action) => {
    state.ploading = false;
    state.project = action.payload;
  },
  ProjectFail: (state, action) => {
    state.ploading = false;
    state.error = action.payload;
  },

  AddExpensesRequest: (state) => {
    state.ploading = true;
  },
  AddExpensesSuccess: (state, action) => {
    state.ploading = false;
    state.project = action.payload.project;
    state.success = action.payload.message;
  },
  AddExpensesFail: (state, action) => {
    state.ploading = false;
    state.error = action.payload;
  },

  DeleteExpensesRequest: (state) => {
    state.ploading = true;
  },
  DeleteExpensesSuccess: (state, action) => {
    state.ploading = false;
    state.project = action.payload.project;
    state.success = action.payload.message;
  },
  DeleteExpensesFail: (state, action) => {
    state.ploading = false;
    state.error = action.payload;
  },

  AddDepositRequest: (state) => {
    state.ploading = true;
  },
  AddDepositSuccess: (state, action) => {
    state.ploading = false;
    state.project = action.payload.project;
    state.success = action.payload.message;
  },
  AddDepositFail: (state, action) => {
    state.ploading = false;
    state.error = action.payload;
  },

  DeleteDepositRequest: (state) => {
    state.ploading = true;
  },
  DeleteDepositSuccess: (state, action) => {
    state.ploading = false;
    state.project = action.payload.project;
    state.success = action.payload.message;
  },
  DeleteDepositFail: (state, action) => {
    state.ploading = false;
    state.error = action.payload;
  },

  ClearErrors: (state) => {
    state.error = null;
  },
  ClearSuccess: (state) => {
    state.success = null;
  },
});
