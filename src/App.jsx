import './App.css';
import Cart from './pages/Cart.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
