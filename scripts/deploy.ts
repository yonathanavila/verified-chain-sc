import { ethers } from "hardhat";

async function main() {

  const Lock = await ethers.getContractFactory("verified_chain");
  const lock = await Lock.deploy();

  const result = await lock.deployed();

  console.log(`verify chain deployed to ${lock.address}, and result is ${result}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
