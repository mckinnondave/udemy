let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function()
 {
  console.log('Ahhhhhhhh!');
 }}

 user.age // O(1)
 user.spell = 'abra kadabra'
 console.log(user);
 user.scream // O(1)

//  Collisions where hashtables get stored will cause O(n/k) with k being the size of the hashtable => becomes O(n).