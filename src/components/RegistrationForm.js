import React from "react";
import { connect } from "react-redux";

// TO DO: DISPLAY ERROR WARNINGS FOR BAD FIELDS, MORE FORM VALIDATION, DISPLAY LOADING SYMBOL TO SHOW SIGNING UP USER?

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      errors: {
        firstName: "INVALID",
        lastName: "INVALID",
        email: "INVALID",
        password: "INVALID"
      }
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 1 ? "Full Name must be 1 characters long!" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 1 ? "Full Name must be 1 characters long!" : "";
        break;
      case "email":
        errors.email = value.length < 1 ? "Enter a valid email address" : "";
        // errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  validateForm = errors => {
    let isValid = true;
    Object.values(errors).forEach(value => {
      console.log(value.length);
      isValid = value.length === 0 ? true : false;
      console.log(isValid);
    });
    return isValid;
  };

  onSubmit = e => {
    e.preventDefault();
    //form validation
    if (this.validateForm(this.state.errors)) {
    } else {
      // display error message
      console.log("NOT VALID FORM");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(RegistrationForm);
