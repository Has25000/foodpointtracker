import { Question, QuestionOption } from '../types';

interface QuestionSliderProps {
  question: Question;
  value: number;
  onChange: (option: QuestionOption) => void;
}

export const QuestionSlider = ({ question, value, onChange }: QuestionSliderProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    onChange(question.options[newValue]);
  };

  const currentOption = question.options[value];

  return (
    <div className="question-slider">
      <h3 className="question-text">{question.question}</h3>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max={question.options.length - 1}
          value={value}
          onChange={handleChange}
          className="slider"
        />
        <div className="slider-labels">
          {question.options.map((option, index) => (
            <span
              key={index}
              className={`slider-label ${index === value ? 'active' : ''}`}
            >
              {option.label}
            </span>
          ))}
        </div>
      </div>
      <div className="current-selection">
        Selected: <strong>{currentOption.label}</strong>
      </div>
    </div>
  );
};
