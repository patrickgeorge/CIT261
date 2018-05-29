function charCreate(name, health, MP, attack, defense, wisdom, strength) {
    this.name = name;
    this.health = health;
    this.MP = MP;
    this.attack = attack;
    this.defense = defense;
    this.wisdom = wisdom;
    this.strength = strength;
}


function base() {

var baseChar = new charCreate("Human", 15, 0, 8, 8, 0, 0)

document.getElementById("baseType").innerHTML = baseChar.name;
document.getElementById("baseHealth").innerHTML = baseChar.health;
document.getElementById("baseMP").innerHTML = baseChar.MP;
document.getElementById("baseAttack").innerHTML = baseChar.attack;
document.getElementById("baseDefense").innerHTML = baseChar.defense;
document.getElementById("baseWisdom").innerHTML = baseChar.wisdom;
document.getElementById("baseStrength").innerHTML = baseChar.strength;
}

function newChar() {
    var cType = document.getElementById("cType").value;
    var newChar;
    
    switch(cType) {
        case 'C':
        case 'c':
        newChar = new charCreate("Cleric", 15, 10, 6, 6, 10, 5);
        charCreate.prototype.heal = function healMove() {
            console.log("Much better!");
        };
        newChar.heal();
        break;
        
        case 'F':
        case 'f':
        newChar = new charCreate("Fighter", 20, 0, 10, 10, 5, 15);
        charCreate.prototype.rush = function rushMove() {
            console.log("Charge!");
        };
        newChar.rush();
        break;
        
        case 'W':
        case 'w':
        newChar = new charCreate("Wizard", 10, 15, 4, 4, 15, 5);
        charCreate.prototype.fireball = function fireballMove() {
            console.log("HOT!");
        };
        newChar.fireball();
        break;
    }
    
    document.getElementById("newType").innerHTML = newChar.name;
    document.getElementById("newHealth").innerHTML = newChar.health;
    document.getElementById("newMP").innerHTML = newChar.MP;
    document.getElementById("newAttack").innerHTML = newChar.attack;
    document.getElementById("newDefense").innerHTML = newChar.defense;
    document.getElementById("newWisdom").innerHTML = newChar.wisdom;
    document.getElementById("newStrength").innerHTML = newChar.strength;
}