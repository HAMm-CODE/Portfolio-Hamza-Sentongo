# Hamza Sentongo Portfolio

This pack customizes the [Dante Astro Theme](https://github.com/JustGoodUI/dante-astro-theme) into a minimal professional portfolio for Hamza Sentongo.

It includes:

- `src/data/site-config.ts` — updated name, bio, navigation, links, hero section, and disabled newsletter
- `src/content/projects/` — data engineering project pages
- `src/content/pages/about.md` — about, skills, experience, education, certification
- `src/content/pages/contact.md` — contact and resume links
- `src/content/blog/` — one starter portfolio note
- `public/` — placeholder avatar, hero image, social preview, and resume PDF if available

## Recommended setup

```bash
git clone https://github.com/JustGoodUI/dante-astro-theme.git hamza-portfolio
cd hamza-portfolio
```

Delete the demo content:

```bash
rm -f src/content/projects/project-*.md
rm -f src/content/blog/post-*.md
```

Copy the files from this pack into the cloned theme, preserving the folder structure:

```bash
cp -R path/to/hamza-dante-astro-portfolio/src/* src/
cp -R path/to/hamza-dante-astro-portfolio/public/* public/
```

Then run:

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:4321
```

## Windows PowerShell version

```powershell
git clone https://github.com/JustGoodUI/dante-astro-theme.git hamza-portfolio
cd hamza-portfolio
Remove-Item src/content/projects/project-*.md
Remove-Item src/content/blog/post-*.md
Copy-Item -Recurse path\to\hamza-dante-astro-portfolio\src\* src\ -Force
Copy-Item -Recurse path\to\hamza-dante-astro-portfolio\public\* public\ -Force
npm install
npm run dev
```

## What to edit next

1. Replace `public/avatar-placeholder.svg` with a real professional photo named `avatar.jpg` or keep the SVG.
2. If you add a real avatar image, update `src/data/site-config.ts`:

```ts
avatar: {
  src: '/avatar.jpg',
  alt: 'Hamza Sentongo',
},
```

3. Update the `website` field in `src/data/site-config.ts` after deployment.
4. Add GitHub links to each project page once the repos are ready.

## Suggested deployment

Use Netlify first because Dante already promotes a simple Netlify deployment flow. GitHub Pages also works, but Astro sites sometimes need extra configuration depending on the repository name.
