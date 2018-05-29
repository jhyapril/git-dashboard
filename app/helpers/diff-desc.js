import { helper } from '@ember/component/helper';

export function diffDesc(value) {
  if(value > 0) {
    return "Good job, you have made " + value + " more";
  } else {
    if(value == 0) {
      return "Hmm, there is no difference from your previous";
    } else {
      value *= -1;
      return "Oh, you have made " + value + " less";
    }
  }
}

export default helper(diffDesc);
