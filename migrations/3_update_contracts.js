var Reversi = artifacts.require('./Reversi.sol')
var Support = artifacts.require('./Support.sol')
var Clovers = artifacts.require('./Clovers.sol')
var CloversMetadata = artifacts.require('./CloversMetadata.sol')
var CloversController = artifacts.require('./CloversController.sol')
var ClubTokenController = artifacts.require('./ClubTokenController.sol')
var ClubToken = artifacts.require('./ClubToken.sol')
var SimpleCloversMarket = artifacts.require('./SimpleCloversMarket.sol')
// var CurationMarket = artifacts.require('./CurationMarket.sol')

const gasToCash = require('../helpers/utils').gasToCash
const _ = require('../helpers/utils')._

var {
  stakeAmount,
  ethPrice,
  oneGwei,
  gasPrice,
  stakePeriod,
  payMultiplier,
  priceMultiplier,
  basePrice,
  decimals,
  reserveRatio,
  virtualBalance,
  virtualSupply,
  oracle,
  updateCloversController,
  updateClubTokenController
} = require('../helpers/migVals')

module.exports = (deployer, network, accounts) => {
  if (network === 'test') return
  deployer.then(async () => {
    try {
      clovers = await Clovers.deployed()
      cloversMetadata = await CloversMetadata.deployed()
      clubToken = await ClubToken.deployed()
      reversi = await Reversi.deployed()
      support = await Support.deployed()
      clubTokenController = await ClubTokenController.deployed()
      cloversController = await CloversController.deployed()
      simpleCloversMarket = await SimpleCloversMarket.deployed()
      // curationMarket = await CurationMarket.deployed()

      // Update Clovers.sol
      // -w CloversController address
      // -w ClubTokenController address

      var currentCloversControllerAddress = await clovers.cloversController()
      if (currentCloversControllerAddress.toLowerCase() !== cloversController.address.toLowerCase()) {
        console.log(`update clovers with cloversControllerAddress from ${currentCloversControllerAddress} to ${cloversController.address}`)
        var tx = await clovers.updateCloversControllerAddress(
          cloversController.address
        )
      } else {
        console.log('cloversController didnt change in clovers')
      }

      var currentClubTokenControllerAddress = await clovers.clubTokenController()

      if (currentClubTokenControllerAddress.toLowerCase() !== clubTokenController.address.toLowerCase()) {
        console.log(`update clovers with clubTokenControllerAddress from ${currentClubTokenControllerAddress} to ${clubTokenController.address}`)
        var tx = await clovers.updateClubTokenController(
          clubTokenController.address
        )
      } else {
        console.log('clubTokenController didnt change in clovers')
      }

      // Update ClubToken.sol
      // -w CloversController address
      // -w ClubTokenController address

      var currentCloversControllerAddress = await clubToken.cloversController()
      if (currentCloversControllerAddress.toLowerCase() !== cloversController.address.toLowerCase()) {
        console.log(`update clubToken with cloversController from ${currentCloversControllerAddress} to ${cloversController.address}`)
        var tx = await clubToken.updateCloversControllerAddress(
          cloversController.address
        )
      } else {
        console.log('cloversController didnt change in clubToken')
      }

      var currentClubTokenControllerAddress = await clubToken.clubTokenController()
      if (currentClubTokenControllerAddress.toLowerCase() !== clubTokenController.address.toLowerCase()) {
        console.log(`update clubToken with clubTokenControllerAddress from ${currentClubTokenControllerAddress} to ${clubTokenController.address}`)
        var tx = await clubToken.updateClubTokenControllerAddress(
          clubTokenController.address
        )
      } else {
        console.log(`clubTokenController didnt change in clubToken`)
      }

      // Update CloversController
      await updateCloversController({
        cloversController,
        // curationMarket,
        simpleCloversMarket
      })

      // Update ClubTokenController
      await updateClubTokenController({
        clubTokenController,
        // curationMarket,
        simpleCloversMarket,
        support
      })
    } catch (error) {
      console.log(error)
    }
  })
}
