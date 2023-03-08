import { BtnList } from './Feedback.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BtnList>
      {options.map((option, ind = 1) => {
        return (
          <li key={ind + 1}>
            <button onClick={onLeaveFeedback} name={option}>
              {option}
            </button>
          </li>
        );
      })}
    </BtnList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
