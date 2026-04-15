import { For } from 'solid-js';

export default function GameSlider(props) {
  const TOTAL = 8;
  // props.value is already 0-7 from store.js
  const slotIdx = () => props.value;

  return (
    <div class="slider-row-game">
      <div class="sr-label">{props.label}</div>
      <div class="slider-container-game">
        <span class="sr-side-label">{props.left}</span>
        <div class="slots-row">
          <For each={Array.from({ length: TOTAL })}>
            {(_, i) => {
              const isActive = i() === slotIdx();
              const isPast = i() < slotIdx();
              const bgVar = `var(--slot-${i()})`;
              
              return (
                <div 
                  class="slot"
                  style={{
                    background: bgVar,
                    opacity: isActive || isPast ? 1 : 0.35,
                    border: isActive ? '2px solid #fff' : '2px solid transparent',
                    'box-shadow': isActive ? `0 0 0 3px ${bgVar}` : 'none'
                  }}
                >
                  {isActive && <div style="display:flex;align-items:center;justify-content:center;height:100%;color:#fff;font-size:16px;font-weight:900;">✓</div>}
                </div>
              );
            }}
          </For>
        </div>
        <span class="sr-side-label right">{props.right}</span>
      </div>
    </div>
  );
}
