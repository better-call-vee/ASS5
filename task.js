document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#boton');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.remove('bg-mn');
            button.classList.add('bg-done', 'pointer-events-none');

            const tcElement = document.getElementById('tc');
            if (tcElement) {
                let count = parseInt(tcElement.textContent);
                if (!isNaN(count)) {
                    count -= 1;
                    tcElement.textContent = count < 10 ? '0' + count : count;
                }
            }

            const ttElement = document.getElementById('tt');
            if (ttElement) {
                let count2 = parseInt(ttElement.textContent);
                if (!isNaN(count2)) {
                    count2 += 1;
                    ttElement.textContent = count2 < 10 ? '0' + count2 : count2;
                }
            }

            const taskNameElement = button.closest('.bg-bgg').querySelector('.task-name');
            const taskName = taskNameElement ? taskNameElement.textContent : "Unknown Task";
            console.log(taskName);

            const currentTime = new Date().toLocaleTimeString('en-US', { hour12: true });

            const historyContainer = document.getElementById('history');
            if (historyContainer) {
                const newHistoryDiv = document.createElement('div');
                newHistoryDiv.classList.add('bg-bgg', 'text-[#4a4b4d]', 'text-[0.9rem]', 'p-4', 'rounded-lg', 'my-2');
                newHistoryDiv.textContent = `You have completed the task "${taskName}" at ${currentTime}`;
                historyContainer.appendChild(newHistoryDiv);
            }
        });
    });

    const clearHistoryButton = document.getElementById('ch');
    if (clearHistoryButton) {
        clearHistoryButton.addEventListener('click', () => {
            const historyContainer = document.getElementById('history');
            if (historyContainer) {
                historyContainer.innerHTML = '';
            }
        });
    }
});
