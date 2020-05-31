import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import googleIcon from '../images/google-icon.svg';
import Grid from '@material-ui/core/Grid';
import config from '../config'
import queryString from 'query-string';
import { getToken } from '../api/auth'
import { withCookies } from 'react-cookie';

class LoginCallbackComponent extends Component {
    async componentDidMount() {
        const { cookies } = this.props;
        const { code } = queryString.parse(this.props.location.search);
        const res = await getToken(code);
        cookies.set('authToken', res.idToken, { path: '/' })
        cookies.set('userId', res.userId, { path: '/' })
        cookies.set('userName', res.name, { path: '/' })
    }

    render() {
        return (
            <div>
                <div>hello</div>
            </div >
        );
    }
}

export const LoginCallback = withCookies(LoginCallbackComponent);

class Login extends Component {
    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={3}>
                        <a href={config.SERVER_URL + '/oauth2/login'} style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">
                                <img src={googleIcon} height="20" alt="Google icon" />
                                <span style={{ marginLeft: 15 }}>Sign in with Google</span>
                            </Button>
                        </a>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default Login;
