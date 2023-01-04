import { authReducer, types } from '../../../src/auth';

describe('Pruebas en el authReducer', () => {
  test('debe de retornar el estado por defecto', () => {

    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    // const action = {
    //   types: types.login,
    //   payload: {
    //     id: 345,
    //     name: 'Juan',
    //   },
    // };
    // const state = authReducer({ logged: false }, action);
    // expect(state).toEqual({ logged: true, user: action.payload });
  });
  test('debe de (logout) borrar el name del usuario y logged en false ', () => {
    // const action = {
    //   types: types.logout,
    // };
    // const state = authReducer(
    //   {
    //     logged: true,
    //     user: {
    //       id: 345,
    //       name: 'Juan',
    //     },
    //   },
    //   action
    // );
    // expect(state).toEqual({ logged: false });
  });
});
