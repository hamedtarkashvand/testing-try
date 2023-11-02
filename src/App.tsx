// import { Counter } from './components/counter/counter';
import MuiTheme from './components/mui/muiTheme';
import { AppProviders } from './providers/mui-mode';
// import { Skills } from './components/skills/skills'
import './App.css'
function App() {

  return (
    <AppProviders>
      <div className="app">
      <MuiTheme />
      </div>
    </AppProviders>
  );
}

export default App
