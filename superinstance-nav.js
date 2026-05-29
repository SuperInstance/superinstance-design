/**
 * SuperInstance Shared Navigation Component
 *
 * Usage:
 *   <script src="superinstance-nav.js"></script>
 *   <script>
 *     document.getElementById('nav-root').innerHTML = createSuperInstanceNav('home');
 *   </script>
 */

function createSuperInstanceNav(activePage) {
  const links = [
    { label: 'SuperInstance',  href: 'https://superinstance.ai',        id: 'home', isBrand: true },
    { label: 'OpenConstruct',  href: 'https://superinstance.ai/openconstruct-landing/', id: 'openconstruct' },
    { label: 'Cocapn',         href: 'https://superinstance.ai/cocapn-landing/',       id: 'cocapn' },
    { label: 'Docs',           href: 'https://superinstance.ai/openconstruct-docs/',  id: 'docs' },
    { label: 'Demos',          href: 'https://superinstance.ai/superinstance-ai-pages/demos.html', id: 'demos' },
    { label: 'GitHub',         href: 'https://github.com/SuperInstance', id: 'github', external: true },
  ];

  const navLinksHTML = links.map(link => {
    const isActive = link.id === activePage;
    const activeClass = isActive ? ' active' : '';
    const externalAttr = link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
    return `<li><a class="nav-link${activeClass}" href="${link.href}"${externalAttr}>${link.label}</a></li>`;
  }).join('');

  return `
  <nav class="navbar">
    <div class="container">
      <a href="/" class="navbar-brand">Super<span class="text-green">Instance</span></a>
      <ul class="nav-links" id="si-nav-links">
        ${navLinksHTML}
      </ul>
      <button class="nav-hamburger" id="si-nav-hamburger" aria-label="Toggle menu">&#9776;</button>
    </div>
  </nav>`.trim();
}

// Auto-bind hamburger toggle when the nav is inserted
document.addEventListener('click', function (e) {
  if (e.target.id === 'si-nav-hamburger') {
    var links = document.getElementById('si-nav-links');
    if (links) links.classList.toggle('open');
  }
});
