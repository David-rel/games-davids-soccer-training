import Image from "next/image";

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
            image="/whatsnext-preview.png"
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
  image,
  title,
  description,
  href,
  color,
}: {
  image: string;
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
      className="glass glass-hover bounce-in rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
      style={{ textDecoration: "none" }}
    >
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-fredoka)", color }}
        >
          {title}
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          {description}
        </p>
        <span
          className="mt-2 text-sm font-semibold"
          style={{ fontFamily: "var(--font-fredoka)", color: "rgba(255,255,255,0.35)" }}
        >
          Play now →
        </span>
      </div>
    </a>
  );
}
