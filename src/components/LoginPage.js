import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            buttonText: 'Login with Google'
        };
      }

    render() {
        return (
            <div className='box-layout'>
                <div className='box-layout__box'>
                    <h1 className='box-layout__title'>Boilerplate</h1>
                    <p>Tag Line for logging in.</p>
                    <button className='button' type="button" onClick={this.props.startLogin}>{this.state.buttonText}</button>
                </div>
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);