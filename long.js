import { town, locations, weapons, potions, exchange, monsters, dungeon, role, inventoryDisplay} from "./locations.js";
import { mainButtons, checkCrit, ownerShip, endgameCheck, materialOwnership, playerStatus } from "./variables.js";
//Game mechanics
import { goStore, goCave, goBoss, goTown, goCheck, update} from "./script.js";
import { opt1, opt2, opt3 } from "./script.js";
//Roles
import { warriorSelect, mageSelect, rogueSelect, } from "./script.js";
//Store
import { weaponShop, potionShop, exchangeStore } from "./script.js";
import { goCommon, goRare, goLegendary } from "./script.js";
//Enemies
import { fightSlime,fightFang,fightGargoyle } from "./script.js";
import { fightA,fightB,fightC } from "./script.js";
//Mob drops
import { gainSlimeSuit,gainWolfSoul,gainStoneFist,gainScepter,gainDetermination } from "./script.js";
import { gainSlimeMats,gainWolfMats,gainRockMats,gainMagusMats } from "./script.js";
//Inventory
import { openInventory, openWeapons,openKey,openConsumables } from "./script.js";

export function zweiHander() {
    if (playerStatus.gold >= 300 && ownerShip.ownedZwei == false) {
        playerStatus.gold -= 300
        goldText.textContent = playerStatus.gold
        ownerShip.ownedZwei = true;

        playerStatus.st += 3
        playerStatus.def += 2

        text.innerHTML = "Item bought! <br> ST+3 <br> DEF+2"
    }
    else if (playerStatus.gold < 300) {
        text.textContent = "You don't have enough gold..."
    }
}
export function shortBow() {
    if (playerStatus.gold >= 200 && ownerShip.ownedShort == false) {
        playerStatus.gold -= 200
        goldText.textContent = playerStatus.gold
        ownerShip.ownedShort = true

        playerStatus.st += 1
        playerStatus.ag += 2

        text.innerHTML = "Item bought! <br> ST+1 <br> AG+2"
    }
    else if (playerStatus.gold < 200) {
        text.textContent = "You don't have enough gold..."
    }
}
export function magicWand() {
    if (playerStatus.gold >= 500 && ownerShip.ownedWand == false) {
        playerStatus.gold -= 500
        goldText.textContent = playerStatus.gold
        ownerShip.ownedWand = true

        playerStatus.int += 3
        playerStatus.def += 2

        text.innerHTML = "Item bought! <br> INT+3 <br> DEF+2"
    }
    else if (playerStatus.gold < 500) {
        text.textContent = "You don't have enough gold..."
    }
}
export function rareKatana() {
    if (playerStatus.gold >= 1200 && ownerShip.ownedKat == false) {
        playerStatus.gold -= 1200
        goldText.textContent = playerStatus.gold
        ownerShip.ownedKat = true

        playerStatus.st += 5
        playerStatus.def += 2
        playerStatus.ag += 2
        playerStatus.int += 2

        text.innerHTML = "Item bought! <br> ST+5 <br> DEF+2 <br> AG+2 <br> INT+2"
    }
    else if (playerStatus.gold < 1200) {
        text.textContent = "You don't have enough gold..."
    }
}
export function clayMore() {
    if (playerStatus.gold >= 1800 && ownerShip.ownedClay == false) {
        playerStatus.gold -= 1800
        goldText.textContent = playerStatus.gold
        ownerShip.ownedClay = true

        playerStatus.st += 7
        playerStatus.def += 4

        text.innerHTML = "Item bought! <br> ST+7 <br> DEF+4"
    }
    else if (playerStatus.gold < 1800) {
        text.textContent = "You don't have enough gold..."
    }
}
export function gemStaff() {
    if (playerStatus.gold >= 2500 && ownerShip.ownedGem == false) {
        playerStatus.gold -= 2500
        goldText.textContent = playerStatus.gold
        ownerShip.ownedGem = true

        playerStatus.int += 9
        playerStatus.def += 4

        text.innerHTML = "Item bought! <br> INT+9 <br> DEF+4"
    }
    else if (playerStatus.gold < 2500) {
        text.textContent = "You don't have enough gold..."
    }
}
export function greatestSword() {
    if (playerStatus.gold >= 8000 && ownerShip.ownedGreat == false) {
        playerStatus.gold -= 8000
        goldText.textContent = playerStatus.gold
        ownerShip.ownedGreat = true

        playerStatus.st += 14
        playerStatus.def += 15

        text.innerHTML = "Item bought! <br> ST+14 <br> DEF+15"
    }
    else if (playerStatus.gold < 8000) {
        text.textContent = "You don't have enough gold..."
    }
}
export function shadowBow() {
    if (playerStatus.gold >= 7700 && ownerShip.ownedShadow == false) {
        playerStatus.gold -= 7700
        goldText.textContent = playerStatus.gold
        ownerShip.ownedShadow = true

        playerStatus.ag += 10
        playerStatus.int += 6
        playerStatus.st += 3

        text.innerHTML = "Item bought! <br> ST+3 <br> AG+10 <br> INT+6"
    }
    else if (playerStatus.gold < 7700) {
        text.textContent = "You don't have enough gold..."
    }
}
export function mechanicalStaff() {
    if (playerStatus.gold >= 15000 && ownerShip.ownedMechanic == false) {
        playerStatus.gold -= 15000
        goldText.textContent = playerStatus.gold
        ownerShip.ownedMechanic = true

        playerStatus.ag += 10
        playerStatus.int += 10
        playerStatus.st += 10
        playerStatus.def += 5

        text.innerHTML = "Item bought! <br> ST+10 <br> DEF+5 <br> AG+10 <br> INT+10"
    }
    else if (playerStatus.gold < 15000) {
        text.textContent = "You don't have enough gold..."
    }
}

//Gameplay functions
export function attack(monster) {

    //Defense decimal 
    let monsterDecimalDEF = (monster.def+100)/100
    let playerDecimalDEF = (playerStatus.def+100)/100;

    //Damage formula
    playerStatus.playerDamage = Math.round((Math.random()*playerStatus.st)/monsterDecimalDEF)+1
    let monsterDamage = Math.round((Math.random()*monster.atkPower)/playerDecimalDEF)

    //Speed formula
    let playerSpeed = Math.round(Math.random()*playerStatus.ag)+1
    let monsterSpeed = Math.round(Math.random()*monster.ag)+1
    console.log(`Your speed is ${playerSpeed}`);
    console.log(`Monster speed is ${monsterSpeed}`);

    //IntCrit formula
    playerStatus.intDecimal = (playerStatus.int + 100) / 100;
    playerStatus.intCritRate = playerStatus.critRate * playerStatus.intDecimal;
    playerStatus.intCritATK = playerStatus.critATK * playerStatus.intDecimal; //100*1.01 = 101
    let intCritATKDecimal = (playerStatus.intCritATK+100)/100 //101+100=201 // 201/100

    //Crit formula
    console.log("Damage before crit: ", playerStatus.playerDamage);
    let critATKDecimal = intCritATKDecimal
    let critRoll = Math.round(Math.random()*100)

    if (playerStatus.intCritRate >= critRoll) {
    playerStatus.playerDamage *= critATKDecimal; 
    checkCrit.achievedCrit = true;
    }

    //Luck formula
    let luckDecimal = (playerStatus.luck+100)/100

    //Attack (Speed match)
    if (playerSpeed > monsterSpeed && checkCrit.achievedCrit == true) {
        monster.health -= playerStatus.playerDamage
        mainButtons.text.innerHTML = `
        Player Advantage! (Monster Attack evaded)<br>
        CRIT! ${critATKDecimal.toFixed(2)}x You hit for ${Math.round(playerStatus.playerDamage)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
    }
    else if (playerSpeed > monsterSpeed && checkCrit.achievedCrit == false) {
        monster.health -= playerStatus.playerDamage
        mainButtons.text.innerHTML = `
        Player Advantage! (Monster Attack evaded)<br>
        You hit for ${Math.round(playerStatus.playerDamage)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
    }
    else if (playerSpeed < monsterSpeed && checkCrit.achievedCrit == true) {
        playerStatus.health -= monsterDamage
        monster.health -= (playerStatus.playerDamage)/2
        mainButtons.text.innerHTML = `
        Monster Advantage! (Monster attack recieved, Player attack halved)<br>
        CRIT! ${critATKDecimal.toFixed(2)}x, You hit for ${Math.round(playerStatus.playerDamage/2)}HP! 
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
        mainButtons.healthText.textContent = `${Math.round(playerStatus.health)}`
    }
    else if (playerSpeed < monsterSpeed && checkCrit.achievedCrit == false) {
        playerStatus.health -= monsterDamage
        monster.health -= (playerStatus.playerDamage)/2                            
        mainButtons.text.innerHTML = `
        Monster Advantage! (Monster attack recieved, Player attack halved)<br>
        You hit for ${Math.round(playerStatus.playerDamage/2)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
        mainButtons.healthText.textContent = `${Math.round(playerStatus.health)}`
    }
    else if (playerSpeed == monsterSpeed) {
        text.textContent = `Speed is equal, both attacks were negated.`
    }
    else {
        text.textContent = `Not intended`
    }

    //Monster death
    if (monster.health <= 0) {
        //Rewards
        let goldGain = Math.round(Math.random()* (monster.goldReward) *luckDecimal)
        playerStatus.gold += goldGain;
        mainButtons.goldText.textContent = playerStatus.gold;

        let xpGain = Math.round(Math.random()* (monster.xpYield) *luckDecimal)
        playerStatus.xp += xpGain;
        mainButtons.xpText.textContent = playerStatus.xp

        alert(`+${goldGain} Gold\n+${xpGain}XP`)
        //Reset encounter
        update(dungeon[0])
        monster.health = monster.peakHealth;
        mainButtons.monsterStats.style.display = "none"
        mainButtons.monsterName.style.display = "none"
        mainButtons.monsterHealth.style.display = "none"

        console.clear()
    }
    
    if (monster.class === "timed") {
        let monsterEscape = Math.round(Math.random()*100)
        if (monsterEscape > 90) {
            alert("The monster escaped...")
            update(locations[1])
            monster.health = monster.peakHealth;
            mainButtons.monsterStats.style.display = "none"
            mainButtons.monsterName.style.display = "none"
            mainButtons.monsterHealth.style.display = "none"
        }
    }
}
export function defend(monster) {
        //Defense decimal 
        let playerDecimalDEF = (playerStatus.def+100)/100;
        let playerProcentDEF = Math.round((playerDecimalDEF-1)*200)
    
        //Damage formula
        let monsterDamage = Math.round((Math.random()*monster.atkPower)/playerDecimalDEF)/2
    
        //Accrued damage (player)
        playerStatus.health -= monsterDamage;
        mainButtons.healthText.textContent = Math.round(playerStatus.health);
    
        //Battle Info
        text.innerHTML = `MITIGATED: ${playerProcentDEF}% of the attack! <br>
                          DAMAGE TAKEN: ${monsterDamage}HP`
    
        //Monster death
        if (monster.health <= 0) {
            alert("test")
            //Reset encounter
            update(dungeon[0])
            monster.health = monster.peakHealth;
            mainButtons.monsterStats.style.display = "none"
            mainButtons.monsterName.style.display = "none"
            mainButtons.monsterHealth.style.display = "none"
            //Rewards
            playerStatus.gold += monster.goldReward;
            mainButtons.goldText.textContent = playerStatus.gold;
        }
}
export function run() {
    update(town[0])
    mainButtons.monsterStats.style.display = "none"
    mainButtons.monsterName.style.display = "none"
    mainButtons.monsterHealth.style.display = "none"
    //Shuffles through monster array and resets each monster health to peak
    monsters.forEach(monster => {
        monster.health = monster.peakHealth
    })
}