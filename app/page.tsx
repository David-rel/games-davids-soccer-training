export default function Home() {
  return (
    <main className="relative flex-1 flex flex-col items-center overflow-hidden">
      <div className="stars-bg" />

      <div className="relative z-10 w-full max-w-5xl px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <p
            className="text-sm font-bold uppercase tracking-widest mb-3"
            style={{ color: "#059669" }}
          >
            David&apos;s Soccer Training
          </p>
          <h1
            className="text-5xl sm:text-7xl font-bold mb-4"
            style={{ fontFamily: "var(--font-fredoka)", color: "#f0ecff" }}
          >
            Games
          </h1>
          <p className="text-lg max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Pick a game, grab your team, and let&apos;s play.
          </p>
        </header>

        {/* Games grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            emoji="🎬"
            title="What's Next?"
            description="Watch a clip, predict what happens in the last 10 seconds, then see which team nailed it."
            href="https://whatsnext.davidssoccertraining.com"
            color="#059669"
          />
        </div>
      </div>

      <footer className="relative z-10 pb-8 text-center text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>
        David&apos;s Soccer Training · Games
      </footer>
    </main>
  );
}

function GameCard({
  emoji,
  title,
  description,
  href,
  color,
}: {
  emoji: string;
  title: string;
  description: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass glass-hover bounce-in rounded-2xl p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1"
      style={{ textDecoration: "none" }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
        style={{ background: `${color}22`, border: `1px solid ${color}55` }}
      >
        {emoji}
      </div>
      <div>
        <h2
          className="text-2xl font-bold mb-1"
          style={{ fontFamily: "var(--font-fredoka)", color }}
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {description}
        </p>
      </div>
      <span
        className="mt-auto text-sm font-semibold"
        style={{ fontFamily: "var(--font-fredoka)", color: "rgba(255,255,255,0.35)" }}
      >
        Play now →
      </span>
    </a>
  );
}
