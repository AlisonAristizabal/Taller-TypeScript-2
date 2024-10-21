import { series } from './data.js';
const seriesBody = document.getElementById('seriesBody');
const serieDetail = document.getElementById('serieDetail');
const serieImage = document.getElementById('serieImage');
const serieName = document.getElementById('serieName');
const serieDescription = document.getElementById('serieDescription');
const serieWebpage = document.getElementById('serieWebpage');
series.forEach((serie) => {
    const row = seriesBody.insertRow();
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    row.addEventListener('click', () => showSerieDetail(serie));
});
function showSerieDetail(serie) {
    serieImage.src = serie.poster;
    serieName.textContent = serie.name;
    serieDescription.textContent = serie.description;
    serieWebpage.href = serie.webpage;
    serieDetail.style.display = 'block';
}
// Calcular el promedio de temporadas
const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
// Agregar una fila al final de la tabla con el promedio
const averageRow = seriesBody.insertRow();
averageRow.innerHTML = `
    <td colspan="3"><strong>Promedio de temporadas:</strong></td>
    <td><strong>${averageSeasons.toFixed(2)}</strong></td>
`;
