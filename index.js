function scuberGreetingForFeet(aNumber){
  if (aNumber <= 400)
  return("This one is on me!");
  else if (aNumber <= 2499)
  return("I will gladly take your thirty bucks.");
  else (aNumber >= 2500)
  return("No can do.");

}

function ternaryCheckCity(aCity){
  return aCity === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(aTip){
  switch(aTip){
    case 'generous':
      return ("Thank you so much.");
      break;
    case 'not as generous':
      return ("Thank you.");
      break;   
    default:
    case 'lastResort':
      return ("Bye.")
      break;
    }

}