'use strict';

describe('Test Suite', () => {
  beforeAll(() => {
    browser.windowHandleMaximize();
    browser.pause(1000);
  });
  afterAll(() => {
    browser.pause(1000);
  });

  it('First Test', () => {
    expect(true).toBe(false);
  });

  it('Second Test', () => {
    expect(true).toBe(true);
  });
});
