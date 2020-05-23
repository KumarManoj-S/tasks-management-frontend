import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import googleIcon from '../images/google-icon.svg';
import Grid from '@material-ui/core/Grid';
import config from '../config'
import queryString from 'query-string';
import { getToken } from '../api/auth'


export class LoginCallback extends Component {
    componentDidMount() {
        const { code } = queryString.parse(this.props.location.search);
        getToken(code)
    }

    render() {
        return (
            <div>
                <div>hello</div>
            </div >
        );
    }
}



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
                                <img src={googleIcon} height="20" />
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
