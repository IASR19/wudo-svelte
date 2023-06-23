import { actions } from '../src/routes/cadastro';

describe('Tests for registration actions', () => {
  test('default action - successful registration', async () => {    //a criação do usuário é bem-sucedida e é redirecionado para a página de login.
    const request = {
      formData: jest.fn(() => {
        return {
          get: jest.fn().mockReturnValueOnce('email')
                        .mockReturnValueOnce('password')
                        .mockReturnValueOnce('password')
        };
      })
    };

    const redirectMock = jest.fn(() => {
      return { status: 301, location: '/login' };
    });

    const locals = {
      pb: {
        collection: jest.fn(() => {
          return {
            create: jest.fn(() => {
              return Promise.resolve('new user');
            })
          };
        })
      }
    };

    const result = await actions.default({ locals, request });
    expect(request.formData).toHaveBeenCalledTimes(1);
    expect(locals.pb.collection).toHaveBeenCalledTimes(1);
    expect(result).toEqual({ status: 301, location: '/login' });
  });




  test('default action - password mismatch', async () => {          //Testa o caso em que as senhas fornecidas não correspondem, e um erro é retornado com o status 400.
    const request = {
      formData: jest.fn(() => {
        return {
          get: jest.fn().mockImplementation(key => {
            if (key === 'password') {
              return 'password1';
            } else if (key === 'password2') {
              return 'password2';
            }
          })
        };
      })
    };

    const result = await actions.default({ locals: {}, request });
    expect(result[0]).toBe(400);
    expect(result[1]).toEqual({ password: 'password1', password2: 'password2', match: false });
  });




  test('default action - error during registration', async () => {  //Testa o caso em que ocorre um erro durante a criação do usuário, e um objeto { success: false } é retornado.
    const request = {
      formData: jest.fn(() => {
        return {
          get: jest.fn()
        };
      })
    };

    const errorMock = new Error('Error');
    const locals = {
      pb: {
        collection: jest.fn(() => {
          return {
            create: jest.fn(() => {
              return Promise.reject(errorMock);
            })
          };
        })
      }
    };

    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = await actions.default({ locals, request });
    expect(result).toEqual({ success: false });
    expect(consoleErrorSpy).toHaveBeenCalledWith(errorMock);
    consoleErrorSpy.mockRestore();
  });
});