/**
 * SuperInstance Shared Footer Component
 *
 * Usage:
 *   <script src="superinstance-footer.js"></script>
 *   <script>
 *     document.getElementById('footer-root').innerHTML = createSuperInstanceFooter();
 *   </script>
 */

function createSuperInstanceFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <h4>Ecosystem</h4>
          <ul>
            <li><a href="https://github.com/SuperInstance" target="_blank" rel="noopener noreferrer">GitHub Organization</a></li>
            <li><a href="/openconstruct">OpenConstruct</a></li>
            <li><a href="/docs">Documentation</a></li>
            <li><a href="/wiki">Wiki</a></li>
          </ul>
        </div>
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="/docs/getting-started">Getting Started</a></li>
            <li><a href="/docs/api">API Reference</a></li>
            <li><a href="/docs/examples">Examples</a></li>
            <li><a href="/docs/changelog">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h4>Community</h4>
          <ul>
            <li><a href="https://discord.gg/superinstance" target="_blank" rel="noopener noreferrer">Discord</a></li>
            <li><a href="https://github.com/SuperInstance" target="_blank" rel="noopener noreferrer">GitHub Discussions</a></li>
            <li><a href="/contributing">Contributing</a></li>
            <li><a href="/code-of-conduct">Code of Conduct</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Apache License 2.0 &mdash; SuperInstance is open source.</p>
        <p style="margin-top:0.25rem">Built with 🦀 by agents, for agents.</p>
      </div>
    </div>
  </footer>`.trim();
}
