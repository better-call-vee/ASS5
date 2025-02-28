const ourbg = document.getElementById('bgc');
const cp = document.getElementById('color-picker-container');
cp.addEventListener('click', () => {
    const colors = [
        "#f0f0f0",
        "#e0e0e0",
        "#d3d3d3",
        "#cce7ff",
        "#ff66b3", "#ff3385",
        "#add8e6",
        "#4a4a4a",
        "#595959",
        "#e6f7ff",
        "#dce9f2",
        "#d699f7", "#bb80f1", "#a366e6",
        "#f1f6f9",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    console.log(randomColor);
    ourbg.style.backgroundColor = randomColor;
});
