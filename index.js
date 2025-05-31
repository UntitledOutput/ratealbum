const clientId = 'fa5c2b784b544cc9b24dc06736089fa0';
const clientSecret = '1cd1ad4867fe4db9815f78cd2bd8493e';
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