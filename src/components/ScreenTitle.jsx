import { t, startQuiz, lang } from '../store/quiz';

// Shuffle a copy of [1..20] and take the first `count` — truly random every load
function pickRandomMiiIds(count, total = 20) {
  const arr = Array.from({ length: total }, (_, i) => i + 1);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

const residentIds = pickRandomMiiIds(5);

const categories = ['considerate', 'outgoing', 'reserved', 'ambitious'];

const personalityNames = {
  zh: {
    considerate: ['温柔体贴型', '悠悠哉哉型', '天真无邪型', '笑口常开型'],
    outgoing:    ['欢乐快活型', '热血沸腾型', '众人焦点型', '勇往直前型'],
    reserved:    ['谨慎寡言型', '认真勤勉型', '坚忍不拔型', '踏实内敛型'],
    ambitious:   ['独立率直型', '自信果断型', '雷厉风行型', '严肃领袖型'],
  },
  en: {
    considerate: ['Buddy', 'Softie', 'Dreamer', 'Optimist'],
    outgoing:    ['Bubbly', 'Hot-Blooded', 'Charmer', 'Adventurer'],
    reserved:    ['Introvert', 'Thinker', 'Patient', 'Perfectionist'],
    ambitious:   ['Individualist', 'Busy Bee', 'Achiever', 'Leader'],
  }
};

export default function ScreenTitle() {
  return (
    <div class="screen active" id="screen-title">
      {/* 5 random Mii resident avatars — new selection on every page load */}
      <div class="mii-row">
        {residentIds.map((id, i) => (
          <div class="mii-bubble" style={{ 'animation-delay': `${i * 0.35}s` }}>
            <img
              src={`./assets/img/top/slide_residents_${id}.webp`}
              alt={`Mii ${id}`}
            />
          </div>
        ))}
      </div>

      {/* Title card */}
      <div class="title-card">
        <p class="game-title">Tomodachi Life · 性格测试</p>
        <h1>{t('title')}</h1>
        <p>{t('subtitle')}</p>
      </div>

      {/* 4-faction preview grid */}
      <div class="personality-grid-preview">
        {categories.map(cat => {
          const names = (personalityNames[lang] || personalityNames.zh)[cat];
          return (
            <div class={`pg-quad q-${cat}`}>
              <span class="quad-title">{t(`cats.${cat}`)}</span>
              <div class="quad-names">
                {names.map(name => <span class="qname">{name}</span>)}
              </div>
            </div>
          );
        })}
      </div>

      <button class="start-btn" onClick={startQuiz}>
        {t('startBtn')}
      </button>
    </div>
  );
}
