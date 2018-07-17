/* Enter the code to remove the main node element under this comment */
main.remove();
/* Create your new element here and assign it to newHeader */
document.body.appendChild(element);
var newHeader = document.createElement('h1');
var textnode = document.createTextNode("(your name) is the champion!");
newHeader.appendChild(textnode);
newHeader.setAttribute("id", "victory");
