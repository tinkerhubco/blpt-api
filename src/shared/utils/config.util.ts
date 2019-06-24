import * as config from 'config';

export const ConfigUtil = {
  get: (key: string): any => {
    if (config.has(key)) {
      return config.get(key);
    }
  },
};

export default ConfigUtil;
