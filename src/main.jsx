import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowRight, Clock3, Facebook, MapPin, Menu, Phone, X } from "lucide-react";
import { categories, drinks } from "./data";
import "./styles.css";

const phoneHref = "tel:+33232357015";
const mapHref = "https://www.google.com/maps/dir/?api=1&destination=51+rue+Aristide+Briand+27220+Ménilles";
const uberEatsHref = "https://www.ubereats.com/store/pizza-doree/DWa1iMdJX-ex7MntOCGfHg";
const googleReviewHref = "https://www.google.com/maps/place//@49.0324852,1.3685372,17z/data=!3m1!4b1!4m3!3m2!1s0x47e14a9de28b098b:0x59796da96c71eb9c!12e1?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D";

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
            <a href="#horaires">Horaires</a><a href="#nous-trouver">Nous trouver</a>
            <a className="pill pill-gold" href={phoneHref}><Phone size={16} /> Nous appeler</a>
          </nav>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Ouvrir le menu"><Menu /></button>
        </div>
      </header>
      <div className={`drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button className="drawer-backdrop" onClick={close} aria-label="Fermer le menu" />
        <div className="drawer-panel">
          <div className="drawer-head"><Logo compact /><button onClick={close} aria-label="Fermer"><X /></button></div>
          <nav><a onClick={close} href="#carte">Notre carte</a><a onClick={close} href="#histoire">Notre maison</a><a onClick={close} href="#horaires">Horaires</a><a onClick={close} href="#nous-trouver">Nous trouver</a></nav>
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
        <h1>Fraîche.<br/><span>Généreuse.</span><br/>Dorée.</h1>
      
        <div className="hero-actions">
          <a className="pill pill-gold" href="#carte">Découvrir notre carte <ArrowRight size={18} /></a>
          <a className="pill pill-ghost" href={phoneHref}><Phone size={18} /> Nous appeler</a>
        </div>
        <a className="uber-button" href={uberEatsHref} target="_blank" rel="noreferrer">
          <span>Livraison avec</span><img src="/images/brands/uber-eats.svg" alt="Uber Eats" />
        </a>
      </div>
      <a className="scroll-cue" href="#histoire"><span>Découvrir</span><ArrowDown size={18} /></a>
    </section>
  );
}

function Story() {
  return (
    <section className="story section" id="histoire">
      <div className="story-copy reveal">
        <p className="eyebrow dark">La fabrique du goût</p>
        <h2>Le frais.<br/>Le vrai.<br/><span>Le généreux.</span></h2>
        <p>À Ménilles, Pizza Dorée ne fait pas de compromis&nbsp;: une pâte fraîche faite maison, des produits frais sélectionnés avec soin, et des pizzas préparées rien que pour vous. Une pâte dorée et croustillante, une garniture généreuse jusqu’au bord, et ce goût qui vous donne envie de revenir dès le lendemain.</p>
        <div className="story-points">
          <article><b>Préparées à la commande</b><p>Notre pâte fraîche est faite maison, puis chaque pizza est étalée, garnie à la minute et cuite juste avant de vous être servie. Elle arrive chaude, croustillante, à son meilleur.</p></article>
          <article><b>Produits frais, garniture généreuse</b><p>Légumes frais, fromages de qualité, viandes soigneusement choisies&nbsp;: on ne lésine jamais sur les ingrédients. Chaque part est copieuse et pleine de saveurs.</p></article>
          <article><b>À emporter à Ménilles</b><p>Commandez, passez la porte, repartez avec une pizza à la pâte fraîche maison, bien chaude. Simple, rapide, délicieux.</p></article>
        </div>
      </div>
      <div className="story-visual reveal">
        <img src="/images/products/pizza-rustique-aux-champignons-et-jambon.webp" alt="Pizza Régina, meilleure vente de Pizza Dorée" loading="lazy" />
        <span className="round-stamp">Meilleure<br/>vente</span>
      </div>
    </section>
  );
}

function ProductCard({ item }) {
  const [name, description, priceSmall, priceLarge, image] = item;
  const shouldContain = /^(Sorbet|B&J|Tiramisu)/.test(name);
  return (
    <article className="product-card">
      <div className={`product-image ${shouldContain ? "product-image-contain" : ""}`}><img src={image} alt={`${name} – Pizza Dorée`} loading="lazy" /></div>
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
  const selectCategory = (id) => {
    setActive(id);
    requestAnimationFrame(() => document.getElementById("menu-results")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };
  return (
    <section className="menu-section" id="carte">
      <div className="menu-heading">
        <p className="eyebrow">La carte Pizza Dorée</p>
        <h2>Choisissez votre <span>Pizz’Adorée.</span></h2>
      </div>
      <div className="category-tabs" role="tablist" aria-label="Catégories de la carte">
        {categories.map((c) => <button key={c.id} className={active === c.id ? "active" : ""} onClick={() => selectCategory(c.id)} role="tab" aria-selected={active === c.id}>{c.label}</button>)}
        <button className={active === "boissons" ? "active" : ""} onClick={() => selectCategory("boissons")} role="tab" aria-selected={active === "boissons"}>Boissons</button>
      </div>
      <div className="menu-results" id="menu-results">
      {active === "boissons" ? <Drinks /> : (
        <>
          <div className="category-intro"><h3>{category.label}</h3></div>
          <div className="products-grid">{category.items.map((item) => <ProductCard key={`${category.id}-${item[0]}`} item={item} />)}</div>
          {active === "tomate" && <div className="extras"><b>Les petits plus</b><p>Noix, roquette, olives ou basilic&nbsp;: 1 € en 26 cm / 1,50 € en 29 cm. Autres ingrédients&nbsp;: 1 € en 26 cm / 2 € en 29 cm.</p></div>}
        </>
      )}
      </div>
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
  const extension = !large && (name === "Tropico" || name === "Coca zéro") ? "png" : "webp";
  return <div className={`pack-shot ${large ? "large" : ""}`}><img src={`/images/drinks/${slugs[name]}${suffix}.${extension}`} alt={`${name} ${large ? "1,5 L" : "33 cl"}`} loading="lazy" /></div>;
}

function Drinks() {
  return (
    <div className="drinks-wrap">
      <div className="drink-group"><div className="category-intro"><h3>Canettes 33 cl</h3></div><div className="drinks-grid">{drinks.cans.map((n) => <div className="drink-card" key={n}><Can name={n}/><h3>{n}</h3><b>1,70 €</b></div>)}</div></div>
      <div className="drink-group"><div className="category-intro"><h3>Bouteilles 1,5 L</h3></div><div className="drinks-grid bottles">{drinks.bottles.map((n) => <div className="drink-card" key={n}><Can name={n} large/><h3>{n}</h3><b>3,00 €</b></div>)}</div></div>
    </div>
  );
}

const hours = [
  ["Lundi", "Fermé"], ["Mardi", "11h00 – 14h00 / 18h00 – 21h30"], ["Mercredi", "11h00 – 14h00 / 18h00 – 21h30"],
  ["Jeudi", "11h00 – 14h00 / 18h00 – 21h30"], ["Vendredi", "11h00 – 14h00 / 18h00 – 22h30"],
  ["Samedi", "11h00 – 14h00 / 18h00 – 22h30"], ["Dimanche", "Nous contacter",]
];

function Practical() {
  return (
    <section className="practical" id="infos">
      <div className="map-panel" id="nous-trouver">
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
        <a className="review-button" href={googleReviewHref} target="_blank" rel="noreferrer"><img src="/images/brands/google-g.svg" alt="" /> Laissez-nous votre avis</a>
      </div>
      <div className="hours" id="horaires">
        <div className="hours-title"><Clock3/><div><p className="eyebrow dark">Horaires</p><h3>Cette semaine</h3></div></div>
        {hours.map(([day, value]) => <div className={`hour-row ${value === "Fermé" ? "closed" : ""}`} key={day}><b>{day}</b><span>{value}</span></div>)}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-top"><Logo/><p>Le goût du bonheur<br/>à chaque bouchée.</p><a className="footer-phone" href={phoneHref}> 02 32 35 70 15</a></div>
      <div className="footer-grid">
        <div><h4>Navigation</h4><a href="#carte">Notre carte</a><a href="#histoire">Notre maison</a><a href="#horaires">Horaires</a></div>
        <div><h4>Nous trouver</h4><p>51 rue Aristide Briand<br/>27220 Ménilles, France</p><a href="#nous-trouver">Voir la carte</a></div>
        <div><h4>Suivez-nous</h4><a href="https://www.facebook.com/pizzadoree" target="_blank" rel="noreferrer"><Facebook size={17}/> Facebook</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Pizza Dorée&nbsp; · &nbsp;Sur place · À emporter · Commande par téléphone </span></div>
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
