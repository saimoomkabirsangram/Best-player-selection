// selected hero 
let playerArr = [];
function playerNameDsiplay(){
    const playerTableBodyElement = document.getElementById('selected-heros');
    playerTableBodyElement.innerText = playerArr.length ;
    const playerTableBody = document.getElementById('player-table-body');
    playerTableBody.textContent = '';

    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>Player</td>
    <td>${playerArr.length}</td>`

    playerTableBody.appendChild(tr)

    
    for(let i = 0; i < playerArr.length; i++){
        let playerName = playerArr[i].getplayerName;

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <tr>
            <th class="text-white">${i+1}</th>
            <td class="text-white">${playerName}</td>
        </tr>`

        playerTableBody.appendChild(tr);
       
    }
}
// button select 
function buttonSelect(element) {
    let getplayerName = element.parentNode.children[0].innerText;

    const playerObj = {
        getplayerName: getplayerName
    }
    playerArr.push(playerObj);
    playerNameDsiplay(playerArr);
}
