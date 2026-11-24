MathProfessor AI — Phase 1 starter

This is a browser-based prototype. It does not require Termux or a laptop.

Files:
- index.html: application structure
- styles.css: responsive phone-first design
- app.js: first calculation interaction
- manifest.webmanifest: installable web-app metadata
- sw.js: basic application-shell caching

Important:
- The math.js library is loaded from a CDN, so the calculator currently needs internet access.
- The service worker caches the app shell after it is hosted over HTTPS.
- This first prototype evaluates supported expressions; it is not yet a complete symbolic math tutor.
- Do not enter private information. This prototype has no account or cloud storage.

To publish free from an Android phone:
1. Sign in to GitHub in your browser and create a public repository named mathprofessor-ai.
2. Upload all files in this folder to the repository's root.
3. In repository Settings > Pages, select Deploy from a branch, choose main and /(root), then Save.
4. Wait for GitHub Pages to publish the site. Open the Pages URL it provides.
5. In Chrome, use the three-dot menu > Add to Home screen (or Install app if offered).

Next development step:
Add safer symbolic algebra handling and step-by-step solution explanations, then test supported math topics before adding AI or a realistic avatar.
