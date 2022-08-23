// // budget calculate 
// document.getElementById('budget-calculate').addEventListener('click', function(){
//     let perPlayerCostValue = document.getElementById('per-people-cost')
//     let perPlayerString = perPlayerCostValue.value ;
//     let perPlayerCost = parseFloat(perPlayerString);

//     // selected player value 
//     const playerTableBodyElement = document.getElementById('selected-heros');
//     let playerValueString = playerTableBodyElement.innerText;
//     let playerLenth = parseFloat(playerValueString);
//     playerLenth.innerText = perPlayerCost ;

//     // calculate per player cost
//     const totalPlayerCost = playerLenth * perPlayerCost ;

//     // player expence 
//     let playerExpence = document.getElementById('player-expence');
//     let playerExpenceString = playerExpence.innerText;
//     let totalPlayerExpence = parseFloat(playerExpenceString);
//     playerExpence.innerText = totalPlayerCost;

//     // manager cost 
//     let managerCost = document.getElementById('manager-cost');
//     let managerCostString = managerCost.value;
//     let managerCostValue = parseFloat(managerCostString);

//     // coach cost 
//     let coachCost = document.getElementById('coach-cost');
//     let coachCostString = coachCost.value;
//     let coachCostValue = parseFloat(coachCostString);

//     // total cost 
//     totalPlayerExpence + managerCostValue + coachCostValue;
// })
// document.getElementById('total-calculate').addEventListener('click', function(){
//     // manager cost 
//     let managerCost = document.getElementById('manager-cost');
//     let managerCostString = managerCost.value;
//     let managerCostValue = parseFloat(managerCostString);

//     // coach cost 
//     let coachCost = document.getElementById('coach-cost');
//     let coachCostString = coachCost.value;
//     let coachCostValue = parseFloat(coachCostString);

//     let playerExpenceValue = document.getElementById('player-expence');
//     // total cost 
//     let final = managerCostValue + coachCostValue + playerExpenceValue;
//     console.log(final);

// })

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
    let playerExpencestr = parseFloat(playerExpence);
    playerExpence.innerText = totalCost;

})