export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="px-8 py-32 max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6">
          SCIOS Infrastructure
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          A modular AI automation and monitoring platform designed for
          operators, developers, and enterprise environments.
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

      {/* SYSTEM OVERVIEW */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Platform Modules
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              SCIOS Professional
            </h3>
            <p className="text-gray-400">
              Core automation infrastructure combining monitoring,
              analytics, and operational intelligence systems.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Exposure Monitoring
            </h3>
            <p className="text-gray-400">
              Continuous monitoring of digital infrastructure,
              exposure metrics, and risk intelligence.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Sovereign AI
            </h3>
            <p className="text-gray-400">
              A lightweight AI module designed for independent
              deployments and modular intelligence systems.
            </p>
          </div>

          <div className="border border-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">
              Plus
            </h3>
            <p className="text-gray-400">
              Support tools, additional system modules,
              and extended platform capabilities.
            </p>
          </div>

        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="px-8 py-24 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">
          System Architecture
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          SCIOS operates as a modular infrastructure platform where
          monitoring systems, automation modules, and AI services
          integrate into a unified operational environment.
        </p>
      </section>

      {/* CTA */}
      <section className="px-8 py-28 text-center border-t border-gray-900">

        <h2 className="text-4xl font-bold mb-6">
          Start Using SCIOS
        </h2>

        <p className="text-gray-400 mb-10">
          Choose the platform module that fits your environment.
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
