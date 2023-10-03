
function distanceFromHqInBlocks(someValue) {
    return (42-someValue);
    //returns the number of blocks given a value
  }





  function distanceFromHqInFeet(someValue) {
    let block = 264;
    distanceFromHqInBlocks(someValue);
    return (distanceFromHqInBlocks * blocks);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
  }




  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
   return ((destination - start)*264);
  }






  //Fare culculation
  function calculatesFarePrice(start, destination) {
    if (distance <= 400) {
        return 0; // First 400 feet are free
      } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
      } else if (distance > 2000 && distance <= 2500) {
        return 25; // Flat fare for distance between 2000 and 2500 feet
      } else {
        return 'cannot travel that far'; // Distance over 2500 feet is not allowed
      }
    }
    
    
    
    //returns the fare for the customer
