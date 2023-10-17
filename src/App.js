
import './App.scss';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
import React,{useState} from 'react'
function App() {
  const [height, setHeight] = useState(window.innerHeight);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
    });
  }, []);
  console.log(height)
  return (
    <div className="App" style={{ height }}>
        <Sidebar/>
        <Dashboard/>
     
    </div>
  );
}

export default App;
