import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';
import './StreamList.css';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if(stream.userId === this.props.currUserId) {
      return (
        <div>
          <Link to={`/streams/edit/${stream.id}`} className="editBtn linkBtn">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`}  className="deleteBtn linkBtn">Delete</Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <div className="content">{stream.title}</div>
          <div className="description">{stream.description}</div>
          {this.renderAdmin(stream)}
          <hr />
        </div>
      )
    })
  }

  renderCreate() {
    if(this.props.isSignedIn) {
      return (
        <div className="editBtn createBtn">
          <Link to="/streams/create">Create Stream</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2 className="header">Streams</h2>
        <div className="list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
