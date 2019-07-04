exports.add = async function add(x, y) {
  const z = await cool();
  return x + y;
};

async function cool() {
  return 'whatever'
}
