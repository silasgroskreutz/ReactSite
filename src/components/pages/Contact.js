import React, { Component } from 'react';
import Field from '../common/Field';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const fields = {
  sections: [
    [
      {
        name: 'name',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your name*'
      },
      {
        name: 'email',
        elementName: 'input',
        type: 'email',
        placeholder: 'Your email*'
      },
      {
        name: 'phone',
        elementName: 'input',
        type: 'text',
        placeholder: 'Your phone number*'
      }
    ],
    [
      {
        name: 'message',
        elementName: 'textarea',
        type: 'text',
        placeholder: 'Type your message*'
      }
    ]
  ]
};

class Contact extends Component {
  render() {
    return (
      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Contact Us</h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            <form className='col-lg-12'>
              <form
                name='sentMessage'
                novalidate='novalidate'
                onSubmit={this.props.handleSubmit}
              >
                <div className='row'>
                  {fields.sections.map((section, sectionIndex) => {
                    return (
                      <div className='col-md-6' key={sectionIndex}>
                        {section.map((field, i) => {
                          return (
                            <Field
                              {...field}
                              key={i}
                              value={this.props.values[field.name]}
                              name={field.name}
                              onChange={this.props.handleChange}
                              onBlur={this.props.onChange}
                              touched={this.props.touched[field.name]}
                              errors={this.props.errors[field.name]}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    <button
                      className='btn btn-primary btn-xl text-uppercase'
                      type='submit'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default withFormik({
  mpPropsToValues: () => ({
    name: '',
    email: '',
    phone: '',
    message: ''
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters long')
      .required('You must give us your name.'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Required'),
    phone: Yup.string()
      .min(10, 'Please enter 10 digit number')
      .max(15, 'Your phone number is too long')
      .required('Please enter a number to reach you at'),
    message: Yup.string()
      .min(500, 'Please provide more detailed information')
      .required('Message is required.')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    alert("You've submitted the form", JSON.stringify(values));
  }
})(Contact);
