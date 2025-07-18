const form = document.getElementById('tripForm');
const tripList = document.getElementById('tripList');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const travelerName = document.getElementById('travelerName').value.trim();
  const source = document.getElementById('source').value.trim();
  const destination = document.getElementById('destination').value.trim();
  const date = document.getElementById('date').value;
  const contact = document.getElementById('contact').value.trim(); // 👈 Correctly stored

  if (travelerName && source && destination && date && contact) {
    const trip = document.createElement('div');
    trip.className = 'trip';
    trip.innerHTML = `
      <strong>👤 ${travelerName}</strong><br />
      🛫 From: ${source}<br />
      📍 To: ${destination}<br />
      🗓️ Date: ${new Date(date).toDateString()}<br />
      📞 Contact: ${contact}
    `;

    tripList.appendChild(trip);
    form.reset();
  } else {
    alert("Please fill all fields!");
  }
});
