import './App.css';
import './useState/stateHooks'
import StateTutorial from './useState/stateHooks';
import UseReducerDemo from './useReducer/useReducerDemo';
import UseEffectEDemo from './useEffect/UseEffectDemo';
import UseRefDemo from './useRefHooks/UseRefDemo';
import ContextDemo from './useContext/ContextDemo';
import UseMemoDemo from './useMemo/UseMemoDemo';

function App() {
  return (
    <div className="App">
      <StateTutorial/>
      <UseReducerDemo/>
      <hr/>
      <UseEffectEDemo/>
      <hr/>
      <UseRefDemo />
      <hr />
      <ContextDemo />
      <hr/>
      <UseMemoDemo/>
    </div>
  );
}

export default App;
