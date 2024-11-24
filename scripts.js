// Disable right-click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Detect Developer Tools Without Replacing DOM
(function () {
    let warningDisplayed = false; // Track if the warning is already displayed

    const message = document.createElement("div");
    message.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: black;
        color: white;
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        text-align: center;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    message.innerHTML = `<p>Please close developer tools</p>`;
    document.body.appendChild(message);

    function detectDevTools() {
        const threshold = 160; // Height/width threshold to detect devtools
        const isDevToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;
        if (isDevToolsOpen) {
            if (!warningDisplayed) {
                message.style.display = "flex"; // Show warning overlay
                warningDisplayed = true;
            }
        } else {
            if (warningDisplayed) {
                message.style.display = "none"; // Hide warning overlay
                warningDisplayed = false;
            }
        }
    }

    // Detect devtools on resize and interval
    window.addEventListener("resize", detectDevTools);
    setInterval(detectDevTools, 1000); // Check every second
})();

// Handle buttons
document.addEventListener("DOMContentLoaded", function () {
    // Handle "Contact Us" button
    const contactUsButton = document.getElementById('contact-us');
    if (contactUsButton) {
        contactUsButton.addEventListener('click', function (event) {
            event.preventDefault();
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const mobileURL = "https://telegram.openinapp.co/dsd2r";
            const desktopURL = "https://web.telegram.org/k/#@subsurfin_admin";
            const targetURL = isMobile ? mobileURL : desktopURL;
            window.open(targetURL, '_blank');
        });
    }

    // Handle "Join Telegram" button
    const joinTelegramButton = document.getElementById('join-telegram');
    if (joinTelegramButton) {
        joinTelegramButton.addEventListener('click', function (event) {
            event.preventDefault();
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const mobileURL = "https://telegram.openinapp.co/knrhx";
            const desktopURL = "https://web.telegram.org/k/#@subsurfin";
            const targetURL = isMobile ? mobileURL : desktopURL;
            window.open(targetURL, '_blank');
        });
    }

    // Function to handle JSON file access buttons
    function handleJsonAccess(buttonId, directoryPath) {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', async function () {
                try {
                    const response = await fetch(directoryPath);
                    if (!response.ok) throw new Error('Unable to fetch account files.');

                    const text = await response.text();
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(text, 'text/html');
                    const links = Array.from(doc.querySelectorAll('a'))
                        .map(link => link.href)
                        .filter(href => href.endsWith('.json'));

                    if (links.length > 0) {
                        const randomFile = links[Math.floor(Math.random() * links.length)];
                        window.open(randomFile, '_blank');
                    } else {
                        showPopup('No accounts right now, will add in few moments, please try again later');
                    }
                } catch (error) {
                    console.error(error);
                    showPopup('An error occurred. Please try again later.');
                }
            });
        }
    }

    // Apply JSON file access handling for all buttons
    handleJsonAccess('netflix-access', 'accs/net/');
    handleJsonAccess('chatgpt-access', 'accs/chat/');
    handleJsonAccess('prime-access', 'accs/prime/');
    handleJsonAccess('crunchyroll-access', 'accs/crunchy/');

    // Function to display a popup message
    function showPopup(message) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: black;
            color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
            text-align: center;
            font-family: Poppins, sans-serif;
            font-size: 1.2rem;
            z-index: 10000;
        `;
        popup.textContent = message;

        document.body.appendChild(popup);

        setTimeout(() => {
            popup.remove(); // Remove popup after 3 seconds
        }, 3000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Handle "Download Extension" button
    const downloadExtensionButton = document.getElementById('download-extension'); // Target the button by ID
    if (downloadExtensionButton) {
        downloadExtensionButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior
            const extensionURL = "https://drive.google.com/file/d/1kcHOkDKMf1hBr2mJIx8LPBy8X4E3wfzw/view?usp=sharing"; // Replace with your download link
            window.open(extensionURL, '_blank'); // Open the link in a new tab
        });
    }
});
