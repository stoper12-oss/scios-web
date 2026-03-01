export default function Home() {
  return (
    <main className="px-8 py-28 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="text-center mb-28">
        <h1 className="text-6xl font-bold mb-6">
          SCIOS Ecosystem
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
          AI-powered monitoring, automation, and infrastructure tools
          built for operators, developers, and enterprise environments.
        </p>

        <div className="flex justify-center gap-6">
          <a href="/pricing" className="bg-white text-black px-8 py-3 rounded-lg font-semibold">
            View All Products
          </a>
          <a href="/contact" className="border border-gray-700 px-8 py-3 rounded-lg">
            Contact Sales
          </a>
        </div>
      </section>

      {/* CORE PRODUCTS */}
      <section className="grid md:grid-cols-2 gap-12 mb-28">

        <div className="border border-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">SCIOS Professional</h3>
          <p className="text-gray-400 mb-4">
            Full AI automation infrastructure with trading and monitoring modules.
          </p>
          <p className="text-3xl font-bold">$499 / month</p>
        </div>

        <div className="border border-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Exposure Monitoring</h3>
          <p className="text-gray-400 mb-4">
            Advanced exposure tracking and monitoring analytics.
          </p>
          <p className="text-3xl font-bold">$199 / month</p>
        </div>

        <div className="border border-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Sovereign AI</h3>
          <p className="text-gray-400 mb-4">
            Independent AI module for personal or small-scale deployment.
          </p>
          <p className="text-3xl font-bold">$29 / month</p>
        </div>

        <div className="border border-gray-800 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Plus</h3>
          <p className="text-gray-400 mb-4">
            Extended support and additional feature access.
          </p>
          <p className="text-3xl font-bold">$8 / month</p>
        </div>

      </section>

    </main>
  );
}
