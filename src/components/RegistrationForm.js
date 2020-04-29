import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addUser } from "../actions/users";
import { checkLogin } from "../firebase/firebase";

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
        firstName: "Full Name must be 1 characters long!",
        lastName: "Full Name must be 1 characters long!",
        email: "Enter a valid email address",
        password: "Password must be 8 characters long!"
      }
    };
  }

  // componentDidMount() {
  //   console.log("here");
  //   if (this.state.isLoggedIn) {
  //     this.props.history.push("/");
  //   }
  // }

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
          value.length < 4 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
    });
  };

  validateForm = errors => {
    let isValid = true;
    let keyValid = true;
    Object.values(errors).forEach(value => {
      console.log(value);
      keyValid = value.length === 0 ? true : false;
      if (keyValid === false) {
        isValid = false;
      }
    });
    return isValid;
  };

  onSubmit = e => {
    e.preventDefault();
    //form validation
    if (this.validateForm(this.state.errors)) {
      const userInfo = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };
      this.props.addUser(userInfo);
    } else {
      // display error message
      console.log("NOT VALID FORM");
    }
  };
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/"></Redirect>;
    } else {
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
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = {
  addUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
