import './App.css';
import { useSelector } from 'react-redux';
import LoginForm from './components/LoginForm';
import Header from './components/Header';

function App() {

  const { user } = useSelector(state => state.login)

  return (
    <div className="App">
      {user ? <Header /> : <LoginForm />}
    </div>
  );
}

export default App;
