

const BASE_URL = "http://localhost:8000";

const handleResponse = response => response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            // logout();
            // location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return {error};
    }

    return data;
});


const getCategories = (application) => {
    const requestOptions = {
        method: 'GET',
    };

    //return fetch(`${BASE_URL}/metadata/ticket/category/application/${application}`, requestOptions).then(handleResponse);
    return fetch(`${BASE_URL}`, requestOptions).then(handleResponse);
};
const createEngagement = (engagement) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(engagement),
    };

    return fetch(`${BASE_URL}`, requestOptions).then(handleResponse);
};

export const analyzerService = {
    getCategories,
    createEngagement,
};
