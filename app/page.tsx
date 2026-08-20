import Link from "next/link";

const options = [
  {
    href: "/editorial",
    number: "01",
    title: "Гулять считается",
    note: "Сильная редакционная версия",
    copy: "Крупные цифры, чистая сетка и живые фотографии. Гайд читается как летний спецпроект.",
    className: "choice editorial-choice",
  },
  {
    href: "/newspaper",
    number: "02",
    title: "Прогулочная газета",
    note: "Ироничная и заметная версия",
    copy: "Факты становятся новостями, практики — колонками, а 15 минут — главным выпуском дня.",
    className: "choice newspaper-choice",
  },
  {
    href: "/thaw",
    number: "03",
    title: "Разморозка",
    note: "Мягкая атмосферная версия",
    copy: "Страница постепенно выходит из зимней паузы в цвет, воздух, еду и движение.",
    className: "choice thaw-choice",
  },
];

export default function Home() {
  return (
    <main className="chooser">
      <header className="chooser-head">
        <div className="brand-line"><span>#sekta</span><span>×</span><span>Mary’s Recipes</span></div>
        <p className="eyebrow">Один гайд · три упаковки</p>
        <h1>Сезон<br />прогулок</h1>
        <p className="chooser-lead">Внутри каждой версии сохранены рекомендации, лесное купание, партнёрская подборка рецептов, три тренировки и финальный шаг из исходного гайда.</p>
      </header>
      <section className="choice-grid" aria-label="Варианты упаковки">
        {options.map((option) => (
          <Link href={option.href} className={option.className} key={option.href}>
            <div className="choice-top"><span>{option.number}</span><span>Открыть ↗</span></div>
            <div>
              <small>{option.note}</small>
              <h2>{option.title}</h2>
              <p>{option.copy}</p>
            </div>
          </Link>
        ))}
      </section>
      <footer className="chooser-foot">Контент не переписан — поменялись только ритм, визуальный язык и способ взаимодействия.</footer>
    </main>
  );
}
