import { t, startQuiz, lang } from '../store/quiz';

export default function ScreenTitle() {
  const categories = ['considerate', 'outgoing', 'reserved', 'ambitious'];
  
  const personalityNames = {
    considerate: lang === 'zh'
      ? ['温柔体贴型', '悠悠哉哉型', '天真无邪型', '笑口常开型']
      : ['Buddy', 'Softie', 'Dreamer', 'Optimist'],
    outgoing: lang === 'zh'
      ? ['欢乐快活型', '热血沸腾型', '众人焦点型', '勇往直前型']
      : ['Bubbly', 'Hot-Blooded', 'Charmer', 'Adventurer'],
    reserved: lang === 'zh'
      ? ['谨慎寡言型', '认真勤勉型', '坚忍不拔型', '踏实内敛型']
      : ['Introvert', 'Thinker', 'Patient', 'Perfectionist'],
    ambitious: lang === 'zh'
      ? ['独立率直型', '自信果断型', '雷厉风行型', '严肃领袖型']
      : ['Individualist', 'Busy Bee', 'Achiever', 'Leader']
  };

  return (
    <div class="screen active" id="screen-title">
      <div class="mii-row">
        <div class="mii-bubble" style="background:#FFB3C6">🧑</div>
        <div class="mii-bubble" style="background:#B3D9FF">👦</div>
        <div class="mii-bubble" style="background:#B3FFD1">👩</div>
        <div class="mii-bubble" style="background:#FFE0B3">🧒</div>
      </div>

      <div class="title-logo">
        <p class="game-title">Tomodachi Life</p>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </div>

      <div class="personality-grid-preview">
        {categories.map(cat => (
          <div class={`pg-quad q-${cat}`}>
            <span class="quad-title">{t(`cats.${cat}`)}</span>
            <div class="quad-names">
              {personalityNames[cat].map(name => (
                <span class="qname">{name}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button class="start-btn" onClick={startQuiz}>
        {t('startBtn')}
      </button>
    </div>
  );
}
