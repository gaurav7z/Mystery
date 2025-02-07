// Unlock Confession
function unlockConfession() {
  const key = document.getElementById('key').value;
  if (key === "DDMMYYYY") { // Replace with your birthday
    document.getElementById('confession').style.display = "block";
  } else {
    alert("That's not the right key! Try again.");
  }
}

// Pie Chart
var ctx = document.getElementById('pieChart').getContext('2d');
var myPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Talking to Her', 'Analyzing About Her'],
        datasets: [{
            data: [20, 80],
            backgroundColor: ['#36A2EB', '#FF6384']
        }]
    }
});
