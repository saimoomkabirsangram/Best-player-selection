// budget calculate 
document.getElementById('budget-calculate').addEventListener('click', function(){
    let perPlayerCostValue = document.getElementById('per-people-cost')
    let perPlayerString = perPlayerCostValue.value ;
    let perPlayerCost = parseFloat(perPlayerString);

    // selected player value 
    const playerTableBodyElement = document.getElementById('selected-heros');
    let playerValueString = playerTableBodyElement.innerText;
    let playerLenth = parseFloat(playerValueString);
    playerLenth.innerText = perPlayerCost ;

    // calculate per player 
    const totalPlayerCost = playerLenth * perPlayerCost ;

    // player expence 
    let playerExpence = document.getElementById('player-expence');
    let playerExpenceString = playerExpence.innerText;
    let totalPlayerExpence = parseFloat(playerExpenceString);
    totalPlayerExpence.innerText = totalPlayerCost;
})




