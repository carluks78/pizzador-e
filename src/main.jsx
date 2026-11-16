import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, Clock3, Facebook, MapPin, Menu, Phone, X } from "lucide-react";
import { categories, drinks } from "./data";
import "./styles.css";

const phoneHref = "tel:+33232357015";
const mapHref = "https://www.google.com/maps/dir/?api=1&destination=51+rue+Aristide+Briand+27220+Ménilles";

function Logo({ compact = false }) {
  return <a className={`brand ${compact ? "compact" : ""}`} href="#accueil" aria-label="Pizza Dorée, accueil"><img src="/images/logo.webp" alt="Pizza Dorée" /></a>;
}

function Splash() {
  const [visible, setVisible] = useState(() => !sessionStorage.getItem("pizza-doree-intro"));
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem("pizza-doree-intro", "seen");
      setVisible(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, [visible]);
  if (!visible) return null;
  return (
    <div className="splash" role="status" aria-label="Chargement de Pizza Dorée">
      <div className="splash-glow" />
      <img src="/images/logo.webp" alt="Logo officiel Pizza Dorée" />
      <p>Pizza Dorée, le goût du bonheur à chaque bouchée&nbsp;!</p>
      <div className="splash-line"><i /></div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <header className="header">
        <div className="header-inner">
          <Logo />
          <nav className="nav nav-left" aria-label="Navigation principale">
            <a href="#carte">Notre carte</a><a href="#histoire">Notre maison</a>
          </nav>
          <nav className="nav nav-right">
            <a href="#infos">Horaires</a><a href="#contact">Contact</a>
            <a className="pill pill-gold" href={phoneHref}><Phone size={16} /> Nous appeler</a>
          </nav>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Ouvrir le menu"><Menu /></button>
        </div>
      </header>
      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="drawer-backdrop" onClick={close} aria-label="Fermer le menu" />
        <div className="drawer-panel">
          <div className="drawer-head"><Logo compact /><button onClick={close} aria-label="Fermer"><X /></button></div>
          <nav><a onClick={close} href="#carte">Notre carte</a><a onClick={close} href="#histoire">Notre maison</a><a onClick={close} href="#infos">Horaires</a><a onClick={close} href="#contact">Nous trouver</a></nav>
          <a className="pill pill-gold" href={phoneHref}><Phone size={18} /> 02 32 35 70 15</a>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <img className="hero-image" src="/images/hero.webp" alt="Pizza artisanale Pizza Dorée fraîchement sortie du four" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">Pizza artisanale · Ménilles</p>
        <h1>Généreuse.<br/><span>Italienne.</span><br/>Dorée.</h1>
        <p className="hero-lead">Des recettes préparées à la commande, une pâte bien dorée et des garnitures sans compromis.</p>
        <div className="hero-actions">
          <a className="pill pill-gold" href="#carte">Découvrir notre carte <ArrowRight size={18} /></a>
          <a className="pill pill-ghost" href={phoneHref}><Phone size={18} /> Nous appeler</a>
        </div>
      </div>
      <a className="scroll-cue" href="#histoire"><span>Découvrir</span><ArrowDown size={18} /></a>
      <div className="hero-badge"><strong>100%</strong><span>préparé<br/>à la commande</span></div>
    </section>
  );
}

function Story() {
  return (
    <section className="story section" id="histoire">
      <div className="story-copy reveal">
        <p className="eyebrow dark">La fabrique du goût</p>
        <h2>Le bon.<br/>Le vrai.<br/><span>Le généreux.</span></h2>
        <p>À Ménilles, Pizza Dorée cultive une idée simple&nbsp;: servir des pizzas qui donnent envie de revenir. Une pâte dorée, une garniture généreuse et des recettes préparées à la commande.</p>
        <div className="story-points">
          <div><b>01</b><span>Préparées à<br/>la commande</span></div>
          <div><b>02</b><span>Ingrédients<br/>généreux</span></div>
          <div><b>03</b><span>À emporter<br/>à Ménilles</span></div>
        </div>
      </div>
      <div className="story-visual reveal">
        <img src="/images/products/pizza-napolitaine-au-basilic-frais.webp" alt="Pizza Marguerita au basilic frais" loading="lazy" />
        <span className="round-stamp">Pizza Dorée · Ménilles · Fait avec passion ·</span>
      </div>
    </section>
  );
}

function ProductCard({ item }) {
  const [name, description, priceSmall, priceLarge, image] = item;
  return (
    <article className="product-card">
      <div className="product-image"><img src={image} alt={`${name} – Pizza Dorée`} loading="lazy" /></div>
      <div className="product-body">
        <div className="product-title"><h3>{name}</h3>{!priceLarge && <strong>{priceSmall}</strong>}</div>
        <p>{description}</p>
        {priceLarge && <div className="sizes"><span><small>26 cm</small><b>{priceSmall}</b></span><span><small>29 cm</small><b>{priceLarge}</b></span></div>}
      </div>
    </article>
  );
}

function MenuSection() {
  const [active, setActive] = useState("tomate");
  const category = useMemo(() => categories.find((c) => c.id === active), [active]);
  return (
    <section className="menu-section" id="carte">
      <div className="menu-heading">
        <p className="eyebrow">La carte Pizza Dorée</p>
        <h2>Choisissez votre<br/><span>prochaine favorite.</span></h2>
        <p>Les tailles et tarifs sont indiqués directement sur chaque recette.</p>
      </div>
      <div className="category-tabs" role="tablist" aria-label="Catégories de la carte">
        {categories.map((c) => <button key={c.id} className={active === c.id ? "active" : ""} onClick={() => setActive(c.id)} role="tab">{c.label}</button>)}
        <button className={active === "boissons" ? "active" : ""} onClick={() => setActive("boissons")} role="tab">Boissons</button>
      </div>
      {active === "boissons" ? <Drinks /> : (
        <>
          <div className="category-intro"><h3>{category.label}</h3><p>{category.intro}</p></div>
          <div className="products-grid">{category.items.map((item) => <ProductCard key={`${category.id}-${item[0]}`} item={item} />)}</div>
          {active === "tomate" && <div className="extras"><b>Les petits plus</b><p>Noix, roquette, olives ou basilic&nbsp;: 1 € en 26 cm / 1,50 € en 29 cm. Autres ingrédients&nbsp;: 1 € en 26 cm / 2 € en 29 cm.</p></div>}
        </>
      )}
    </section>
  );
}

function Can({ name, large = false }) {
  const slugs = {
    "Coca": "coca", "Coca zéro": "coca-zero", "Coca cherry": "coca-cherry",
    "Schweppes agrumes": "schweppes-agrumes", "Fanta orange": "fanta-orange", "Fanta citron": "fanta-citron",
    "Orangina": "orangina", "Perrier": "perrier", "Oasis tropical": "oasis-tropical",
    "Oasis pomme cassis framboise": "oasis-pomme-cassis-framboise", "Fuze Tea": "fuze-tea",
    "Tropico": "tropico", "Sprite": "sprite"
  };
  const bottleAssets = new Set(["Coca", "Fanta orange", "Orangina", "Tropico"]);
  const suffix = large && bottleAssets.has(name) ? "-150" : "";
  return <div className={`pack-shot ${large ? "large" : ""}`}><img src={`/images/drinks/${slugs[name]}${suffix}.webp`} alt={`${name} ${large ? "1,5 L" : "33 cl"}`} loading="lazy" /></div>;
}

function Drinks() {
  return (
    <div className="drinks-wrap">
      <div className="drink-group"><div className="category-intro"><h3>Canettes 33 cl</h3><p>Toutes les canettes sont à 1,70 €.</p></div><div className="drinks-grid">{drinks.cans.map((n) => <div className="drink-card" key={n}><Can name={n}/><h3>{n}</h3><b>1,70 €</b></div>)}</div></div>
      <div className="drink-group"><div className="category-intro"><h3>Bouteilles 1,5 L</h3><p>Toutes les bouteilles sont à 3,00 €.</p></div><div className="drinks-grid bottles">{drinks.bottles.map((n) => <div className="drink-card" key={n}><Can name={n} large/><h3>{n}</h3><b>3,00 €</b></div>)}</div></div>
    </div>
  );
}

const hours = [
  ["Lundi", "Fermé"], ["Mardi", "11h30 – 13h30 / 18h00 – 20h00"], ["Mercredi", "11h30 – 13h30 / 18h00 – 20h00"],
  ["Jeudi", "11h30 – 13h30 / 18h00 – 20h00"], ["Vendredi", "11h30 – 13h30 / 18h00 – 20h00"],
  ["Samedi", "11h30 – 13h30 / 18h00 – 20h00"], ["Dimanche", "18h00 – 22h00"]
];

function Practical() {
  return (
    <section className="practical" id="infos">
      <div className="map-panel">
        <iframe
          title="Carte de Pizza Dorée à Ménilles"
          src="https://www.google.com/maps?q=51%20rue%20Aristide%20Briand%2C%2027220%20M%C3%A9nilles&z=16&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="map-card">
          <span><MapPin size={20} /></span>
          <div><b>Pizza Dorée</b><p>51 rue Aristide Briand<br/>27220 Ménilles</p></div>
          <a href={mapHref} target="_blank" rel="noreferrer">Y aller <ArrowRight size={17}/></a>
        </div>
      </div>
      <div className="practical-content">
        <p className="eyebrow">Passez nous voir</p><h2>Votre pizza,<br/><span>tout près.</span></h2>
        <div className="info-line"><MapPin/><div><b>Pizza Dorée</b><p>51 rue Aristide Briand<br/>27220 Ménilles, France</p></div></div>
        <div className="info-line"><Phone/><div><b>Commandes par téléphone</b><a href={phoneHref}>02 32 35 70 15</a></div></div>
        <div className="info-actions"><a className="pill pill-gold" href={mapHref} target="_blank" rel="noreferrer">Y aller <ArrowRight size={18}/></a></div>
      </div>
      <div className="hours">
        <div className="hours-title"><Clock3/><div><p className="eyebrow dark">Horaires</p><h3>Cette semaine</h3></div></div>
        {hours.map(([day, value]) => <div className={`hour-row ${value === "Fermé" ? "closed" : ""}`} key={day}><b>{day}</b><span>{value}</span></div>)}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top"><Logo/><p>Le goût du bonheur<br/>à chaque bouchée.</p><a className="footer-phone" href={phoneHref}>02 32 35 70 15</a></div>
      <div className="footer-grid">
        <div><h4>Navigation</h4><a href="#carte">Notre carte</a><a href="#histoire">Notre maison</a><a href="#infos">Horaires</a></div>
        <div><h4>Nous trouver</h4><p>51 rue Aristide Briand<br/>27220 Ménilles, France</p><a href={mapHref} target="_blank" rel="noreferrer">Itinéraire</a></div>
        <div><h4>Suivez-nous</h4><a href="https://www.facebook.com/pizzadoree" target="_blank" rel="noreferrer"><Facebook size={17}/> Facebook</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pizza Dorée&nbsp; · &nbsp;Sur place · À emporter · Commande par téléphone</span></div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")), { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><Splash/><Header/><main><Hero/><Story/><MenuSection/><Practical/></main><Footer/><a className="mobile-call" href={phoneHref} aria-label="Appeler Pizza Dorée au 02 32 35 70 15"><Phone size={24}/></a></>;
}

createRoot(document.getElementById("root")).render(<App />);
