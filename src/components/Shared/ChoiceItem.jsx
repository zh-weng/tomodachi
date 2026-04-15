import { selectAnswer, nextQuestion, answers, lang } from '../../store/quiz';

export default function ChoiceItem(props) {
  const isSelected = () => answers()[props.questionId] === props.value;

  const handleClick = () => {
    selectAnswer(props.questionId, props.value);
  };

  return (
    <div 
      class={`choice-item ${isSelected() ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <div class="check-icon">{isSelected() ? '✓' : ''}</div>
      <span>{props.text}</span>
    </div>
  );
}
