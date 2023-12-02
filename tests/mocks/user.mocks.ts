const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJIYWdhciIsImlhdCI6MTcwMTQ2NDUwMH0.DZcf9UkPmJJejd0wr8bG7LaS9VeCc6zsFRUukgvah7I';

const userBodyRequest = {
    body: {
        "username": "Hagar",
        "password": "terrível"
    }
} as unknown as Request;

const userBodyRequestError = {
    "username": "Batatinha Frita",
    "password": "123"
};

const userBodyResponse = {
    "id": 1,
    "username": "Hagar",
    "password": "terrível"
};

const userBodyResponseError = {
    "status": "BAD_REQUEST",
    "message": "Invalid username or password"
};

const userBodyResponseError2 = {
    "status": "INVALID_FIELDS",
    "message": "Username or password invalid"
};


export {
    token,
    userBodyRequest,
    userBodyResponse,
    userBodyRequestError,
    userBodyResponseError,
    userBodyResponseError2,
};

