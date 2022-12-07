import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import { handleLogout } from "../../redux/actions/authAction";

const styles = {
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  navLinkStyle: {
    textDecoration: "none",
    color: "white",
  },
  signupAndSignin: {
    marginLeft: "10px",
  },
  activeLinks: {
    color: "white",
    textDecoration: "underline white",
  },
};

class Navbar extends Component {
  render() {
    let navigation = null;

    if (this.props.authUser.isAuthenticated) {
      navigation = (
        <>
          <NavLink
            exact
            to="/user-profile"
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin,
            ].join(" ")}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Profile
          </NavLink>

          <NavLink
            exact
            to="/create-talk"
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin,
            ].join(" ")}
            activeStyle={{ color: "white", textDecoration: "underline white" }}
          >
            Create Talk
          </NavLink>

          <NavLink
            exact
            to="/"
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin,
            ].join(" ")}
            onClick={() => this.props.handleLogout()}
          >
            Logout
          </NavLink>
        </>
      );
    } else {
      navigation = (
        <>
          <NavLink
            exact
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin,
            ].join(" ")}
            activeStyle={styles.activeLinks}
            to="/sign-up"
          >
            Sign up
          </NavLink>

          <NavLink
            exact
            className={[
              this.props.classes.navLinkStyle,
              this.props.classes.signupAndSignin,
            ].join(" ")}
            activeStyle={styles.activeLinks}
            to="/sign-in"
          >
            Sign in
          </NavLink>
        </>
      );
    }

    return (
      <AppBar position="static">
        <Toolbar>
          <NavLink
            exact
            to="/"
            className={this.props.classes.navLinkStyle}
            activeStyle={styles.activeLinks}
          >
            Talk That Talk!!
          </NavLink>

          <section className={this.props.classes.rightToolbar}>
            {navigation}
          </section>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser,
  };
};

export default connect(mapStateToProps, { handleLogout })(
  withStyles(styles)(Navbar)
);
