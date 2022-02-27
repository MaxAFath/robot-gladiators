 /*variable player name */
 var playerName = window.prompt("What is your robot's name?");
 var playerHealth = 100;
 var playerAttack = 10;

//log multiple values
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
//create fight function
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  //subtracting the attack from health values and setting health to resulting value
  //first to take damage is enemy
  enemyHealth = enemyHealth - playerAttack;
  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  ); //log to display the change in health
  //check enemy's health
  if(enemyHealth <= 0){
      window.alert(enemyName + " has died!");
  }
  else{
      window.alert(enemyName + " has " + enemyHealth + " health left.");
  }

  //next is player health 
  playerHealth = playerHealth - enemyAttack;
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

  //check to see if player is still alive
  if(player <= 0){
      console.log("Your player is still alive");
  }

};
//execute fight function
 fight();
