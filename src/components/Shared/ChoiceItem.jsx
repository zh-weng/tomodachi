import { selectAnswer, answers } from '../../store/quiz';

export default function ChoiceItem(props) {
  const isSelected = () => answers()[props.questionId] === props.value;

  const handleClick = () => {
    selectAnswer(props.questionId, props.value);
  };

  return (
    <div
      class={`choice-item ${isSelected() ? 'selected' : ''}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div class="check-icon">{isSelected() ? '✓' : ''}</div>
      <span>{props.text}</span>
    </div>
  );
}
