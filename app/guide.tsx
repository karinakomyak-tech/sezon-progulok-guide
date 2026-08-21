"use client";

import { useEffect, useState } from "react";

const articleUrl = "https://sxsprtscnc.ru/tpost/forest-bathing";
const courseUrl = "https://sektaschool.ru/online/summerprime?utm_source=bot&utm_medium=gaidwalk&utm_campaign=summerprime";
const apps = [
  ["AppStore", "https://apps.apple.com/us/app/icook-meal-planner-food-prep/id1434244144?ppid=19b9b54b-a30a-424d-9dcf-3515ce74b3ba"],
  ["RuStore", "https://apps.rustore.ru/app/com.insolence.recipes.rustore"],
  ["Google Play", "https://play.google.com/store/apps/details?id=com.insolence.recipes&listing=sekta"],
];
const videos = [
  ["01", "Видеотренировка 1", "https://kinescope.io/pDzaCEzeE11dAP4JMb3KPs", "/walk-images/workout-1.jpg"],
  ["02", "Видеотренировка 2", "https://kinescope.io/pAZW7gvcA6AAe7wu1jnCsN", "/walk-images/workout-2.jpg"],
  ["03", "Видеотренировка 3", "https://kinescope.io/v67KXj7zh49Dm3JZgSZ3Ge", "/walk-images/workout-3.jpg"],
];

function Flower({ children }: { children?: React.ReactNode }) {
  return <span className="flower" aria-hidden="true">{children || "●"}</span>;
}

export function WalkGuide() {
  const [showCourseNudge, setShowCourseNudge] = useState(false);
  const [courseNudgeClosed, setCourseNudgeClosed] = useState(false);

  useEffect(() => {
    const hero = document.querySelector(".hero");
    const course = document.querySelector(".course-offer");
    if (!hero || !course) return;

    let heroVisible = true;
    let courseVisible = false;
    const update = () => setShowCourseNudge(!heroVisible && !courseVisible);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === course) courseVisible = entry.isIntersecting;
      });
      update();
    }, { threshold: 0.01 });

    observer.observe(hero);
    observer.observe(course);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="guide newspaper" id="top">
      <nav className="guide-nav" aria-label="Основная навигация">
        <a href="#top" className="mini-brand">#sekta <i>×</i> Mary’s Recipes</a>
        <span className="nav-edition">Сезон прогулок · летний гид</span>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <p className="kicker">Свежий выпуск</p>
          <h1>Прогуляемся?</h1>
          <p className="hero-deck">Время для себя: как добавить движения и энергии в каждый день</p>
        </div>
        <figure className="hero-image"><img src="/walk-images/olga-forest-selfie.png" alt="Оля на прогулке в лесу" /><figcaption>Летний гид по активности и перекусам</figcaption></figure>
        <div className="hero-sticker">20–40<br /><small>минут в день</small></div>
      </header>

      <section className="intro section" id="start">
        <div className="section-label">01 / без самокритики</div>
        <div className="intro-copy">
          <h2>Время для себя</h2>
          <p className="lead">Мы в <b>#Sekta</b> верим, что забота о себе строится на уважении к своим ресурсам. Если в последнее время движения было мало — это не повод для самокритики, а знак, что телу пора немного помочь.</p>
        </div>
        <figure className="intro-photo"><img src="/walk-images/walk-sky-friends.png" alt="Прогулка вдвоём в солнечном поле" /><figcaption>Выйти вместе — тоже план</figcaption></figure>
      </section>

      <section className="numbers section">
        <div className="section-label">02 / цифры</div>
        <div className="numbers-head">
          <p>Международные рекомендации, на которые мы опираемся, говорят, что для отличного самочувствия не нужно жить в спортзале.</p>
        </div>
        <div className="stat-grid">
          <article className="stat main-stat"><strong>150–300 <em>минут</em></strong><span>Умеренной активности в неделю достаточно, чтобы поддержать сердце и обмен веществ.</span></article>
          <article className="stat"><strong>20–40 <em>минут</em></strong><span>Активной прогулки в день — и ты уже в «зелёной зоне» здоровья.</span></article>
          <article className="stat image-stat"><img src="/walk-images/olga-city-walk.png" alt="Оля идёт пешком по городу" /></article>
          <article className="stat"><strong>Любое <em>движение</em></strong><span>Будь то прогулка за любимым кофе, закупка продуктов или уборка дома — это уже вклад в твой энергетический баланс.</span></article>
        </div>
      </section>

      <section className="why section">
        <div className="section-label">03 / почему это работает</div>
        <h2>Почему это работает<br />и зачем это тебе</h2>
        <div className="reason-list">
          <article><span>01</span><div><h3>Движение как антистресс</h3><p>Регулярная активность помогает справляться со стрессом и стабилизирует эмоциональный фон.</p></div></article>
          <article><span>02</span><div><h3>Маленькие шаги — большой результат</h3><p>Даже небольшое увеличение привычной активности, например прогулка вместо поездки на автобусе, ощутимо улучшает самочувствие.</p></div></article>
          <article><span>03</span><div><h3>Фокус на ценности, а не на цифры</h3><p>Важно понять, что прогулка даёт именно тебе. Например: «Я гуляю, чтобы у меня были силы на интересные проекты и общение с близкими».</p></div></article>
          <article><span>04</span><div><h3>«Можно» вместо «надо»</h3><p>Если сегодня нет настроения на длинный маршрут, разреши себе пройтись всего 5 минут. Отсутствие чувства вины — лучший двигатель долгосрочных привычек.</p></div></article>
        </div>
      </section>

      <section className="forest section">
        <div className="forest-photo"><img src="/walk-images/olga-field-bw.png" alt="Оля отдыхает в поле" /><div className="photo-note">Купальник<br />не понадобится</div></div>
        <div className="forest-copy">
          <div className="section-label">04 / синрин-йоку</div>
          <h2>Лесное купание:<br />бесплатное спа<br />для мозга</h2>
          <p>Если одна мысль о тренировке пока вызывает желание поглубже зарыться в одеяло, у нас есть предложение получше. Как насчёт свидания с природой? В Японии это называют синрин-йоку, или «лесное купание»: можно «купаться» в атмосфере леса, звуках и запахах.</p>
          <ul className="forest-facts">
            <li><b>«Зелёная йога» для глаз.</b> Природные пейзажи дают глазам и вниманию ненаправленный отдых. Такой мягкий визуальный опыт может снижать когнитивную усталость.</li>
            <li><b>Смена фокуса.</b> Взгляд свободно переключается с ближнего на дальнее расстояние, снижая напряжение глаз.</li>
            <li><b>Снижение уровня стресса.</b> Контакт с природой помогает регулировать уровень гормонов стресса и улучшает эмоциональный фон.</li>
            <li><b>Свежий воздух.</b> В лесу меньше городских факторов загрязнения и больше фитонцидов — летучих веществ, которые вырабатываются растениями и могут влиять на иммунитет и уровень стресса.</li>
          </ul>
          <a className="text-link" href={articleUrl} target="_blank" rel="noreferrer">Что такое forest bathing и зачем он нужен — читать в Sex Sport Science ↗</a>
        </div>
      </section>

      <section className="practice section">
        <div className="section-label">05 / как сделать частью жизни</div>
        <h2>Как сделать прогулки<br />частью жизни</h2>
        <div className="practice-grid">
          <article><Flower>1</Flower><h3>Осознанность в моменте</h3><p>На минуту отложи телефон и просто заметь: какого цвета сегодня небо? Как пахнет воздух после дождя?</p></article>
          <article><Flower>2</Flower><h3>Принимай любой результат</h3><p>Если сегодня удалось дойти только до ближайшего сквера — это уже победа. Двигайся в удовольствие, не заставляй себя.</p></article>
          <article><Flower>3</Flower><h3>Никаких норм по скорости</h3><p>Нет необходимости бежать или идти быстрым шагом. Гуляй так, как тебе комфортно.</p></article>
        </div>
      </section>

      <section className="picnic section">
        <div className="picnic-copy">
          <div className="section-label">06 / подборка рецептов</div>
          <p className="partner-mark">Mary’s Recipes</p>
          <h2>Что положить<br />в корзинку</h2>
          <p>Смотри рецепты в приложении Mary’s Recipes:</p>
          <div className="app-links">{apps.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name} ↗</a>)}</div>
        </div>
        <div className="food-collage">
          <img src="/walk-images/picnic-food-main.jpg" alt="Пикник с роллами, ягодами и рисовыми сэндвичами" className="food-main" />
          <img src="/walk-images/picnic-food-wraps.jpg" alt="Овощные роллы и ягоды на пикнике" />
          <img src="/walk-images/picnic-food-rice.jpg" alt="Рисовые сэндвичи и ягоды на пикниковом пледе" />
        </div>
      </section>

      <section className="workouts section">
        <div className="section-label">07 / без коврика</div>
        <div className="workout-head"><h2>Как подвигаться<br />без коврика</h2><p>Если одной прогулки в парке мало, можно добавить упражнения. Мы подобрали три коротких тренировки для улицы: их можно делать в кроссовках прямо на траве или дорожке.</p></div>
        <p className="important"><b>Важно:</b> тебе не обязательно выполнять всё на максимум. Можно просто попробовать начать и посмотреть, как откликнется тело.</p>
        <div className="video-grid">
          {videos.map(([number, title, url, image]) => <a key={number} href={url} target="_blank" rel="noreferrer" className="video-card"><span className="video-cover"><img src={image} alt="Превью видеотренировки" /><span className="play">▶</span></span><small>{number}</small><h3>{title}</h3></a>)}
        </div>
      </section>

      <section className="course-offer section">
        <div className="course-photo">
          <img src="/walk-images/olga-summer-prime.png" alt="Оля в спортивной форме перед тренировкой" />
          <span>3 недели</span>
        </div>
        <div className="course-copy">
          <div className="section-label">08 / что дальше</div>
          <p className="course-name">Фокусный онлайн-курс</p>
          <h2>Летний<br />прайм</h2>
          <p className="course-lead">В гайде — один способ добавить движения. В «Летнем прайме» — три недели коротких тренировок, ухода за собой и лёгкого рациона.</p>
          <div className="course-facts">
            <span>тренировки до 30 минут</span>
            <span>старт завтра</span>
            <span>самостоятельный формат</span>
          </div>
          <div className="course-buy">
            <div><strong>2 900 ₽</strong><small>за весь курс</small></div>
            <a href={courseUrl} target="_blank" rel="noreferrer">Перейти к курсу <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="guide-footer"><div><b>#sekta</b><span>×</span><b>Mary’s Recipes</b></div><p>Найди время на себя, когда ты разрешишь себе просто быть, гулять и наслаждаться моментом.</p><a href="#top">Вернуться к началу ↑</a></footer>

      {showCourseNudge && !courseNudgeClosed && (
        <aside className="course-nudge" aria-label="Курс Летний прайм">
          <a href={courseUrl} target="_blank" rel="noreferrer">
            <span><strong>Летний прайм</strong><small>3 недели · 2 900 ₽ · старт завтра</small></span>
            <i aria-hidden="true">↗</i>
          </a>
          <button type="button" onClick={() => setCourseNudgeClosed(true)} aria-label="Скрыть предложение курса">×</button>
        </aside>
      )}
    </main>
  );
}
