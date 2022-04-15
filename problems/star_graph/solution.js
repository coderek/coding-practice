module.exports = function (edges) {
  const map = {}
  let m = [undefined, Number.MIN_VALUE]

  for (const [u, v] of edges) {
    map[u] = map[u]? map[u] + 1 : 1
    map[v] = map[v]? map[v] + 1 : 1
    if (m[1] < map[u]) {
      m = [u, map[u]]
    }
    if (m[1] < map[v]) {
      m = [v, map[v]]
    }
  }

  return m[0]
}
