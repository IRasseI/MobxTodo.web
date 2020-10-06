import axios from 'axios';

const EncodeURI = (obj) => {
    let str = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
        }
    }
    return str.join("&");
};

let api = {};

// eslint-disable-next-line array-callback-return
["get", "post", "delete", "patch"].map(v => {
    api[v] = (url, query, ...args) => {
        return axios[v](`/api${url}?${EncodeURI(query)}`, args[0], args[1] || null);
    };
});

export default api;
