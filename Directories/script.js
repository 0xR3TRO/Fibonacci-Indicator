const canvas = document.getElementById("fibonacciCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

document
	.getElementById("generateButton")
	.addEventListener("click", drawFibonacci);
document.getElementById("resetButton").addEventListener("click", resetCanvas);
document.getElementById("saveButton").addEventListener("click", saveAsPNG);
document.getElementById("toggleTheme").addEventListener("click", toggleTheme);

function drawFibonacci() {
	const startPrice = parseFloat(document.getElementById("startPrice").value);
	const endPrice = parseFloat(document.getElementById("endPrice").value);

	const levels = [0, 0.236, 0.382, 0.5, 0.618, 0.786, 1];
	const diff = endPrice - startPrice;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.lineWidth = 2;
	ctx.font = "16px Arial";

	levels.forEach((level, index) => {
		const y = canvas.height - level * canvas.height;
		const price = (endPrice - diff * level).toFixed(2);

		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.lineTo(canvas.width, y);
		ctx.strokeStyle = index % 2 === 0 ? "#3498db" : "#2ecc71";
		ctx.stroke();

		ctx.fillStyle = "#2c3e50";
		ctx.fillText(`Level ${level * 100}% - ${price}`, 10, y - 10);
	});
}

function resetCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveAsPNG() {
	const link = document.createElement("a");
	link.download = "fibonacci.png";
	link.href = canvas.toDataURL();
	link.click();
}

function toggleTheme() {
	document.body.classList.toggle("dark");
}

// Domyślne generowanie wykresu na starcie
drawFibonacci();
