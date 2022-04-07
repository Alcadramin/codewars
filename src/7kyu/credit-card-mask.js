function maskify(cc) {
  return cc.length > 4
    ? `${Array(cc.length - 3).join("#")}${cc.substr(-4)}`
    : cc;
}

module.exports = maskify;
