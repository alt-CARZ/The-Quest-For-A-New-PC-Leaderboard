history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

const title = document.getElementById('title');
const homeText = document.getElementById('home-text');
const mediaQuery = window.matchMedia('(max-width: 1399px)');

function handleScreenChange(e) {
    if (e.matches) {
        if (title) title.textContent = 'QFAP';
        if (homeText) homeText.textContent = 'Home';
    } else {
        if (title) title.textContent = 'The Quest For A PC';
        if (homeText) homeText.textContent = 'Back to Home';
    }
}

mediaQuery.addEventListener('change', handleScreenChange);
handleScreenChange(mediaQuery);

function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.showModal();
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.close();
}

if (document.getElementById('scoreboard')) {
    const helpDialogs = ['name-dialog', 'score-dialog', 'multiplier-dialog'];

    helpDialogs.forEach(id => {
        const dialog = document.getElementById(id);
        if (dialog) {
            dialog.addEventListener('click', (event) => {
                if (event.target === dialog) {
                    dialog.close();
                }
            });
        }
    });
}

function toggleForm() {
    const form = document.getElementById('score-form');
    const btn = document.getElementById('toggle-form-btn');
    if (!form) return;
    
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
    if (btn) {
        btn.innerHTML = (form.style.display === 'block') ? '&or;' : '&gt;';
    }
}

let username = document.getElementById('name');
let warning = document.getElementById('warning');
let showwarning = true;

if (warning) {
    warning.addEventListener('click', () => {
        warning.style.visibility = 'hidden';
        showwarning = false;
    });
}

if (username) {
    username.oninput = function () {
        const names = Array.from(document.querySelectorAll('.name')).map(el => el.textContent.trim().toLowerCase());
        const currentName = username.value.trim().toLowerCase();

        if (warning) {
            if (names.includes(currentName) && currentName !== '' && showwarning) {
                warning.style.visibility = 'visible';
            } else {
                warning.style.visibility = 'hidden';
            }
        }
    };
}

const userSearch = document.getElementById('userSearch');

function searchNames() {
    const searchInput = userSearch.value.toLowerCase();
    const rows = document.querySelectorAll('#scoreboard tbody tr');

    rows.forEach(row => {
        const nameCell = row.querySelector('.name');
        if (nameCell) {
            const nameText = nameCell.textContent.toLowerCase();
            row.style.display = nameText.includes(searchInput) ? '' : 'none';
        }
    });
}

if (userSearch) {
    userSearch.addEventListener('input', searchNames);
}