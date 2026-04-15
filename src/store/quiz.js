import { createSignal, createMemo } from 'solid-js';
import { QUESTIONS_DATA, PERSONALITY_MATRIX, STRINGS } from '../data/constants';

// Detect language
const userLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
const isCN = userLang.startsWith('zh');
export const lang = isCN ? 'zh' : 'en';

export const t = (key) => {
  const keys = key.split('.');
  let value = STRINGS[lang];
  for (const k of keys) {
    if (value[k] === undefined) return key;
    value = value[k];
  }
  return value;
};

// State signals
export const [currentScreen, setCurrentScreen] = createSignal('title'); // 'title', 'quiz', 'result'
export const [currentQuestionIndex, setCurrentQuestionIndex] = createSignal(0);
export const [answers, setAnswers] = createSignal({}); // { questionId: score }
export const [shuffledQuestions, setShuffledQuestions] = createSignal([]);

// Derived state
export const currentQuestion = createMemo(() => shuffledQuestions()[currentQuestionIndex()]);
export const isLastQuestion = createMemo(() => currentQuestionIndex() === shuffledQuestions().length - 1);

// Normalize 0-12 to 0-7 (8 slots)
function normalizeTo7(rawScore12) {
  return Math.round((rawScore12 / 12) * 7);
}

// Special weight jump (skip 4)
function applyWeight(score7) {
  const mapping = [0, 1, 2, 3, 5, 6, 7, 8];
  return mapping[score7];
}

export const score = createMemo(() => {
  const a = answers();
  if (Object.keys(a).length < shuffledQuestions().length) return null;
  
  // Sum up scores per dimension
  const totals = {
    movement: 0,
    speech: 0,
    expressiveness: 0,
    attitude: 0,
    overall: 0
  };
  
  shuffledQuestions().forEach(q => {
    totals[q.dimension] += a[q.id] || 0;
  });

  // Calculate slider positions (0-7 indexing for 8 visible slots)
  return {
    movement: normalizeTo7(totals.movement),
    speech: normalizeTo7(totals.speech),
    expressiveness: normalizeTo7(totals.expressiveness),
    attitude: normalizeTo7(totals.attitude),
    overall: normalizeTo7(totals.overall)
  };
});

export const personalityResult = createMemo(() => {
  const sliders = score();
  if (!sliders) return null;

  // Coordinate system for 16-type matrix
  // x: movement + weighted speech
  // y: expressiveness + weighted attitude
  const x = sliders.movement + applyWeight(sliders.speech);
  const y = sliders.expressiveness + applyWeight(sliders.attitude);

  const col = Math.floor(x / 4);
  const row = Math.floor(y / 4);

  // Bounds check just in case
  const safeCol = Math.min(Math.max(col, 0), 3);
  const safeRow = Math.min(Math.max(row, 0), 3);

  return PERSONALITY_MATRIX[safeRow][safeCol];
});

// Actions
function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function startQuiz() {
  setAnswers({});
  setShuffledQuestions(shuffle(QUESTIONS_DATA));
  setCurrentQuestionIndex(0);
  setCurrentScreen('quiz');
}

export function selectAnswer(questionId, value) {
  const current = answers();
  if (current[questionId] === value) {
    const next = { ...current };
    delete next[questionId];
    setAnswers(next);
    return false; // Toggled off
  }
  setAnswers({ ...current, [questionId]: value });
  return true; // Selected
}

export function nextQuestion() {
  if (isLastQuestion()) {
    setCurrentScreen('result');
  } else {
    setCurrentQuestionIndex(currentQuestionIndex() + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function prevQuestion() {
  if (currentQuestionIndex() > 0) {
    setCurrentQuestionIndex(currentQuestionIndex() - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

export function restartQuiz() {
  setAnswers({});
  setCurrentQuestionIndex(0);
  setCurrentScreen('title');
}
