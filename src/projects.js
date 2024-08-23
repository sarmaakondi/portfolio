import ExpenseTrackerImage from "./assets/ExpenseTracker.webp";
import WorldOfWordsImage from "./assets/WorldOfWords.webp";
import EchoImage from "./assets/Echo.webp";
import KnowNativeImage from "./assets/KnowNatvie.webp";
import steampocalypseImage from "./assets/Steampocalypse.webp";

const projectDetails = {
    expenseTracker: {
        name: "Expense Tracker",
        image: ExpenseTrackerImage,
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "EJS", "MongoDB"],
        githubURL:
            "https://github.com/sarmaakondi/project-2-expense-tracker/tree/main",
        liveURL: "https://expense-tracker-c7dg.onrender.com/",
    },
    worldOfWords: {
        name: "World of Words",
        image: WorldOfWordsImage,
        tech: ["React", "Node.js", "CSS", "Framer Motion", "MongoDB"],
        githubURL: "https://github.com/sarmaakondi/word-nerd-herd-client",
        liveURL: "https://world-of-words-client.onrender.com/",
    },
    echo: {
        name: "Echo",
        image: EchoImage,
        tech: ["React", "CSS", "Django", "PostgreSQL"],
        githubURL: "https://github.com/sarmaakondi/echo-client",
        liveURL: "https://echo-client-gry3.onrender.com/feed",
    },
    knowNative: {
        name: "KnowNative",
        image: KnowNativeImage,
        tech: ["React", "Node.js", "CSS", "Bootstrap", "MongoDB"],
        githubURL: "https://github.com/AbigailDawson/knownative",
        liveURL: "https://github.com/AbigailDawson/knownative",
    },
    steampocalypse: {
        name: "Steampocalypse",
        image: steampocalypseImage,
        tech: ["HTML", "CSS", "JavaScript", "Canvas"],
        githubURL: "https://github.com/sarmaakondi/project-1-steampocalypse",
        liveURL: "https://sarmaakondi.github.io/project-1-steampocalypse/",
    },
};

export default projectDetails;
