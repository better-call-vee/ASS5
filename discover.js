document.addEventListener('DOMContentLoaded', () => {
    const discoverDiv = document.getElementById('dis');
    if (discoverDiv) {
        discoverDiv.addEventListener('click', () => {
            window.location.href = 'blog.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const backgo = document.getElementById('back');
    if (backgo) {
        backgo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});