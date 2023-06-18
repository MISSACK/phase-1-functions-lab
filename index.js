// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > 42) {
      return pickupLocation - 42;
    } else {
      return 42 - pickupLocation;
    }
}
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;
}
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264;
}
  
  function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    
    if (feet <= 400) {
      return 0;
    } else if (feet > 400 && feet <= 2000) {
      return (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
}
  