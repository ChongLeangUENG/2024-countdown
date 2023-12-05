function updateCountdown() {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25); // Dec 25
    const newYear = new Date(now.getFullYear() + 1, 0, 1); // Jan 1
    const nextClassStart = new Date(2024, 1, 5, 9, 0, 0); // 05 February 2024, 09:00 AM

    // Calculate the difference
    const diff = christmas - now;
    const diffNewYear = newYear - now;
    const diffClassStart = nextClassStart - now;

    // Time calculations for days, hours, minutes and seconds for Christmas
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update HTML for Christmas
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Repeat for New Year
    days = Math.floor(diffNewYear / (1000 * 60 * 60 * 24));
    hours = Math.floor((diffNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diffNewYear % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diffNewYear % (1000 * 60)) / 1000);

    // Update HTML for New Year
    document.getElementById("days-ny").innerText = days;
    document.getElementById("hours-ny").innerText = hours;
    document.getElementById("minutes-ny").innerText = minutes;
    document.getElementById("seconds-ny").innerText = seconds;

    // Repeat for Next Class Start
    days = Math.floor(diffClassStart / (1000 * 60 * 60 * 24));
    hours = Math.floor((diffClassStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((diffClassStart % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((diffClassStart % (1000 * 60)) / 1000);

    // Update HTML for Next Class Start
    document.getElementById("days-class").innerText = days;
    document.getElementById("hours-class").innerText = hours;
    document.getElementById("minutes-class").innerText = minutes;
    document.getElementById("seconds-class").innerText = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
