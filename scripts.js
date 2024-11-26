// Disable right-click globally
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Unified Button Handling
document.addEventListener("DOMContentLoaded", () => {
    const buttonActions = {
        contactUs: () => {
            const targetURL = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                ? "https://telegram.openinapp.co/x9dr4"
                : "https://web.telegram.org/k/#@premisubs_admin";
            window.open(targetURL, "_blank");
        },
        joinTelegram: () => {
            const targetURL = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
                ? "https://telegram.openinapp.co/tkke1"
                : "https://web.telegram.org/k/#@premisubs";
            window.open(targetURL, "_blank");
        },
        downloadExtension: () => {
            window.open(
                "https://drive.google.com/file/d/1p8hZz0stNsZXuwHeghmcc35k4bZVUWpN/view?usp=sharing",
                "_blank"
            );
        },
        netflixAccess: () => {
            const jsonFiles = ["accs/net/net1.json", "accs/net/net2.json"];
            openRandomFile(jsonFiles);
        },
        chatgptAccess: () => {
            const jsonFiles = ["accs/chat/chat1.json", "accs/chat/chat2.json"];
            openRandomFile(jsonFiles);
        },
        primeAccess: () => {
            const jsonFiles = ["accs/prime/prime1.json", "accs/prime/prime2.json"];
            openRandomFile(jsonFiles);
        },
        crunchyrollAccess: () => {
            const jsonFiles = ["accs/crunchy/crunchy1.json", "accs/crunchy/crunchy2.json"];
            openRandomFile(jsonFiles);
        }
    };

    // Attach actions to buttons
    document.querySelectorAll(".header-button, .button").forEach((button) => {
        const action = buttonActions[camelCase(button.id)];
        if (action) {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                action();
            });
        }
    });

    // Helper function to open a random file from a list
    function openRandomFile(files) {
        const randomFile = files[Math.floor(Math.random() * files.length)];
        window.open(randomFile, "_blank");
    }

    // Helper function to convert IDs to camelCase for action mapping
    function camelCase(id) {
        return id.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
    }
});
