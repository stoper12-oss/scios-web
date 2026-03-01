export default function TermsPage() {
  return (
    <main className="px-8 py-28 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      <p className="text-gray-400 mb-6">
        By subscribing to any SCIOS product, you agree to the following terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Billing</h2>
      <p className="text-gray-400">
        All subscriptions are billed monthly in advance.
        Subscriptions may be canceled at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Refund Policy</h2>
      <p className="text-gray-400">
        Refunds are not issued for partial billing periods.
        Access remains active until the end of the paid term.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">License</h2>
      <p className="text-gray-400">
        SCIOS products are licensed, not sold. Unauthorized redistribution is prohibited.
      </p>

    </main>
  );
}
