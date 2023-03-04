import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Main } from './Components';
import { Grommet, PageHeader, Anchor, Button } from 'grommet';
import { theme } from './utils/theme'

function App() {
  return (
    <Grommet theme={theme} full>
      <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
    </div>
    </Grommet>
    
  );
}

export default App;
