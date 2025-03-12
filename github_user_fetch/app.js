async function fetchGitHubUser() {
    const username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter a GitHub username");
        return;
    }

    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("User not found");
        }
        
        const data = await response.json();

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").textContent = data.name || "No Name Provided";
        document.getElementById("bio").textContent = `Bio: ${data.bio || "No bio available"}`;
        document.getElementById("location").textContent = `Location: ${data.location || "Not specified"}`;
        document.getElementById("followers").textContent = `Followers: ${data.followers}`;
        document.getElementById("following").textContent = `Following: ${data.following}`;
        document.getElementById("repos").textContent = `Repos: ${data.public_repos}`;

        document.getElementById("user-card").style.display = "block";
    } catch (error) {
        alert(error.message);
    }
}

