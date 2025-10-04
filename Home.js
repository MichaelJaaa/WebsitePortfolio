const menuItems = document.querySelectorAll(".menu-nav-list");
const sections = document.querySelectorAll(".page-section");

// Initially show the Home section
document.getElementById("home").classList.add("active");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const targetId = item.dataset.target;

        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active"));

        // Show the selected section
        document.getElementById(targetId).classList.add("active");
    });
});

/*function openLinkedin() {
    console.log("Test");
    window.location = "linkedin://in/michael-jarod-rotoni-79271727a/";
    setTimeout(() => {
        window.location = "https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/";
    }, 1000);
}*/

/*function openLinkedIn() {
    let clickedAt = Date.now();

    window.location = "linkedin://in/michael-jarod-rotoni-79271727a/";

    // Fallback to web after 2s, but only if user is still on page
    setTimeout(function() {
        if (Date.now() - clickedAt < 1500) {
            window.location = "https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/";
        }
    }, 1500);
}*/
/*
function openLinkedIn() {
    window.location = "linkedin://in/michael-jarod-rotoni-79271727a/";

    let fallback = setTimeout(function() {
        //window.location = "https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/";
        window.open("https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/", "_blank", "noopener,noreferrer");
    }, 1500);

    // If user leaves the tab (because app opened), cancel fallback
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            clearTimeout(fallback);
        }
    });
}*/

function openInstagram() {
    window.location = "instagram://user?username=_michaeljaaa";

    let fallback = setTimeout(function() {
        //window.location = "https://instagram.com/_michaeljaaa";
        window.open("https://instagram.com/_michaeljaaa", "_blank", "noopener,noreferrer");
    }, 1500);

    // If user leaves the tab (because app opened), cancel fallback
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            clearTimeout(fallback);
        }
    });
}

function openFacebook() {
    window.location = "fb://profile/jarod.rotoni";

    let fallback = setTimeout(function() {
        //window.location = "https://www.facebook.com/jarod.rotoni";
        window.open("https://www.facebook.com/jarod.rotoni", "_blank", "noopener,noreferrer");
    }, 1500);

    // If user leaves the tab (because app opened), cancel fallback
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            clearTimeout(fallback);
        }
    });
}

const copyImage = document.getElementById("connect-copy");
const emailText = document.getElementById("connect-email");

copyImage.addEventListener("click", () => {
    // Copy the email text to clipboard
    navigator.clipboard.writeText(emailText.textContent)
        .then(() => {
            // Optional: provide visual feedback
            const originalSrc = copyImage.src;
            // You can change the image temporarily to indicate success
            copyImage.src = "Buttons/copied.png"; // create a "copied" version of the image
            setTimeout(() => {
                copyImage.src = originalSrc; // revert back
            }, 1500);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
});
