const isUniq = memo((s) => {
  const seen = {};
  for (const ch of s) {
    if (seen[ch] !== undefined) return false;
    seen[ch] = true;
  }
  return true;
});

const seqs = memo(function (start, arr) {
  const seq = [arr[start]]
  if (!isUniq(arr[start])) {
    return [""]
  }
  for (let i = start + 1; i < arr.length; i++) {
    const s = seqs(i, arr);
    for (const str of s) {
      if (isUniq(arr[start] + str)) {
        seq.push(arr[start] + str)
      }
    }
  }
  return seq
});

function memo(fn) {
  let results = {};
  const ret = (start, ...rest) => {
    if (results[start] === undefined) {
      results[start] = fn(start, ...rest);
    }
    
    return results[start];
  };

  ret.clear = () => {
    results = {};
  };

  return ret;
}

module.exports = function (arr) {
  seqs.clear();
  isUniq.clear();
  let ret = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    const s = seqs(i, arr)
    const m = s.reduce((max, str) => Math.max(max, str.length), 0)
    ret = Math.max(ret, m);
  }
  return ret;
};
