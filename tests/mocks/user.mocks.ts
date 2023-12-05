const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJIYWdhciIsImlhdCI6MTcwMTgxMDM3MH0.cHwt_28DkclAB1zvqhxO3HMekd3kOGErbUk4DsPMaaA';

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

const userBodyResponse2 = {
    dataValues: {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$ap7TKWXVePz1du33T5hN0edr45B6fa3KzuhrTK7LleCdz5ybZ0KbW'
    },
    _previousDataValues: {
      id: 1,
      username: 'Hagar',
      vocation: 'Guerreiro',
      level: 10,
      password: '$2a$10$ap7TKWXVePz1du33T5hN0edr45B6fa3KzuhrTK7LleCdz5ybZ0KbW'
    },
    uniqno: 1,
    _changed: new Set(),
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [ 'id', 'username', 'vocation', 'level', 'password' ]
    },
    isNewRecord: false
} as unknown as any;

export {
    token,
    userBodyRequest,
    userBodyRequestError,
    userBodyResponse,
    userBodyResponseError,
    userBodyResponseError2,
    userBodyResponse2
}
