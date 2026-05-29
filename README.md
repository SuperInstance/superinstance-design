# SuperInstance Design System

Shared design system for all SuperInstance web properties.

## What's Included

| File | Description |
|------|-------------|
| `superinstance.css` | Complete CSS framework — variables, reset, typography, components, responsive, utilities |
| `superinstance-nav.js` | Shared navigation component with active-page highlighting and mobile hamburger |
| `superinstance-footer.js` | Shared footer with ecosystem links and community resources |
| `DESIGN-SYSTEM.md` | Full documentation with usage examples and component reference |

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="superinstance.css">
</head>
<body>
  <div id="nav-root"></div>

  <main class="container section">
    <h1>Your Page</h1>
  </main>

  <div id="footer-root"></div>

  <script src="superinstance-nav.js"></script>
  <script src="superinstance-footer.js"></script>
  <script>
    document.getElementById('nav-root').innerHTML = createSuperInstanceNav('home');
    document.getElementById('footer-root').innerHTML = createSuperInstanceFooter();
  </script>
</body>
</html>
```

## Principles

- **Dark-first** — Every page is dark by default
- **Monospace accents** — Brand identity through monospace typography
- **Zero dependencies** — Pure CSS + vanilla JS, no build step
- **Consistent** — Same nav, footer, and colors across all properties

See [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md) for full documentation.

## License

Apache License 2.0
