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

const userBodyResponseError3 = {
    dataValues: {
        id: 1,
        username: 'Hagar',
        vocation: 'Guerreiro',
        level: 10,
        password: '$2a$10$Oo/9JaIf7vwnG61BS20f4Oe0wKwEBf7v0.BP95H9z/1ZAHHMGdCQa'
    },
    _previousDataValues: {
        id: 1,
        username: 'Hagar',
        vocation: 'Guerreiro',
        level: 10,
        password: '$2a$10$Oo/9JaIf7vwnG61BS20f4Oe0wKwEBf7v0.BP95H9z/1ZAHHMGdCQa'
    },
    uniqno: 1,
    _options: {
        isNewRecord: false,
        _schema: null,
        _schemaDelimiter: '',
        raw: true,
        attributes: ['id', 'username', 'vocation', 'level', 'password']
    },
    isNewRecord: false
};


export {
    token,
    userBodyRequest,
    userBodyResponse,
    userBodyRequestError,
    userBodyResponseError,
    userBodyResponseError2,
    userBodyResponseError3
};

