import React, { Component } from 'react';
import { Statistics } from '../Statistics';
import { FeedbackOptions } from './FeedbackStyled/FeedbackOptions';
import { Section } from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (good, bad, neutral) => {
    return bad + neutral + good;
  };

  countPositiveFeedbackPercentage = (good, bad, neutral) => {
    return ((good / (bad + neutral + good)) * 100).toFixed(2);
  };

  onLeaveFeedback = evt => {
    const currentTarget = evt.currentTarget;
    const currentName = currentTarget.name;
    this.setState(prevState => {
      return {
        [currentTarget.name]: (prevState[currentName] += 1),
      };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section title={'Leave your feedback'}>
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback(good, bad, neutral)}
            positivePercentage={this.countPositiveFeedbackPercentage(
              good,
              bad,
              neutral
            )}
          />
        </Section>
      </div>
    );
  }
}
