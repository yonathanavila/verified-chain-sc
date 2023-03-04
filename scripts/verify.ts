const hre = require("hardhat");

async function main() {
    await hre.run("verify:verify", {
        address: "0xD0ce6D448227F2C5239116Be26a1bB91BfB1c326",
        constructorArguments: [],
        contract: "contracts/verified_chain.sol:verified_chain"
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    // eslint-disable-next-line no-process-exit
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        // eslint-disable-next-line no-process-exit
        process.exit(1);
    });