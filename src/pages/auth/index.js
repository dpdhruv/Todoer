/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Card } from "../../components/Card";
import { SolidButton } from "../../components/Button";
import { ScreenLoader } from "../../components/Loader";
import { placeholder_for_username } from "../../constants/index";
import { isLoggedIn } from "../../utils/isAuth";
import "./auth.scss";

import { authRequest } from "../../redux/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      loading: false,
      username: "",
      password: ""
    };
  }

  componentDidMount() {}
  componentDidUpdate(prevProps) {
    const { isLoading, auth, error } = this.props;
    if (isLoading !== prevProps.isLoading) {
      this.setState({
        loading: isLoading
      });
    }

    if (auth !== prevProps.auth) {
      const { token } = auth;
      if (token) {
        localStorage.setItem("token", token);
        if (localStorage.getItem("token")) {
          this.props.history.push("/dashboard");
        }
      } else {
        alert("something went wrong");
      }
    }
  }
  login = e => {
    e.preventDefault();
    let payload = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.authentication(payload);
    // this.setState({loading: true},
    //   () => {
    //     this.props.history.push("/dashboard");
    //   }
    // );
  };

  render() {
    if (!this.state.loaded) return <ScreenLoader />;

    return (
      <div className="container-fluid">
        <div className="row d-flex">
          <div className="banner-img d-none d-lg-block"></div>
          <div className="card-container">
            <div className="col-lg-8 mx-auto col-sm-6">
              <div className="card-wrapper">
                <Card
                  className="p-2 text-center"
                  bodyAlign="text-left"
                  title="Welcome to Todoer"
                >
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faUser} />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder={placeholder_for_username}
                          onChange={e => {
                            this.setState({ username: e.target.value });
                          }}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faKey} />
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          onChange={e => {
                            this.setState({ password: e.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <span
                      className="span-text"
                      onClick={() => {
                        this.props.history.push("/signup");
                      }}
                    >
                      Already have an account?
                    </span>
                    <br />
                    <div className="text-center pt-2">
                      <SolidButton
                        onClick={this.login}
                        loading={this.state.loading}
                      >
                        Login
                      </SolidButton>
                    </div>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, auth, error }) => ({
  isLoading,
  auth,
  error
});

const mapDispatchToProps = dispatch => ({
  authentication: payload => dispatch(authRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
