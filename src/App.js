import { Provider } from 'react-redux';
import './App.css';
import Login from './components/login-register/Login';
import store from './redux/store'
import LoginService from './services/loginService';


function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Login/>
      <LoginService/>
    </div>
    </Provider>
  );
}

export default App;
