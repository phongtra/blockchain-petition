const Vote = artifacts.require('Vote');

contract('Vote', (accounts) => {
  let contract;
  let [bob, alice] = accounts;
  beforeEach(async () => {
    contract = await Vote.new();
  });
  it('should allow to vote', async () => {
    const result = await contract.vote('Phong', { from: bob });
    const voteCount = await contract.votes({ from: bob });
    const addressList = [bob];
    const list = await contract.addressList({ from: alice });
    const name = await contract.nameFromAddress(bob, { from: alice });
    assert.equal(result.receipt.status, true);
    assert.equal(voteCount, 1);
    assert.equal(JSON.stringify(list), JSON.stringify(addressList));
    assert.equal(name, 'Phong');
  });
  it('should not allow to vote twice', async () => {
    try {
      await contract.vote('Phong', { from: bob });
      const result = await contract.vote('Phong', { from: bob });
      assert(false);
    } catch {
      assert(true);
    }
  });
  afterEach(async () => {
    await contract.kill();
  });
});
