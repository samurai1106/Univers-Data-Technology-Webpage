// ========================== Sections observing to change navbar links decoration ==========================

const Sections = document.querySelectorAll(".main-section");
const NavLinks = document.querySelectorAll(".navLinks");

const SectionsOptions = {
    threshold: 0.5,
};

const SectionsObserver = new IntersectionObserver((entries, SectionsObserver) => {
entries.forEach((entry) => {
    if (!entry.isIntersecting) {
        return;
    } else {
        NavLinks.forEach((link) => {
            link.classList.remove("active");
        });
    document.querySelector(`.${entry.target.id}`).classList.add("active");
    }
});
}, SectionsOptions);

Sections.forEach((Section) => {
SectionsObserver.observe(Section);
});

// ========================== Fade effect to element while scrolling ==========================

window.addEventListener("load", () => {
    // ========================== Fade top ==========================
const fadersTop = document.querySelectorAll(".fade-top");

const fadersTopOptions = {
    threshold: 0.3,
};

const fadersTopObserver = new IntersectionObserver(
    (entries, fadersTopObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear-top");
            setTimeout(() => {
                entry.target.style.cssText = `transition-delay = 0`;
            }, 500);
        }
    });
    },
    fadersTopOptions
);

fadersTop.forEach((fader) => {
    fadersTopObserver.observe(fader);
});
    
    // ========================== Fade down ==========================
const fadersDown = document.querySelectorAll(".fade-down");

const fadersDownOptions = {
    threshold: 0.3,
};
    
const fadersDownObserver = new IntersectionObserver(
    (entries, fadersDownObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear-down");
            setTimeout(() => {
                entry.target.style.cssText = `transition-delay = 0`;
            }, 500);
        }
    });
    },
    fadersDownOptions
);

fadersDown.forEach((fader) => {
    fadersDownObserver.observe(fader);
});

    // ========================== Fade left ==========================
const fadersLeft = document.querySelectorAll(".fade-left");

const fadersLeftOptions = {
    threshold: 0.5,
};
    
const fadersLeftObserver = new IntersectionObserver(
    (entries, fadersLeftObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear-left");
            setTimeout(() => {
                entry.target.style.cssText = `transition-delay = 0`;
            }, 500);
        }
    });
    },
    fadersLeftOptions
);

fadersLeft.forEach((fader) => {
    fadersLeftObserver.observe(fader);
});

    // ========================== Fade right ==========================
const fadersRight = document.querySelectorAll(".fade-right");

const fadersRightOptions = {
    threshold: 0.5,
};
    
const fadersRightObserver = new IntersectionObserver(
    (entries, fadersRightObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear-right");
            setTimeout(() => {
                entry.target.style.cssText = `transition-delay = 0`;
            }, 500);
        }
    });
    },
    fadersRightOptions
);

fadersRight.forEach((fader) => {
    fadersRightObserver.observe(fader);
});
});

// ========================== Glitched words observing ==========================

window.addEventListener ("load", () => {
    const GlitchWords = document.querySelectorAll(".glitch");
    
    const GlitchWordsOptions = {
        threshold: 1,
    };
        
    const GlitchWordsObserver = new IntersectionObserver(
        (entries, GlitchWordsObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("animate");
                setTimeout(() => {
                    entry.target.classList.remove("animate");
                }, 1000);
            }
        });
        },
        GlitchWordsOptions
    );
    
    GlitchWords.forEach((word) => {
        GlitchWordsObserver.observe(word);
    });
})