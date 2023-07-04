// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const sum = 30;
    const balanse = getBankAccount(sum);
    expect(balanse.getBalance()).toBe(sum);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const balance = 10;
    const yourBank = getBankAccount(balance);
    expect(() => {
      yourBank.withdraw(15);
    }).toThrow(`Insufficient funds: cannot withdraw more than ${yourBank.getBalance()}`);
  });

  test('should throw error when transferring more than balance', () => {
    const balance = 10;
    const yourBank = getBankAccount(balance);
    const otherBank = getBankAccount(2);
    expect(() => {
      yourBank.transfer(15, otherBank);
    }).toThrow(`Insufficient funds: cannot withdraw more than ${yourBank.getBalance()}`);
  });

  test('should throw error when transferring to the same account', () => {
    const balance = 10;
    const yourBank = getBankAccount(balance);
    expect(() => {
      yourBank.transfer(5, yourBank);
    }).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    const sum = 30;
    const sumDeposit = 5;
    const yourBank = getBankAccount(sum);
    yourBank.deposit(sumDeposit);
    expect(yourBank.getBalance()).toBe(sum + sumDeposit);
  });

  test('should withdraw money', () => {
    const sum = 30;
    const sumWithdraw = 5;
    const yourBank = getBankAccount(sum);
    yourBank.withdraw(sumWithdraw);
    expect(yourBank.getBalance()).toBe(sum - sumWithdraw);
  });

  test('should transfer money', () => {
    const balance = 10;
    const balanseOther = 3;
    const sumTransfer = 2;
    const yourBank = getBankAccount(balance);
    const otherBank = getBankAccount(balanseOther);
    yourBank.transfer(sumTransfer, otherBank);
    expect(yourBank.getBalance()).toBe(balance - sumTransfer);
    expect(otherBank.getBalance()).toBe(balanseOther + sumTransfer);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // const balance = 10;
    // const yourBank = getBankAccount(balance);
    // const resultFetch = await yourBank.fetchBalance();
    // const res = resultFetch
    // await expect(yourBank.fetchBalance()).resolves.toBe(Number)
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
