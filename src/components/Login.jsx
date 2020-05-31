import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import googleIcon from '../images/google-icon.svg';
import Grid from '@material-ui/core/Grid';
import config from '../config'
import queryString from 'query-string';
import { getToken } from '../api/auth'
import { withCookies } from 'react-cookie';
import Backdrop from '@material-ui/core/Backdrop';
import PacmanLoader from "react-spinners/PacmanLoader";

class LoginCallbackComponent extends Component {
    async componentDidMount() {
        const { cookies } = this.props;
        const { code } = queryString.parse(this.props.location.search);
        try {
            const res = await getToken(code);
            cookies.set('authToken', res.idToken, { path: '/', domain: config.COOKIE_DOMAIN })
            cookies.set('userId', res.userId, { path: '/', domain: config.COOKIE_DOMAIN })
            cookies.set('userName', res.name, { path: '/', domain: config.COOKIE_DOMAIN })
            this.props.history.push('/')
        } catch (err) {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <Backdrop invisible classes={{ root: { backgroundColor: '#fff' } }} open={true} >
                    <PacmanLoader
                        css={{ marginTop: -150, marginLeft: -150 }}
                        size={50}
                        color={"#1568ac"}
                        loading={true}
                    />
                </Backdrop>
            </div >
        );
    }
}

export const LoginCallback = withCookies(LoginCallbackComponent);

class Login extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#c2c2c2' }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={10} sm={3} md={3} lg={3}>
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
