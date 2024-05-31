import * as React from 'react';
import { Provider } from 'react-redux';
import store from './redux/generalConfig';

interface BusinessLogicProviderProps {
  children: React.ReactNode;
}

const BusinessLogicProvider: React.FC<BusinessLogicProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default BusinessLogicProvider;
