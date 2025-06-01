const form = document.getElementById('coffeeForm');

if (form) {
  const cupsInput = document.getElementById('cups');
  const strengthInput = document.getElementById('strength');
  const volumeInput = document.getElementById('volume');
  const resultContainer = document.getElementById('result');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const cups = parseInt(cupsInput.value);
    const strength = parseFloat(strengthInput.value);
    const volume = parseInt(volumeInput.value);

    if (isNaN(cups) || isNaN(strength) || isNaN(volume)) return;

    const totalWater = cups * volume;
    const coffeeGrams = Math.round(totalWater / strength);

    resultContainer.innerHTML = `
      <p><strong>${coffeeGrams.toFixed(1)}g</strong> of coffee for <strong>${cups}</strong> cup(s) with <strong>${totalWater}ml</strong> for perfect coffee! </p>
    `;
    resultContainer.classList.add('visible');
  });
}
