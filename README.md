# ETHDenver Hackathon Notes
# Deployments
Verify proof 0x7897e2050b129DC4934fe815807FC0Fe1C291194
https://blockscout.scroll.io/address/0x7897e2050b129DC4934fe815807FC0Fe1C291194

# Abis frontend will need for hackathon scope
VerifiedChain
# API Calls
## verified_chain.verify_proof(uint256 proof,  bytes32 verify)
Returns a boolean of the zk proof of the IA output
## verified_chain.getProofCouter()
Returns a counter of all proof verified
## verified_chain.create_proof(bytes32 proof)
Save the output of IA test encrypted to verify it later
## verified_chain.counter
Returns the position of the current proof
