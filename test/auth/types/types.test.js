import { types } from '../../../src/auth';

describe('Pruebas en los Types', () => {
  test('debe de regresar estos types', () => {
    const lockedTypes = {
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    };
    expect(types).toEqual(lockedTypes);
  });
});
