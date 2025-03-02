const endDate = new Date("March 02, 2025 22:00:00");  

document.getElementById("end-date").innerText = endDate.toLocaleString();   

const clock = () => {
    const now = new Date();
    const diff = (endDate - now) / 1000; 

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor((diff % (3600 * 24)) / 3600);  
    const minutes = Math.floor((diff % 3600) / 60);  
    const seconds = Math.floor(diff % 60);

     
    const inputs = document.querySelectorAll("input");
    if (inputs.length > 0) {
        inputs[0].value = days;
        inputs[1].value = hours;
        inputs[2].value = minutes;   
        inputs[3].value = seconds;
    }

    console.log(days, hours, minutes, seconds); // Log the remaining time
}

setInterval(() => {
    clock();
}, 1000);
