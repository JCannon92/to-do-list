//Renders a project by returning a DOM element with rendered project.
function createProjectElement(project) {
    const projectElement = window.document.createElement("div");
        projectElement.classList.add("project");

    const projectTitle = window.document.createElement("h1");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.name;
    const projectDescription = window.document.createElement("p");
        projectDescription.classList.add("project-description");
        projectDescription.textContent = project.description;

    projectElement.appendChild(projectTitle);
    projectElement.appendChild(projectDescription);

    return projectElement;
    
    }

function renderProject(project) {
    const projectListElement = window.document.querySelector("div.projects");
    const projectElement = createProjectElement(project);
        projectListElement.appendChild(projectElement);
}

function renderProjectLibrary(projectLibrary) {
    //Loop through project list and render each one to projectListElement
    projectLibrary.getProjectArray().forEach(renderProject);
}

export {
    renderProjectLibrary,
};