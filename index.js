// Code your solution in this file!

function returnFirstTwoDrivers(drivers){
return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value){
    return function(){
        return value * value;
    };
}
const fareDoubler = function(fare){
    return fare *2;
}
const fareTripler= function(fare){
    return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);}