import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom'
import Home from './Home';
import queryString from 'query-string';

const HomeWrapper = (props) => {
    const [cookies, setCookie] = useCookies(['name']);
    const { code } = queryString.parse(props.location.search);
    if (code !== undefined) {
        return <Redirect to={"/login/callback?code=" + code} />;
    }
    if (!cookies.userId) {
        return <Redirect to="/login" />;
    }

    return <Home {...props} userName={cookies.userName} />;
};

export default HomeWrapper;