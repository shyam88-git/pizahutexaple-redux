import React from 'react';
import store from './redux/store';
import PizaHut from './components/PizzaHut';
import { Provider } from 'react-redux';

function App() {
  return (
    
      <Provider store={store}>
        
         <PizaHut/>
      </Provider>
    
  )
}

export default App