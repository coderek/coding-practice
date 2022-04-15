module.exports = function (n) {
  let max = BigInt(1)

  for (let i=0;i<10;i++) {
    max = max * BigInt(10)
  }

  const exps = []
  let two = BigInt(1)
  while (two < max) {
    exps.push(two.toString().split('').sort().reverse())
    two = two * BigInt(2)
  }


  const chs = String(n).split('').sort().reverse()
  for (const e of exps) {
    if (e.length !== chs.length) continue

    let matched = true
    for (let i=0;i<chs.length;i++) {
      if (e[i] === chs[i]) {
        continue
      } else {
        matched = false
        break
      }
    }
    if (matched) {
      return true
    }
  }
  return false
}

