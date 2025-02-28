const today = new Date();

const dayOptions = { weekday: 'short' };
const day = today.toLocaleDateString('en-US', dayOptions) + ',';

const dateOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
};
const date = today.toLocaleDateString('en-US', dateOptions);

document.getElementById('day').textContent = day;
document.getElementById('date').textContent = date;
