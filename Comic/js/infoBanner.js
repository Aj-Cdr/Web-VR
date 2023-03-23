AFRAME.registerComponent("banner", {
    schema: {
        itemId: { type: "string", default: "" }
    },
    update: function () {
        this.createInfo();
    },
    createInfo: function () {
        const comicPosterRef = {
            spiderman: {
                title: " Spider Man",
                url: ".assets/posters/spiderman-poster.jpg",
                description: 'Spider-Man is a beloved superhero known for his iconic red and blue suit, spider-like abilities, and relatable personality. Created by Stan Lee and Steve Ditko, Spider-Man first appeared in Amazing Fantasy #15 in 1962 and has since become a cultural icon. Peter Parker, the alter ego of Spider-Man, has captured the hearts of fans worldwide with his struggles to balance his personal life with his superhero duties. With his quick wit, acrobatic skills, and web-slinging abilities, Spider-Man has inspired generations of fans and has become a symbol of hope and perseverance.'
            },
            superman: {
                title: "Super Man",
                url: "./assets/posters/superman-poster.jpg",
                description: 'Superman is one of the most recognizable and beloved superheroes in pop culture. Created by Jerry Siegel and Joe Shuster, Superman made his first appearance in Action Comics #1 in 1938 and has since become an enduring symbol of justice, strength, and heroism. Clark Kent, the alter ego of Superman, is a mild-mannered reporter who secretly protects Metropolis and the world from dangerous threats with his incredible powers, including flight, super-strength, and heat vision. Supermans unwavering dedication to truth and justice has inspired countless fans and has cemented his place in the pantheon of superhero legends. Despite facing numerous challenges and foes, Superman remains a shining example of what it means to be a hero.'
            },
            captianaero: {
                title: "Captain Aero",
                url: "./assets/posters/captain-aero-poster.jpg",
                description: 'Captain Aero is a lesser-known superhero who first appeared in the Golden Age of comics in the 1940s. Created by Harry "A" Chesler, Captain Aero was a brave aviator who fought against evil and injustice during World War II. With his trusty airplane, the Silver Streak, Captain Aero patrolled the skies and used his aerial skills and combat training to take down enemy forces and protect his country. Although not as well-known as other superheroes, Captain Aero was a trailblazer in the world of comics, paving the way for other aviation-themed heroes like Blackhawk and Airboy. Today, Captain Aero remains a fascinating relic of the Golden Age, a symbol of courage and patriotism in a time of great uncertainty and adversity.'
            },
            outerspace: {
                title: "Outer Space",
                url: "./assets/posters/outer-space-poster.jpg",
                description: 'Outer space is a vast and mysterious expanse that has captivated the human imagination for centuries. From the earliest days of astronomy to the modern era of space exploration, we have looked to the stars in wonder and awe, seeking to understand the mysteries of the universe. Outer space is home to countless wonders, including distant galaxies, blazing stars, and strange, otherworldly phenomena like black holes and supernovae. It is also the frontier of human exploration, with astronauts and scientists venturing beyond our planet to study the cosmos and unlock its secrets. Despite the many challenges and dangers of space travel, the lure of the unknown and the promise of discovery continue to inspire us to explore the final frontier.'
            }
        };

        const { itemId } = this.data;
        const item = comicPosterRef[itemId]
        const fadeBackgroundEl = document.querySelector("#fade-background");

        const bannerEl = this.createBanner();
        const posterEl = this.createPoster(item);
        const titleEl = this.createTitle(item);
        const descriptionEl = this.createDescription(item);

        bannerEl.appendChild(posterEl);
        bannerEl.appendChild(titleEl);
        bannerEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(bannerEl);
    },
    createBanner() {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", { x: 0, y: 0, z: -1 });
        entityEl.setAttribute("geometry", { primitive: "plane", width: 1.5, height: 1 });
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createPoster(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", { x: -0.41, y: 0, z: 0.0001 })
        entityEl.setAttribute("geometry", { primitive: "plane", width: 0.5625, height: 0.875 });
        entityEl.setAttribute("material", { src: item.url });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createTitle(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", { x: 0.3, y: 0.4, z: 0.0001 })
        entityEl.setAttribute("text", {
            value: item.title,
            font: "mozillavr",
            color: "#FFF",
            align: "center",
            width: 1.25
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
    createDescription(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("position", { x: 0.3, y: 0.3, z: 0.0001 })
        entityEl.setAttribute("text", {
            value: item.description,
            font: "mozillavr",
            color: "#FFF",
            align: "left",
            baseline: "top",
            width: 0.75,
            wrapCount: 30
        });
        entityEl.setAttribute("visible", true);
        return entityEl;
    },
})