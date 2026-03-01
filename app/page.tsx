export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-28 text-center">
        <h1 className="text-6xl font-bold tracking-tight mb-6">
          SCIOS
        </h1>

        <p className="text-xl text-gray-400 mb-8">
          AI Monitoring & Automation Infrastructure
        </p>

        <p className="max-w-3xl mx-auto text-gray-500 text-lg leading-relaxed">
          SCIOS delivers secure, structured AI-powered monitoring and automation
          designed for professionals and modern enterprises.
        </p>

        <div className="mt-12 flex justify-center gap-4">
          <a
            href="/pricing"
            className="bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            View Pricing
          </a>
          <a
            href="/contact"
            className="border border-gray-700 px-8 py-3 rounded-md hover:border-white transition"
          >
            Contact Sales
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-900 px-6 py-8 text-center text-gray-600 text-sm">
        SCIOS by Willis Hartin © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
