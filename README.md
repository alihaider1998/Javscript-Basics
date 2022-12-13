# Sport-Radar-JS-Test
How to Run:-
Open the "home.html" file in your browser. You can do this by right clicking on the "home.html" file and open with your favorite browser. 

# Question 1
# DOM Manipulation
Create 2 boxes of any size. One box should display the width of the window and right-click should be disabled(no menu
should be shown on right click) and alert if there is an attempt to do so. The other box should display the height of the
window and left-click should be disabled. Give an alert if attempted. The height and width must be updated as the
window is resized.

# Question 2
# Promises
Add code to changeColorAfter function so that the calling the function with delay (in millisec) and color (valid color
string) will return a promise and styles the div color-box after the set delay.

# Question 3
# Async/Await
Call the above function changeColorAfter within an async function – use the same colors and delay in same order as
above.

# Question 4
# Arrays and Objects
Write code to find below from array of objects (sample below)
- highest rated TV show – If 2 or 3 shows have same rating, go by higher number of ratings
- 2nd highest rated TV show – If 2 or 3 shows have same rating, go by higher number of ratings
Hint: Can use reduce()
const tvShows = [
 {
 title: 'Planet Earth II',
 score: 9.5,
 year: 2016,
 numRatings: 5000
 },
 {
 title: 'Planet Earth',
 score: 9.4,
 year: 2006,
 numRatings: 5000
 },
 {
 title: 'Breaking Bad',
 score: 9.4,
 year: 2008,
 numRatings: 6000
 },
 {
 title: 'Band Of Brothers',
 score: 9.4,
 year: 2001,
 numRatings: 4900
 },
 {
 title: 'Chernobyl',
 score: 9.3,
 year: 2019,
 numRatings: 4900
 },
 {
 title: 'Jingle All The Way',
 score: 7.1,
 year: 1996,
 numRatings: 5000
 },
 {
 title: 'The Wire',
 score: 9.3,
 year: 2002,
 numRatings: 6000
 }
]

