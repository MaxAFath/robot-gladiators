 // Game States
 // "WIN" - Player robot has defeated all enemy-robots
 //     * Fight all enemy-robots
 //     * Defeat each enemy-robot
 // "LOSE" - Player robot's health is zero or less
 /*variable player name */
 var playerName = window.prompt("What is your robot's name?");
 var playerHealth = 100;
 var playerAttack = 10;
 var playerMoney = 10;

//log multiple values
console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

window.alert("Welcome Robot Gladiators!");

//create fight function
var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
      // ask player if they'd like to fight or run
      var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  
      // if player picks "skip" confirm and then stop the loop
      if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
  
        // if yes (true), leave fight
        if (confirmSkip) {
          window.alert(playerName + ' has decided to skip this fight. Goodbye!');
          // subtract money from playerMoney for skipping
          playerMoney = playerMoney - 10;
          console.log("playerMoney", playerMoney)
          break;
        }
      }
  
      // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
  
      // check enemy's health
      if (enemyHealth <= 0) {
        window.alert(enemyName + ' has died!');
  
        // award player money for winning
        playerMoney = playerMoney + 20;
  
        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
      }
  
      // remove players's health by subtracting the amount set in the enemyAttack variable
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
      );
  
      // check player's health
      if (playerHealth <= 0) {
        window.alert(playerName + ' has died!');
        // leave while() loop if player is dead
        break;
      } else {
        window.alert(playerName + ' still has ' + playerHealth + ' health left.');
      }
    }
  };
//execute fight function
//fight();

for( var i = 0; i < enemyNames.length; i++){
    //let the player know what round they are in, and remember the rounds are based of iterator so it starts at 0
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ) );
      }
    //if player health is to low to continue breaks loop
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
    //pick new enemy to fight based on iterator
    var pickedEnemyName = enemyNames[i];

    //resets enemy health after every fight
    enemyHealth = 50;

    //passes the picked enemy to the fight function to fight
    fight(enemyNames[i]);
}
