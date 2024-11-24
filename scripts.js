// Disable right-click
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Developer Tools Detection
(() => {
    let warningDisplayed = false;

    const message = document.createElement("div");
    message.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 1.5rem;
        text-align: center;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    message.innerHTML = `<p>Please close developer tools</p>`;
    document.body.appendChild(message);

    const detectDevTools = () => {
        const threshold = 160;
        const isDevToolsOpen = window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold;

        if (isDevToolsOpen && !warningDisplayed) {
            message.style.display = "flex";
            warningDisplayed = true;
        } else if (!isDevToolsOpen && warningDisplayed) {
            message.style.display = "none";
            warningDisplayed = false;
        }
    };

    window.addEventListener("resize", detectDevTools);
    setInterval(detectDevTools, 1000);
})();

// Unified Button Handling
document.addEventListener("DOMContentLoaded", () => {
    const buttonActions = {
        'contact-us': () => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const targetURL = isMobile
                ? "https://telegram.openinapp.co/x9dr4"
                : "https://web.telegram.org/k/#@premisubs_admin";
            window.open(targetURL, '_blank');
        },
        'join-telegram': () => {
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            const targetURL = isMobile
                ? "https://telegram.openinapp.co/tkke1"
                : "https://web.telegram.org/k/#@premisubs";
            window.open(targetURL, '_blank');
        },
        'download-extension': () => {
            const extensionURL = "https://drive.google.com/file/d/18WIw42T_yEDHvMiWOTL4V_sA_WaCCmRl/view?usp=sharing";
            window.open(extensionURL, '_blank');
        },
        'netflix-access': () => {
            const jsonFiles = ['accs/net/net1.json', 'accs/net/net2.json'];
            const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
            window.open(randomFile, '_blank');
        },
        'chatgpt-access': () => {
            const jsonFiles = ['accs/chat/chat1.json', 'accs/chat/chat2.json'];
            const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
            window.open(randomFile, '_blank');
        },
        'prime-access': () => {
            const jsonFiles = ['accs/prime/prime1.json', 'accs/prime/prime2.json'];
            const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
            window.open(randomFile, '_blank');
        },
        'crunchyroll-access': () => {
            const jsonFiles = ['accs/crunchy/crunchy1.json', 'accs/crunchy/crunchy2.json'];
            const randomFile = jsonFiles[Math.floor(Math.random() * jsonFiles.length)];
            window.open(randomFile, '_blank');
        }
    };

    document.querySelectorAll('.header-button, .button').forEach((button) => {
        const action = buttonActions[button.id];
        if (action) {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                action();
            });
        }
    });
});
