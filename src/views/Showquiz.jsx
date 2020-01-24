import React from 'react';
import { withRouter } from 'react-router-dom';

class Showquiz extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      quizname: '',
      filterqns: [],
      marks: 0
    };
  }

  handleQuestions = () => {
    this.setState({ quizname: this.props.match.params.quizname });
    fetch('http://localhost:3001/api/v1/questions')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          data.questions.map(question =>
            question.quizset == this.state.quizname
              ? this.setState({
                  filterqns: this.state.filterqns.concat(question)
                })
              : ''
          );
        }
      });
  };
  componentDidMount() {
    this.handleQuestions();
  }

  handleAns = (_id, ans) => {
    this.setState({ show: true });
    let { marks, filterqns } = this.state;
    filterqns.map(question => {
      if (question._id == _id) {
        return question.correctanswer == ans
          ? this.setState({ marks: marks + 1 })
          : '';
      }
    });
  };

  handleSubmit = () => {
    fetch('http://localhost:3001/api/v1/user/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.quizuserToken
      },
      body: JSON.stringify({
        mark: this.state.marks,
        quizsetName: this.state.quizname
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.props.history.push('/marks');
        }
      });
  };

  render() {
    let { quizname, filterqns, show } = this.state;
    return (
      <div className="quizlist-section">
        <div className="quizlist-heading-section">
          <p className="quizlist-heading">{filterqns.length ? quizname : ''}</p>
          <p
            onClick={this.handleSubmit}
            className={`${show ? 'quizlist-submit-btn' : ''} `}
          >
            {show ? 'SUBMIT' : ''}
          </p>
        </div>
        {filterqns.length ? (
          filterqns.map((question, index) => (
            <div className="quiz-card-wrapper">
              <div>
                <p className="question-no">{index + 1}.</p>
              </div>

              <div className="question-card">
                <p className="question-title">{question.title}</p>
                <div className="question-answers">
                  {question.answers.map(option => (
                    <button
                      onClick={() => {
                        this.handleAns(question._id, option);
                      }}
                      className="question-answers-item"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="quizlist-heading">no question found</p>
        )}
      </div>
    );
  }
}

export default withRouter(Showquiz);
