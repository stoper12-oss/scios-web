export default function Pricing() {
  return (
    <main className="px-8 py-32 max-w-7xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-6">
        SCIOS Platform Pricing
      </h1>

      <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto">
        Modular AI infrastructure and monitoring tools designed for operators,
        developers, and cybersecurity professionals.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* PLUS */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">SCIOS Plus</h2>

          <p className="text-gray-400 mb-6">
            Entry-level access to the SCIOS platform tools.
          </p>

          <p className="text-4xl font-bold mb-6">$8/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Platform access</li>
            <li>Basic automation tools</li>
            <li>Community support</li>
          </ul>

          <a
            href="https://buy.stripe.com/6oU28q8qd6PTfeX5LC1Fe04"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg text-center font-semibold"
          >
            Get Started
          </a>

        </div>


        {/* SOVEREIGN AI */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">Sovereign AI</h2>

          <p className="text-gray-400 mb-6">
            Lightweight modular AI system deployment.
          </p>

          <p className="text-4xl font-bold mb-6">$29/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Autonomous AI modules</li>
            <li>Local deployment support</li>
            <li>Automation capabilities</li>
          </ul>

          <a
            href="https://buy.stripe.com/aFabJ0dKxb690k32zq1Fe03"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg text-center font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* EXPOSURE MONITORING */}
        <div className="border border-blue-600 rounded-xl p-8 flex flex-col relative">

          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 px-4 py-1 text-xs rounded">
            MOST POPULAR
          </div>

          <h2 className="text-2xl font-semibold mb-4">Exposure Monitoring</h2>

          <p className="text-gray-400 mb-6">
            Continuous monitoring for digital exposure and security risks.
          </p>

          <p className="text-4xl font-bold mb-6">$199/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Infrastructure exposure scanning</li>
            <li>Risk intelligence alerts</li>
            <li>Monitoring dashboard</li>
          </ul>

          <a
            href="https://buy.stripe.com/dRmaEWeOB5LP4Aj5LC1Fe02"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-lg text-center font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* SCIOS PRO */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">SCIOS Professional</h2>

          <p className="text-gray-400 mb-6">
            Full AI infrastructure automation platform.
          </p>

          <p className="text-4xl font-bold mb-6">$499/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Advanced automation engine</li>
            <li>AI operational intelligence</li>
            <li>Enterprise infrastructure monitoring</li>
          </ul>

          <a
            href="https://buy.stripe.com/6oUeVceOB2zD2sb4Hy1Fe01"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg text-center font-semibold"
          >
            Subscribe
          </a>

        </div>

      </div>

    </main>
  );
}
