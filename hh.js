let a = window.prompt("My name is Shray. Whats yours??");

window.prompt("Hi " + a + ", So how was your day??");
window.prompt(
  "Okay!so how was your day with your friends???did you hang out with them"
);
window.prompt(
  "atleast you are lucky to have friends unlike me. By the way how does it feels to have a friend??it must be joyful"
);
window.alert(
  "Good! Never loose them. Its really depressing to live alone with noone to share your thoughts."
);
let b = window.prompt("  by the way are you a lady or a man?");
if (b == "girl" || b == "lady" || b == "female") {
  window.alert("so we have a lady in the house. That's Nice.");
  window.alert(
    "Its been long talking to a girl. but i will try not to disappoint. Please spare me incase i get nervous or shy sometimes."
  );
  window.prompt(
    "Lets start with a little girlish question. Do you enjoy gossips?? be true"
  );
  b1 = window.alert(
    "okay! Sometimes i think girls are made for gossips.itni baatein karna bhi ek talent hai"
  );
  window.alert(
    "wais ladkiyon ki burai kbh aur. lets get to know little more about you"
  );
  window.prompt("so are you single??");
} 



else {
  window.alert("Unlucky me. Male again.Maybe females dont enjoy my talk.");
  b2 = window.prompt("by the way you aren't gay.are you??");
  if (b2 == "yes") {
    window.alert("laga hi tha");
  } else {
    window.prompt("nice to know. I dont want to face that situation again. ");
  }
}
