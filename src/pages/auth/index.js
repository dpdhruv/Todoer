/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Card } from '../../components/Card';
import { SolidButton } from '../../components/Button';
import {placeholder_for_username} from '../../constants/index';
import './auth.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faKey } from '@fortawesome/free-solid-svg-icons'

export class index extends Component {

	login(e) {
		e.preventDefault();
		alert('clicked')
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row d-flex">
					<div className="banner-img d-none d-lg-block">
					</div>
					<div className="card-container">
						<div className="col-lg-8 mx-auto col-sm-6">
							<div className="card-wrapper">
								<Card className="p-2 text-center" bodyAlign="text-left" title="Welcome to Todoer">
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
												/>
											</div>
										</div>


										<div className="text-center pt-2">
											<SolidButton title="Login" onClick={this.login} />
										</div>
									</form>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default index
