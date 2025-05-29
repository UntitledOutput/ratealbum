const clientId = '8f3a3b4d5c044c898f07657fa8c7667e';
const clientSecret = 'dec9085a8a124e65809e504eb5293290';
let token = "";

async function getToken() {
    const res = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await res.json();
    token = data.access_token;
}

function colorFromRating(rating) {
    if (rating >= 100) return '#00ff00'; // green
    if (rating >= 80) return '#00ff00';
    if (rating >= 25) return '#ffff00';
    return '#ff0000'; // red
}