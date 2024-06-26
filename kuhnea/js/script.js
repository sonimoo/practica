document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const itemsContainer = document.getElementById('items-container');
    const items = itemsContainer.getElementsByClassName('block__block');
    const noResults = document.getElementById('no-results');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        let found = false;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemName = item.querySelector('.name__style').textContent.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'flex';
                found = true;
            } else {
                item.style.display = 'none';
            }
        }
        noResults.style.display = found ? 'none' : 'block';
    });
});
