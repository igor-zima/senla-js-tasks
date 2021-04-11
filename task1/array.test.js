const {
  findLastElement,
  duplicateArray,
  fill,
  deleteFirstEl,
  sortAndReverseStr,
  reverseSortNum,
  getSliceArray,
  double,
} = require('./array');

describe('Array functions', () => {
  let arr;
  let emptyArrError;
  let notArrArgumentError;

  beforeEach(() => {
    arr = [1, 2, 3, 'a', 'b', 'c'];
    emptyArrError = new TypeError('Array is empty');
    notArrArgumentError = new TypeError('The argument must be an array');
  });

  describe('function "findLastElement"', () => {
    it('should return last element', () => {
      const result = 'c';

      expect(findLastElement(arr)).toEqual(result);
      expect(() => findLastElement([])).toThrowError(emptyArrError);
      expect(() => findLastElement(1)).toThrowError(notArrArgumentError);
    });
  });

  describe('function "duplicateArray"', () => {
    it('should return duplicate array', () => {
      const result = [1, 2, 3, 'a', 'b', 'c', 1, 2, 3, 'a', 'b', 'c'];

      expect(duplicateArray(arr)).toEqual(result);
      expect(duplicateArray(arr)).toBeInstanceOf(Array);
      expect(() => duplicateArray([])).toThrowError(emptyArrError);
      expect(() => findLastElement(1)).toThrowError(notArrArgumentError);
    });
  });

  describe('function "fill"', () => {
    it('should return fill array from pass number', () => {
      const result = [1, 2, 3];
      const num = 3;
      const error = new TypeError('The argument must be a number');

      expect(fill(num)).toEqual(result);
      expect(fill(num)).toBeInstanceOf(Array);
      expect(fill(num)).toHaveLength(num);
      expect(() => fill('a')).toThrowError(error);
    });
  });

  describe('function "deleteFirstEl"', () => {
    it('should delete first element from pass arrays', () => {
      const arr1 = [1, 2, 3];
      const arr2 = ['x', 'y', 'z'];
      const result = [
        [2, 3],
        ['y', 'z'],
      ];

      expect(deleteFirstEl(arr1, arr2)).toEqual(result);
      expect(deleteFirstEl(arr1, arr2)).toBeInstanceOf(Array);
      expect(() => deleteFirstEl(1, '2')).toThrowError(notArrArgumentError);
      expect(() => deleteFirstEl(arr1, '2')).toThrowError(notArrArgumentError);
      expect(() => deleteFirstEl()).toThrowError(notArrArgumentError);
    });
  });

  describe('function "sortAndReverseStr"', () => {
    it('should return sort and reverse string', () => {
      const str = 'екважбигёзд';
      const result = 'кизжёедгвба';
      const error = 'The argument must be a string';

      expect(sortAndReverseStr(str)).toEqual(result);
      expect(sortAndReverseStr(str)).toHaveLength(str.length);
      expect(sortAndReverseStr(String(str))).toEqual(result);
      expect(sortAndReverseStr(new String(str))).toEqual(result);
      expect(() => sortAndReverseStr(1)).toThrowError(error);
      expect(() => sortAndReverseStr([])).toThrowError(error);
    });
  });

  describe('function "reverseSortNum"', () => {
    it('should return sort number in reverse order', () => {
      const arr = [5, 2, -1, 6, 9, -9, 3, '4'];
      const result = [9, 6, 5, 4, 3, 2, -1, -9];
      const error = 'The argument must be a number array';

      expect(reverseSortNum(arr)).toEqual(result);
      expect(reverseSortNum(arr)).toHaveLength(arr.length);
      expect(() => reverseSortNum(1)).toThrowError(error);
      expect(() => reverseSortNum('1')).toThrowError(error);
      expect(() => reverseSortNum({})).toThrowError(error);
    });
  });

  describe('function "getSliceArray"', () => {
    it('should return slice array', () => {
      const result = [2, 3, 'a'];
      const resultWithoutEnd = [2, 3, 'a', 'b', 'c'];
      const start = 1;
      const end = 3;
      const error = 'The arguments must be: (Array,[start => Number, end => Number])';

      expect(getSliceArray(arr, start, end)).toEqual(result);
      expect(getSliceArray(arr, start)).toEqual(resultWithoutEnd);
      expect(getSliceArray(arr)).toEqual(arr);
      expect(getSliceArray([])).toEqual([]);
      expect(getSliceArray(arr, start, end)).toHaveLength(end);
      expect(() => getSliceArray(1)).toThrowError(error);
      expect(() => getSliceArray('1')).toThrowError(error);
      expect(() => getSliceArray({})).toThrowError(error);
      expect(() => getSliceArray(arr, '1')).toThrowError(error);
      expect(() => getSliceArray(arr, arr)).toThrowError(error);
      expect(() => getSliceArray(arr, {})).toThrowError(error);
      expect(() => getSliceArray(arr, 1, '5')).toThrowError(error);
      expect(() => getSliceArray(arr, 1, arr)).toThrowError(error);
      expect(() => getSliceArray(arr, 1, {})).toThrowError(error);
    });
  });

  describe('function "double"', () => {
    it('should return double array element', () => {
      const arr = [1, 2, 3, 4, 5, '6'];
      const result = [2, 4, 6, 8, 10, 12];
      const error = 'The argument must be a number array';

      expect(double(arr)).toEqual(result);
      expect(double(arr)).toHaveLength(arr.length);
      expect(() => double(1)).toThrowError(error);
      expect(() => double('1')).toThrowError(error);
      expect(() => double({})).toThrowError(error);
    });
  });
});
