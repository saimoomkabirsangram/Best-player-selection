// Common Function 
function getInputValueById(inputId){
    let costValue = document.getElementById(inputId);
    let costValueString = costValue.value ;
    let getFinalCostValue = parseFloat(costValueString);
    costValue.value = ''
    return getFinalCostValue 
}

function getTextValueById(textId){
    let costValue = document.getElementById(textId);
    let costValueString = costValue.innerText ;
    let getFinalCostValue = parseFloat(costValueString);
    return getFinalCostValue 
}


document.getElementById('budget-calculate').addEventListener('click', function(){
    let playerInputValue = getInputValueById('per-people-cost');
    let PlayerQtn = getTextValueById('selected-heros');
    let totalCost = playerInputValue * PlayerQtn;
    

    let playerExpence = document.getElementById('player-expence');
    let playerExpencestr = playerExpence.innerText
    let playerExpenceNumber = parseFloat(playerExpencestr);
    playerExpence.innerText = totalCost;
})


// button select 
document.getElementById('total-calculate').addEventListener('click', function(){
    let managerCost = getInputValueById('manager-cost')
    let coachCost = getInputValueById('coach-cost')

    let totalMangerCoachCost = managerCost + coachCost ;

    let playerExpence = document.getElementById('player-expence');
    let playerExpencestr = playerExpence.innerText
    let playerExpenceNumber = parseFloat(playerExpencestr);
    // playerExpence.innerText = totalCost;
    console.log(playerExpenceNumber);

    playerExpencestr.innerText = totalMangerCoachCost;

    let finalCostValue = totalMangerCoachCost + playerExpenceNumber;



    let getTotalValue = document.getElementById('total-cost')
    let totalCoststr = getTotalValue.innerText;
    let finalCost = parseFloat(totalCoststr);
    getTotalValue.innerText = finalCostValue;

})
