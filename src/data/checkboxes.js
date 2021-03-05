const checkboxes = {
    "Source": {
        predicate: (obj, name) => obj.resource.source === name,
        names: [
            { name: "Teach LA" },
            { name: "Hack" },
            { name: "Dev" },
            { name: "W" },
            { name: "ICPC" },
            { name: "Design" },
            { name: "AI" },
            { name: "Cyber" },
            { name: "External" },
        ],
    },
    "Preferred Format": {
        predicate: (obj, name) => obj.resource[name.toLowerCase()] != undefined,
        names: [
            { name: "Video" },
            { name: "Article" },
            { name: "Game" },
            { name: "Documentation" },
        ],
    },
    "Experience Level": {
        predicate: (obj, name) => obj.resource.difficulty === name,
        names: [
            { name: "Beginner" },
            { name: "Intermediate" },
            { name: "Advanced" },
        ],
    }
}
export default checkboxes