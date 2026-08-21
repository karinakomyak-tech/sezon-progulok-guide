import { mkdir, readFile, writeFile, cp, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "static-package");
const css = await readFile(join(root, "app/globals.css"), "utf8");
await rm(out, { recursive: true, force: true });
await mkdir(join(out, "assets"), { recursive: true });
await cp(join(root, "public/walk-images"), join(out, "assets/walk-images"), { recursive: true });
await cp(join(root, "public/favicon.svg"), join(out, "assets/favicon.svg"));
await cp(join(root, "public/walk-images/olga-forest-selfie.png"), join(out, "assets/og.png"));

const courseNudge = `<script>(()=>{const n=document.createElement('aside');n.className='course-nudge';n.setAttribute('aria-label','Курс Летний прайм');n.innerHTML='<a href="https://sektaschool.ru/online/summerprime?utm_source=bot&utm_medium=gaidwalk&utm_campaign=summerprime" target="_blank" rel="noreferrer"><span><strong>Летний прайм</strong><small>3 недели · 2 900 ₽ · старт завтра</small></span><i aria-hidden="true">↗</i></a><button type="button" aria-label="Скрыть предложение курса">×</button>';n.style.display='none';document.body.append(n);const hero=document.querySelector('.hero');const course=document.querySelector('.course-offer');if(!hero||!course)return;let heroVisible=true,courseVisible=false,closed=false;const update=()=>{n.style.display=closed||heroVisible||courseVisible?'none':'grid'};n.querySelector('button').addEventListener('click',()=>{closed=true;update()});const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.target===hero)heroVisible=entry.isIntersecting;if(entry.target===course)courseVisible=entry.isIntersecting});update()},{threshold:.01});observer.observe(hero);observer.observe(course)})();</script>`;

let html = await (await fetch("http://localhost:3000/")).text();
html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link[^>]+(?:modulepreload|stylesheet)[^>]*>/g, "")
  .replace(/<link rel="preload"[^>]+>/g, "")
  .replace("</head>", `<style>${css}</style></head>`)
  .replaceAll('src="/walk-images/', 'src="assets/walk-images/')
  .replaceAll('content="/walk-images/', 'content="assets/walk-images/')
  .replaceAll('href="/favicon.svg"', 'href="assets/favicon.svg"')
  .replaceAll('старт в любой день', 'старт завтра')
  .replace("</body>", `${courseNudge}</body>`);

await writeFile(join(out, "index.html"), html);
await writeFile(join(out, ".nojekyll"), "");
await writeFile(
  join(out, "README.txt"),
  "СЕЗОН ПРОГУЛОК — HTML для GitHub Pages\n\nОткройте index.html.\n",
  "utf8",
);
console.log(out);
