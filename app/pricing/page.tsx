export default function PricingPage() {
  return (
    <main className="px-8 py-28 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-20">
        Pricing & Plans
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* SCIOS Professional */}
        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">SCIOS Professional</h2>
          <p className="text-5xl font-bold mb-6">$499<span className="text-lg font-normal"> / month</span></p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Full automation core</li>
            <li>✓ Trading & monitoring modules</li>
            <li>✓ Local-first deployment</li>
            <li>✓ Cancel anytime</li>
          </ul>
        </div>

        {/* Exposure Monitoring */}
        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Exposure Monitoring</h2>
          <p className="text-5xl font-bold mb-6">$199<span className="text-lg font-normal"> / month</span></p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Advanced monitoring analytics</li>
            <li>✓ Risk tracking</li>
            <li>✓ Monthly billing</li>
          </ul>
        </div>

        {/* Sovereign AI */}
        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Sovereign AI</h2>
          <p className="text-5xl font-bold mb-6">$29<span className="text-lg font-normal"> / month</span></p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Personal AI deployment</li>
            <li>✓ Modular configuration</li>
          </ul>
        </div>

        {/* Plus */}
        <div className="border border-gray-800 p-10 rounded-xl">
          <h2 className="text-3xl font-semibold mb-4">Plus</h2>
          <p className="text-5xl font-bold mb-6">$8<span className="text-lg font-normal"> / month</span></p>
          <ul className="text-gray-400 space-y-3 mb-8">
            <li>✓ Extended support access</li>
            <li>✓ Feature add-ons</li>
          </ul>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-16">
        All subscriptions are billed monthly. Cancel anytime.
      </p>

    </main>
  );
}
