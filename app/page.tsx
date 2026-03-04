export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="px-8 py-36 max-w-6xl mx-auto text-center">

        <h1 className="text-6xl font-bold mb-6">
          SCIOS
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          AI-driven monitoring, automation, and operational intelligence
          for modern infrastructure and enterprise environments.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="/pricing"
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold"
          >
            View Pricing
          </a>

          <a
            href="/contact"
            className="border border-gray-700 px-10 py-4 rounded-lg"
          >
            Contact Sales
          </a>

        </div>

      </section>


      {/* TRUST STRIP */}
      <section className="border-y border-gray-900 py-10 text-center text-gray-500">
        Designed for developers, operators, and enterprise infrastructure teams
      </section>


      {/* FEATURES */}
      <section className="px-8 py-28 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Platform Capabilities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              AI Automation
            </h3>
            <p className="text-gray-400">
              Deploy intelligent automation modules to monitor,
              analyze, and act across your infrastructure.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Monitoring Systems
            </h3>
            <p className="text-gray-400">
              Continuous monitoring across digital environments
              with exposure analysis and risk intelligence.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">
              Modular AI
            </h3>
            <p className="text-gray-400">
              Build custom intelligence stacks using modular
              AI services and platform components.
            </p>
          </div>

        </div>

      </section>


      {/* PRODUCTS */}
      <section className="px-8 py-28 max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          SCIOS Modules
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="border border-gray-800 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              SCIOS Professional
            </h3>
            <p className="text-gray-400 mb-6">
              Core automation infrastructure combining monitoring,
              analytics, and AI-driven operational intelligence.
            </p>

            <p className="text-3xl font-bold">
              $499 / month
            </p>

          </div>

          <div className="border border-gray-800 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Exposure Monitoring
            </h3>

            <p className="text-gray-400 mb-6">
              Advanced monitoring platform for identifying and tracking
              exposure risks across digital infrastructure.
            </p>

            <p className="text-3xl font-bold">
              $199 / month
            </p>

          </div>

          <div className="border border-gray-800 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Sovereign AI
            </h3>

            <p className="text-gray-400 mb-6">
              Lightweight AI module designed for independent deployments
              and flexible intelligence environments.
            </p>

            <p className="text-3xl font-bold">
              $29 / month
            </p>

          </div>

          <div className="border border-gray-800 p-10 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Plus
            </h3>

            <p className="text-gray-400 mb-6">
              Additional platform tools, support features,
              and extended system capabilities.
            </p>

            <p className="text-3xl font-bold">
              $8 / month
            </p>

          </div>

        </div>

      </section>


      {/* ARCHITECTURE */}
      <section className="px-8 py-28 max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Modular Architecture
        </h2>

        <p className="text-gray-400 text-lg">
          SCIOS operates as a modular intelligence platform
          where automation systems, monitoring modules,
          and AI services integrate into a unified
          operational infrastructure.
        </p>

      </section>


      {/* CTA */}
      <section className="px-8 py-32 border-t border-gray-900 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Start Using SCIOS
        </h2>

        <p className="text-gray-400 mb-10">
          Deploy automation and monitoring intelligence
          across your infrastructure today.
        </p>

        <a
          href="/pricing"
          className="bg-white text-black px-12 py-4 rounded-lg font-semibold"
        >
          View Plans
        </a>

      </section>

    </main>
  );
}
