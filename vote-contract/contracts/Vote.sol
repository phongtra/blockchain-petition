pragma solidity >0.4.21 <=0.7.0;


contract Vote {
    uint256 public votes;
    address owner;
    mapping(address => bool) hasVoted;
    mapping(address => string) addressToName;
    address[] votedAddresses;

    constructor() public {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, "must be owner");
        _;
    }
    modifier votedYet() {
        require(!hasVoted[msg.sender], "you have already voted");
        _;
    }

    function vote(string calldata _name) external votedYet {
        hasVoted[msg.sender] = true;
        addressToName[msg.sender] = _name;
        votedAddresses.push(msg.sender);
        votes++;
    }

    function nameFromAddress(address _search)
        external
        view
        returns (string memory)
    {
        return addressToName[_search];
    }

    function addressList() external view returns (address[] memory) {
        return votedAddresses;
    }

    function kill() public onlyOwner {
        selfdestruct(address(uint16(owner)));
    }
}
