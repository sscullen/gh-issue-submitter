import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PublicRoute = ({ isAuthenticated, 
                               component: Component,
                               ...allTheRest
                            }) => (
    
    <Route {...allTheRest} component={(props) => (
        !isAuthenticated ? (
            <div>
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/dashboard" />
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);