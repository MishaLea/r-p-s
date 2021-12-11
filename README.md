# Let's Rock, Pape, Scissors! (https://8000-tan-impala-mpfkiaxi.ws-eu23.gitpod.io/)

Introduction: 
This is a fun, basic website which provides a game of rock, paper, scissors. 
The user will be provided with an easy to play game against player (user) and the computer. 
The HTML and CSS code will allow for friendly/easy to use navigation with a simple header, divs, images and footer. 
It is intended primarily for anyone who wants to pass time with a simple, easy to use game and/or for children that are developing their thinking/visual skills. 

I hope to accomplish a friendly and easy to navigate website for user expereince, accessibility and responsivity.  

# Content: 
Introduction 
Strategy
Scope & Structure
Skeleton/Wireframes/Surface
Design & Features
Testing
HTML/CSS/Javascript Validators
Fixed Bugs
Deployment
Credits


# Strategy: 
If I'm honest, this module on Javascript has been challenging so the strategy for this project was to keep it as simple as possible. 
The aim of the game is is to beat the computer against a simple Rock, Paper, Scissors challenge. 

# Scope: 

- Responsivity over 3 screen sizes - laptops (over 1000xp), tablets (768px width) and mobile devide (320px mas width). The three sizes will provide all the same buttons, graphics and results/score keeping.

- Navigation is very easy to understand and utilise. The hover button has also been included as an extra feature. This works well on the laptop and tablet screens but is a little slow on the mobile device. 

- Calming & pleasant foreground and background colours to provide an enjoyable experience. 

# Structure: 
- all features will be on one page - including the game options and and result pop up screen. Score keeping will also be included showing whether the computer wins, the user or if it's a tie. (In this case, the score will not be incremented). 

- The pop up screen will show one of three messages: 
1) A congratulatory message confirming you won, a sorry message to say the computer won or to confirm it was a tie. 

# Skeleton: 
Balsamiq was sued when creating the wireframes for the laptop, tablet and mobile. 

*Laptopp2
![Laptopp2](/assets/images/laptopp2.jpg)

*tabletsizep2
![tabletsizep2](/assets/images/tabletsizep2.jpg)

*mobilep2
![mobilep2](/assets/images/mobilep2.jpg)


And once those minor errors were fixed, it came back with the following. 

 
The CSS validator came back with no warnings or errors, as well. However the Javascript validator advised that 
'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). Should be included in the JavaScript code in order for it to work in the JSHint Validator. 
Once that was included in the code, there were just a few errors (again, minor and avoidable) IE. Semi colon missing, 

However once those were fixed, I was happy to see all three sections of the code (HTML, CSS, JavaSCript) came back with just 1 or 2 warnings. No Errors were found. 

# The Lighthouse Test: 
I tried this out before I had even finished coding the website and was surprised to see it had a 100% accessibility and between 92% - 100% for the other elements. 

*lighthouse
![lighthouse](/assets/images/lighthouse.jpg)

# Fixed Errors: 
The result pop up screen was not working for me at all at the beginning and never returned a result without  the console showing errors throughout the code. Once i clarified certain issues with Gbenga (Mentor) that allowed me to see how to increment the scores sufficiently without causing any further errors as well as fixing the previous errors showing in the Javascrip console.
  
*IncrementScoreMethod+values
![IncrementScoreMethod+values](/assets/images/IncrementScoreMethod+values)

Instead of the ‘++’ operator, I had a ‘+=’ operator which is for Python rather than JavaScript.     

Aside from the errors in Java, I have had difficulty with the structure of the website when adding in @mediaquries. 
I believe it’s due to descendants as not all the classes are amended for the other screen sizes. My next plan is to try the ‘AM I Responsive’ link. 

# Credits: 

- Rock, Paper, Scissor Image = https://clipart.me/free-vector/rock-paper-scissors
- Codeinstitute - Videos and lessons
- FontAwesome - https://fontawesome.com/
- google.

Deployment - 

Through Github Diployment 'Page'

