document.addEventListener('DOMContentLoaded', () => {
    const friends = []; 
    const friendInput = document.getElementById('friendName');
    const friendsOutput = document.getElementById('friendsOutput');
    const addFriendBtn = document.getElementById('addFriendBtn');

    addFriendBtn.addEventListener('click', () => {
        const friendName = friendInput.value.trim(); 
        if (friendName) {  
            friends.push(friendName); 
            updateFriendsList(); 
            friendInput.value = ''; 
        } else {
            alert("Syötä nimi ennen kuin lisäät kaverin.");
        }
    });

    function updateFriendsList() {
        friendsOutput.innerHTML = ''; 
        friends.forEach(friend => {
            const li = document.createElement('li');
            li.textContent = friend;
            friendsOutput.appendChild(li);
        });
    }
});
