import './App.css';
import Carlist from './components/Carlist';
import { AppBar, Typography, Toolbar } from '@mui/material';
import Addcar from './components/Addcar';
import Editcar from './components/Editcar';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            CarShop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
      
      </div>
  );
}

export default App;
