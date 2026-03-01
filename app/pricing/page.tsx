export default function PricingPage() {
  return (
    <main className="px-8 py-28 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-20">
        Pricing
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Professional License</h2>
          <p className="text-5xl font-bold mb-6">$10,000</p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Full SCIOS Core System</li>
            <li>✓ Local AI Deployment</li>
            <li>✓ Trading & Automation Modules</li>
            <li>✓ Lifetime License</li>
          </ul>
          <a href="/contact" className="bg-white text-black px-6 py-3 rounded-lg">
            Contact Sales
          </a>
        </div>

        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Enterprise</h2>
          <p className="text-5xl font-bold mb-6">Custom</p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Multi-node deployment</li>
            <li>✓ Custom integration</li>
            <li>✓ Dedicated support</li>
            <li>✓ Advanced security layer</li>
          </ul>
          <a href="/contact" className="border border-gray-700 px-6 py-3 rounded-lg">
            Schedule Call
          </a>
        </div>

      </div>
    </main>
  );
}
