export default function PricingPage() {
  return (
    <main className="px-8 py-28 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-20">
        SCIOS Products
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        {/* SCIOS Professional */}
        <div className="border border-gray-800 p-10 rounded-xl text-center">
          <h2 className="text-3xl font-semibold mb-4">SCIOS Professional</h2>
          <p className="text-5xl font-bold mb-6">$499<span className="text-lg font-normal"> / month</span></p>

          <ul className="text-gray-400 space-y-3 mb-8 text-left">
            <li>✓ Full automation infrastructure</li>
            <li>✓ Monitoring & analytics modules</li>
            <li>✓ Local-first architecture</li>
            <li>✓ Cancel anytime</li>
          </ul>

          <a
            href="https://buy.stripe.com/6oUeVceOB2zD2sb4Hy1Fe01"
            target="_blank"
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold inline-block"
          >
            Subscribe
          </a>
        </div>

        {/* Exposure Monitoring */}
        <div className="border border-gray-800 p-10 rounded-xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Exposure Monitoring</h2>
          <p className="text-5xl font-bold mb-6">$199<span className="text-lg font-normal"> / month</span></p>

          <ul className="text-gray-400 space-y-3 mb-8 text-left">
            <li>✓ Advanced monitoring analytics</li>
            <li>✓ Risk detection</li>
            <li>✓ Exposure reporting</li>
          </ul>

          <a
            href="https://buy.stripe.com/dRmaEWeOB5LP4Aj5LC1Fe02"
            target="_blank"
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold inline-block"
          >
            Subscribe
          </a>
        </div>

        {/* Sovereign AI */}
        <div className="border border-gray-800 p-10 rounded-xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Sovereign AI</h2>
          <p className="text-5xl font-bold mb-6">$29<span className="text-lg font-normal"> / month</span></p>

          <ul className="text-gray-400 space-y-3 mb-8 text-left">
            <li>✓ Personal AI deployment</li>
            <li>✓ Modular AI tools</li>
            <li>✓ Lightweight configuration</li>
          </ul>

          <a
            href="https://buy.stripe.com/aFabJ0dKxb690k32zq1Fe03"
            target="_blank"
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold inline-block"
          >
            Subscribe
          </a>
        </div>

        {/* Plus */}
        <div className="border border-gray-800 p-10 rounded-xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Plus</h2>
          <p className="text-5xl font-bold mb-6">$8<span className="text-lg font-normal"> / month</span></p>

          <ul className="text-gray-400 space-y-3 mb-8 text-left">
            <li>✓ Support access</li>
            <li>✓ Feature add-ons</li>
            <li>✓ Extended usage tools</li>
          </ul>

          <a
            href="https://buy.stripe.com/6oU28q8qd6PTfeX5LC1Fe04"
            target="_blank"
            className="bg-white text-black px-10 py-4 rounded-lg font-semibold inline-block"
          >
            Subscribe
          </a>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-20">
        All subscriptions billed monthly. Cancel anytime through Stripe.
      </p>

    </main>
  );
}
