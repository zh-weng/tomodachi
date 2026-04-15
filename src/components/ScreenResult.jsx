import { 
  t, personalityResult, score, restartQuiz, lang 
} from '../store/quiz';
import { createSignal, For } from 'solid-js';
import GameSlider from './Shared/GameSlider';

export default function ScreenResult() {
  const result = personalityResult();
  const sliders = score();
  const [showToast, setShowToast] = createSignal(false);
  
  const sliderKeys = ['movement', 'speech', 'expressiveness', 'attitude', 'overall'];

  const copyResult = () => {
    const p = result;
    if (!p) return;
    const pName = lang === 'zh' ? p.typeZh : p.typeEn;
    const fName = lang === 'zh' ? p.factionZh : p.factionEn;
    
    let text = t('copyHeader');
    text += `${t('copyType')}${pName}\n${t('copyCat')}${fName}\n\n`;
    text += t('copySliders');
    
    sliderKeys.forEach(key => {
      const idx = sliders[key]; // Corrected: sliders is an object, not a function
      const label = t(`dims.${key}`);
      const [left, right] = t(`sides.${key}`);
      text += `${label}: ${left} [${'●'.repeat(idx+1)}${'○'.repeat(7-idx)}] ${right} (${idx+1}/8)\n`;
    });
    
    text += `\nhttps://zh-weng.github.io/tomodachi`;
    
    navigator.clipboard.writeText(text).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2200);
    });
  };

  return (
    <div class="screen active" id="screen-result">
      <div style="width:100%;max-width:520px;margin-bottom:8px;">
        <p style="font-size:13px;font-weight:800;color:rgba(0,0,0,0.4);letter-spacing:0.06em;text-transform:uppercase;">
          {t('resultLabel')}
        </p>
      </div>

      <div class="result-card" style="padding: 0; overflow: hidden;">
        <div class={`result-header-panel ${result?.color || 'bg-gray-500'}`} style="padding: 32px 24px; text-align: center; color: #fff;">
          <span class="result-faction-label" style="background: rgba(255,255,255,0.2); padding: 4px 16px; border-radius: 20px; font-size: 13px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;">
             {lang === 'zh' ? result?.factionZh : result?.factionEn}
          </span>
          <h2 style="font-size: 32px; font-weight: 900; margin-top: 12px; line-height: 1.1;">
            {lang === 'zh' ? result?.typeZh : result?.typeEn}
          </h2>
        </div>

        <div style="padding: 24px;">
          <div class="sliders-title">{t('slidersTitle')}</div>
          <div id="slider-rows-game">
            <For each={sliderKeys}>
              {(key) => (
                <GameSlider 
                  label={t(`dims.${key}`)}
                  left={t(`sides.${key}`)[0]}
                  right={t(`sides.${key}`)[1]}
                  value={sliders?.[key] || 0}
                />
              )}
            </For>
          </div>

          <div class="copy-box">
            <div class="copy-box-title">{t('copyBoxTitle')}</div>
            <div class="copy-lines">
              <For each={sliderKeys}>
                {(key) => {
                  const idx = sliders?.[key] || 0; // Corrected: sliders is an object, not a function
                  return (
                    <div class="copy-line">
                      <span class="cl-name">{t(`dims.${key}`)}</span>
                      <span style="display:flex;align-items:center;gap:6px">
                        <div style="display:flex;gap:2px;align-items:center">
                          <For each={Array.from({ length: 8 })}>
                            {(_, i) => {
                              const isActive = i() === idx;
                              const isPast = i() < idx;
                              const bgVar = `var(--slot-${i()})`;
                              return (
                                <div 
                                  class="mini-slot"
                                  style={{
                                    background: bgVar,
                                    opacity: isActive || isPast ? 1 : 0.35,
                                    border: isActive ? '1.5px solid #fff' : '1.5px solid transparent',
                                    'box-shadow': isActive ? `0 0 0 1.5px ${bgVar}` : 'none',
                                    display: 'flex',
                                    'align-items': 'center',
                                    'justify-content': 'center'
                                  }}
                                >
                                  {isActive && <span style="color:#fff;font-size:7px;font-weight:900;">✓</span>}
                                </div>
                              );
                            }}
                          </For>
                        </div>
                        <span class="cl-val">{idx + 1}/8</span>
                      </span>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>

          <div class="result-actions">
            <button class="action-btn again" onClick={restartQuiz}>
              {t('retryBtn')}
            </button>
            <button class="action-btn share" onClick={copyResult}>
              {t('copyBtn')}
            </button>
          </div>
        </div>
      </div>

      <div class={`toast ${showToast() ? 'show' : ''}`}>
        {t('toastMsg')}
      </div>
    </div>
  );
}
