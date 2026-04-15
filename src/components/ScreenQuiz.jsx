import { t, shuffledQuestions, lang, currentQuestion, currentQuestionIndex, answers, nextQuestion, prevQuestion, isLastQuestion } from '../store/quiz';
import { For } from 'solid-js';
import ChoiceItem from './Shared/ChoiceItem';

export default function ScreenQuiz() {
  const progressPercent = () => (Object.keys(answers()).length / (shuffledQuestions().length || 1)) * 100;
  const currentNum = () => currentQuestionIndex() + 1;
  const totalNum = () => shuffledQuestions().length;

  return (
    <div class="screen active" id="screen-quiz">
      <div class="quiz-header">
        <div class="progress-container">
          <div class="progress-text">{currentNum()} / {totalNum()}</div>
          <div class="progress-bar-wrap">
            <div class="progress-bar-fill" style={{ width: `${progressPercent()}%` }}></div>
          </div>
        </div>
      </div>

      <div class="question-card">
        <p class="q-text">{lang === 'zh' ? currentQuestion().questionZh : currentQuestion().questionEn}</p>
        <div class="choices-list">
          <For each={currentQuestion().options}>
            {(option) => (
              <ChoiceItem 
                text={lang === 'zh' ? option.textZh : option.textEn}
                value={option.score}
                questionId={currentQuestion().id}
              />
            )}
          </For>
        </div>
      </div>

      <div class="quiz-nav">
        <button 
          class="nav-btn back" 
          style={{ visibility: currentQuestionIndex() === 0 ? 'hidden' : 'visible' }}
          onClick={prevQuestion}
        >
          {t('backBtn')}
        </button>
        <button 
          class="nav-btn forward"
          disabled={answers()[currentQuestion().id] === undefined}
          onClick={nextQuestion}
        >
          {isLastQuestion() ? t('resultBtn') : t('nextBtn')}
        </button>
      </div>
    </div>
  );
}
