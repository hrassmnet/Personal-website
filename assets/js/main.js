const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const projectsGrid = document.getElementById('projects-grid');
if (projectsGrid && Array.isArray(window.projects)) {
  projectsGrid.innerHTML = window.projects
    .map((project) => {
      const links = (project.links || [])
        .map(
          (link) =>
            `<a href="${link.href}" target="_blank" rel="noopener">${link.label || 'View'}</a>`
        )
        .join('');

      return `
        <article class="card">
          <h3>${project.title}</h3>
          <p><strong>Problem:</strong> ${project.problem}</p>
          <p><strong>What I did:</strong> ${project.did}</p>
          <p><strong>Tools:</strong> ${project.tools}</p>
          <p><strong>What I learned:</strong> ${project.learned}</p>
          ${links}
        </article>
      `;
    })
    .join('');
}
