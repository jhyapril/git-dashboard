import { helper } from '@ember/component/helper';

export function isMore(value) {
  return value >= 0;
}

export default helper(isMore);
