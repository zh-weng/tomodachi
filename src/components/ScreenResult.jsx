import { t, personalityResult, score, restartQuiz, lang } from '../store/quiz';
import { createSignal, For } from 'solid-js';
import GameSlider, { SLOT_COLORS, ACTIVE_COLOR } from './Shared/GameSlider';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode';

// Map each personality to a fixed Mii resident avatar (1–20)
const AVATAR_MAP = {
  '温柔体贴型': 1,  'Buddy': 1,
  '悠悠哉哉型': 5,  'Softie': 5,
  '天真无邪型': 9,  'Dreamer': 9,
  '笑口常开型': 13, 'Optimist': 13,
  '欢乐快活型': 2,  'Bubbly': 2,
  '热血沸腾型': 6,  'Hot-Blooded': 6,
  '众人焦点型': 10, 'Charmer': 10,
  '勇往直前型': 14, 'Adventurer': 14,
  '谨慎寡言型': 3,  'Introvert': 3,
  '认真勤勉型': 7,  'Thinker': 7,
  '坚忍不拔型': 11, 'Patient': 11,
  '踏实内敛型': 15, 'Perfectionist': 15,
  '独立率直型': 4,  'Individualist': 4,
  '自信果断型': 8,  'Busy Bee': 8,
  '雷厉风行型': 12, 'Achiever': 12,
  '严肃领袖型': 16, 'Leader': 16,
};

const SLIDER_KEYS = ['movement', 'speech', 'expressiveness', 'attitude', 'overall'];

function getMiiAvatar(result) {
  if (!result) return 1;
  const key = lang === 'zh' ? result.typeZh : result.typeEn;
  return AVATAR_MAP[key] || 1;
}

// Mini slot row – uses the same official Nintendo colours as GameSlider
function MiniSlots({ value }) {
  return (
    <div style="display:flex;gap:3px;align-items:center;">
      <For each={SLOT_COLORS}>
        {(color, i) => {
          const isActive = () => i() === value();
          return (
            <div
              class="mini-slot"
              style={{
                background: isActive() ? ACTIVE_COLOR : color,
                border: `1.5px solid ${isActive() ? 'rgba(180,50,0,0.35)' : 'rgba(0,0,0,0.10)'}`,
                'box-shadow': isActive() ? '0 0 0 1.5px rgba(244,98,35,0.3)' : 'none',
                display: 'flex', 'align-items': 'center', 'justify-content': 'center',
              }}
            >
              {isActive() && <span style="color:#fff;font-size:7px;font-weight:900;">✓</span>}
            </div>
          );
        }}
      </For>
    </div>
  );
}

export default function ScreenResult() {
  const result  = () => personalityResult();
  const sl      = () => score();
  const [showToast, setShowToast] = createSignal(false);
  const [toastMsg,  setToastMsg]  = createSignal('');
  const [isSaving,  setIsSaving]  = createSignal(false);

  const toast = (msg) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const copyResult = () => {
    const p = result();
    if (!p) return;
    const pName = lang === 'zh' ? p.typeZh : p.typeEn;
    const fName = lang === 'zh' ? p.factionZh : p.factionEn;
    const scores = sl();
    let text = `【${t('copyHeader')}】\n${t('copyType')}${pName}\n${t('copyCat')}${fName}\n\n`;
    SLIDER_KEYS.forEach(key => {
      const idx = scores[key];
      text += `${t(`dims.${key}`)}: ${t(`sides.${key}`)[0]} [${'●'.repeat(idx + 1)}${'○'.repeat(7 - idx)}] ${t(`sides.${key}`)[1]} (${idx + 1}/8)\n`;
    });
    text += `\nhttps://zh-weng.github.io/tomodachi`;
    navigator.clipboard.writeText(text).then(() => toast(t('toastMsg')));
  };

  // ──────────────────────────────────────────────────
  // Export image: clone live result card in orange 3:4
  // frame; rendered with html-to-image (supports box-shadow)
  // ──────────────────────────────────────────────────
  const saveImage = async () => {
    if (isSaving()) return;
    setIsSaving(true);
    let wrapper = null;

    try {
      const p = result();
      if (!p) return;
      const typeName = lang === 'zh' ? p.typeZh : p.typeEn;

      // 1. QR code (navy on cream)
      const qrDataUrl = await QRCode.toDataURL('https://zh-weng.github.io/tomodachi', {
        width: 160, margin: 1,
        color: { dark: '#003c5a', light: '#fff3cc' },
      });

      // 2. Fetch the real orange background texture as a data URL
      //    so html2canvas renders the same texture as the page body.
      let bgCssValue = 'none';
      try {
        const bgResp = await fetch('./assets/img/common/bg_page_orange.webp');
        const bgBlob = await bgResp.blob();
        const bgDataUrl = await new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(bgBlob);
        });
        bgCssValue = `url('${bgDataUrl}')`;
      } catch { /* fallback: plain colour */ }


      // 3. Clone the live result card
      const cardEl = document.getElementById('result-card');
      if (!cardEl) throw new Error('result-card not found');
      const cardClone = cardEl.cloneNode(true);

      // Remove interactive elements not needed in the export
      cardClone.querySelector('.result-actions')?.remove();
      cardClone.querySelector('.copy-box')?.remove();
      
      // Force non-mobile layout for export regardless of current screen width
      cardClone.classList.add('is-exporting');

      // Ensure card has explicit width, no flex interference
      cardClone.style.width    = '520px';
      cardClone.style.maxWidth = '520px';
      cardClone.style.flex     = 'none';
      cardClone.style.margin   = '0';
      // Strip box-shadow because html2canvas doesn't support it well,
      // and we will dynamically draw a shadow backing element instead.
      cardClone.style.boxShadow = 'none';

      // Create a manual DOM element that acts as the hard bottom shadow.
      // html2canvas renders physical divs perfectly.
      const cardWrap = document.createElement('div');
      cardWrap.style.position = 'relative';
      cardWrap.style.width = '520px';

      const shadowDiv = document.createElement('div');
      shadowDiv.style.position = 'absolute';
      shadowDiv.style.top = '10px';  // Y-offset of the hard shadow
      shadowDiv.style.left = '0';
      shadowDiv.style.width = '100%';
      shadowDiv.style.height = '100%';
      shadowDiv.style.backgroundColor = 'rgba(160, 60, 0, 0.45)';
      shadowDiv.style.borderRadius = '24px';
      
      cardClone.style.position = 'relative'; // force relative so it sits on top
      cardClone.style.zIndex = '1';

      cardWrap.appendChild(shadowDiv);
      cardWrap.appendChild(cardClone);

      // 4. Append QR + URL footer into the card body
      const resultBody = cardClone.querySelector('.result-body');
      if (resultBody) {
        const qrFooter = document.createElement('div');
        qrFooter.innerHTML = `
          <div style="border-top:1.5px solid rgba(0,60,90,0.12);margin:14px 0 0;"></div>
          <div style="display:flex;align-items:center;gap:14px;padding-top:14px;">
            <img src="${qrDataUrl}"
                 style="width:62px;height:62px;border-radius:8px;flex-shrink:0;
                        border:1.5px solid rgba(0,60,90,0.12);"/>
            <div>
              <div style="font-size:13px;font-weight:700;color:rgba(0,60,90,0.5);margin-bottom:4px;">
                ${lang === 'zh' ? '来试试你的 Mii 性格类型' : 'Find your Mii personality type'}
              </div>
              <div style="font-size:16px;font-weight:900;color:#003c5a;">
                zh-weng.github.io/tomodachi
              </div>
            </div>
          </div>`;
        resultBody.appendChild(qrFooter);

        // Add bottom padding to body so QR isn't clipped
        resultBody.style.paddingBottom = '20px';
      }

      // 5. 3:4 orange wrapper — position:fixed + top offset works better with html-to-image
      wrapper = document.createElement('div');
      wrapper.style.cssText = `
        position: absolute; left: -9999px; top: 0;
        width: 600px; height: 800px;
        background-color: #ff8c35;
        background-image: ${bgCssValue};
        background-size: 320px auto;
        background-repeat: repeat;
        display: flex; align-items: center; justify-content: center;
        box-sizing: border-box;
      `;
      wrapper.appendChild(cardWrap); // Append the shadow wrap instead of just the clone
      document.body.appendChild(wrapper);

      // Wait for fonts / images to settle
      await new Promise(r => setTimeout(r, 500));

      // 6. Capture with html2canvas. Extremely stable across all browsers.
      const canvas = await html2canvas(wrapper, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ff8c35',
        logging: false,
        width: 600,
        height: 800,
      });

      document.body.removeChild(wrapper);
      wrapper = null;

      // 7. Export (Web Share on mobile, download on desktop)
      const blob = await new Promise(r => canvas.toBlob(r, 'image/png'));
      const file = new File([blob], `tomodachi_${typeName}.png`, { type: 'image/png' });

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: 'Tomodachi Life 性格测试', text: `我的 Mii 性格是：${typeName}` });
      } else {
        const url = URL.createObjectURL(blob);
        const a   = document.createElement('a');
        a.href = url; a.download = file.name; a.click();
        URL.revokeObjectURL(url);
        toast(lang === 'zh' ? '图片已保存！' : 'Image saved!');
      }
    } catch (err) {
      console.error(err);
      if (wrapper && wrapper.parentNode) document.body.removeChild(wrapper);
      toast(lang === 'zh' ? '保存失败，请截图 🙏' : 'Save failed, screenshot instead');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div class="screen active" id="screen-result">
      <div class="result-label-row">
        <p>{t('resultLabel')}</p>
      </div>

      {/* This card is cloned for the export, so every visual change here is
          automatically reflected in the saved image */}
      <div class="result-card" id="result-card">
        {/* Faction-coloured header */}
        <div class={`result-header-panel ${result()?.color || 'bg-blue-500'}`}>
          <img
            class="result-mii-avatar"
            src={`./assets/img/top/slide_residents_${getMiiAvatar(result())}.webp`}
            alt="Your Mii"
            crossorigin="anonymous"
          />
          <div class="result-faction-label">
            {lang === 'zh' ? result()?.factionZh : result()?.factionEn}
          </div>
          <div class="result-type-name">
            {lang === 'zh' ? result()?.typeZh : result()?.typeEn}
          </div>
        </div>

        {/* Sliders */}
        <div class="result-body">
          <div class="sliders-title">{t('slidersTitle')}</div>
          <For each={SLIDER_KEYS}>
            {(key) => (
              <GameSlider
                label={t(`dims.${key}`)}
                left={t(`sides.${key}`)[0]}
                right={t(`sides.${key}`)[1]}
                value={sl()?.[key] || 0}
              />
            )}
          </For>

          {/* Compact copy summary */}
          <div class="copy-box">
            <div class="copy-box-title">{t('copyBoxTitle')}</div>
            <div class="copy-lines">
              <For each={SLIDER_KEYS}>
                {(key) => {
                  const idx = () => sl()?.[key] || 0;
                  return (
                    <div class="copy-line">
                      <span class="cl-name">{t(`dims.${key}`)}</span>
                      <span style="display:flex;align-items:center;gap:8px;">
                        <MiniSlots value={idx} />
                        <span class="cl-val">{() => idx() + 1}/8</span>
                      </span>
                    </div>
                  );
                }}
              </For>
            </div>
          </div>

          {/* Buttons */}
          <div class="result-actions">
            <button class="action-btn again"    onClick={restartQuiz}>{t('retryBtn')}</button>
            <button class="action-btn share"    onClick={copyResult}>{t('copyBtn')}</button>
            <button class="action-btn save-img" onClick={saveImage} disabled={isSaving()}>
              {isSaving() ? (lang === 'zh' ? '生成中…' : 'Saving…') : (lang === 'zh' ? '📷 保存图片' : '📷 Save Image')}
            </button>
          </div>
        </div>
      </div>

      <div class={`toast ${showToast() ? 'show' : ''}`}>{toastMsg()}</div>
    </div>
  );
}
