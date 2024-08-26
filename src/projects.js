import ExpenseTrackerImageWide from "./assets/expenseTrackerWide.webp";
import ExpenseTrackerImageMedium from "./assets/expenseTrackerMedium.webp";
import ExpenseTrackerImageTablet from "./assets/expenseTrackerTablet.webp";
import ExpenseTrackerImageMobile from "./assets/expenseTrackerMobile.webp";
import WorldOfWordsImageWide from "./assets/worldOfWordsWide.webp";
import WorldOfWordsImageMedium from "./assets/worldOfWordsMedium.webp";
import WorldOfWordsImageTablet from "./assets/worldOfWordsTablet.webp";
import WorldOfWordsImageMobile from "./assets/worldOfWordsMobile.webp";
import EchoImageWide from "./assets/echoWide.webp";
import EchoImageMedium from "./assets/echoMedium.webp";
import EchoImageTablet from "./assets/echoTablet.webp";
import EchoImageMobile from "./assets/echoMobile.webp";
import KnowNativeImageWide from "./assets/KnowNativeWide.webp";
import KnowNativeImageMedium from "./assets/KnowNativeMedium.webp";
import KnowNativeImageTablet from "./assets/KnowNativeTablet.webp";
import KnowNativeImageMobile from "./assets/KnowNativeMobile.webp";
import SteampocalypseImageWide from "./assets/SteampocalypseWide.webp";
import SteampocalypseImageMedium from "./assets/SteampocalypseMedium.webp";
import SteampocalypseImageTablet from "./assets/SteampocalypseTablet.webp";
import SteampocalypseImageMobile from "./assets/SteampocalypseMobile.webp";

const projectDetails = {
    expenseTracker: {
        name: "Expense Tracker",
        imageWide: ExpenseTrackerImageWide, // Large desktop image
        imageMedium: ExpenseTrackerImageMedium, // Medium desktop image
        imageTablet: ExpenseTrackerImageTablet, // Tablet image
        imageMobile: ExpenseTrackerImageMobile, // Mobile image
        preload: false,
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "EJS", "MongoDB"],
        githubURL:
            "https://github.com/sarmaakondi/project-2-expense-tracker/tree/main",
        liveURL: "https://expense-tracker-c7dg.onrender.com/",
    },
    worldOfWords: {
        name: "World of Words",
        imageWide: WorldOfWordsImageWide, // Large desktop image
        imageMedium: WorldOfWordsImageMedium, // Medium desktop image
        imageTablet: WorldOfWordsImageTablet, // Tablet image
        imageMobile: WorldOfWordsImageMobile, // Mobile image
        preload: false,
        tech: ["React", "Node.js", "CSS", "Framer Motion", "MongoDB"],
        githubURL: "https://github.com/sarmaakondi/word-nerd-herd-client",
        liveURL: "https://world-of-words-client.onrender.com/",
    },
    echo: {
        name: "Echo",
        imageWide: EchoImageWide, // Large desktop image
        imageMedium: EchoImageMedium, // Medium desktop image
        imageTablet: EchoImageTablet, // Tablet image
        imageMobile: EchoImageMobile, // Mobile image
        preload: true,
        tech: ["React", "CSS", "Django", "PostgreSQL"],
        githubURL: "https://github.com/sarmaakondi/echo-client",
        liveURL: "https://echo-client-gry3.onrender.com/feed",
    },
    knowNative: {
        name: "KnowNative",
        imageWide: KnowNativeImageWide, // Large desktop image
        imageMedium: KnowNativeImageMedium, // Medium desktop image
        imageTablet: KnowNativeImageTablet, // Tablet image
        imageMobile: KnowNativeImageMobile, // Mobile image
        preload: true,
        tech: ["React", "Node.js", "CSS", "Bootstrap", "MongoDB"],
        githubURL: "https://github.com/AbigailDawson/knownative",
        liveURL: "https://github.com/AbigailDawson/knownative",
    },
    steampocalypse: {
        name: "Steampocalypse",
        imageWide: SteampocalypseImageWide, // Large desktop image
        imageMedium: SteampocalypseImageMedium, // Medium desktop image
        imageTablet: SteampocalypseImageTablet, // Tablet image
        imageMobile: SteampocalypseImageMobile, // Mobile image
        preload: false,
        tech: ["HTML", "CSS", "JavaScript", "Canvas"],
        githubURL: "https://github.com/sarmaakondi/project-1-steampocalypse",
        liveURL: "https://sarmaakondi.github.io/project-1-steampocalypse/",
    },
};

export default projectDetails;
