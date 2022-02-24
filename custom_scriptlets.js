/// scrollToLatestArticles.js
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.latest_shelf')[1].scrollIntoView();
});

/// removeNonFreeEntries.js
window.addEventListener('DOMContentLoaded', (event) => {
    siteTableElement = document.querySelector('#siteTable');
    for (let node of siteTableElement.childNodes) {
        if (node.className.split(/\s/).includes('link')) {
            titleText = node.childNodes[4].firstChild.firstChild.firstChild.innerHTML;
            if (!titleText.includes('FREE') && !titleText.includes('100') && !titleText.includes('Free')) {
                node.remove();
            }
        }
    }
});
