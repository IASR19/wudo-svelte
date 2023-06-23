import { actions } from '../src/routes/login';

describe('Tests for login actions', () => {
  test('default action - successful login', async () => {//Testa o caso de sucesso em que o email e a senha fornecidos são válidos, o login é bem-sucedido e é redirecionado para a página de serviços.
    const request = {
      formData: jest.fn(() => {
        return {
          get: jest.fn().mockImplementation(key => {
            if (key === 'email') {
              return 'test@hotmail.com';
            } else if (key === 'password') {
              return 'password';
            }
          })
        };
      })
    };

    const redirectMock = jest.fn(() => {
      return { status: 301, location: '/servicos' };
    });

    const authWithPasswordMock = jest.fn(() => {
      return Promise.resolve('logged user');
    });

    const locals = {
      pb: {
        collection: jest.fn(() => {
          return {
            authWithPassword: authWithPasswordMock
          };
        })
      }
    };

    const result = await actions.default({ locals, request });
    expect(request.formData).toHaveBeenCalledTimes(1);
    expect(locals.pb.collection).toHaveBeenCalledTimes(1);
    expect(authWithPasswordMock).toHaveBeenCalledWith('test@hotmail.com', 'password');
    expect(result).toEqual({ status: 301, location: '/servicos' });
  });




  test('default action - error during login', async () => {//Testa o caso em que ocorre um erro durante o login, e um objeto { success: false } é retornado.
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
            authWithPassword: jest.fn(() => {
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




  test('default action - invalid email or password', async () => {//Testa o caso em que o email ou a senha fornecidos são inválidos (nesse caso, o email é um arquivo), e um objeto { success: false } é retornado.
    const request = {
      formData: jest.fn(() => {
        return {
          get: jest.fn().mockImplementation(key => {
            if (key === 'email') {
              return new File([], 'email.txt');
            } else if (key === 'password') {
              return new File([], 'password.txt');
            }
          })
        };
      })
    };

    const result = await actions.default({ locals: {}, request });
    expect(result).toEqual({ success: false });
  });
});