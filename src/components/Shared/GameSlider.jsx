import { For } from 'solid-js';

// Official Nintendo Tomodachi Life slider colours (8 positions, left → right)
const SLOT_COLORS = [
  'rgb(119,207,246)', // 0 – sky blue
  'rgb(141,224,165)', // 1 – light green
  'rgb(172,231,187)', // 2 – mint green
  'rgb(194,233,203)', // 3 – pale mint
  'rgb(249,205,156)', // 4 – light peach
  'rgb(248,191,121)', // 5 – peach
  'rgb(246,177,94)',  // 6 – amber
  'rgb(247,165,67)',  // 7 – orange
];
const ACTIVE_COLOR = 'rgb(244,98,35)';

export default function GameSlider(props) {
  const slotIdx = () => props.value;

  return (
    <div class="slider-row-game">
      <div class="sr-label">{props.label}</div>
      <div class="slider-container-game">
        <div class="slider-scale-box">
          <div class="slots-row">
            <For each={SLOT_COLORS}>
              {(color, i) => {
                const isActive = () => i() === slotIdx();
                return (
                  <div
                    class="slot"
                    data-active={isActive()}
                    style={{
                      background:   isActive() ? ACTIVE_COLOR : color,
                      width:        isActive() ? '40px' : '32px',
                      height:       isActive() ? '32px' : '26px',
                      border:       isActive()
                                      ? '2px solid rgba(180,50,0,0.35)'
                                      : '1.5px solid rgba(0,0,0,0.10)',
                      'box-shadow': isActive() ? '0 0 0 3px rgba(244,98,35,0.25)' : 'none',
                    }}
                  >
                    {isActive() && (
                      <span style="color:#fff;font-size:15px;font-weight:900;line-height:1;">✓</span>
                    )}
                  </div>
                );
              }}
            </For>
          </div>
          
          <div class="sr-labels-row">
            <span class="sr-side-label">{props.left}</span>
            <span class="sr-side-label right">{props.right}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SLOT_COLORS, ACTIVE_COLOR };
