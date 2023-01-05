// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface EmmiterContract {
    function attempt() external;
}

contract EmitWinner {
    function triggerWinningAttempt(address emmiterContractAddress) external {
        EmmiterContract(emmiterContractAddress).attempt();
    }
}
