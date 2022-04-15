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

const shift = memo(function (ch) {
  const code = ch.charCodeAt(0) + 1
  const acode = 'a'.charCodeAt(0)
  const zcode = 'z'.charCodeAt(0)
  const mod = (code - acode) % (1 + zcode - acode)
  return String.fromCharCode(mod + acode)
})

module.exports = function (s, shifts) {
  let ret = s.split('')
  const sums = [0]
  for (let i=0;i<shifts.length;i++) {
    sums.unshift(sums[0] + shifts[shifts.length - i - 1])
  }
  for (let i=0;i<shifts.length;i++) {
    const p = (sums[i]) % 26
    for (let k=0;k<p;k++) {
      ret[i] = shift(ret[i])
    }
  }
  return ret.join('')
}
