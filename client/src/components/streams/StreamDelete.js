import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    const id = this.props.match.params.id;
    return (
      <div className="modal-buttons">
        <button onClick={() => this.props.deleteStream(id)} className="deleteBtn">Delete</button>
        <button onClick={() => history.push('/')} to={'/'} className="editBtn">Cancel</button>
      </div>
    );
  }

  renderContent() {
    if(!this.props.stream) {
      return 'Are you sure you want to delete this Stream?'
    }
    return `Are you sure you want to delete the Stream - ${this.props.stream.title}`
  }

  render() {
    return (
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream } )(StreamDelete);
