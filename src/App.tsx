import { useContext } from 'react';
import Main from './container/main';
import { AuthContext } from './context/AuthContext';
import LogIn from './pages/LogIn/LogIn';
function App() {
  const user = useContext(AuthContext);
  return (
    <div className="">
      {user?
      <Main />:
      <LogIn />}
    </div>
  );
}

export default App;
