export default function Pricing() {
  return (
    <main className="px-8 py-32 max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-center mb-20">
        SCIOS Pricing
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* SCIOS PRO */}
        <div className="border border-gray-800 rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            SCIOS Professional
          </h2>

          <p className="text-gray-400 mb-6">
            Full automation infrastructure platform
          </p>

          <p className="text-4xl font-bold mb-6">
            $499/mo
          </p>

          <a
            href="https://buy.stripe.com/6oUeVceOB2zD2sb4Hy1Fe01"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* EXPOSURE MONITORING */}
        <div className="border border-gray-800 rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Exposure Monitoring
          </h2>

          <p className="text-gray-400 mb-6">
            Continuous digital exposure monitoring
          </p>

          <p className="text-4xl font-bold mb-6">
            $199/mo
          </p>

          <a
            href="https://buy.stripe.com/dRmaEWeOB5LP4Aj5LC1Fe02"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* SOVEREIGN AI */}
        <div className="border border-gray-800 rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            Sovereign AI
          </h2>

          <p className="text-gray-400 mb-6">
            Lightweight modular AI deployment
          </p>

          <p className="text-4xl font-bold mb-6">
            $29/mo
          </p>

          <a
            href="https://buy.stripe.com/aFabJ0dKxb690k32zq1Fe03"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Subscribe
          </a>

        </div>


        {/* PLUS */}
        <div className="border border-gray-800 rounded-xl p-8 text-center">

          <h2 className="text-2xl font-semibold mb-4">
            SCIOS Plus
          </h2>

          <p className="text-gray-400 mb-6">
            Additional platform tools and features
          </p>

          <p className="text-4xl font-bold mb-6">
            $8/mo
          </p>

          <a
            href="https://buy.stripe.com/6oU28q8qd6PTfeX5LC1Fe04"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Subscribe
          </a>

        </div>

      </div>

    </main>
  );
}
