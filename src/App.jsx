import { Switch, Match } from 'solid-js';
import { currentScreen } from './store/quiz';
import ScreenTitle from './components/ScreenTitle';
import ScreenQuiz from './components/ScreenQuiz';
import ScreenResult from './components/ScreenResult';

function App() {
  return (
    <>
      <div class="ground"></div>
      
      <Switch>
        <Match when={currentScreen() === 'title'}>
          <ScreenTitle />
        </Match>
        <Match when={currentScreen() === 'quiz'}>
          <ScreenQuiz />
        </Match>
        <Match when={currentScreen() === 'result'}>
          <ScreenResult />
        </Match>
      </Switch>
    </>
  );
}

export default App;
