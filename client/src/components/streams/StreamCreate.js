import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
import './formStyles.css';

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
     <div>
       <h3>Create a Stream</h3>
       <StreamForm parentSubmit={this.onSubmit} />
     </div>
    )
  }
}

export default connect(null, { createStream })(StreamCreate);