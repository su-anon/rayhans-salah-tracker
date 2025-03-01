function getStatusClass(status) {
	return status === 1 ? 'upcoming' : 
		status === 2 ? 'completed' : 
		status === 3 ? 'missed' : 'qada';
}

function renderSalahProgress(data) {
	const container = document.getElementById("progress");
	container.innerHTML = data.map(entry => `
	<div class="card">
	    <h2 class="font-bold text-lg text-gray-100">${entry.day}</h2>
	    <div class="salah-container">
		<span class="status ${getStatusClass(entry.maghrib)}">Maghrib</span>
		<span class="status ${getStatusClass(entry.isha)}">Isha</span>
		<span class="status ${getStatusClass(entry.fajr)}">Fajr</span>
		<span class="status ${getStatusClass(entry.dhuhr)}">Dhuhr</span>
		<span class="status ${getStatusClass(entry.asr)}">Asr</span>
	    </div>
	</div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
	renderSalahProgress(salahData);
});
