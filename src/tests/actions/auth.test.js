import { login, logout } from '../../actions/auth';

test('should set up "LOGIN" action object with data', () => {
    const uid = 'uid example';
    const action = login(uid);

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should set up "LOGOUT" action object with data', () => {
    const action = logout();

    expect(action).toEqual({
        type: 'LOGOUT'
    });
});