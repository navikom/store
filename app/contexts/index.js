import React from 'react';

export const MainContext = React.createContext();

export const withMainContext = Component => {
  return props => (
    <MainContext.Consumer>
      {
        state => <Component {...props} context={state}/>
      }
    </MainContext.Consumer>
  )
};
