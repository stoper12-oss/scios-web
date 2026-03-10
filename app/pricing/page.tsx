export default function Pricing() {
  return (
    <main className="px-8 py-32 max-w-7xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-6">
        SCIOS Platform Pricing
      </h1>

      <p className="text-center text-gray-400 mb-20 max-w-2xl mx-auto">
        SCIOS provides local-first AI infrastructure, automation tools,
        and cybersecurity monitoring designed for operators, developers,
        and modern digital businesses.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* SCIOS PLUS */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">SCIOS Plus</h2>

          <p className="text-gray-400 mb-6">
            Entry-level access to the SCIOS ecosystem for developers
            and AI automation enthusiasts.
          </p>

          <p className="text-4xl font-bold mb-6">$8/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Core platform access</li>
            <li>Basic automation tools</li>
            <li>Community support</li>
          </ul>

          <a
            href="https://buy.stripe.com/6oU28q8qd6PTfeX5LC1Fe04"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg text-center font-semibold"
          >
            Get Started
          </a>

        </div>


        {/* SOVEREIGN AI */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">Sovereign AI</h2>

          <p className="text-gray-400 mb-6">
            Deploy autonomous AI modules locally while maintaining
            full control of your infrastructure and data.
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
            rel="noopener noreferrer"
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
            Continuous scanning of your company's digital footprint
            to detect exposed credentials, vulnerable infrastructure,
            and cybersecurity risks before attackers discover them.
          </p>

          <p className="text-4xl font-bold mb-6">$199/mo</p>

          <ul className="text-gray-400 space-y-2 mb-8 flex-1">
            <li>Digital footprint exposure scanning</li>
            <li>Credential breach monitoring</li>
            <li>Attack surface intelligence</li>
            <li>Real-time security alerts</li>
            <li>Security monitoring dashboard</li>
          </ul>

          <a
            href="https://buy.stripe.com/dRmaEWeOB5LP4Aj5LC1Fe02"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-6 py-3 rounded-lg text-center font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* SCIOS PROFESSIONAL */}
        <div className="border border-gray-800 rounded-xl p-8 flex flex-col">

          <h2 className="text-2xl font-semibold mb-4">SCIOS Professional</h2>

          <p className="text-gray-400 mb-6">
            Full AI infrastructure automation platform designed
            for advanced operators and enterprise environments.
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
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg text-center font-semibold"
          >
            Subscribe
          </a>

        </div>

      </div>

    </main>
  );
}
