import { List } from './Feedback.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, bad, neutral }) => {
  return !(good + bad + neutral) > 0 ? (
    'There are no feedback'
  ) : (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {bad + neutral + good}</li>
      <li>
        Positive feedback:{' '}
        {!(bad + neutral + good)
          ? 0
          : ((good / (bad + neutral + good)) * 100).toFixed(2)}
        %
      </li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
