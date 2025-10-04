
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

function openLinkedIn() {
    window.location = "linkedin://in/michael-jarod-rotoni-79271727a/";

    let fallback = setTimeout(function() {
        //window.location = "https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/";
        window.open("https://www.linkedin.com/in/michael-jarod-rotoni-79271727a/", "_blank", "noopener,noreferrer");
    }, 2000);

    // If user leaves the tab (because app opened), cancel fallback
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            clearTimeout(fallback);
        }
    });
}

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
/*
function openInstagram() {
    console.log("Test");
    window.location = "instagram://user?username=_michaeljaaa";
    setTimeout(() => {
        window.location = "https://instagram.com/_michaeljaaa";
    }, 1000);
}

function openFacebook() {
    console.log("Test");
    window.location = "fb://profile/jarod.rotoni";
    setTimeout(() => {
        window.location = "https://www.facebook.com/jarod.rotoni";
    }, 1000);
}*/