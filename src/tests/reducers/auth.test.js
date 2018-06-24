import authReducer from '../../reducers/auth';

test('should set default state', () => {
    const state = authReducer(undefined, {
        type: '@@INIT'
    });

    expect(state).toEqual({});
});

test('should set uid after login', () => {
    const uid = 'example uid';
    
    const action = {
        type: 'LOGIN',
        uid
    };

    const state = authReducer({}, action);

    expect(state).toEqual({
        uid
    });
});

test('should clear UID for logout', () => {
    
    const uid = 'example uid';

    const action = {
        type: 'LOGOUT'
    };

    const state = authReducer({
        uid
    }, action);

    expect(state).toEqual({});
});