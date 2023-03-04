// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.9;

/**
 * @title verified_chain
 * @dev Store & verify value in the proof variables
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
contract verified_chain {
    uint256 counter;

    mapping(uint256 => bytes32) public zkProofs;

    constructor() {
        counter = 0;
    }

    /**
     * @dev Verify if the proof is equal in blockchain
     * @param proof of the IA output
     * @param verify is the output of the IA
     */
    function verify_proof(uint256 proof, bytes32 verify)
        public
        view
        returns (bool)
    {
        return zkProofs[proof] == verify;
    }

    /**
     * @dev Save the proof in the blockchain
     * @param proof of the IA output
     */
    function create_proof(bytes32 proof) public {
        zkProofs[counter] = proof;
        counter++;
    }
}
