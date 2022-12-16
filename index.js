function distanceFromHqInBlocks(pickUp) {
    var dist;
    if (pickUp > 42) {
        dist = pickUp - 42;
    } 
    else {
        dist = 42 - pickUp;
    }
    return dist;
} 
function distanceFromHqInFeet(pickUp) {
    var dist;
    if (pickUp > 42) {
        dist = pickUp - 42;
    } 
    else {
        dist = 42 - pickUp;
    }

    return dist * 264;
} 
function distanceTravelledInFeet(pickUp, dropOff) {
    var dist;
    if (pickUp > dropOff) {
        dist = pickUp - dropOff;
    } 
    else {
        dist = dropOff - pickUp;
    }
    return dist * 264;
}
function calculatesFarePrice(pickUp, dropOff) {
    var price = 0;
    var dist = Math.abs(pickUp - dropOff) * 264;

    if (dist > 400 && dist < 2000){
        dist -= 400
        price = dist * 0.02;
    } 
    else if (dist > 2000 && dist < 2500) {
        price = 25;
    } else if (dist > 2500){
        price = 'cannot travel that far';
    }
    return price;

    
}
