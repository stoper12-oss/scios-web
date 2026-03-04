export default function ManageSubscription() {
  return (
    <main className="px-8 py-32 max-w-3xl mx-auto text-center">

      <h1 className="text-4xl font-bold mb-6">
        Manage Your Subscription
      </h1>

      <p className="text-gray-400 mb-10">
        All SCIOS subscriptions are managed securely through Stripe.
        Use the Stripe billing portal to update payment information,
        download invoices, or cancel your subscription.
      </p>

      <a
        href="https://billing.stripe.com/p/login"
        target="_blank"
        className="bg-white text-black px-10 py-4 rounded-lg font-semibold"
      >
        Open Billing Portal
      </a>

      <p className="text-gray-500 text-sm mt-8">
        Support: willishartin37@gmail.com
      </p>

    </main>
  );
}
