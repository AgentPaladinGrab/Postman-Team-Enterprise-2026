function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function reverseString(str) {
  return str.split('').reverse().join('');
}
function isPalindrome(str) {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
function countVowels(str) {
  return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
}
function countConsonants(str) {
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi) ? str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length : 0;
}
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
function findLongestWord(arr) {
  return arr.reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
function sortWords(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}
function filterWordsByLength(arr, minLength) {
  return arr.filter(word => word.length >= minLength);
}
function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
function countOccurrences(arr, val) {
  return arr.filter(item => item === val).length;
}
function flattenArray(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}
function uniqueArray(arr) {
  return Array.from(new Set(arr));
}
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
function intersection(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}
function union(arr1, arr2) {
  return Array.from(new Set([...arr1, ...arr2]));
}
function difference(arr1, arr2) {
  return arr1.filter(value => !arr2.includes(value));
}
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function isAnagram(str1, str2) {
  const normalize = str => str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
