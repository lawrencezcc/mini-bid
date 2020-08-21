'use strict';
/**
 * User API (Facade & module pattern)
 * 
 */

export default () => {
    /**
     * login to firebase by email & password
     * 
     * @async
     * @function _loginToFirebase
     * @param {string} email
     * @param {string} password
     * @returns {Promise<json>} The data from the login url
     * 
     */
    const _loginToFirebase = (email, password) => {
        const url = '';
        const data = {email, password};
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch((err) => {
            throw new Error('_loginToFirebase: ', err);
        });
    };

    const _getUserDataFromFirebase = (uId) => {
        const url = `${url}?uId=${uId}`;
        return fetch(url, {
            method: 'GET',
            headers: {}
        }).catch((err) => {
            throw new Error('_getUserInfo: ', err);
        });
    };

    return {
        login: (email, password) => {
            return _loginToFirebase(email, password);
        },
        getUserInfo: (uId) => {
            return _getUserDataFromFirebase(uId);
        }
    }
};