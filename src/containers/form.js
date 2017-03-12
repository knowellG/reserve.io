import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import * as actions from '../actions/';
import RaisedButton from 'material-ui/RaisedButton';
import {
  DatePicker,
  TimePicker,
  TextField
} from 'redux-form-material-ui'

class MyForm extends Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(props){
    this.props.sendForm(props)
  }
  onHandleResetButton(){
    const { reset } = this.props;
    reset()
    this.props.resetCards();
  }

  render(){
    const style = {
      margin: 12,
    };
    const { handleSubmit, reset, pristine } = this.props;
    return(
      <div className="form">
        <h2 className="title">Search for restaurants</h2>
        <div>
          <form className="center" onSubmit={handleSubmit(this.onSubmit)}>
            <Field name="city"
              floatingLabelText="Enter City"
              type="text"
              ref="city" withRef
              component={TextField}/>

            <Field name="date"
              component={DatePicker}
              format={null}
              floatingLabelText="Reservation Date"
              />

            <Field name="time"
              component={TimePicker}
              format={null}
              defaultValue={null}
              floatingLabelText="Reservation Time"
              />

            <Field name="guests"
              floatingLabelText={"Number of Guests"}
              type="text"
              ref="guests" withRef
              component={TextField}/>

            <Field name="deadLineDate"
              component={DatePicker}
              format={null}
              defaultValue={null}
              floatingLabelText="Deadline Date"
              />

            <Field name="deadLineTime"
              component={TimePicker}
              format={null}
              defaultValue={null}
              floatingLabelText="Deadline Time"
              />

            <div>
              <RaisedButton
                label="Submit"
                type="submit"
                labelColor="#FFF"
                backgroundColor="#00BCD4"/>
              <RaisedButton
                style={style}
                label="Clear"
                onTouchTap={ () => this.onHandleResetButton()}
                labelColor="#FFF"
                backgroundColor="#D4606C"/>
            </div>

          </form>
        </div>
      </div>
    )
  }
}

const validate = values => {
  const errors = {};
  var regex = /\D/
  if (!values.city){
    errors.city= 'Please enter a city'
  }
  if (!values.date){
    errors.date= 'Please enter a date'
  }
  if (!values.time){
    errors.time= 'Please enter a time'
  }
  if (!values.guests){
    errors.guests= 'Please enter number of guests'
  } else if(regex.test(values.guests)){
    errors.guests = 'Please enter a valid number'
  }
  if (!values.deadLineDate){
    errors.deadLineDate= 'Please enter your dead-line date'
  }
  if (!values.deadLineTime){
    errors.deadLineTime= 'Please enter your dead-line time'
  }
  return errors;
}

MyForm = reduxForm({
  form: 'MyForm',
  validate
})(MyForm)

export default MyForm = connect(null, actions)(MyForm)
