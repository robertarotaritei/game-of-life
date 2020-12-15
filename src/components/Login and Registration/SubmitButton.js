import React from 'react';

class SubmitButton extends React.Component {

  render() {
    return (
      <div className="submitButton" style={{ marginTop: '10px' }}>
        <button
          className='btn'
          onClick={ () => this.props.onClick() }
          >
          <span className="btn__content">{this.props.text}</span>
          <span className="btn__glitch"></span>
        </button>
      </div>
    );
  }
}

export default SubmitButton;