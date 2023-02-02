import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {user ? <Header user={user} /> : <LoginForm setUser={setUser} />}
    </div>
  );
}

export default App;
