# SuperInstance Design System

Shared design system for all SuperInstance web properties. Dark-first, monospace accents, zero dependencies.

## Quick Start

Include the CSS and JS components in any page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page — SuperInstance</title>
  <link rel="stylesheet" href="superinstance.css">
</head>
<body>
  <!-- Navigation -->
  <div id="nav-root"></div>

  <!-- Your content here -->
  <main class="container section">
    <h1>Hello World</h1>
  </main>

  <!-- Footer -->
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

## Design Principles

1. **Dark-first** — Every page is dark by default. The background is near-black (`#0a0a0a`) with subtle grays for hierarchy.
2. **Monospace accents** — Brand identity, code, badges, and headers use monospace fonts. Body text uses system sans-serif for readability.
3. **Zero dependencies** — Pure CSS and vanilla JS. No build step, no framework, no npm.
4. **Consistent** — Every SuperInstance page should feel like part of the same product. Same nav, same footer, same colors.
5. **Accessible** — Sufficient contrast ratios, focus styles, semantic HTML.

## Color Usage

| Variable | Hex | Usage |
|----------|-----|-------|
| `--si-bg-primary` | `#0a0a0a` | Page background |
| `--si-bg-secondary` | `#141414` | Code blocks, inputs |
| `--si-bg-card` | `#1a1a1a` | Cards, elevated surfaces |
| `--si-bg-hover` | `#222222` | Hover states |
| `--si-accent-green` | `#00ff88` | Primary accent, CTAs, active states |
| `--si-accent-blue` | `#0066ff` | Secondary accent, links in some contexts |
| `--si-accent-purple` | `#8844ff` | Tertiary accent, syntax keywords |
| `--si-accent-orange` | `#ff8800` | Warnings, numbers in code |
| `--si-text-primary` | `#e0e0e0` | Headings, primary text |
| `--si-text-secondary` | `#888888` | Body text, descriptions |
| `--si-text-muted` | `#555555` | Disabled, hints, comments |

### Accent Green (`#00ff88`)

The signature color. Use for:
- Primary buttons and CTAs
- Active navigation states
- Success states and confirmations
- Brand highlights

**Do not** use green for large text blocks or backgrounds — it's an accent, not a primary color.

## Components

### Navigation

```html
<div id="nav-root"></div>
<script src="superinstance-nav.js"></script>
<script>
  // Pass the active page ID: 'home', 'openconstruct', 'docs', 'demos', 'github'
  document.getElementById('nav-root').innerHTML = createSuperInstanceNav('docs');
</script>
```

### Hero Section

```html
<section class="hero">
  <div>
    <h1 class="hero-title">Build <span class="accent">something</span> cool</h1>
    <p class="hero-subtitle">A short description of your project or page.</p>
    <div class="hero-actions">
      <a href="#" class="btn btn-primary">Get Started</a>
      <a href="#" class="btn btn-outline">View on GitHub</a>
    </div>
  </div>
</section>
```

### Cards

```html
<div class="card-grid">
  <div class="card">
    <span class="badge badge-green">New</span>
    <h3>Feature Name</h3>
    <p>Description of this feature goes here.</p>
  </div>
  <div class="card">
    <span class="badge badge-blue">Stable</span>
    <h3>Another Feature</h3>
    <p>Another description.</p>
  </div>
</div>
```

### Buttons

```html
<!-- Primary CTA -->
<a href="#" class="btn btn-primary">Get Started</a>

<!-- Secondary -->
<a href="#" class="btn btn-secondary">Learn More</a>

<!-- Outline / Ghost -->
<a href="#" class="btn btn-outline">Documentation</a>

<!-- Sizes -->
<a href="#" class="btn btn-primary btn-sm">Small</a>
<a href="#" class="btn btn-primary btn-lg">Large</a>
```

### Badges

```html
<span class="badge badge-green">Active</span>
<span class="badge badge-blue">Info</span>
<span class="badge badge-purple">Experimental</span>
<span class="badge badge-orange">Warning</span>
```

### Code Block with Header

```html
<div class="code-block">
  <div class="code-block-header">
    <span>main.rs</span>
    <button class="btn btn-sm btn-secondary" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code><span class="kw">fn</span> <span class="fn">main</span>() {
    <span class="fn">println!</span>(<span class="str">"Hello, SuperInstance!"</span>);
}</code></pre>
</div>
```

### Data Table

```html
<table class="data-table">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>uptime</td>
      <td class="text-mono">99.9%</td>
      <td><span class="badge badge-green">OK</span></td>
    </tr>
  </tbody>
</table>
```

### Forms

```html
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" id="name" class="input" placeholder="Enter name">
</div>
<div class="form-group">
  <label for="desc">Description</label>
  <textarea id="desc" class="textarea" placeholder="Optional description"></textarea>
</div>
```

### Footer

```html
<div id="footer-root"></div>
<script src="superinstance-footer.js"></script>
<script>
  document.getElementById('footer-root').innerHTML = createSuperInstanceFooter();
</script>
```

## Adding a New Landing Page

1. Create a new HTML file in the target repo.
2. Include `superinstance.css` in `<head>` (use a CDN link or copy the file).
3. Add `<div id="nav-root"></div>` right after `<body>`.
4. Build your content using the component classes above.
5. Add `<div id="footer-root"></div>` before `</body>`.
6. Include both JS files and call `createSuperInstanceNav()` and `createSuperInstanceFooter()`.
7. Add a top margin/padding to your first content section to account for the fixed navbar (`padding-top: calc(var(--si-nav-height) + 2rem)` or use the `.hero` class).

### File Structure

```
your-page/
├── index.html
├── superinstance.css          ← copy or CDN
├── superinstance-nav.js       ← copy or CDN
├── superinstance-footer.js    ← copy or CDN
└── assets/                    ← page-specific images
```

## Animations

Use utility classes for entrance animations:

- `.fade-in` — Simple opacity fade
- `.slide-up` — Fade + slide up

Or use the keyframes directly:

```css
.custom-animation {
  animation: slideUp 0.5s ease-out, fadeIn 0.4s ease-out;
}
```

## Responsive

The system includes breakpoints at:
- **768px** — Mobile: single column, hamburger menu, smaller typography
- **1024px** — Tablet: 2-column grids, reduced spacing

Design mobile-first when possible. The grid classes automatically collapse to single column on small screens.
