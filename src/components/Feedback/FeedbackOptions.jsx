import { BtnList } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <BtnList>
      <li>
        <button onClick={onLeaveFeedback} name="good">
          Good
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} name="neutral">
          Neutral
        </button>
      </li>
      <li>
        <button onClick={onLeaveFeedback} name="bad">
          Bad
        </button>
      </li>
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
