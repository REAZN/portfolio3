module.exports = {
    siteUrl: "http://localhost:3000",
    seo: {
        title: "REAZN - Portfolio 3",
        description: "Personal portfolio of Lewis Thompson, a Front-end web developer and designer.",
        image: "og.png",
    },
    social: {
        email: "lewis@reazn.me",
        twitter: "@realreazn",
        github: "REAZN",
        linkedin: "lewisthompson-",
        codepen: "REAZN",
        number: "+44 0123456789",
    },
    about: "I'm reazn, a front-end web developer and designer in Blackpool, UK. I am passionate about creating websites, animations, and unique user experiences while pushing the boundaries of design.\n\n I have a keen eye for detail, am interested in the whole front-end spectrum, and working on exciting projects with ambitious people.",
    experiments: [
        { title: "Gradient", url: "https://codepen.io/REAZN/pen/ZEKMgBV", image: "gradient.gif" },
        { title: "Shadow Animation", url: "https://codepen.io/REAZN/pen/KKXoKaP", image: "shadowanimation.gif" },
        { title: "Signature", url: "https://codepen.io/REAZN/pen/PoJQbXa", image: "signature.gif" },
        { title: "Mouse Scroll", url: "https://codepen.io/REAZN/pen/qBbRxQP", image: "mousescroll.gif" },
        { title: "Waves", url: "https://codepen.io/REAZN/pen/eYWdEbL", image: "waves.gif" },
        { title: "Slinky Animation", url: "https://codepen.io/REAZN/pen/RwLMwqq", image: "slinkyanimation.gif" },
        { title: "Blend Mode", url: "https://codepen.io/REAZN/pen/XWeZOxW", image: "blendmode.gif" },
    ],
    projects: [
        {
            title: "Rock Paper Scissors",
            description: "A simple rock paper scissors game created in React, utilising sockets for multiplayer sessions joinable via codes.",
            technologies: ["Node.js", "React", "Sass", "Socket.IO"],
            image: "rps.png",
            demo: "https://reazn.me/rps/",
            github: "https://github.com/REAZN/rock-paper-scissors",
            color: "#171043",
        },
        {
            title: "Program Butler",
            description: "Program Butler is a new way of downloading programs; it serves as a showcase of all of the most popular apps. Utilising Winget, Program Butler allows for seamless app downloading.",
            technologies: ["Node.js", "React", "Tailwind"],
            image: "pb.png",
            demo: "https://reazn.me/rps/",
            github: "https://github.com/REAZN/rock-paper-scissors",
            color: "#111018",
        },
    ]
}
