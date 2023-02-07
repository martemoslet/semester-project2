/**
 * This function will save items in loacal storage
 * @param {string} key is the name of the key to be stored
 * @param value is the value of the key
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * This function will retrieve the items from local storage
 * @param {string} key is the name of the key to be stored
 * @returns the value from the key
 */

export function load(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 * This function will remove the key from local storage
 * @param {string} key is the name of the key to be stored
 */

export function remove(key) {
  localStorage.removeItem(key);
}
