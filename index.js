let homePoints = 0
let guestPoints = 0

document.getElementById("home-points").textContent = homePoints
document.getElementById("guest-points").textContent = guestPoints

// increment functions for home team
function add1PH() {
    homePoints +=1
    document.getElementById("home-points").textContent = homePoints
}
function add2PH() {
    homePoints +=2
    document.getElementById("home-points").textContent = homePoints
}
function add3PH() {
    homePoints +=3
    document.getElementById("home-points").textContent = homePoints
}
// increment functions for guest team
function add1PG() {
    guestPoints +=1
    document.getElementById("guest-points").textContent = guestPoints
}
function add2PG() {
    guestPoints +=2
    document.getElementById("guest-points").textContent = guestPoints
}
function add3PG() {
    guestPoints +=3
    document.getElementById("guest-points").textContent = guestPoints
}