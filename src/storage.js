import localForage from 'localforage';
import createMessageCreator from './errors';

const createMessage = createMessageCreator('Storage initialization failed');

export const MISSING_CONFIG_MESSAGE = createMessage('missing config');
export const MISSING_KEY_MESSAGE = createMessage('missing storage key');

class Storage {
  constructor(config) {
    if (!config) {
      throw new Error(MISSING_CONFIG_MESSAGE);
    }

    if (!config.key) {
      throw new Error(MISSING_KEY_MESSAGE);
    }

    this._key = config.key;
  }

  get() {
    return localForage.getItem(this._key);
  }

  set(data) {
    return localForage.setItem(this._key, data);
  }

  clear() {
    return localForage.removeItem(this._key);
  }
}

export default Storage;
