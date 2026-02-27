import { useState, useEffect, useRef } from "react";

const clients = [
  {
    name: "Stripe",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  },
  {
    name: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  },
  {
    name: "Slack",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  {
    name: "Dropbox",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Dropbox_Icon.svg",
  },
  {
    name: "Notion",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  },
  {
    name: "Vercel",
    logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
  },
];

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=DM+Sans:wght@300;400&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cs-wrapper {
    background: #ffffff;
    padding: 80px 0;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .cs-header {
    text-align: center;
    margin-bottom: 56px;
    padding: 0 24px;
  }

  .cs-eyebrow {
    display: inline-block;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 16px;
    position: relative;
  }

  .cs-eyebrow::before,
  .cs-eyebrow::after {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: #ccc;
    vertical-align: middle;
    margin: 0 10px;
  }

  .cs-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(34px, 5vw, 52px);
    font-weight: 300;
    color: #111;
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  .cs-title em {
    font-style: italic;
    font-weight: 600;
  }

  .cs-subtitle {
    margin-top: 14px;
    font-size: 15px;
    color: #888;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  .cs-track-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .cs-track-container::before,
  .cs-track-container::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 140px;
    z-index: 2;
    pointer-events: none;
  }

  .cs-track-container::before {
    left: 0;
    background: linear-gradient(to right, #fff 0%, transparent 100%);
  }

  .cs-track-container::after {
    right: 0;
    background: linear-gradient(to left, #fff 0%, transparent 100%);
  }

  .cs-track {
    display: flex;
    gap: 0;
    width: max-content;
    animation: scroll 28s linear infinite;
  }

  .cs-track:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .cs-logo-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 90px;
    padding: 0 36px;
    border-right: 1px solid #f0f0f0;
    transition: all 0.35s ease;
    cursor: default;
    position: relative;
    flex-shrink: 0;
  }

  .cs-logo-card:hover .cs-logo-img {
    filter: grayscale(100%) brightness(0);
    opacity: 1;
    transform: scale(1.08);
  }

  .cs-logo-img {
    max-width: 110px;
    max-height: 44px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%) brightness(0.1);
    opacity: 0.38;
    transition: all 0.35s ease;
    display: block;
  }

  .cs-divider {
    width: 48px;
    height: 1px;
    background: linear-gradient(to right, transparent, #ddd, transparent);
    margin: 56px auto 0;
  }

  .cs-stats {
    display: flex;
    justify-content: center;
    gap: 64px;
    margin-top: 52px;
    padding: 0 24px;
    flex-wrap: wrap;
  }

  .cs-stat {
    text-align: center;
  }

  .cs-stat-number {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 600;
    color: #111;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .cs-stat-label {
    margin-top: 6px;
    font-size: 12px;
    color: #aaa;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
`;

function AnimatedNumber({ target }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1200;
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setVal(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

export default function ClientSlider() {
  const doubled = [...clients, ...clients];

  return (
    <>
      <style>{style}</style>
      <section className="cs-wrapper">
        <div className="cs-header">
          <div className="cs-eyebrow">Trusted Worldwide</div>
          <h2 className="cs-title">
            Brands that <em>believe</em> in us
          </h2>
          <p className="cs-subtitle">
            From ambitious startups to global enterprises
          </p>
        </div>

        <div className="cs-track-container">
          <div className="cs-track">
            {doubled.map((client, i) => (
              <div className="cs-logo-card" key={i} title={client.name}>
                <img
                  className="cs-logo-img"
                  src={client.logo}
                  alt={client.name}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="cs-divider" />

        {/* <div className="cs-stats">
          {[
            { number: 200, suffix: "+", label: "Clients" },
            { number: 40, suffix: "+", label: "Countries" },
            { number: 98, suffix: "%", label: "Retention" },
            { number: 12, suffix: "yr", label: "Experience" },
          ].map(({ number, suffix, label }) => (
            <div className="cs-stat" key={label}>
              <div className="cs-stat-number">
                <AnimatedNumber target={number} />
                {suffix}
              </div>
              <div className="cs-stat-label">{label}</div>
            </div>
          ))}
        </div> */}
      </section>
    </>
  );
}