import React from 'react';

class Showmarks extends React.Component {
  constructor() {
    super();
    this.state = {
      totalmarks: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/api/v1/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.quizuserToken
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({ totalmarks: data.user.marksId.reverse() });
        }
        console.log(this.state.totalmarks);
      });
  }
  render() {
    let { totalmarks } = this.state;
    return (
      <>
        <div className="showmarks-section">
          {totalmarks.length ? (
            <>
              <p className="showmarks-heading">Showing all test marks</p>
              <table>
                <tr>
                  <th>So.No</th>
                  <th>Quizset Name</th>
                  <th>Marks secured</th>
                  <th>Appeared on</th>
                </tr>
                {totalmarks &&
                  totalmarks.map((marks, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{marks.quizsetName}</td>
                      <td>{marks.mark}</td>

                      <td>
                        {' '}
                        {new Intl.DateTimeFormat('en-GB', {
                          hour: '2-digit',
                          minute: '2-digit',
                          month: '2-digit',
                          day: '2-digit',
                          year: 'numeric'
                        }).format(new Date(marks.createdAt))}
                      </td>
                    </tr>
                  ))}
              </table>
            </>
          ) : (
            <p className="showmarks-heading">No quiz test appeared</p>
          )}
        </div>
      </>
    );
  }
}

export default Showmarks;
