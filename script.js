import { town, locations, weapons, potions, exchange, monsters, dungeon, role, inventoryDisplay, consumables} from "./locations.js";
import { mainButtons, checkCrit, ownerShip, endgameCheck, materialOwnership, playerStatus } from "./variables.js";

    let check = null;
    let invenCheck = null
    let rareMobChance = null
    let boosted = false;
    let ATKweak = 0;
    let DEFweak = 0;
    let AGweak = 0;

//Initiate buttons 
mainButtons.town.onclick = startAdventure;
mainButtons.shopButton.onclick = goStore;
mainButtons.dungeonButton.onclick = goCave;
mainButtons.bossButton.onclick = goBoss;
mainButtons.levelButton.onclick = levelUp;
mainButtons.Inventory.onclick = openInventory;

//When called, allows a location variable to be set
export function update(location) {

    mainButtons.shopButton.textContent = location["button text"][0];
    mainButtons.dungeonButton.textContent = location["button text"][1];
    mainButtons.bossButton.textContent = location["button text"][2];
    mainButtons.text.textContent = location.text;
    mainButtons.visual.src = location.source;

    mainButtons.shopButton.onclick = location["button functions"][0];
    mainButtons.dungeonButton.onclick = location["button functions"][1];
    mainButtons.bossButton.onclick = location["button functions"][2];
    mainButtons.backButton.onclick = location["button functions"][3];

}


function startAdventure() {
    mainButtons.town.remove()
    update(role[0])

    let bard = document.createElement("button")
    bard.textContent = "Bard"
    bard.setAttribute("id", "bardClass")
    bard.style.marginRight = "5px"

    let ranger = document.createElement("button")
    ranger.textContent = "Ranger"
    ranger.setAttribute("id", "rangerClass")
    ranger.style.marginRight = "5px"

    mainButtons.mainButtons.append(bard)
    mainButtons.mainButtons.append(ranger)

    let bardClass = document.getElementById("bardClass")
    let rangerClass = document.getElementById("rangerClass")

    bard.addEventListener("click", function() {
        text.textContent = "The Bard Path! An atypical choice indeed, but fitting for the player. You may be bestowed upon you fortune more often than not, but your offensive capabilties are severly weak. (Display more detailed stats in 'Display player stats' down below)"
        playerStatus.health = 150;
        playerStatus.maxHealth = 150;
        playerStatus.statPoints = 5;
        playerStatus.gold = 30000;
    
        playerStatus.critATK = 25
        playerStatus.critRate = 75
        
        playerStatus.st = 2;
        playerStatus.def = 4;
        playerStatus.ag = 11;
        playerStatus.int = 10;
        playerStatus.luck = 100;

        bardClass.addEventListener("dblclick", function() {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectBard = true;
        })
    })

    ranger.addEventListener("click", function() {
        text.textContent = "The Bard Path! An atypical choice indeed, but fitting for the player. You may be bestowed upon you fortune more often than not, but your offensive capabilties are severly weak. (Display more detailed stats in 'Display player stats' down below)"
        playerStatus.health = 150;
        playerStatus.maxHealth = 150;
        playerStatus.statPoints = 5;
        playerStatus.gold = 350;
    
        playerStatus.critATK = 25
        playerStatus.critRate = 75
        
        playerStatus.st = 2;
        playerStatus.def = 4;
        playerStatus.ag = 11;
        playerStatus.int = 10;

        rangerClass.addEventListener("dblclick", function() {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectRanger = true;
        })
    })

    mainButtons.mainButtonsHud.style.display = "block"
    // mainButtons.levelButton.style.display = "inline"
    // mainButtons.Inventory.style.display = "inline"
    // mainButtons.backButton.style.display = "inline"

    check = town[0]
}

function removeRangerBard() {
    let existingRanger = document.getElementById("rangerClass")
    let existingBard = document.getElementById("bardClass")

    if (existingBard) {
        existingBard.remove()
    }
    if (existingRanger) {
        existingRanger.remove()
    }
}

function showSecondButtons() {
    mainButtons.levelButton.style.display = "inline"
    mainButtons.Inventory.style.display = "inline"
    mainButtons.backButton.style.display = "inline"

    mainButtons.healthText.textContent = playerStatus.health
    mainButtons.displayMaxHealth.textContent = "/" + playerStatus.maxHealth
    mainButtons.goldText.textContent = playerStatus.gold
}

export function warriorSelect() {
    text.textContent = "You have chosen the Warrior Path! You specialize in great offensive power, however your speed compared to other classes, even though you'll get hit, your defense should make up for it! (Display more detailed stats in 'Display player stats' down below)" 
    playerStatus.health = 250;
    playerStatus.maxHealth = 250;
    playerStatus.statPoints = 5;
    playerStatus.gold = 125;

    playerStatus.critATK = 100
    playerStatus.critRate = 20

    playerStatus.st = 10;
    playerStatus.def = 7;
    playerStatus.ag = 5;
    playerStatus.int = 4;
    
    mainButtons.shopButton.addEventListener("dblclick", function() {
        if (endgameCheck.selectMage === false && endgameCheck.selectWarrior === false && endgameCheck.selectRogue === false) {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectWarrior = true;
        }
    })
}
export function mageSelect() {
    text.textContent = "You have chosen the Mage Path! You specialize in great precision and mystic spellcasting, beware of being hit, as a sorcerer defense is not your greatest suit, but striking hard and fast is. (Display more detailed stats in 'Display player stats' down below)"
    playerStatus.health = 175;
    playerStatus.maxHealth = 175;
    playerStatus.statPoints = 5;
    playerStatus.gold = 200;

    playerStatus.critATK = 175
    playerStatus.critRate = 40
    
    playerStatus.st = 3;
    playerStatus.def = 2;
    playerStatus.ag = 7;
    playerStatus.int = 14;

    mainButtons.dungeonButton.addEventListener("dblclick", function() {
        if (endgameCheck.selectMage === false && endgameCheck.selectWarrior === false && endgameCheck.selectRogue === false) {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectMage = true;
        }
    })
}
export function rogueSelect() {
    text.textContent = "You have chosen the Rogue Path! You are nimble and fast, being able to deal damage without getting hit, atleast most of the time. However your attack prowess is to be desired. (Display more detailed stats in 'Display player stats' down below)"
    playerStatus.health = 180;
    playerStatus.maxHealth = 180;
    playerStatus.statPoints = 5;
    playerStatus.gold = 500;

    playerStatus.critATK = 80
    playerStatus.critRate = 10
    
    playerStatus.st = 2;
    playerStatus.def = 0;
    playerStatus.ag = 16;
    playerStatus.int = 8;

    mainButtons.bossButton.addEventListener("dblclick", function() {
        if (endgameCheck.selectMage === false && endgameCheck.selectWarrior === false && endgameCheck.selectRogue === false) {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectRogue = true;
        }
    })
}
function levelUp() {
    if (playerStatus.xp >= playerStatus.xpRequired) {

        mainButtons.levelText.textContent = playerStatus.level += 1;

        playerStatus.xp -= playerStatus.xpRequired
        playerStatus.xpRequired = playerStatus.xpRequired + playerStatus.level;
        

        playerStatus.maxHealth += 10;
        playerStatus.health += 10;

        playerStatus.statPoints += 2;
    
        mainButtons.healthText.textContent = `${playerStatus.health}`;
        mainButtons.displayMaxHealth.textContent = `/${playerStatus.maxHealth}`;
    
        mainButtons.xpText.textContent = `${playerStatus.xp}`
        mainButtons.displayXpReq.textContent = `/${playerStatus.xpRequired}`
    }

}
//Town functions
export function goCheck() {
    update(check)
}
export function goTown() {
    update(town[0])
    check = town[0]
}
export function goStore() {
    update(locations[0])
    check = locations[0]
}
export function goCave() {
    update(locations[1])
    check = locations[1]
}
export function goBoss() {
    update(locations[0])
}
//Shop functions
export function weaponShop() {
    update(weapons[0])
    check = weapons[0]
}
export function potionShop() {
    update(potions[0])
    check = town[0]
}
export function exchangeStore() {
    update(exchange[0])
    check = town[0]
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

    if (boosted === true) {
        playerStatus.playerDamage *= 1.5;
    }

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

        if (ATKweak > 0) {
            ATKweak--;
        }
        if (DEFweak > 0) {
            DEFweak--;
        }
        if (AGweak > 0) {
            AGweak--;
        }

        if (ATKweak > 0 || DEFweak > 0 || AGweak > 0) {
            alert(`${ATKweak}x ATK Down, ${DEFweak}x DEF Down, ${AGweak}x AG Down`)
        }

        if (ATKweak == 0) {
            monster.atkPower = monster.peakATKPower;
        }
        if (DEFweak == 0) {
            monster.def = monster.peakDef;
        }
        if (AGweak == 0) {
            monster.ag = monster.peakAg;
        }

        alert(`+${goldGain} Gold\n+${xpGain}XP`)
        //Reset encounter
        update(dungeon[0])
        monster.health = monster.peakHealth;
        mainButtons.monsterStats.style.display = "none"
        mainButtons.monsterName.style.display = "none"
        mainButtons.monsterHealth.style.display = "none"

        console.clear()
    }
    
    if (monster.class == "timed") {
        let monsterEscape = Math.round(Math.random()*100)
        if (monsterEscape > 80) {
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
//Dungeon functions
export function opt1() {
    update(dungeon[0])
}
export function opt2() {
    update(dungeon[1])
}
export function opt3() {
    
}
//Enemies

export function fightSlime() {
    let luckDecimal = (playerStatus.luck+100)/100
    
    let rareMobChance = Math.round(Math.random()*(100)*luckDecimal)
    console.log("You rolled ", rareMobChance, " To get a rare encounter");

    if (rareMobChance > 0) {
        update(monsters[1])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = monsters[1].peakHealth
        monsterName.textContent = monsters[1].name
        monsterDEF.textContent = monsters[1].def
        monsterATK.textContent = monsters[1].atkPower
        monsterAG.textContent = monsters[1].ag
    
        check = monsters[1]
    }
    else {
        update(monsters[0])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = monsters[0].peakHealth
        monsterName.textContent = monsters[0].name
        monsterDEF.textContent = monsters[0].def
        monsterATK.textContent = monsters[0].atkPower
        monsterAG.textContent = monsters[0].ag
    
        check = monsters[0]
    }
}
export function fightFang() {
    update(monsters[2])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[2].peakHealth
    monsterName.textContent = monsters[2].name
    monsterDEF.textContent = monsters[2].def
    monsterATK.textContent = monsters[2].atkPower
    monsterAG.textContent = monsters[2].ag

    check = monsters[2]
}
export function fightGargoyle() {
    update(monsters[0])
    check = monsters[0]
}
export function fightA() {
    update(monsters[0])
}
export function fightB() {
    update(monsters[0])
}
export function fightC() {
    update(monsters[0])
}
//Rare drops
export function gainSlimeSuit() {
    
}
export function gainWolfSoul() {
    
}
export function gainStoneFist() {
    
}
export function gainScepter() {
    
}
export function gainDetermination() {
    
}
//Material
export function gainSlimeMats() {
    
}
export function gainWolfMats() {

}
export function gainRockMats() {

}
export function gainMagusMats() {

}

displayStatsButton.addEventListener("click", function() {
    let pElements = document.querySelectorAll("#statDisplay p");
    let buttonElements = document.querySelectorAll(".incrementer")

    playerStatus.intDecimal = (playerStatus.int + 100) / 100;
    playerStatus.intCritRate = playerStatus.critRate * playerStatus.intDecimal;
    playerStatus.intCritATK = playerStatus.critATK * playerStatus.intDecimal;

    mainButtons.displayHealth.textContent = `Health : ${Math.round(playerStatus.health)}`;
    mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`
    mainButtons.displayST.textContent = `ST : ${playerStatus.st}`;
    mainButtons.displayDEF.textContent = `DEF : ${playerStatus.def}`;
    mainButtons.displayAG.textContent = `AG : ${playerStatus.ag}`;
    mainButtons.displayINT.textContent = `INT : ${playerStatus.int}`
    mainButtons.displayCritR.textContent = `Crit Rate : ${(playerStatus.intCritRate).toFixed(2)}%`
    mainButtons.displayCritATK.textContent = `Crit ATK : ${(playerStatus.intCritATK).toFixed(2)}%`
    pElements.forEach(p => {
        p.style.display = "flex"
    })
    buttonElements.forEach(button => {
        button.style.display = "flex"
    })
    return playerStatus.intCritATK, playerStatus.intCritRate, playerStatus.intDecimal;
})

displayStatsButton.addEventListener("dblclick", function(){
    let pElements = document.querySelectorAll("#statDisplay p");
    let buttonElements = document.querySelectorAll(".incrementer")

    pElements.forEach(p => {
        p.style.display = "none"
    })
    buttonElements.forEach(button => {
        button.style.display = "none"
    })
})

STPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.st++;
        mainButtons.displayST.textContent = `ST : ${playerStatus.st}`;
    }
})
DEFPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.def++;
        mainButtons.displayDEF.textContent = `DEF : ${playerStatus.def}`;
    }
})
AGPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.ag++;
        mainButtons.displayAG.textContent = `AG : ${playerStatus.ag}`;
    }
})
INTPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.int++;
        mainButtons.displayINT.textContent = `INT : ${playerStatus.int}`
    }
})

export function goCommon() {
    update(weapons[1])
    check = weapons[1]
}
export function goRare() {
    if (playerStatus.level >= 10) {
        update(weapons[2])
        check = weapons[2]
    }
    else {
        text.textContent = `You need to be higher level!`
    }
}
export function goLegendary() {
    if (playerStatus.level >= 40) {
        update(weapons[3])
        check = weapons[3]
    }
    else {
        text.textContent = `You need to be higher level!`
    }

}
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
export function healPot() {
    let healAmount = 20;
    let newHealth = playerStatus.health + healAmount
    if (playerStatus.gold >= 30 && playerStatus.health < playerStatus.maxHealth) {
        playerStatus.health += healAmount
        healthText.textContent = playerStatus.health
        playerStatus.gold -= 20;
        if (newHealth > playerStatus.maxHealth) {
            playerStatus.health = playerStatus.maxHealth
            healthText.textContent = playerStatus.health
        }
        goldText.textContent = playerStatus.gold
    }
    else if (playerStatus.gold < 30) {
        text.textContent = "You don't have enough gold!"
    }
    else if (playerStatus.health == playerStatus.maxHealth) {
        text.textContent = "Your health is at its maximum."
    }
}
export function ATKPot() {
    if (playerStatus.gold >= 300 && boosted == false) {
        boosted = true;
        playerStatus.gold -= 300;
        goldText.textContent = playerStatus.gold
        text.textContent = "You will deal 50% more damage in the next battle!"
    }
    else if (boosted == true) {
        text.textContent = "You are already boosted!"
    }
    else if (playerStatus.gold < 300) {
        text.textContent = "You don't have enough gold!"
    }
}
export function MiscSelect() {
    update(potions[1])
}
export function debuff() {
    update(potions[2])
}
export function ATKdebuff() {
    if (playerStatus.gold >= 1250 && ATKweak < 5) {
        ATKweak = 5;
        monsters.forEach(monster => {
            monster.atkPower *= 0.75;
        })
        text.textContent = `You have applied a ATK debuff to your attacks. 25% decrease in monster attack power. `
        playerStatus.gold -= 1250
        goldText.textContent = playerStatus.gold
    }
    else if (ATKweak == 5) {
        text.textContent = "You have maximum stacks of this debuff!"
    }
    else if (playerStatus.gold < 1250) {
        text.textContent = "You don't have enough gold..."
    }
}
export function DEFdebuff() {
    if (playerStatus.gold >= 1500 && DEFweak < 5) {
        DEFweak = 5;
        monsters.forEach(monster => {
            monster.def *= 0.60;
        })
        text.textContent = `You have applied a DEF debuff to your attacks. 40% decrease in monster defense. `
        playerStatus.gold -= 1500
        goldText.textContent = playerStatus.gold
    }
    if (DEFweak == 5) {
        text.textContent = "You have maximum stacks of this debuff!"
    }
    else if (playerStatus.gold < 1500) {
        text.textContent = "You don't have enough gold..."
    }
}
export function AGdebuff() {
    if (playerStatus.gold >= 2000 && AGweak < 5) {
        AGweak = 5;
        monsters.forEach(monster => {
            monster.ag *= 0.75;
        })   
        text.textContent = `You have applied a AG debuff to your attacks. 25% decrease in monster agility. `
        playerStatus.gold -= 2000
        goldText.textContent = playerStatus.gold
    }
    else if (AGweak == 5) {
        text.textContent = "You have maximum stacks of this debuff!"
    }
    else if (playerStatus.gold < 2000) {
        text.textContent = "You don't have enough gold..."
    }
}
//
export function buff() {
    update(potions[3])
}
export function ATKbuff() {
    update(potions[3])
}
export function DEFbuff() {
    update(potions[3])
}
export function AGbuff() {
    update(potions[3])
}
export function luckPot() {
    if (playerStatus.gold >= 7777 && playerStatus.luck < 50) {
        playerStatus.gold -= 7777
        goldText.textContent = playerStatus.gold
        playerStatus.luck++;
        text.textContent = "Your luck has increased."
    }
    else if (playerStatus.gold < 7777) {
        text.textContent = "You don't have enough gold..."
    }
    else if (playerStatus.luck == 50 || playerStatus.luck > 50) {
        text.textContent = "Your luck cannot be increased anymore."
    }
}
export function openInventory() {
    update(inventoryDisplay[0])
}
export function openWeapons() {
    update(inventoryDisplay[1])
}
export function openConsumables() {
    update(inventoryDisplay[2])
}
export function explosives() {
    update(consumables[0])
}
export function statboost() {
    update(consumables[1])
}
export function mystery() {
    update(consumables[2])
}
export function openKey() {
    update(inventoryDisplay[3])
}