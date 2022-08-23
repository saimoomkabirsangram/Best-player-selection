// selected hero 
let playerArr = [];
function playerNameDsiplay(){
    const playerTableBody = document.getElementById('player-table-body');
    playerTableBody.textContent = '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>Player</td>
    <td></td>`

    playerTableBody.appendChild(tr)

    
    for(let i = 0; i < playerArr.length; i++){
        let playerName = playerArr[i].getplayerName;
        if( i > 4){
            alert('less or equal 5')
            return
        }
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <tr>
            <th>${i+1}</th>
            <td>${playerName}</td>
        </tr>`

        playerTableBody.appendChild(tr);
       
    }
    const playerTableBodyElement = document.getElementById('selected-heros');
    playerTableBodyElement.innerText = playerArr.length ;
}
// button select    
function buttonSelect(element) {
    const btnDisable = element.setAttribute("disabled", '')
    let getplayerName = element.parentNode.children[0].innerText;

    const playerObj = {
        getplayerName: getplayerName
    }
    playerArr.push(playerObj);
    playerNameDsiplay(playerArr);
}