module.exports = {
	"Clovers": {
		"abi": [
			{
				"constant": true,
				"inputs": [
					{
						"name": "_interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "name",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getApproved",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "cloversController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "totalSupply",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "InterfaceId_ERC165",
				"outputs": [
					{
						"name": "",
						"type": "bytes4"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_index",
						"type": "uint256"
					}
				],
				"name": "tokenOfOwnerByIndex",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "exists",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_index",
						"type": "uint256"
					}
				],
				"name": "tokenByIndex",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "totalSymmetries",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "ownerOf",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"name": "clovers",
				"outputs": [
					{
						"name": "keep",
						"type": "bool"
					},
					{
						"name": "symmetries",
						"type": "uint256"
					},
					{
						"name": "blockMinted",
						"type": "uint256"
					},
					{
						"name": "rewards",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "renounceOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "cloversMetadata",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "symbol",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubTokenController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "_data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "name",
						"type": "string"
					},
					{
						"name": "symbol",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					}
				],
				"name": "OwnershipRenounced",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_from",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_to",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_approved",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "_owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "_operator",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "_approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "implementation",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "tokenURI",
				"outputs": [
					{
						"name": "_infoUrl",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "moves",
						"type": "bytes28[2]"
					}
				],
				"name": "getHash",
				"outputs": [
					{
						"name": "",
						"type": "bytes32"
					}
				],
				"payable": false,
				"stateMutability": "pure",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getKeep",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getBlockMinted",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getCloverMoves",
				"outputs": [
					{
						"name": "",
						"type": "bytes28[2]"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getReward",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getSymmetries",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "getAllSymmetries",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					},
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "moveEth",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					},
					{
						"name": "_token",
						"type": "address"
					}
				],
				"name": "moveToken",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					},
					{
						"name": "_token",
						"type": "address"
					}
				],
				"name": "approveToken",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "value",
						"type": "bool"
					}
				],
				"name": "setKeep",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "setBlockMinted",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "moves",
						"type": "bytes28[2]"
					}
				],
				"name": "setCloverMoves",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "setReward",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "_symmetries",
						"type": "uint256"
					}
				],
				"name": "setSymmetries",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_totalSymmetries",
						"type": "uint256"
					},
					{
						"name": "RotSym",
						"type": "uint256"
					},
					{
						"name": "Y0Sym",
						"type": "uint256"
					},
					{
						"name": "X0Sym",
						"type": "uint256"
					},
					{
						"name": "XYSym",
						"type": "uint256"
					},
					{
						"name": "XnYSym",
						"type": "uint256"
					}
				],
				"name": "setAllSymmetries",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "deleteClover",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_cloversController",
						"type": "address"
					}
				],
				"name": "updateCloversControllerAddress",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_cloversMetadata",
						"type": "address"
					}
				],
				"name": "updateCloversMetadataAddress",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clubTokenController",
						"type": "address"
					}
				],
				"name": "updateClubTokenController",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "unmint",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {

				},
				"address": "0x6e6f5ea57a9aae715df8b6b912ca54d1f5ea9a27",
				"transactionHash": null
			}
		}
	},
	"CloversController": {
		"abi": [
			{
				"constant": true,
				"inputs": [

				],
				"name": "clovers",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "token",
						"type": "address"
					}
				],
				"name": "reclaimToken",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "payMultiplier",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "bytes32"
					}
				],
				"name": "commits",
				"outputs": [
					{
						"name": "collected",
						"type": "bool"
					},
					{
						"name": "stake",
						"type": "uint256"
					},
					{
						"name": "committer",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "paused",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "stakeAmount",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "renounceOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "curationMarket",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "oracle",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "simpleCloversMarket",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "reclaimEther",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubTokenController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "from_",
						"type": "address"
					},
					{
						"name": "value_",
						"type": "uint256"
					},
					{
						"name": "data_",
						"type": "bytes"
					}
				],
				"name": "tokenFallback",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "stakePeriod",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "basePrice",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "priceMultiplier",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubToken",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_clovers",
						"type": "address"
					},
					{
						"name": "_clubToken",
						"type": "address"
					},
					{
						"name": "_clubTokenController",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "movesHash",
						"type": "bytes32"
					},
					{
						"indexed": false,
						"name": "owner",
						"type": "address"
					}
				],
				"name": "cloverCommitted",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "moves",
						"type": "bytes28[2]"
					},
					{
						"indexed": false,
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "stake",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "reward",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "symmetries",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "keep",
						"type": "bool"
					}
				],
				"name": "cloverClaimed",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "stake",
						"type": "uint256"
					}
				],
				"name": "stakeRetrieved",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "moves",
						"type": "bytes28[2]"
					},
					{
						"indexed": false,
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "challenger",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "stake",
						"type": "uint256"
					}
				],
				"name": "cloverChallenged",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					}
				],
				"name": "OwnershipRenounced",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "movesHash",
						"type": "bytes32"
					}
				],
				"name": "getStake",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "movesHash",
						"type": "bytes32"
					}
				],
				"name": "getCommit",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "getMovesHash",
				"outputs": [
					{
						"name": "",
						"type": "bytes32"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "moves",
						"type": "bytes28[2]"
					}
				],
				"name": "isValid",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "error",
						"type": "bool"
					},
					{
						"name": "complete",
						"type": "bool"
					}
				],
				"name": "isValidGame",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "pure",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "isVerified",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_symmetries",
						"type": "uint256"
					}
				],
				"name": "calculateReward",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_symmetries",
						"type": "uint256"
					}
				],
				"name": "getPrice",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "moves",
						"type": "bytes28[2]"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "_symmetries",
						"type": "uint256"
					},
					{
						"name": "_keep",
						"type": "bool"
					}
				],
				"name": "claimClover",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "retrieveStake",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_board",
						"type": "bytes16"
					}
				],
				"name": "convertBytes16ToUint",
				"outputs": [
					{
						"name": "number",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "challengeClover",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_paused",
						"type": "bool"
					}
				],
				"name": "updatePaused",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_curationMarket",
						"type": "address"
					}
				],
				"name": "updateCurationMarket",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_oracle",
						"type": "address"
					}
				],
				"name": "updateOracle",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_simpleCloversMarket",
						"type": "address"
					}
				],
				"name": "updateSimpleCloversMarket",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clubTokenController",
						"type": "address"
					}
				],
				"name": "updateClubTokenController",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_stakeAmount",
						"type": "uint256"
					}
				],
				"name": "updateStakeAmount",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_stakePeriod",
						"type": "uint256"
					}
				],
				"name": "updateStakePeriod",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_payMultiplier",
						"type": "uint256"
					}
				],
				"name": "updatePayMultipier",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_priceMultiplier",
						"type": "uint256"
					}
				],
				"name": "updatePriceMultipier",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_basePrice",
						"type": "uint256"
					}
				],
				"name": "updateBasePrice",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "movesHash",
						"type": "bytes32"
					},
					{
						"name": "committer",
						"type": "address"
					}
				],
				"name": "_setCommit",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {
					"Reversi": "0xbff258e5c379ac4fe61ac005f4f341476a2ab180"
				},
				"address": "0x82f2642846a92f7717c484967677a92353652a74",
				"transactionHash": null
			}
		}
	},
	"ClubToken": {
		"abi": [
			{
				"constant": true,
				"inputs": [

				],
				"name": "mintingFinished",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "name",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "cloversController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "totalSupply",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "decimals",
				"outputs": [
					{
						"name": "",
						"type": "uint8"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "mint",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_subtractedValue",
						"type": "uint256"
					}
				],
				"name": "decreaseApproval",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "renounceOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "finishMinting",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "symbol",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubTokenController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transfer",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_spender",
						"type": "address"
					},
					{
						"name": "_addedValue",
						"type": "uint256"
					}
				],
				"name": "increaseApproval",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_owner",
						"type": "address"
					},
					{
						"name": "_spender",
						"type": "address"
					}
				],
				"name": "allowance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_name",
						"type": "string"
					},
					{
						"name": "_symbol",
						"type": "string"
					},
					{
						"name": "_decimals",
						"type": "uint8"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "burner",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Burn",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "Mint",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [

				],
				"name": "MintFinished",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					}
				],
				"name": "OwnershipRenounced",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "spender",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "to",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clubTokenController",
						"type": "address"
					}
				],
				"name": "updateClubTokenControllerAddress",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_cloversController",
						"type": "address"
					}
				],
				"name": "updateCloversControllerAddress",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_from",
						"type": "address"
					},
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_burner",
						"type": "address"
					},
					{
						"name": "_value",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "moveEth",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					},
					{
						"name": "_token",
						"type": "address"
					}
				],
				"name": "moveToken",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_to",
						"type": "address"
					},
					{
						"name": "_amount",
						"type": "uint256"
					},
					{
						"name": "_token",
						"type": "address"
					}
				],
				"name": "approveToken",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {

				},
				"address": "0x60217dcbf6a41bdf68df163199412f25992bc08b",
				"transactionHash": null
			}
		}
	},
	"ClubTokenController": {
		"abi": [
			{
				"constant": true,
				"inputs": [

				],
				"name": "reserveRatio",
				"outputs": [
					{
						"name": "",
						"type": "uint32"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "support",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "token",
						"type": "address"
					}
				],
				"name": "reclaimToken",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "virtualSupply",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_supply",
						"type": "uint256"
					},
					{
						"name": "_connectorBalance",
						"type": "uint256"
					},
					{
						"name": "_connectorWeight",
						"type": "uint32"
					},
					{
						"name": "_depositAmount",
						"type": "uint256"
					}
				],
				"name": "calculatePurchaseReturn",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_supply",
						"type": "uint256"
					},
					{
						"name": "_connectorBalance",
						"type": "uint256"
					},
					{
						"name": "_connectorWeight",
						"type": "uint32"
					},
					{
						"name": "_sellAmount",
						"type": "uint256"
					}
				],
				"name": "calculateSaleReturn",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "version",
				"outputs": [
					{
						"name": "",
						"type": "string"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "paused",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_fromConnectorBalance",
						"type": "uint256"
					},
					{
						"name": "_fromConnectorWeight",
						"type": "uint32"
					},
					{
						"name": "_toConnectorBalance",
						"type": "uint256"
					},
					{
						"name": "_toConnectorWeight",
						"type": "uint32"
					},
					{
						"name": "_amount",
						"type": "uint256"
					}
				],
				"name": "calculateCrossConnectorReturn",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "renounceOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "curationMarket",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "simpleCloversMarket",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "from_",
						"type": "address"
					},
					{
						"name": "value_",
						"type": "uint256"
					},
					{
						"name": "data_",
						"type": "bytes"
					}
				],
				"name": "tokenFallback",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubToken",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "virtualBalance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_clubToken",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "buyer",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "tokens",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "poolBalance",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "tokenSupply",
						"type": "uint256"
					}
				],
				"name": "Buy",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "seller",
						"type": "address"
					},
					{
						"indexed": false,
						"name": "tokens",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "value",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "poolBalance",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "tokenSupply",
						"type": "uint256"
					}
				],
				"name": "Sell",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					}
				],
				"name": "OwnershipRenounced",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "poolBalance",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "buyValue",
						"type": "uint256"
					}
				],
				"name": "getBuy",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "sellAmount",
						"type": "uint256"
					}
				],
				"name": "getSell",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_paused",
						"type": "bool"
					}
				],
				"name": "updatePaused",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_reserveRatio",
						"type": "uint32"
					}
				],
				"name": "updateReserveRatio",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_virtualSupply",
						"type": "uint256"
					}
				],
				"name": "updateVirtualSupply",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_virtualBalance",
						"type": "uint256"
					}
				],
				"name": "updateVirtualBalance",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_simpleCloversMarket",
						"type": "address"
					}
				],
				"name": "updateSimpleCloversMarket",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_curationMarket",
						"type": "address"
					}
				],
				"name": "updateCurationMarket",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_support",
						"type": "address"
					}
				],
				"name": "updateSupport",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "donate",
				"outputs": [

				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "from",
						"type": "address"
					},
					{
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "burn",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "from",
						"type": "address"
					},
					{
						"name": "to",
						"type": "address"
					},
					{
						"name": "amount",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "buyer",
						"type": "address"
					}
				],
				"name": "buy",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "sellAmount",
						"type": "uint256"
					}
				],
				"name": "sell",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {

				},
				"address": "0x8f0c194840259abac814308d2fe1396190b6dbc5",
				"transactionHash": null
			}
		}
	},
	"SimpleCloversMarket": {
		"abi": [
			{
				"constant": true,
				"inputs": [

				],
				"name": "clovers",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "cloversController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "renounceOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubTokenController",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "clubToken",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_newOwner",
						"type": "address"
					}
				],
				"name": "transferOwnership",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_clovers",
						"type": "address"
					},
					{
						"name": "_clubToken",
						"type": "address"
					},
					{
						"name": "_clubTokenController",
						"type": "address"
					},
					{
						"name": "_cloversController",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"indexed": false,
						"name": "price",
						"type": "uint256"
					}
				],
				"name": "updatePrice",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					}
				],
				"name": "OwnershipRenounced",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"name": "previousOwner",
						"type": "address"
					},
					{
						"indexed": true,
						"name": "newOwner",
						"type": "address"
					}
				],
				"name": "OwnershipTransferred",
				"type": "event"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "sellFrom",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "sellPrice",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clubTokenController",
						"type": "address"
					}
				],
				"name": "updateClubTokenController",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_cloversController",
						"type": "address"
					}
				],
				"name": "updateCloversController",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clubToken",
						"type": "address"
					}
				],
				"name": "updateClubToken",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_clovers",
						"type": "address"
					}
				],
				"name": "updateClovers",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "removeSell",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"name": "price",
						"type": "uint256"
					}
				],
				"name": "sell",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "buy",
				"outputs": [

				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {

				},
				"address": "0x2a2c1c046b7873b40ce711405ebfc8c8d6bbebc3",
				"transactionHash": null
			}
		}
	},
	"Support": {
		"abi": [
			{
				"constant": true,
				"inputs": [

				],
				"name": "active",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "totalContributions",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "contributions",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "withdrawn",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "totalTokens",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "owner",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"name": "whitelist",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "limit",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "done",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "remainingTokens",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [

				],
				"name": "bondingCurve",
				"outputs": [
					{
						"name": "",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"name": "_limit",
						"type": "uint256"
					},
					{
						"name": "_bondingCurve",
						"type": "address"
					}
				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"payable": true,
				"stateMutability": "payable",
				"type": "fallback"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "whitelisted",
						"type": "address"
					}
				],
				"name": "addToWhitelist",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "whitelisted",
						"type": "address"
					}
				],
				"name": "onWhitelist",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "whitelisted",
						"type": "address"
					}
				],
				"name": "hasWithdrawn",
				"outputs": [
					{
						"name": "",
						"type": "bool"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": true,
				"inputs": [
					{
						"name": "whitelisted",
						"type": "address"
					}
				],
				"name": "currentContribution",
				"outputs": [
					{
						"name": "",
						"type": "uint256"
					}
				],
				"payable": false,
				"stateMutability": "view",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "blacklisted",
						"type": "address"
					}
				],
				"name": "removeFromWhitelist",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "support",
				"outputs": [

				],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_active",
						"type": "bool"
					}
				],
				"name": "setActive",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_limit",
						"type": "uint256"
					}
				],
				"name": "setLimit",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "makeBuy",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"constant": false,
				"inputs": [

				],
				"name": "withdraw",
				"outputs": [

				],
				"payable": false,
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"networks": {
			"4": {
				"events": {

				},
				"links": {

				},
				"address": "0xe280ccac20476ab7cd59ee5dfd92b1f1bc3b6574",
				"transactionHash": null
			}
		}
	}
}
