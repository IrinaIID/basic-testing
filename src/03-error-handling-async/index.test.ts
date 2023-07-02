// Uncomment the code below and write your tests
import { throwError, throwCustomError, resolveValue, MyAwesomeError, rejectCustomError } from './index';


describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const data = await resolveValue('text');
    expect(data).toBe('text');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => {
      throwError('error message');
    }).toThrow('error message');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const customErr = new MyAwesomeError;
    const message = customErr.message
    expect(throwCustomError).toThrow();
    expect(throwCustomError).toThrow(message);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError).rejects.toThrow();
  });
});
