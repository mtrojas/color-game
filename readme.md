Styling video number 7
remaining styling to make, comparing final project with current state side 
by side:
-round the corners
-adding some space between the squares and the span
-changing the styling of the buttons: don't look like buttons and 
have a hover effect
-position of buttons
-the text for the message is already saved or taken 
-animation, when you click the squares that are not correct,
they disappear slowly fading out
-h1 needs to take up more space, change the background color, the font,
make sure span is formatted correctly and on its own line and with a larger
font
-change the font for the entire body. it's the same font with different 
styles applied (like weight)
-remove or eliminate space between the span and the window
1. Start with h1.
-We need to align things in the middle, we do so with text-align: center.
-Change the background color, which we do so with background: steelblue, 
which works for a bit but we have an issue here when we play and after 
winning the game or asking for new colors, the JS is overriding our CSS
and taking it back to the gray color. 
To solve this, we need to change it to this steelblue color in JS, so that 
this is our default color.
-Lets get rid of all the black space in every side of our h1, we start
giving it margin 0 (top-bottom), with that we eliminated the top and bottom
black, but the black stripes or gaps on the sides comes from the body, 
so to fix that we go to the body and give it a margin 0 too.
-We are applying the same font to all the elements, some of them have 
just different weights. We are using a built in font called Avenir and
we are going to add it to the body (as this might not work on all the 
browsers, we are adding a backup with Montserrat) 
-Still, does not look the same yet, and that comes down to our font-weight.
We do this adding to the h1 a font-weight of normal (it is intrinsically
a heavier font-weight)
-All the text is uppercase, and we can do that with 
text-transform: uppercase
-Next, we want to make sure that our color it's on it's own line and that 
we can style that span slightly differently (bigger font-size). To do 
this we will take an approach that is a little bit frowned upon (we should
be doing with pure CSS), in which we do it in our HTML:
-We have "The Great" in one line
-In the next line we have our span
-And to add a line break, we can add a br tag (self-closing tag)
-Then we have another line with "Color Game"
-Now, we can focus on making the span a lot bigger than the rest of the h1.
In our CSS, we are going to select the span's ID colorDisplay and give it
a font-size of 200% (that is relative, meaning a 200% larger than the 
h1 font-size).
-You notice that we have a lot more space between the lines, we can fix 
that giving to the h1 a line-height of 1.1 (with no unit).
-Now, is everything closer together, but we lost the space on top and 
bottom so we need to add some padding (the space between the element and
its own border). We are going to add padding only to the top and bottom,
not left and right, and we want 20px, so we add padding: 20px 0.
-Finally, our header looks fine, so we should tackle next, the buttons
in our navbar.
2.Buttons
-The first thing we want to do, is get rid of the borders, the background
color (since they are going to be white until we hover over or select one,
when they aquire the h1 background color) and the font-family is the same
as h1.
-I will select all buttons, and give them border:none and background:none,
so they are only text.
-Now we need to make them uppercase with text-transform:uppercase.
-We want our buttons to go all the way through, from top to bottom of the
div stripe container, now they only take up part of the space. We can do 
that by setting height: 100%, so it will take up 100% of the containing 
element.
-We are now a lot closer, we just need to change some colors, font-size,
font-weight and give them the hover effect.
-Starting by the font-weight, we are going to make it a little bit heavier,
assigning font-weight:700 (no unit), and color will also be steelblue, 
color:steelblue. 
-There is a minor change that we can do, making the letter-spacing to be
letter-spacing:1px and that space out a little bit between each letter. 
-Lastly, lets focus on the font-size that seems a little bit too small.
We can do this assigning font-size:inherit, that what we don't need
to explicitly set it.
-In our version we lack the space between the New Color Button and the 
Easy and Hard buttons, we create that styling the span (called "message")
and give it some properties so it can take up that space. 
First, we have to apply a display:block-inline and the give it a 
width:20%, so it pushes the elements beside it to the sides.
-Now, we can focus on the selected property and the hover effect.
-We do that creating a selector button:hover {apply properties}. We
are going to make the font color:white, and the background: steelblue, 
basically reversing the colors.
-The selected class is going to look the same, so we will just copy the 
styles (replacing the blue background style that we gave them previously).
-There is a slight difference, when I hover and then leave there is 
fade-in and fade-out effect. We can fix that using a CSS transition 
property inside the button selector, passing it 2 values, the first one is
what we want to transition (transition:all) and the second one is how
long we want it to take, we will exaggerate it at first giving it 
2 seconds (transition: all 2.0s). Again, the transition property is how we
can tell CSS how to animate transitions between color changes or font-size
changes, and just any properties, in this case we selected all, and the 
2 properties that we change when hovering are font-color and background, 
and it should take 2 seconds. In reality, we will assign it 0.3s.
-Lastly, there is an annoying outline feature, added to the buttons by the 
browser and we can turn it off with outline:none.
3.Squares
-We want to give our squares a round border and we do that with 
border-radius. We go to our square selector and assign a border-radius:15%.
-Now, we want to focus on the animation, when we click an incorrect
square, it fades away instead of just disappearing. To achieve this we 
are also going to use the transition property, but this time only aiming to
the background color, doing transition: background 0.3s;
-I had an issue, since the background color was changing/transitioning
to steelblue instead of gray. The solution was to go back to JS and change 
what color you wanted to transform after clicking the wrong one (line 87).
-To be browser friendly, we need to add 2 more properties:
we add --webkit-transition and -moz-transition with the same values, do
that on the other transition too.
-Lastly, we want to add more space between the squares and the stripe. To
achieve this, we have a container surrounding all our squares. We can add
a margin (space between the the element and other elements in the page)
to the container top and bottom.


