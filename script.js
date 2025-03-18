import { town, locations, weapons, potions, exchange, monsters, dungeon, role, inventoryDisplay, consumables, rare, weaponDisplay, boss, elite, rareDrops} from "./locations.js";
import { mainButtons, checkCrit, ownerShip, endgameCheck, materialOwnership, playerStatus } from "./variables.js";

    let check = null;
    let boosted = false;
    let empowered = false;
    let armored = false;
    let bloodBorne = false
    let atkBuffed = false
    let defBuffed = false
    let critBuffed = false
    let ATKweak = 0;
    let DEFweak = 0;
    let AGweak = 0;
    let treasureChest = 0;
    let fortuneGems = 0;
    let healingStones = 0;
    let haveReset = true;
    let ATKBuff = 0
    let DEFBuff = 0
    let CRITBuff = 0
    let potionAtk = 0
    let potionDef = 0;
    let potionCrit = 0;
    let boostedApplied = false;
    let empoweredApplied = false;
    let armoredApplied = false;
    let buffed = false;

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
        playerStatus.gold = 400;
    
        playerStatus.critATK = 50
        playerStatus.critRate = 20
        
        playerStatus.st = 2;
        playerStatus.def = 3;
        playerStatus.ag = 11;
        playerStatus.int = 10;
        playerStatus.luck = 25;

        bardClass.addEventListener("dblclick", function() {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectBard = true;
        })
    })

    ranger.addEventListener("click", function() {
        text.textContent = "The Ranger Path! A versatile choice for those who favor a balanced playstyle. Your stats are balanced with a great balance between critical chance and strike. (Display more detailed stats in 'Display player stats' down below)"
        playerStatus.health = 225;
        playerStatus.maxHealth = 225;
        playerStatus.statPoints = 5;
        playerStatus.gold = 500;
    
        playerStatus.critATK = 75
        playerStatus.critRate = 35
        
        playerStatus.st = 4;
        playerStatus.def = 4;
        playerStatus.ag = 8;
        playerStatus.int = 10;
        playerStatus.luck = 5;

        rangerClass.addEventListener("dblclick", function() {
            update(town[0])
            removeRangerBard();
            showSecondButtons()
            endgameCheck.selectRanger = true;
        })
    })

    mainButtons.mainButtonsHud.style.display = "block"

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
    playerStatus.gold = 300;

    playerStatus.critATK = 125
    playerStatus.critRate = 20

    playerStatus.st = 10;
    playerStatus.def = 7;
    playerStatus.ag = 5;
    playerStatus.int = 4;
    playerStatus.luck = 3;
    
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
    text.textContent = "You have chosen the Mage Path! You specialize in great precision and mystic spellcasting, beware of being hit, as a sorcerer, defense is not your greatest suit, but striking hard and precise is. (Display more detailed stats in 'Display player stats' down below)"
    playerStatus.health = 175;
    playerStatus.maxHealth = 175;
    playerStatus.statPoints = 5;
    playerStatus.gold = 775

    playerStatus.critATK = 175
    playerStatus.critRate = 15
    
    playerStatus.st = 4;
    playerStatus.def = 0;
    playerStatus.ag = 2;
    playerStatus.int = 14;
    playerStatus.luck = 0;

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
    playerStatus.gold = 800;

    playerStatus.critATK = 80
    playerStatus.critRate = 50
    
    playerStatus.st = 2;
    playerStatus.def = 0;
    playerStatus.ag = 16;
    playerStatus.int = 8;
    playerStatus.luck = 7;

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
    
        mainButtons.healthText.textContent = `${Math.round(playerStatus.health)}`;
        displayMaxHealth.textContent = `/${playerStatus.maxHealth+playerStatus.BonusMaxHealth}`;
    
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
    if (playerStatus.level >= 100 && endgameCheck.dragonSlayed === false) {
        update(boss[0])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = boss[0].peakHealth
        monsterName.textContent = boss[0].name
        monsterDEF.textContent = boss[0].def
        monsterATK.textContent = boss[0].atkPower
        monsterAG.textContent = boss[0].ag
    
        check = boss[0]
    }
    else if (endgameCheck.dragonSlayed === true) {
        update(boss[1])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = boss[1].peakHealth
        monsterName.textContent = boss[1].name
        monsterDEF.textContent = boss[1].def
        monsterATK.textContent = boss[1].atkPower
        monsterAG.textContent = boss[1].ag
    
        check = boss[1]
    }
    else {
        text.textContent = `You are not strong enough to face the calamity of this world. Delve deeper into the dungeon, find power and wealth to strengthen your status.`
    }
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

let countdown = 0
let oneTime = false
let bigHit = 0

export function attack(monster) {

    //Defense decimal 
    let monsterDecimalDEF = ((monster.def+100)/100)
    let playerDecimalDEF = ((playerStatus.def+playerStatus.BonusDef)+100)/100;

    //Damage formula
    playerStatus.playerDamage = Math.round((Math.random()*(playerStatus.st+playerStatus.BonusSt)/monsterDecimalDEF))
    let monsterDamage = Math.round((Math.random()*monster.atkPower)/playerDecimalDEF)

    //Speed formula
    let playerSpeed = Math.round(Math.random()*(playerStatus.ag+playerStatus.BonusAg))+1
    let monsterSpeed = Math.round(Math.random()*monster.ag)+1
    console.log(`Your speed is ${playerSpeed}`);
    console.log(`Monster speed is ${monsterSpeed}`);

    //IntCrit formula
    playerStatus.intDecimal = ((playerStatus.int+playerStatus.BonusInt) + 100) / 100;
    playerStatus.intCritRate = playerStatus.critRate * playerStatus.intDecimal;
    playerStatus.intCritATK = playerStatus.critATK * playerStatus.intDecimal; //100*1.01 = 101
    let intCritATKDecimal = (playerStatus.intCritATK+100)/100 //101+100=201 // 201/100

    //Luck formula
    let luckDecimal = (playerStatus.luck+100)/100

    //Buffs
    if (boosted === true && boostedApplied === false) {
        playerStatus.playerDamage *= 1.5;
        boostedApplied = true;
    }
    if (empowered === true && empoweredApplied === false) {
        playerStatus.playerDamage *= 1.75;
        empoweredApplied = true;
    }
    if (armored === true && armoredApplied === false) {
        playerDecimalDEF+=0.25
        armoredApplied = true;
        buffed = true
    }
    
    //Crit formula
    console.log("Damage before crit: ", playerStatus.playerDamage);
    let critATKDecimal = intCritATKDecimal
    let critRoll = Math.round(Math.random()*100)
    let sparkRoll = Math.round(Math.random()*10000)
    
    console.log(playerStatus.intCritRate);
    
    let achivedSparks = false;
    if (playerStatus.intCritRate >= sparkRoll) {
        playerStatus.playerDamage = Math.pow(playerStatus.playerDamage, 1.5)
        achivedSparks = true
    }
    if (playerStatus.intCritRate >= critRoll && achivedSparks === false) {
        playerStatus.playerDamage *= critATKDecimal; 
        checkCrit.achievedCrit = true;
    }
    
    if (bloodBorne === true) {
        critRoll /= 1.25
        sparkRoll /= 1.25
        buffed = true
    }
    console.log("Critroll: "+critRoll);
    console.log("Sparkroll: "+sparkRoll);

if (monster.class == "danger" || monster.class == "calamity" || monster.class == "elite") {
        if (monster.health <= (monster.peakHealth)/2 && oneTime === false) {
            alert("Your insticts tell you something dangerous is about to happen!")
            oneTime = true
        }
        if (monster.health <= (monster.peakHealth)/2) {
            countdown++
        }
        if (countdown == 2) {
            monsterSpeed += monster.ag*100
            monsterDamage += monster.peakATKPower*2
            bigHit++
        }
        if (bigHit == 2) {
            monsterSpeed -= monster.ag*100
            monsterDamage -= monster.peakATKPower*2
        }
}
    //Attack (Speed match)
    if (playerSpeed > monsterSpeed && checkCrit.achievedCrit === true) {
        monster.health -= playerStatus.playerDamage
        checkCrit.achievedCrit = false
        mainButtons.text.innerHTML = `
        Player Advantage! (Monster Attack evaded)<br>
        CRIT! ${critATKDecimal.toFixed(2)}x You hit for ${Math.round(playerStatus.playerDamage)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
    }
    else if (playerSpeed > monsterSpeed && checkCrit.achievedCrit === false) {
        monster.health -= playerStatus.playerDamage
        mainButtons.text.innerHTML = `
        Player Advantage! (Monster Attack evaded)<br>
        You hit for ${Math.round(playerStatus.playerDamage)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
    }
    else if (achivedSparks === true) {
        monster.health -= playerStatus.playerDamage
        checkCrit.achievedCrit = false
        mainButtons.text.innerHTML = `
        Player Advantage! (Monster Attack evaded)<br>
        ULTRA CRIT! ${critATKDecimal.toFixed(2)}x You hit for ${Math.round(playerStatus.playerDamage)}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
    }
    else if (playerSpeed < monsterSpeed && checkCrit.achievedCrit === true) {
        monster.health -= playerStatus.playerDamage/2
        checkCrit.achievedCrit = false
        playerStatus.health -= monsterDamage
        mainButtons.text.innerHTML = `
        Monster advantage! (player recieved damage, player attack halved)<br>
        CRIT! ${critATKDecimal.toFixed(2)}x You hit for ${Math.round(playerStatus.playerDamage)/2}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
        healthText.textContent = `${Math.round(playerStatus.health)}`
    }
    else if (playerSpeed < monsterSpeed && checkCrit.achievedCrit === false) {
        monster.health -= playerStatus.playerDamage/2
        playerStatus.health -= monsterDamage
        mainButtons.text.innerHTML = `
        Monster advantage! (Player recieved damage, player attack halved)<br>
        You hit for ${Math.round(playerStatus.playerDamage)/2}HP!
        `
        mainButtons.monsterHealth.textContent = `${Math.round(monster.health)}`
        healthText.textContent = `${Math.round(playerStatus.health)}`
    }
    else if (playerSpeed == monsterSpeed) {
        text.textContent = `Speed is equal, both attacks were negated.`
    }

    console.log(`Monster hit you for: ${monsterDamage}`);

    //Monster death
    if (monster.health <= 0) {
        checkCrit.achievedCrit = false
        //Rewards
        let goldGain = Math.round(Math.random()* (monster.goldReward) *luckDecimal)
        playerStatus.gold += goldGain;
        mainButtons.goldText.textContent = playerStatus.gold;

        let xpGain = Math.round(Math.random()* (monster.xpYield) *luckDecimal)
        playerStatus.xp += xpGain;
        mainButtons.xpText.textContent = playerStatus.xp

        oneTime = false
        countdown = 0
        bigHit = 0

        let rareDropChance = Math.round(Math.random()*100)+playerStatus.luck

        if (rareDropChance >= monster.rareDropChance) {
            monster.rareDrop()
        }

        if (boosted === true) {
            playerStatus.playerDamage /= 1.5; // Revert the damage buff
            boostedApplied = false;
            boosted = false;
        }

        if (durationEm > 0) {
            durationEm--
        }
        if (durationAr > 0) {
            durationAr--
        }
        if (durationBB > 0) {
            durationBB--
        }
        if (durationEm <= 0 && empowered === true) {
            empowered = false
            playerStatus.playerDamage /= 1.75; // Revert the empowered damage buff
            empoweredApplied = false
        }
        if (durationAr <= 0 && armored === true) {
            armored = false  
            playerDecimalDEF -= 7.5
            armoredApplied = false          
        }
        if (durationBB <= 0 && bloodBorne === true) {
            bloodBorne = false  
            critRoll *= 1.25
            sparkRoll *= 1.25
        }

        if (ATKweak > 0) {
            ATKweak--;
        }
        if (ATKBuff > 0) {
            ATKBuff--
        }
        if (DEFweak > 0) {
            DEFweak--;
        }
        if (DEFBuff > 0) {
            DEFBuff--;
        }
        if (AGweak > 0) {
            AGweak--;
        }
        if (CRITBuff > 0) {
            CRITBuff--;
        }

        if (ATKweak > 0 || DEFweak > 0 || AGweak > 0 || durationEm > 0 || durationAr > 0 || durationBB > 0 || ATKBuff > 0 || DEFBuff > 0 || CRITBuff > 0) {
            alert(`${ATKweak}x ATK Down, ${DEFweak}x DEF Down, ${AGweak}x AG Down \n${durationEm}x Empowerment stacks, ${durationAr}x Armored stacks, ${durationBB}x Bloodborne stacks \n${ATKBuff}x Player ATK++, ${DEFBuff}x Player DEF++, ${CRITBuff}x Player CRIT++`)
        }

        if (ATKweak == 0) {
            monster.atkPower = monster.peakATKPower;
        }
        if (ATKBuff == 0 && atkBuffed === true) {
            playerStatus.st -= 10;
            playerStatus.ag -= 10;
            atkBuffed = false
        }
        if (DEFweak == 0) {
            monster.def = monster.peakDef;
        }
        if (DEFBuff == 0 && defBuffed === true) {
            playerStatus.def -= 20;
            defBuffed = false
        }
        if (AGweak == 0) {
            monster.ag = monster.peakAg;
        }
        if (CRITBuff == 0 && critBuffed === true) {
            playerStatus.int -= 20;
            critBuffed = false
        }

        alert(`+${goldGain} Gold\n+${xpGain}XP`)
        let rollDrop = Math.round(Math.random()*(100)*luckDecimal)
        let materialDrop = Math.round(Math.random()*(100)*luckDecimal)
        let amountTreasure = Math.round(Math.random()*(monster.treasureYield))
        if (rollDrop > 90) {
            fortuneGems += amountTreasure;
            alert(`You gained ${amountTreasure}x Fortune gems!`)
        } else if (rollDrop > 66) {
            healingStones += amountTreasure;
            alert(`You gained ${amountTreasure}x Health stones!`)
        } else if (rollDrop > 33) {
            treasureChest += amountTreasure;
            alert(`You gained ${amountTreasure}x Treasure chests!`)
        }
        if (materialDrop >= monster.materialDropChance) {
            monster.materialDrop();
        }
        if (monster.class == "calamity") {
            alert("You have slain the dragon plagueing the village. Your actions have brought hope and revitalized the world. However an ominious mark has been left on you during the battle. A loud shriek from the heavens beckon...")
            endgameCheck.dragonSlayed = true
        }
        //Reset encounter
        update(locations[1])
        monsters.forEach(monster => {
            monster.health = monster.peakHealth;

        })
        elite.forEach(monster => {
            monster.health = monster.peakHealth;

        })
        boss.forEach(monster => {
            monster.health = monster.peakHealth;

        })
        mainButtons.monsterStats.style.display = "none"
        mainButtons.monsterName.style.display = "none"
        mainButtons.monsterHealth.style.display = "none"
        check = locations[1]
        console.clear()
    }
    
    if (monster.class == "timed") {
        let monsterEscape = Math.round(Math.random()*100)
        if (monsterEscape > 95) {
            alert("The monster escaped...")
            update(locations[1])
            monster.health = monster.peakHealth;
            mainButtons.monsterStats.style.display = "none"
            mainButtons.monsterName.style.display = "none"
            mainButtons.monsterHealth.style.display = "none"
            check = locations[1]
        }
    }
    if (playerStatus.health <= 0) {
        alert("You have died...")
        location.reload()
    }
}
export function defend(monster) {

        armoredApplied = false;

        //Defense decimal 
        let playerDecimalDEF = ((playerStatus.def+playerStatus.BonusDef)+100)/100;
        if (armored === true) {
            playerDecimalDEF+=0.25
            armoredApplied = true;
            buffed = true
        }
        let playerProcentDEF = Math.round((playerDecimalDEF-1)*200)
    
        //Damage formula
        let monsterDamage = Math.round(Math.random()*monster.atkPower)


        if (monster.health <= (monster.peakHealth)/2) {
            countdown++
        }
        if (countdown == 2) {
            monsterDamage += monster.peakATKPower*2
            bigHit++
        }
        if (bigHit == 2) {
            monsterDamage -= monster.peakATKPower*2
        }
    
        //Accrued damage (player)
        playerStatus.health -= (monsterDamage)/playerDecimalDEF;
        mainButtons.healthText.textContent = Math.round(playerStatus.health);
    
        //Battle Info
        text.innerHTML = `MITIGATED: ${playerProcentDEF}% of the attack! <br>
                          DAMAGE TAKEN: ${((monsterDamage)/playerDecimalDEF).toFixed(2)}HP`
        
    if (playerStatus.health <= 0) {
        alert("You have died...")
        location.reload()
    }
    
}
export function run() {
    update(town[0])
    check = town[0]
    mainButtons.monsterStats.style.display = "none"
    mainButtons.monsterName.style.display = "none"
    mainButtons.monsterHealth.style.display = "none"
    //Shuffles through monster array and resets each monster health to peak
    monsters.forEach(monster => {
        monster.health = monster.peakHealth
    })
    elite.forEach(elite => {
        elite.health = elite.peakHealth
    })
    boss.forEach(boss => {
        boss.health = boss.peakHealth
    })
    slimeCount = 0
    fangCount = 0
    garCount = 0
}
//Dungeon functions
export function opt1() {
    update(dungeon[0])
}
export function opt2() {
    update(dungeon[1])
}
export function opt3() {
    update(dungeon[2])
    
}
//Enemies

let slimeCount = 0

export function fightSlime() {
    slimeCount++

    let luckDecimal = (playerStatus.luck+100)/100
    
    let rareMobChance = Math.round(Math.random()*(100)*luckDecimal)
    console.log("You rolled ", rareMobChance, " To get a rare encounter");

    if (rareMobChance >= 90) {
        update(rare[0])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = rare[0].peakHealth
        monsterName.textContent = rare[0].name
        monsterDEF.textContent = rare[0].def
        monsterATK.textContent = rare[0].atkPower
        monsterAG.textContent = rare[0].ag
    
        check = rare[0]
    }
    else if (rareMobChance < 95){
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
    if (slimeCount == 5){
        update(elite[0])
        mainButtons.monsterStats.style.display = "flex"
        mainButtons.monsterName.style.display = "flex"
        mainButtons.monsterHealth.style.display = "flex"
    
        monsterHealth.textContent = elite[0].peakHealth
        monsterName.textContent = elite[0].name
        monsterDEF.textContent = elite[0].def
        monsterATK.textContent = elite[0].atkPower
        monsterAG.textContent = elite[0].ag
    
        check = elite[0]
    }
}
let fangCount = 0
export function fightFang() {
    fangCount++
if (fangCount < 5) {
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
else if (fangCount == 5) {
    update(elite[1])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = elite[1].peakHealth
    monsterName.textContent = elite[1].name
    monsterDEF.textContent = elite[1].def
    monsterATK.textContent = elite[1].atkPower
    monsterAG.textContent = elite[1].ag

    check = elite[1]
}
}
let garCount = 0
export function fightGargoyle() {
    garCount++
if (garCount < 5) {
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
else if (garCount == 5) {
    update(elite[2])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = elite[2].peakHealth
    monsterName.textContent = elite[2].name
    monsterDEF.textContent = elite[2].def
    monsterATK.textContent = elite[2].atkPower
    monsterAG.textContent = elite[2].ag

    check = elite[2]
}
}
export function fightGolem() {
    update(monsters[3])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[3].peakHealth
    monsterName.textContent = monsters[3].name
    monsterDEF.textContent = monsters[3].def
    monsterATK.textContent = monsters[3].atkPower
    monsterAG.textContent = monsters[3].ag

    check = monsters[3]
}
export function fightMagus() {
    update(monsters[4])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[4].peakHealth
    monsterName.textContent = monsters[4].name
    monsterDEF.textContent = monsters[4].def
    monsterATK.textContent = monsters[4].atkPower
    monsterAG.textContent = monsters[4].ag

    check = monsters[4]
}
export function fightReve() {
    update(monsters[5])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[5].peakHealth
    monsterName.textContent = monsters[5].name
    monsterDEF.textContent = monsters[5].def
    monsterATK.textContent = monsters[5].atkPower
    monsterAG.textContent = monsters[5].ag

    check = monsters[5]
}
export function fightAbom() {
    update(monsters[6])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[6].peakHealth
    monsterName.textContent = monsters[6].name
    monsterDEF.textContent = monsters[6].def
    monsterATK.textContent = monsters[6].atkPower
    monsterAG.textContent = monsters[6].ag

    check = monsters[6]
}
export function fightStalker() {
    update(monsters[7])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[7].peakHealth
    monsterName.textContent = monsters[7].name
    monsterDEF.textContent = monsters[7].def
    monsterATK.textContent = monsters[7].atkPower
    monsterAG.textContent = monsters[7].ag

    check = monsters[7]
}
export function fightMimic() {
    update(monsters[8])
    mainButtons.monsterStats.style.display = "flex"
    mainButtons.monsterName.style.display = "flex"
    mainButtons.monsterHealth.style.display = "flex"

    monsterHealth.textContent = monsters[8].peakHealth
    monsterName.textContent = monsters[8].name
    monsterDEF.textContent = monsters[8].def
    monsterATK.textContent = monsters[8].atkPower
    monsterAG.textContent = monsters[8].ag

    check = monsters[8]
}
//Rare drops
export function gainSlimeSuit() {
    if (ownerShip.ownedSlime === false) {
        alert("You found the coveted slime drapes. Max HP+100, DEF+10")
        playerStatus.BonusMaxHealth += 100
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusDef += 10
        ownerShip.ownedSlime = true   
    }
}
export function gainTreasureSlimeTreasure() {
    if (ownerShip.ownedTreasureSlime === false) {
        alert("You have gained treasure slime's treasure. Max HP+50, All stats+2, Gold gained +10%")
        playerStatus.BonusMaxHealth += 50
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusSt += 2
        playerStatus.BonusDef += 2
        playerStatus.BonusAg += 2
        playerStatus.BonusInt += 2
        playerStatus.luck += 2
        monsters.forEach(monster => {
            monster.goldReward *= 1.1
        })
        ownerShip.ownedSlime = true   
    }
}
export function gainBarbedSlime() {
    if (ownerShip.ownedBarbed === false) {
        alert("You have gained the barbed slime's spikes. ST+5, DEF+10, INT+3")
        playerStatus.BonusSt += 5
        playerStatus.BonusDef += 10
        playerStatus.BonusInt += 3
        ownerShip.ownedBarbed = true   
    }
}
export function gainWolfSoul() {
    if (ownerShip.ownedWolf === false) {
        alert("From the spirit of the wolf, you gained the wolf soul. ST+3, AG+6, INT+3")
        playerStatus.BonusSt += 3
        playerStatus.BonusAg += 6
        playerStatus.BonusInt += 3
        ownerShip.ownedWolf = true   
    }
}
export function gainPatriarch() {
    if (ownerShip.ownedPatriarch === false) {
        alert("From the spirit of the wolf patriarch, you gained the Kingly Bestial Soul. ST+12, AG+14, INT+8")
        playerStatus.BonusSt += 12
        playerStatus.BonusAg += 14
        playerStatus.BonusInt += 8
        ownerShip.ownedPatriarch = true   
    }
}
export function gainGargoyle() {
    if (ownerShip.ownedGargoyle === false) {
        alert("As the gargoyle shatters into pieces, it reveals a hollow helmet, you gained Gargoyle helmet. ST+5, DEF+8, INT+8,")
        playerStatus.BonusSt += 5
        playerStatus.BonusDef += 8
        playerStatus.BonusInt += 8
        ownerShip.ownedGargoyle = true   
    }
}
export function gainArchgoyle() {
    if (ownerShip.ownedArchgoyle === false) {
        alert("As the archgoyle shatters into pieces, it's horns stay, you gained Archgoyle horns. ST+5, DEF+5, AG+8, INT+15,")
        playerStatus.BonusSt += 5
        playerStatus.BonusDef += 5
        playerStatus.BonusAg += 8
        playerStatus.BonusInt += 15
        ownerShip.ownedArchgoyle = true   
    }
}
export function gainStoneFist() {
    if (ownerShip.ownedGolem === false) {
        alert("The golem crumbles and reveals a hidden gemstone, ST+6, DEF+2, INT+12")
        playerStatus.BonusSt += 6
        playerStatus.BonusDef += 2
        playerStatus.BonusInt += 12
        ownerShip.ownedGolem = true   
    }
}
export function gainScepter() {
    if (ownerShip.ownedMagus === false) {
        alert("The magus drops his scepter. You gained Scepter. ST+3, DEF+3, AG+1, INT+15")
        playerStatus.BonusSt += 3
        playerStatus.BonusDef += 3
        playerStatus.BonusAg += 1
        playerStatus.BonusInt += 15
        ownerShip.ownedMagus = true   
    }
}
export function gainRevenant() {
    if (ownerShip.ownedMagus === false) {
        alert("The fallen warrior salutes and grants you his sword before death. You gained Revenant's longsword. ST+8, DEF+5, AG+2, INT+5")
        playerStatus.BonusSt += 8
        playerStatus.BonusDef += 5
        playerStatus.BonusAg += 2
        playerStatus.BonusInt += 5
        ownerShip.ownedRevenant = true   
    }
}
export function gainAbomination() {
    if (ownerShip.ownedMagus === false) {
        alert("You flay and slay the putrid abomination, within his carcass a glowing gem glows. You gained Putrid Core. Max HP+200, INT+15")
        playerStatus.BonusMaxHealth += 200
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusInt += 15
        ownerShip.ownedAbomination = true   
    }
}
export function gainStalker() {
    if (ownerShip.ownedMagus === false) {
        alert("Your stalker has come to and end, upon searching of their carcass you find a disgusting notebook filled with entries about you... You gained, and casted aside the Obsessive Diary... Max HP+10, AG+20")
        playerStatus.BonusMaxHealth += 10
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusAg += 20
        ownerShip.ownedStalker = true   
    }
}
export function gainMimic() {
    if (ownerShip.ownedMagus === false) {
        alert("As the false visage of yourself disintegrates, it's insignia lays undisintegrated. You gained False Hero's insignia. Max HP+50, ST+10, DEF+10, AG+10, INT+10.")
        playerStatus.BonusMaxHealth += 50
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusSt += 10
        playerStatus.BonusDef += 10
        playerStatus.BonusAg += 10
        playerStatus.BonusInt += 10
        ownerShip.ownedMimic = true   
    }
}
export function gainDetermination() {
    if (ownerShip.ownedDragon === false) {
        alert("The dragon's demise fills you with determination. Determination to face the future. Max HP+150, All stats+15, XP gained from battles +40%")
        playerStatus.BonusMaxHealth += 150
        mainButtons.displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        playerStatus.BonusSt += 15
        playerStatus.BonusDef += 15
        playerStatus.BonusAg += 15
        playerStatus.BonusInt += 15
        monsters.forEach(monster => {
            monster.xpYield *= 1.4
        })
        ownerShip.ownedDragon = true   
    }
}
//Material
export function gainSlimeMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(9)*luckDecimal);
    materialOwnership.materialSlimeOwned += amount
    alert(`You gained ${amount}x Slime materials!`)
}
export function gainWolfMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(4)*luckDecimal);
    materialOwnership.materialWolfOwned += amount
    alert(`You gained ${amount}x Wolf materials!`)
}
export function gainGarMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(4)*luckDecimal);
    materialOwnership.materialGargoyleOwned += amount
    alert(`You gained ${amount}x Gargoyle materials!`)
}
export function gainRockMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(2)*luckDecimal);
    materialOwnership.materialRockOwned += amount
    alert(`You gained ${amount}x Golem materials!`)
}
export function gainMagusMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(1)*luckDecimal);
    materialOwnership.materialMagusOwned += amount
    alert(`You gained ${amount}x Magus materials!`)
}
export function gainReveMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(1)*luckDecimal);
    materialOwnership.materialReveOwned += amount
    alert(`You gained ${amount}x Revenant materials!`)
}
export function gainAbomMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(1)*luckDecimal);
    materialOwnership.materialAbomOwned += amount
    alert(`You gained ${amount}x Abomination materials!`)
}
export function gainStalkerMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(1)*luckDecimal);
    materialOwnership.materialStalkOwned += amount
    alert(`You gained ${amount}x Stalker materials!`)
}
export function gainMimicMats() {
    let luckDecimal = (playerStatus.luck+100)/100
    let amount = Math.round(Math.random()*(1)*luckDecimal);
    materialOwnership.materialMimicOwned += amount
    alert(`You gained ${amount}x ??? materials!`)
}
export function sellMats() {
    let totalAmount = 0
    let slimeOw = materialOwnership.materialSlimeOwned
    let wolfOw = materialOwnership.materialWolfOwned
    let garOw = materialOwnership.materialGargoyleOwned
    let rockOw = materialOwnership.materialRockOwned
    let magusOw = materialOwnership.materialMagusOwned
    let reveOw = materialOwnership.materialReveOwned
    let abomOw = materialOwnership.materialAbomOwned
    let stalkerOw = materialOwnership.materialStalkOwned
    let mimicOw = materialOwnership.materialMimicOwned

    if (materialOwnership.materialSlimeOwned > 0) {
        playerStatus.gold += materialOwnership.materialSlimeOwned * 3
        totalAmount += materialOwnership.materialSlimeOwned * 3
        goldText.textContent = playerStatus.gold
        materialOwnership.materialSlimeOwned = 0;
    }
    if (materialOwnership.materialWolfOwned > 0) {
        playerStatus.gold += materialOwnership.materialWolfOwned * 9
        totalAmount += materialOwnership.materialWolfOwned * 9
        goldText.textContent = playerStatus.gold
        materialOwnership.materialWolfOwned = 0;
    }
    if (materialOwnership.materialGargoyleOwned > 0) {
        playerStatus.gold += materialOwnership.materialGargoyleOwned * 26
        totalAmount += materialOwnership.materialGargoyleOwned * 26
        goldText.textContent = playerStatus.gold
        materialOwnership.materialGargoyleOwned = 0;
    }
    if (materialOwnership.materialRockOwned > 0) {
        playerStatus.gold += materialOwnership.materialRockOwned * 40
        totalAmount += materialOwnership.materialRockOwned * 40
        goldText.textContent = playerStatus.gold
        materialOwnership.materialRockOwned = 0;
    }
    if (materialOwnership.materialMagusOwned > 0) {
        playerStatus.gold += materialOwnership.materialMagusOwned * 150
        totalAmount += materialOwnership.materialMagusOwned * 150
        goldText.textContent = playerStatus.gold
        materialOwnership.materialMagusOwned = 0;
    }
    if (materialOwnership.materialReveOwned > 0) {
        playerStatus.gold += materialOwnership.materialReveOwned * 333
        totalAmount += materialOwnership.materialReveOwned * 333
        goldText.textContent = playerStatus.gold
        materialOwnership.materialReveOwned = 0;
    }
    if (materialOwnership.materialAbomOwned > 0) {
        playerStatus.gold += materialOwnership.materialAbomOwned * 444
        totalAmount += materialOwnership.materialAbomOwned * 444
        goldText.textContent = playerStatus.gold
        materialOwnership.materialAbomOwned = 0;
    }
    if (materialOwnership.materialStalkOwned > 0) {
        playerStatus.gold += materialOwnership.materialStalkOwned * 667
        totalAmount += materialOwnership.materialStalkOwned * 667
        goldText.textContent = playerStatus.gold
        materialOwnership.materialStalkOwned = 0;
    }
    if (materialOwnership.materialMimicOwned > 0) {
        playerStatus.gold += materialOwnership.materialMimicOwned * 1250
        totalAmount += materialOwnership.materialMimicOwned * 1250
        goldText.textContent = playerStatus.gold
        materialOwnership.materialMimicOwned = 0;
    }
    text.innerHTML = `You gained ${totalAmount}G! You sold:<br>
    ${slimeOw}x Slime material 3Gx${slimeOw} <br>
    ${wolfOw}x Wolf material 9Gx${wolfOw} <br>
    ${garOw}x Gargoyle material 26Gx${garOw} <br>
    ${rockOw}x Golem material 40Gx${rockOw} <br>
    ${magusOw}x Magus material 150Gx${magusOw} <br>
    ${reveOw}x Revenant material 333Gx${reveOw} <br>
    ${abomOw}x Abomination material 444Gx${abomOw} <br>
    ${stalkerOw}x Stalker material 667Gx${stalkerOw} <br>
    ${mimicOw}x ??? material 1250Gx${mimicOw} <br>
    `;

}

displayStatsButton.addEventListener("click", function() {
    let pElements = document.querySelectorAll("#statDisplay p");
    let buttonElements = document.querySelectorAll(".incrementer")

    playerStatus.intDecimal = ((playerStatus.int+playerStatus.BonusInt) + 100) / 100;
    playerStatus.intCritRate = playerStatus.critRate * playerStatus.intDecimal;
    playerStatus.intCritATK = playerStatus.critATK * playerStatus.intDecimal;

    mainButtons.displayHealth.textContent = `Health : ${Math.round(playerStatus.health)}`;
    mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`
    mainButtons.displayST.textContent = `ST : ${(playerStatus.st+playerStatus.BonusSt)}`;
    mainButtons.displayDEF.textContent = `DEF : ${playerStatus.def+playerStatus.BonusDef}`;
    mainButtons.displayAG.textContent = `AG : ${playerStatus.ag+playerStatus.BonusAg}`;
    mainButtons.displayINT.textContent = `INT : ${playerStatus.int+playerStatus.BonusInt}`
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
        mainButtons.displayST.textContent = `ST : ${(playerStatus.st+playerStatus.BonusSt)}`;
    }
})
DEFPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.def++;
        mainButtons.displayDEF.textContent = `DEF : ${(playerStatus.def+playerStatus.BonusDef)}`;
    }
})
AGPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.ag++;
        mainButtons.displayAG.textContent = `AG : ${(playerStatus.ag+playerStatus.BonusAg)}`;
    }
})
INTPlus.addEventListener("click", function(){
    if (playerStatus.statPoints >= 1) {
        playerStatus.statPoints--;
        mainButtons.displayStatPoints.textContent = `Available stat points : ${playerStatus.statPoints}`;
        playerStatus.int++;
        mainButtons.displayINT.textContent = `INT : ${(playerStatus.int+playerStatus.BonusInt)}`
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

        playerStatus.BonusSt += 3
        playerStatus.BonusDef += 2

        text.innerHTML = "Item bought! <br> ST+3 <br> DEF+2"
    }
    else if (playerStatus.gold < 300) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function shortBow() {
    if (playerStatus.gold >= 200 && ownerShip.ownedShort == false) {
        playerStatus.gold -= 200
        goldText.textContent = playerStatus.gold
        ownerShip.ownedShort = true

        playerStatus.BonusSt += 1
        playerStatus.BonusAg += 2

        text.innerHTML = "Item bought! <br> ST+1 <br> AG+2"
    }
    else if (playerStatus.gold < 200) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function magicWand() {
    if (playerStatus.gold >= 500 && ownerShip.ownedWand == false) {
        playerStatus.gold -= 500
        goldText.textContent = playerStatus.gold
        ownerShip.ownedWand = true

        playerStatus.BonusInt += 3
        playerStatus.BonusDef += 2

        text.innerHTML = "Item bought! <br> INT+3 <br> DEF+2"
    }
    else if (playerStatus.gold < 500) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function rareKatana() {
    if (playerStatus.gold >= 1200 && ownerShip.ownedKat == false) {
        playerStatus.gold -= 1200
        goldText.textContent = playerStatus.gold
        ownerShip.ownedKat = true

        playerStatus.BonusSt += 5
        playerStatus.BonusDef += 2
        playerStatus.BonusAg += 2
        playerStatus.BonusInt += 2

        text.innerHTML = "Item bought! <br> ST+5 <br> DEF+2 <br> AG+2 <br> INT+2"
    }
    else if (playerStatus.gold < 1200) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function clayMore() {
    if (playerStatus.gold >= 1800 && ownerShip.ownedClay == false) {
        playerStatus.gold -= 1800
        goldText.textContent = playerStatus.gold
        ownerShip.ownedClay = true

        playerStatus.BonusSt += 7
        playerStatus.BonusDef += 4

        text.innerHTML = "Item bought! <br> ST+7 <br> DEF+4"
    }
    else if (playerStatus.gold < 1800) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function gemStaff() {
    if (playerStatus.gold >= 2500 && ownerShip.ownedGem == false) {
        playerStatus.gold -= 2500
        goldText.textContent = playerStatus.gold
        ownerShip.ownedGem = true

        playerStatus.BonusInt += 9
        playerStatus.BonusDef += 4

        text.innerHTML = "Item bought! <br> INT+9 <br> DEF+4"
    }
    else if (playerStatus.gold < 2500) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function greatestSword() {
    if (playerStatus.gold >= 8000 && ownerShip.ownedGreat == false) {
        playerStatus.gold -= 8000
        goldText.textContent = playerStatus.gold
        ownerShip.ownedGreat = true

        playerStatus.BonusSt += 14
        playerStatus.BonusDef += 15

        text.innerHTML = "Item bought! <br> ST+14 <br> DEF+15"
    }
    else if (playerStatus.gold < 8000) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function shadowBow() {
    if (playerStatus.gold >= 7700 && ownerShip.ownedShadow == false) {
        playerStatus.gold -= 7700
        goldText.textContent = playerStatus.gold
        ownerShip.ownedShadow = true

        playerStatus.BonusAg += 10
        playerStatus.BonusInt += 6
        playerStatus.BonusSt += 3

        text.innerHTML = "Item bought! <br> ST+3 <br> AG+10 <br> INT+6"
    }
    else if (playerStatus.gold < 7700) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function mechanicalStaff() {
    if (playerStatus.gold >= 15000 && ownerShip.ownedMechanic == false) {
        playerStatus.gold -= 15000
        goldText.textContent = playerStatus.gold
        ownerShip.ownedMechanic = true

        playerStatus.BonusAg += 10
        playerStatus.BonusInt += 10
        playerStatus.BonusSt += 10
        playerStatus.BonusDef += 5

        text.innerHTML = "Item bought! <br> ST+10 <br> DEF+5 <br> AG+10 <br> INT+10"
    }
    else if (playerStatus.gold < 15000) {
        text.textContent = "You don't have enough gold..."
    }
    else {
        text.textContent = `You already have this weapon.`
    }
}
export function healPot() {
    let healAmount = 20;
    let newHealth = playerStatus.health + healAmount
    if (playerStatus.gold >= 30 && playerStatus.health < (playerStatus.maxHealth+playerStatus.BonusMaxHealth)) {
        playerStatus.health += healAmount
        healthText.textContent = Math.round(playerStatus.health)
        playerStatus.gold -= 20;
        if (newHealth > (playerStatus.maxHealth+playerStatus.BonusMaxHealth)) {
            playerStatus.health = (playerStatus.maxHealth+playerStatus.BonusMaxHealth)
            healthText.textContent = Math.round(playerStatus.health)
        }
        goldText.textContent = playerStatus.gold
    }
    else if (playerStatus.gold < 30) {
        text.textContent = "You don't have enough gold!"
    }
    else if (playerStatus.health == (playerStatus.maxHealth+playerStatus.BonusMaxHealth)) {
        text.textContent = "Your health is at its maximum."
    }
}
export function ATKPot() {
    if (playerStatus.gold >= 1500 && boosted == false) {
        boosted = true;
        playerStatus.gold -= 1500;
        goldText.textContent = playerStatus.gold
        text.textContent = "You will deal 50% more damage in the next battle!"
    }
    else if (boosted == true) {
        text.textContent = "You are already boosted!"
    }
    else if (playerStatus.gold < 1500) {
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
    else if (DEFweak == 5) {
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
export function buyPower() {
    if (playerStatus.gold >= 2250) {
        playerStatus.gold -= 2250
        goldText.textContent = playerStatus.gold
        text.textContent = `You have bought a strength enchancing potion! (Available in inventory)`
        potionAtk++
    }
    else {
        text.textContent = "You don't have enough gold..."
    }
}
export function buyDef() {
    if (playerStatus.gold >= 2250) {
        playerStatus.gold -= 2250
        goldText.textContent = playerStatus.gold
        text.textContent = `You have bought a defense enchancing potion! (Available in inventory)`
        potionDef++
    }
    else {
        text.textContent = "You don't have enough gold..."
    }
}
export function buyCrit() {
    if (playerStatus.gold >= 2250) {
        playerStatus.gold -= 2250
        goldText.textContent = playerStatus.gold
        text.textContent = `You have bought a critical strike enchancing potion! (Available in inventory)`
        potionCrit++
    }
}
export function buyReset() {
    if (playerStatus.gold >= 9999) {
        haveReset = true
        playerStatus.gold -= 9999
        goldText.textContent = playerStatus.gold
        text.textContent = `You have bought a stat reset potion! (Available in inventory)`
    }
}
export function powerPot() {
    if (atkBuffed === false && potionAtk > 0) {
        playerStatus.BonusSt += 10
        playerStatus.BonusAg += 10
        atkBuffed = true;
        text.textContent = `ST+10 and AG+10 / This will last for 5 battles`
        ATKBuff = 5;
        potionAtk--
    }
    else if (atkBuffed === true) {
        text.textContent = `You cannot stack this effect.`
    }
    else if (potionAtk <= 0) {
        text.textContent = `You don't have this potion...`
    }
}
export function defPot() {
    if (defBuffed === false && potionDef > 0) {
        playerStatus.BonusDef += 20
        defBuffed = true;
        text.textContent = `DEF+20 / This will last for 5 battles`
        DEFBuff = 5;
        potionDef--
    }
    else if (defBuffed === true) {
        text.textContent = `You cannot stack this effect.`
    }
    else if (potionDef <= 0) {
        text.textContent = `You don't have this potion...`
    }
}
export function critPot() {
    if (critBuffed === false && potionCrit > 0) {
        playerStatus.BonusInt += 20
        critBuffed = true;
        text.textContent = `INT+20 / This will last for 5 battles`
        CRITBuff = 5;
        potionCrit--
    }
    else if (critBuffed === true) {
        text.textContent = `You cannot stack this effect.`
    }
    else if (potionCrit <= 0) {
        text.textContent = `You don't have this potion...`
    }
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
export function lifeEx() {
    update(exchange[1])
}
let durationEm = 0
export function empowerment() {
    if (playerStatus.health > 0 && empowered === false) {
        playerStatus.health -= 50
        playerStatus.maxHealth -= 50
        healthText.textContent = playerStatus.health
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        empowered = true
        durationEm = 5
        text.textContent = `You have exchange a portion of your life for the Crimson Empowerment enhancement / 25% increase to player damage`
    }
}
let durationAr = 0
export function vitalDef() {
    if (playerStatus.health > 0 && armored === false) {
        playerStatus.health -= 50
        playerStatus.maxHealth -= 50
        healthText.textContent = playerStatus.health
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        armored = true
        durationAr = 5
        text.textContent = `You have exchange a portion of your life for the Vitality Defense enhancement / 75% increase to DEF`
    }
}
let durationBB = 0
export function borne() {
    if (playerStatus.health > 0 && bloodBorne === false) {
        playerStatus.health -= 25
        playerStatus.maxHealth -= 25
        healthText.textContent = playerStatus.health
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        bloodBorne = true
        durationBB = 5
        text.textContent = `You have exchange a portion of your life for the Bloodborne enhancement / 25% increase in CRIT chance`
    }
}
export function goldEx() {
    update(exchange[2])
}
export function buyHealth() {
    if (playerStatus.gold >= 800) {
        playerStatus.gold -= 800
        mainButtons.goldText.textContent = playerStatus.gold

        playerStatus.maxHealth += 1
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`

        text.textContent = `You have gained Max HP+1!`
    }
    else {
        text.textContent = `You don't have enough gold...`
    }
}
export function buyStat() {
    if (playerStatus.gold >= 3200) {
        playerStatus.gold -= 3200
        mainButtons.goldText.textContent = playerStatus.gold

        playerStatus.statPoints += 1
        text.textContent = `You have gained Stat points+1!`
    }
    else {
        text.textContent = `You don't have enough gold...`
    }
}
export function openInventory() {
    update(inventoryDisplay[0])
    removeExtra()
}
export function openWeapons() {
    update(inventoryDisplay[1])
}
export function checkCommon() {
    update(weaponDisplay[0])
}
export function inspectZwei() {
    if (ownerShip.ownedZwei == true) {
        text.innerHTML = `"The zweihander. First of the weapons conjured by the great mind and creator of the Shattered Hollow. It serves as a great starting weapon for warriors, and on top of that, is quite easy to access quickly upon selecting the warrior path."
        <br> Element: Basic 
        <br> ST Increase: 3+
        <br> DEF Increase: 2+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectShortbow() {
    if (ownerShip.ownedShort == true) {
        text.innerHTML = `"The shortbow, cheapest of the weapons available at the shopkeep's store. Some even ponder whether it is worth buying this mediocre weapon, but due to it's cheap price, and a permanent increase in stats, be it slightly. The shortbow is a great weapon to help "minmax" your build."
        <br> Element: Basic 
        <br> ST Increase: 1+
        <br> AG Increase: 2+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/bow.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectWand() {
    if (ownerShip.ownedWand == true) {
        text.innerHTML = `"The wand is a mage's classic choice to begin with spellcasting and magic. It's stats dictate a slight increase in focus and defense. Many beginner mages wonder where the added defensive capabilities come from. However senior mages usually scoff at their questions."
        <br> Element: Basic 
        <br> INT Increase: 3+
        <br> DEF Increase: 2+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function checkRare() {
    update(inventoryDisplay[1])
}
export function inspectKat() {
    if (ownerShip.ownedKat == true) {
        text.innerHTML = `"The Eastern katana combines both fear and precision in it's wake. Used by many eastern warriors, it has recently been sparked up in debate whether it or the claymore is superior. For some reason most attendees of debates reside in more western areas"
        <br> Element: Basic 
        <br> ST Increase: 5+
        <br> DEF Increase: 2+
        <br> AG Increase: 2+
        <br> INT Increase: 2+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectClay() {
    if (ownerShip.ownedClay == true) {
        text.innerHTML = `"The claymore is a powerful weapon, used by many warriors in time of war and battle. Some warriors have sparked debate over whether the claymore or the katana is superior, many of these warriors reside in the western hemisphere."
        <br> Element: Basic 
        <br> ST Increase: 7+
        <br> AG Increase: 4+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectGem() {
    if (ownerShip.ownedGem == true) {
        text.innerHTML = `"A staff in which a gemstone adorns the top, it is said the gemstone amplifies focus and gives way to powerful spells, judging from the gameplay however, only one part of the statement is correct."
        <br> Element: Basic 
        <br> INT Increase: 9+
        <br> DEF Increase: 4+
        <br> ATK Type: Physical Pierce & Slash
        `
        mainButtons.visual.src = "./Images/staff.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function checkLeg() {
    update(inventoryDisplay[1])
}
export function inspectGreat() {
    if (ownerShip.ownedGreat == true) {
        text.innerHTML = `"Forged from great volcanic elementals, and wielded by legendary warriors of the past, this sword yields to whomever is worthy enough to wield it. (Or whoever who has enough money)"
        <br> Element: Basic 
        <br> ST Increase: 14+
        <br> DEF Increase: 15+
        <br> ATK Type: Physical Slash
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectShadow() {
    if (ownerShip.ownedShadow == true) {
        text.innerHTML = `"The shadow bow symbolizes the darkness in which rangers and rogues alike cloak themselves in. You however embody the shadows. From great wealth comes great stealth"
        <br> Element: Dark
        <br> ST Increase: 3+
        <br> AG Increase: 10+
        <br> INT Increase: 6+
        <br> ATK Type: Magical Pierce
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function inspectMech() {
    if (ownerShip.ownedMechanic == true) {
        text.innerHTML = `"Many wizards and mages have debated the practicality of this staff, many consider this as a tarnish on wizardry, however it's power is not up for debate, as seen by the Council of Wizardry disbanding soonly after this staff's debut."
        <br> Element: Chaos, innovation
        <br> ST Increase: 10+
        <br> DEF Increase: 5+
        <br> AG Increase: 10+
        <br> INT Increase: 10+
        <br> ATK Type: Explosive, Terror
        `
        mainButtons.visual.src = "./Images/output.jpg"
    }
    else {
        text.innerHTML = "You do not own this weapon..."
    }
}
export function openConsumables() {
    update(inventoryDisplay[2])
}
export function treasure() {
    update(consumables[0])
}
export function useChest() {
    let amountGold = Math.round(Math.random()*500)
    if (treasureChest > 0) {
        treasureChest--
        playerStatus.gold += amountGold
        goldText.textContent = playerStatus.gold
        text.textContent = `You gained ${amountGold}G! You have ${treasureChest}x treasure chests left.`
    }
    else {
        text.textContent = `You don't have any treasure chests left.`
    }
}
export function useHeal() {
    if (healingStones > 0) {
        healingStones--
        playerStatus.maxHealth += 1
        playerStatus.health += 1
        healthText.textContent = Math.round(playerStatus.health)
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        text.textContent = `You gained Max HP+1! You have ${healingStones}x health stones left.`
    }
    else {
        text.textContent = `You don't have any healing stones left.`
    }
}
export function useGems() {
    let amountGold = Math.round(Math.random()*2000)
    if (fortuneGems > 0) {
        fortuneGems--
        playerStatus.maxHealth += 3
        if (playerStatus.luck < 100) {
            playerStatus.luck += 1
        }
        playerStatus.gold += amountGold
        healthText.textContent = Math.round(playerStatus.health)
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        goldText.textContent = playerStatus.gold
        text.textContent = `Luck increased, Max HP+10 and recieved ${amountGold}G! You have ${fortuneGems}x fortune gems left.`
    }
    else {
        text.textContent = `You don't have any fortune gems left.`
    }
}
export function statboost() {
    update(consumables[1])
}
export function mystery() {
    update(consumables[2])
}
export function resetStats() {
    if (haveReset === true) {
        let totalStats = 0;
        totalStats += playerStatus.st 
        totalStats += playerStatus.def 
        totalStats += playerStatus.ag
        totalStats += playerStatus.int
        playerStatus.st = 0
        playerStatus.def = 0
        playerStatus.ag = 0
        playerStatus.int = 0
    
        playerStatus.statPoints += totalStats
        totalStats = 0;

        haveReset = false
    }
}
let goldBoosted = false
export function goldBoost() {
    if (playerStatus.maxHealth > 150 && goldBoosted === false) {
        let healthTaken = Math.round(Math.random()* (150 - 100)) + 100
        console.log(healthTaken);
        playerStatus.maxHealth -= healthTaken
        playerStatus.health -= healthTaken
        healthText.textContent = playerStatus.health
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        text.textContent = `You sacrifice your vitality for the blessing of the God of Wealth. Gold gained from battles 20% increase.`
        monsters.forEach(monster => {
            monster.goldReward *= 1.2
        })
        goldBoosted = true
    }
    else if (playerStatus.maxHealth < 150) {
        text.textContent = `You don't have enough vitality`
    }
    else {
        text.textContent = `You have already sacrificed enough.`
    }
}
let xpBoosted = false
export function XPboost() {
    if (playerStatus.maxHealth > 150 && xpBoosted === false) {
        let healthTaken = Math.round(Math.random()* (150 - 100)) + 100
        console.log(healthTaken);
        playerStatus.maxHealth -= healthTaken
        playerStatus.health -= healthTaken
        healthText.textContent = playerStatus.health
        displayMaxHealth.textContent = `/${(playerStatus.maxHealth+playerStatus.BonusMaxHealth)}`
        text.textContent = `You sacrifice your vitality for the blessing of the God of War. Experience gained from battles 10% increase.`
        monsters.forEach(monster => {
            monster.xpYield *= 1.1
        })
        xpBoosted = true
    }
    else if (playerStatus.maxHealth < 150) {
        text.textContent = `You don't have enough vitality`
    }
    else {
        text.textContent = `You have already sacrificed enough.`
    }
}
function removeExtra() {
    let existingSpecial = document.getElementById("specialInspect")
    let existingElite = document.getElementById("eliteInspect")
    let existingBoss = document.getElementById("bossInspect")

    if (existingSpecial) {
        existingSpecial.remove()
    }
    if (existingElite) {
        existingElite.remove()
    }
    if (existingBoss) {
        existingBoss.remove()
    }
}
export function openRare() {
    update(inventoryDisplay[3])
    let special = document.createElement("button")
    special.textContent = "Special"
    special.setAttribute("id", "specialInspect")
    special.style.marginRight = "5px"

    mainButtons.mainButtons.append(special)

    let specialInspect = document.getElementById("specialInspect")

    specialInspect.addEventListener("click", function() {
        update(rareDrops[3])
        if (ownerShip.ownedTreasureSlime === true) {
            mainButtons.shopButton.textContent = `Treasure Slime's treasure`
        }
        removeExtra()
    })

    let elite = document.createElement("button")
    elite.textContent = "Elite"
    elite.setAttribute("id", "eliteInspect")
    elite.style.marginRight = "5px"

    mainButtons.mainButtons.append(elite)

    let eliteInspect = document.getElementById("eliteInspect")

    eliteInspect.addEventListener("click", function() {
        update(rareDrops[4])
        if (ownerShip.ownedBarbed === true) {
            mainButtons.shopButton.textContent = `Barbed Spike`
        }
        if (ownerShip.ownedPatriarch === true) {
            mainButtons.dungeonButton.textContent = `Kingly Bestial Soul`
        }
        if (ownerShip.ownedArchgoyle === true) {
            mainButtons.bossButton.textContent = `Archgoyle Horns`
        }
        removeExtra()
    })

    let boss = document.createElement("button")
    boss.textContent = "Boss"
    boss.setAttribute("id", "bossInspect")
    boss.style.marginRight = "5px"

    mainButtons.mainButtons.append(boss)

    let bossInspect = document.getElementById("bossInspect")

    bossInspect.addEventListener("click", function() {
        update(rareDrops[5])
        if (ownerShip.ownedDragon === true) {
            mainButtons.shopButton.textContent = `Determination`
        }
        removeExtra()
    })
}

export function inspectTreasureSlime() {
    if (ownerShip.ownedTreasureSlime === true) {
        text.textContent = `The treasure slime's coveted treasure. You have hoarded some interesting stuff from the pile, mostly gems, but at the center of the pile a mystical orb, radiating what seems to be life energy. Bonus Max HP+50, All stats+2, Gold gained +10%`
        mainButtons.visual.src = "./Images/invdis.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectBarbedSlime() {
    if (ownerShip.ownedBarbed === true) {
        text.textContent = `A sharp and steadfast spike, harvested from the carcass of the elite variant of slime, the Barbed Slime. Slime scholars say that from traveling the dungeon for many years, the common variant of slime evolved to it's environment, this giving birth to the Barbed Slime. ST+5, DEF+10, INT+3`
        mainButtons.visual.src = "./Images/wand.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectKingSoul() {
    if (ownerShip.ownedPatriarch === true) {
        text.textContent = `The death of the Fanged Pack's patriarch has granted you with the Kingly Bestial Soul, differing from it's common variant, it grants it's user with heightened strength and courage, truly fit for a king. ST+12, AG+14, INT+8`
        mainButtons.visual.src = "./Images/patriarch.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectArchgoyle() {
    if (ownerShip.ownedArchgoyle === true) {
        text.textContent = `Horns that once lay atop the might Archgoyle. Dawning this piece radiates demonic energy throughout your entire self, however with great courage and willpower which comes from being the Hero, instead grants you unleashed strength. ST+5, DEF+5, AG+8, INT+15,`
        mainButtons.visual.src = "./Images/archgoyle.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectDragon() {
    if (ownerShip.ownedDragon === true) {
        text.textContent = `You have been rewarded the Determination upon defeat of this calamity. Although the gauntlet holds no special effect, your determination surges true within. Bonus Max HP+150, All stats+15, XP gained from battles +40%`
        mainButtons.visual.src = "./Images/determination.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectOpt1() {
    update(rareDrops[0])
    removeExtra()
    if (ownerShip.ownedSlime === true) {
        mainButtons.shopButton.textContent = `Slime Drapes`
    }
    if (ownerShip.ownedWolf === true) {
        mainButtons.dungeonButton.textContent = `Bestial Soul`
    }
    if (ownerShip.ownedGargoyle === true) {
        mainButtons.bossButton.textContent = `Gargoyle Helm`
    }
}
export function inspectSlime() {
    if (ownerShip.ownedSlime === true) {
        text.textContent = `The slime drapes grant you with Bonus Max HP+100, and DEF+10. Sourced from the carcass of a worthy slime, dawning this piece grants you defensive capabilties due to their sliminess and viscosity.`
        mainButtons.visual.src = "./Images/drape.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectWolf() {
    if (ownerShip.ownedWolf === true) {
        text.textContent = `The bestial soul symbolizes the worthyness to lead the Fanged Beast Pack. However this only applies to members of the same kind. Harnessing this power to your avail boosts your ST+3, AG+6, INT+6.`
        mainButtons.visual.src = "./Images/soul.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectGargoyle() {
    if (ownerShip.ownedGargoyle === true) {
        text.textContent = `The helmet of a fallen gargoyle represents the lifeforce within these inanimate creatures. The helmet grants you with ST+5, DEF+8, INT+8.`
        mainButtons.visual.src = "./Images/helm.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectOpt2() {
    update(rareDrops[1])
    removeExtra()
    if (ownerShip.ownedGolem === true) {
        mainButtons.shopButton.textContent = `Golem Core`
    }
    if (ownerShip.ownedMagus === true) {
        mainButtons.dungeonButton.textContent = `Scepter`
    }
    if (ownerShip.ownedRevenant === true) {
        mainButtons.bossButton.textContent = `Revenant's longsword`
    }
}
export function inspectGolem() {
    if (ownerShip.ownedGolem === true) {
        text.textContent = `The golem core stands as the lynchpin of the power source which fuels the creature. Inspecting the meticulous invention has granted you inspiration. ST+6, DEF+2, INT+12 `
        mainButtons.visual.src = "./Images/core.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectMagus() {
    if (ownerShip.ownedMagus === true) {
        text.textContent = `The Magus Scepter is an ancient staff, with a crystal at the forefront of the scepter. The crystal commands necromancy from inanimate objects, however with the death of the magus it's power is no longer. ST+3, DEF+3, AG+1, INT+15`
        mainButtons.visual.src = "./Images/scepter.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectRevenant() {
    if (ownerShip.ownedRevenant === true) {
        text.textContent = `The revenant's longsword, bequeathed by a once mighty warrior, however turned into a revenant. The longsword's power hasn't diminshed from it's prime, and with a new wielder it's purpose is not yet diminished. ST+8, DEF+5, AG+2, INT+5.`
        mainButtons.visual.src = "./Images/longsword.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectOpt3() {
    update(rareDrops[2])
    removeExtra()
    if (ownerShip.ownedAbomination === true) {
        mainButtons.shopButton.textContent = `Abomination Core`
    }
    if (ownerShip.ownedStalker === true) {
        mainButtons.dungeonButton.textContent = `Obsessive Diary`
    }
    if (ownerShip.ownedMimic === true) {
        mainButtons.bossButton.textContent = `False Hero's insignia`
    }
}
export function inspectAbomination() {
    if (ownerShip.ownedAbomination === true) {
        text.textContent = `The fallen abominations core, once resided deep within it's putrid flesh, it now belongs to you and shines radiantly, seemingly purified from the corruption. Bonus Max HP+200, INT+15`
        mainButtons.visual.src = "./Images/core2.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectStalker() {
    if (ownerShip.ownedStalker === true) {
        text.textContent = `An obsessive diary left behind by your fallen stalker... For some reason it lingers on your mind. Although the book discarded, it's contents remain... Bonus Max HP+20, AG+20`
        mainButtons.visual.src = "./Images/diary.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}
export function inspectMimic() {
    if (ownerShip.ownedMimic === true) {
        text.textContent = `A false hero's insignia replicated by the Doppelganger. Although it's remains have vanished, this insignia still remains. Perhaps a longing to be the true hero? Bonus Max HP+50, ST+10, DEF+10, AG+10, INT+10.`
        mainButtons.visual.src = "./Images/insignia.jpg"
    }
    else {
        text.textContent = `You don't have this item.`
    }
}

export function placeHolder() {

}