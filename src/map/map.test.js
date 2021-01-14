import ErrorRepository from './map.js';

const Err = new ErrorRepository();

test('should return human-readable text of error (1)', () => {
  expect(Err.translate(1)).toBe('first error');
});

test('should return human-readable text of error (2)', () => {
  expect(Err.translate(2)).toBe('second error');
});

test('should return text unkown error if no code)', () => {
  expect(Err.translate(5)).toBe('Unknown error');
});
