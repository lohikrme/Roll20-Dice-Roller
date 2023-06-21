# Roll20-Dice-Roller-1.0.1
Hello! This is my Roll20 Dice Roller version 1.0.1. 

All rights reserved. For personal use only.

Last time updated: 5th january 2023.

----------------------------------------------------------------------
Where to use it?:

This code works on chrome web browser. And is intended to be used inside the roll20.net gaming website.

----------------------------------------------------------------------
How to use it?:

Open chrome, press F12. This opens inspector for you. There create a new snipper with a descriptive name, and remember
to add the tag ".js" to end of this name, so the browser knows this code is javascript language.
Then copy paste all this code into the snippet, and save.
After that, open the roll20.net website, launch a game, and once the map has been launched, again open the inspector with F12.
Go to the "sources", and there find the snippet you created previously. Right click the snippet, and press "run".
Now the code should be working. But remember, every time u close the roll20 game tab, it turns off the snippet.
So you must run it again when u log back in to roll20 game.

----------------------------------------------------------------------
What does it do?:

This snippet replaces the hassle of writing "/roll 2d6" or similar to the chat box inside roll20.net.
Instead, this snippet does that every time user presses a key between 1 and 9. For example, press 6.
On release, this code will roll 6d6.

----------------------------------------------------------------------
Is it safe?:

This code is super safe. Everyone can see its content, and it only scripts a bit keyboard usage.
