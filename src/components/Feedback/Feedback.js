import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    return (
      <div>
        <Section title={'Leave your feedback'}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
          />
        </Section>
      </div>
    );
  }
}
