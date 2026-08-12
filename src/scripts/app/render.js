//Renders a project by returning a DOM element with rendered project.
function renderProject(project) {
    const projectElement = window.document.createElement("div");
        projectElement.classList.add("project");

    const projectTitle = window.document.createElement("h1");
        projectTitle.classList.add("project-title");
        projectTitle.textContent = project.name;

    projectElement.appendChild(projectTitle);
    
    return projectElement;
    }

export {
    renderProject,
};