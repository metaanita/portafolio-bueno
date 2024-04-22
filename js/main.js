let projects = []
let experiences = []

const createProjectCards = (json) => {
    projects = json

    const projectsListElement = document.getElementById("projects-list")

    projects.forEach(project => {
        let techs = ""

        project.technologies.forEach(tech => {
            techs += `
                <label>${tech}</label>
            `
        })

        projectsListElement.innerHTML += `
            <div class="project-card">
                <a href="${project.repo}" target="_blank">
                    <img src="${project.img}" alt="Project 1 image">
                    <p>${project.name}</p>
                    <p>${project.description}</p>
                    <p>${project.year}</p>
                    <div class="technologies center">
                        ${techs}
                    </div>
                </a>
            </div>
        `
    });
}

const createExperienceCards = (json) => {
    experiences = json

    const experiencesListElement = document.getElementById("experience-list")

    experiences.forEach(experience => {
        let techs = ""

        experience.technology.forEach(tech => {
            techs += `
                <label>${tech}</label>
            `
        })

        experiencesListElement.innerHTML += `
            <div class="experience-card">
                <p>${experience.entity}</p>
                <p>${experience.title}</p>
                <p>${experience.description}</p>
                <p>${experience.period}</p>
                <div class="technologies center">
                    ${techs}
                </div>
            </div>
        `
    });
}

fetch("../data/projects.json").then(res => {
    return res.json()
}).then(createProjectCards)

fetch("../data/experience.json").then(res => {
    return res.json()
}).then(createExperienceCards)