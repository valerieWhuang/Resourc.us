import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
export const UserContext = createContext();

// Wrap our app and provide the Data Layer to every component on our app
/* eslint react/prop-types: 0 */
export const StateProvider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

const useUserContext = () => {
  const contextValues = useContext(UserContext);
  if (!contextValues) {
    throw new Error('useUserContext must be used within UserContextProvider!');
  }
  return contextValues;
};

// Pull information from the data layer
export const useStateValue = () => useContext(UserContext);

export { useUserContext };
