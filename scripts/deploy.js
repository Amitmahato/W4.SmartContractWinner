const hre = require("hardhat");

async function main() {
  const emmitterContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const EmitWinner = await hre.ethers.getContractFactory("EmitWinner");
  const emitWinner = await EmitWinner.deploy();

  await emitWinner.triggerWinningAttempt(emmitterContractAddress);

  // Transaction on Goerli Network for EmitWinner Contract creation
  // https://goerli.etherscan.io/tx/0x504b560c9fa35b98155acff32d895ba135095b391c7c422d08567b929880be4a

  // Deployed EmitWinner Contract:
  // https://goerli.etherscan.io/address/0x4611956bdb75f35bc3bf83f073d2295dd68f7286

  // Transaction to trigger triggerWinningAttempt function on EmitWinner
  // https://goerli.etherscan.io/tx/0x91ebb1be7f92d364740c59480b2e4169377a846241a6f2f86d2529bdf29cfccf

  // Internal Transaction that triggers attempt function on EmmiterContract (the contract provided on the exercise)
  // https://goerli.etherscan.io/tx/0x91ebb1be7f92d364740c59480b2e4169377a846241a6f2f86d2529bdf29cfccf#internal
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
