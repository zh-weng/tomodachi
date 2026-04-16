import { Switch, Match } from 'solid-js';
import { currentScreen } from './store/quiz';
import ScreenTitle from './components/ScreenTitle';
import ScreenQuiz from './components/ScreenQuiz';
import ScreenResult from './components/ScreenResult';

function App() {
  return (
    <div class="page-wrapper">
      {/*
        SVG defs used for cream-texture wave clipping.
        clipPathUnits="objectBoundingBox" → path coordinates 0-1 → scales to any element width.
        The paths are the wave shapes converted to normalised coordinates.
      */}
      <svg width="0" height="0" style="position:absolute;overflow:visible" aria-hidden="true">
        <defs>
          {/* Top wave: viewBox 1440×44 → normalised x/1440, y/44 */}
          <clipPath id="wave-top-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L1,0 L1,0.5909 C0.8333,0.9545 0.6667,0.3182 0.5,0.6818 C0.3333,1 0.1667,0.4091 0,0.7727 Z" />
          </clipPath>
          {/* Bottom wave: viewBox 1440×56 → normalised */}
          <clipPath id="wave-bottom-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.6071 C0.1667,0.25 0.3333,0.8929 0.5,0.4643 C0.6667,0.1071 0.8333,0.6429 1,0.3571 L1,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Top cream-textured wave (shape via objectBoundingBox clip) */}
      <div class="top-wave" aria-hidden="true" />

      {/* Page content */}
      <div class="page-content">
        <Switch>
          <Match when={currentScreen() === 'title'}><ScreenTitle /></Match>
          <Match when={currentScreen() === 'quiz'}><ScreenQuiz /></Match>
          <Match when={currentScreen() === 'result'}><ScreenResult /></Match>
        </Switch>
      </div>

      {/* Bottom cream-textured wave */}
      <div class="bottom-wave" aria-hidden="true" />
    </div>
  );
}

export default App;
