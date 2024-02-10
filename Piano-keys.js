/*
You've just realized a childhood dream by getting a beautiful and 
beautiful-sounding upright piano from a friend who was leaving the country. 

Now you're doing an exercise where you play the very first 
(leftmost, lowest in pitch) key on the 88-key keyboard, 
which is white, with the little finger on your left hand, 
then the second key, which is black, with the ring finger on your left hand, 
then the third key, which is white, with the middle finger on your left hand, 
then the fourth key, also white, with your left index finger, 
and then the fifth key, which is black, with your left thumb. 

Then you play the sixth key, which is white, with your right thumb, 
and continue on playing the seventh, eighth, ninth, and tenth keys 
with the other four fingers of your right hand. 
Then for the eleventh key you go back to your left little finger, and so on. 

Once you get to the rightmost/highest, 88th, key, 
you start all over again with your left little finger on the first key. 
Your thought is that this will help you to learn to move smoothly and with uniform pressure 
on the keys from each finger to the next and back and forth between hands.

You're not saying the names of the notes while you're doing this, 
but instead just counting each key press out loud 
(not starting again at 1 after 88, but continuing on to 89 and so forth)

The function you are going to write is not actually going to help you with your piano playing, 
but just explore one of the patterns you're experiencing: 
Given the number you stopped on, was it on a black key or a white key? 

For example, in the description of your piano exercise above, 
if you stopped at 5, your left thumb would be on the fifth key of the piano, which is black. 
Or if you stopped at 92, you would have gone all the way from keys 1 to 88 and then wrapped around, 
so that you would be on the fourth key, which is white.

Your function will receive an integer between 1 and 10000 and return the string "black" or "white",
here are a few more examples:
  1     "white"
  12    "black"
  42    "white"
  100   "black"
  2017  "white"
*/


// Solution

function blackOrWhiteKey(key) {
  key = key%88;
  let black  = [2, 4, 7, 9, 11];
  if (key > 3) key = (key-3)%12;
  return (black.includes(key)) ? 'black' : 'white';
}

// or