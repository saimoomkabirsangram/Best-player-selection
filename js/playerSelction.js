// selected hero 
let playerArr = [];
function playerNameDsiplay(){
    const playerTableBody = document.getElementById('player-table-body')
    playerTableBody.innerHTML = "";
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