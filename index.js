//Step1: Register the mouse click on a button.
//Step2: Register my mouse clicks on all the buttons
//Step3: which button was clicked
//Step4: Add Audio to a click event.
//step5: Add a particular audio to the particular button that was clicked
//Step6: Register the key press from keyboard
//Step7: Which key is pressed.
//Step8: Add a particular audio to the particular key that was pressed
//Step9: Refactor the code


/*------------------------ Mouse Click ------------------------------*/
var buttonNumber= document.querySelectorAll(".drum").length; //Button Number

for(var i=0; i<buttonNumber; i++)
document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonName= this.innerHTML; //The button that was clicked
      addSound(buttonName); //Audio added to the button that was clicked

});
/*------------------------ Mouse Click ------------------------------*/


/*------------------------ Keyboard key press ------------------------------*/
document.addEventListener("keydown", (event)=>{
  //event is passed as a parameter; by reference to the predefined "keydown" Object inside an anonymous callback function

    var keyName= event.key;  //Accessing the property "key" that is inside the predefined object "keydown"
    addSound(keyName);   //Audio added to the key that was pressed
});
/*------------------------ Keyboard key press ------------------------------*/


/*--- Function that identifies which paticular key/button was pressed and adds sound to it ---*/
function addSound(buttonOrKey){
  switch(buttonOrKey){
  case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

  case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

  case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

  case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

  case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

  default:
    console.log(buttonOrKey);
  }
}
