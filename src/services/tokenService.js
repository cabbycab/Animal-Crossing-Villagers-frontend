function setToken(token) {
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

function getUserFromToken() {

}

function getToken() {

}

function removeToken() {
    localStorage.removeItem("token");
}

export {
    setToken,
    getUserFromToken,
    getToken,
    removeToken
}