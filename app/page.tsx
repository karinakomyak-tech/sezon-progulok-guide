import Link from "next/link";

const options = [
  {
    href: "/editorial",
    number: "01",
    title: "Гулять считается",
    note: "Редакционная версия",
    copy: "Крупные цифры, чистая сетка и живые фотографии.",
    className: "choice editorial-choice",
  },
  {
    href: "/newspaper",
    number: "02",
    title: "Прогулочная газета",
    note: "Газетная версия",
    copy: "Факты и практические советы собраны как полосы летней газеты.",
    className: "choice newspaper-choice",
  },
  {
    href: "/thaw",
    number: "03",
    title: "Разморозка",
    note: "Атмосферная версия",
    copy: "Мягкий переход от зимней паузы к прогулкам и движению.",
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
        <p className="chooser-lead">Во всех трёх версиях один и тот же материал: рекомендации, лесное купание, рецепты Mary’s Recipes, три тренировки и следующий шаг.</p>
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
      <footer className="chooser-foot">Содержание одно. Меняется только подача.</footer>
    </main>
  );
}
