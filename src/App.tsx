// import { Counter } from './components/counter/counter';
// import MuiTheme from './components/mui/muiTheme';ls
import { AppProviders } from './providers/mui-mode';
// import { Skills } from './components/skills/skills'
import './App.css'
import { CounterTwo } from './components/counter-tow/counterTow';
function App() {

  return (
    <AppProviders>
      <div className='app'>
        {/* <MuiTheme /> */}
        <CounterTwo
          count={0}
          handleDecrement={() => {
            console.log('handleDecrement');
          }}
          handleIncrement={() => {
            console.log('handleIncrement');
          }}
        />
      </div>
    </AppProviders>
  );
}

export default App
