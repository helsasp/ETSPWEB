function fetchScores() {
    fetch('https://ets-pemrograman-web-f.cyclic.app/scores/score')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => console.error('Error:', error));
}

function displayUsers(users) {
    let table = document.getElementById('playerlist');

    users.sort((a, b) => b.score - a.score);


    for (let i = 0; i < Math.min(3, users.length); i++) {
        let user = users[i];
        let row = table.insertRow(-1);
        let nameCell = row.insertCell(0);
        let scoreCell = row.insertCell(1);
        nameCell.innerHTML = user.nama;
        scoreCell.innerHTML = user.score;
    }
}

fetchScores();