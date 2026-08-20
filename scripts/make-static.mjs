import { mkdir, readFile, writeFile, cp, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "static-package");
const css = await readFile(join(root, "app/globals.css"), "utf8");
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, "public/walk-images"), join(out, "assets/walk-images"), { recursive: true });
await cp(join(root, "public/og.png"), join(out, "assets/og.png"));

const routes = [["/", "index.html"], ["/editorial", "editorial.html"], ["/newspaper", "newspaper.html"], ["/thaw", "thaw.html"]];
for (const [route, file] of routes) {
  let html = await (await fetch(`http://localhost:3000${route}`)).text();
  html = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<link[^>]+(?:modulepreload|stylesheet)[^>]*>/g, "")
    .replace(/<link rel="preload"[^>]+>/g, "")
    .replace("</head>", `<style>${css}</style></head>`)
    .replaceAll('src="/walk-images/', 'src="assets/walk-images/')
    .replaceAll('href="/editorial"', 'href="editorial.html"')
    .replaceAll('href="/newspaper"', 'href="newspaper.html"')
    .replaceAll('href="/thaw"', 'href="thaw.html"')
    .replaceAll('href="/"', 'href="index.html"')
    .replaceAll('content="http://localhost:3000/og.png"', 'content="assets/og.png"')
    .replaceAll('href="/favicon.svg"', 'href="assets/favicon.svg"');
  await writeFile(join(out, file), html);
}
await cp(join(root, "public/favicon.svg"), join(out, "assets/favicon.svg"));
await writeFile(join(out, "README.txt"), "СЕЗОН ПРОГУЛОК — HTML-ПАКЕТ\n\nОткройте index.html, чтобы выбрать одну из трёх упаковок.\nКаждая версия также доступна отдельным файлом: editorial.html, newspaper.html, thaw.html.\nПапка assets обязательна: в ней находятся фотографии и обложка для соцсетей.\nВсе внешние ссылки на статью, приложения Mary’s Recipes и видеотренировки сохранены.\n", "utf8");
console.log(out);
