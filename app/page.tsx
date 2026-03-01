export default function Home() {
  return (
    <main className="px-8 py-28 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-32">
        <h1 className="text-6xl font-bold mb-6">
          AI Infrastructure for Serious Operators
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          SCIOS delivers secure, structured AI-powered monitoring,
          automation, and trading intelligence built for professionals,
          security teams, and high-performance environments.
        </p>

        <div className="flex justify-center gap-6">
          <a href="/pricing" className="bg-white text-black px-8 py-3 rounded-lg font-semibold">
            View Pricing
          </a>
          <a href="/contact" className="border border-gray-700 px-8 py-3 rounded-lg">
            Request Demo
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-12 mb-32">
        <div>
          <h3 className="text-2xl font-semibold mb-4">AI Automation Core</h3>
          <p className="text-gray-400">
            Deploy intelligent agents across trading, cybersecurity,
            and enterprise operations with structured orchestration.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Local-First Security</h3>
          <p className="text-gray-400">
            Designed for secure environments. Operates locally with
            optional cloud integration.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Enterprise Architecture</h3>
          <p className="text-gray-400">
            Modular agent framework with scalable infrastructure
            for advanced deployment scenarios.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center border border-gray-800 rounded-2xl p-16">
        <h2 className="text-3xl font-bold mb-4">
          Built for Operators Who Move First
        </h2>
        <p className="text-gray-400 mb-8">
          Stop experimenting. Deploy structured AI infrastructure.
        </p>
        <a href="/pricing" className="bg-white text-black px-10 py-4 rounded-lg font-semibold">
          Get Started
        </a>
      </section>

    </main>
  );
}
