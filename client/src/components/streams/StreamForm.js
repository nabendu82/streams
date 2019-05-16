import React, {Fragment} from 'react';
import { Field, reduxForm } from 'redux-form';
import './formStyles.css';

class StreamForm extends React.Component {
  renderError(meta) {
    if(meta.touched && meta.error) {
      return (
        <div className="err__msg">{meta.error}</div>
      );
    }
  }

  renderInputBox = ({input, label, meta}) => {
    return (
      <Fragment>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </Fragment>
    )
  }

  onSubmitForm = (formValues) => {
    this.props.parentSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} className="ui__form">
        <Field name="title" label="Enter Title" component={this.renderInputBox} />
        <Field name="description" label="Enter Description" component={this.renderInputBox} />
        <button>Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if(!formValues.title) {
    errors.title = "You must enter a title";
  }
  if(!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
}

export default reduxForm({form: 'streamForm', validate})(StreamForm);

