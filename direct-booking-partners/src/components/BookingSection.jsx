import React from "react";

const BookingSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "This is a front-end demo. Connect this form to your backend, CRM, or Calendly link."
    );
  };

  return (
    <section id="book-call" className="py-14 lg:py-20 bg-base-100 border-b border-base-200">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to Fire Your Landlord?
          </h2>
          <p className="text-base text-base-content/70">
            We are looking for <span className="font-semibold">3 Partners</span>{" "}
            this month to implement the Local Guide Protocol. We only work with
            hosts who treat this as a business.
          </p>
          <p className="text-sm text-base-content/80 font-semibold">
            You must have:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-base-content/80">
            <li>A high-quality, visually distinct property or portfolio.</li>
            <li>An average rating of 4.8 stars or higher.</li>
            <li>A desire to build a real brand, not just another listing.</li>
          </ul>
          <p className="text-sm text-base-content/60">
            If that&apos;s you, fill out the form and we&apos;ll send you an
            application link and strategy call time slots.
          </p>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="card-title text-lg">Apply to work with us</h3>
            <p className="text-sm text-base-content/70 mb-4">
              Tell us about your portfolio so we can prepare before the call.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="form-control w-full">
                <span className="label-text text-sm">Full name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-sm">Work email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-sm">Market / City</span>
                <input
                  type="text"
                  placeholder="e.g. Joshua Tree, CA"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-sm">Number of listings</span>
                <input
                  type="number"
                  min={1}
                  placeholder="e.g. 7"
                  className="input input-bordered w-full"
                  required
                />
              </label>

              <label className="form-control w-full">
                <span className="label-text text-sm">Approx. annual STR revenue</span>
                <select className="select select-bordered w-full" defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  <option value="100-250">$100K – $250K</option>
                  <option value="250-500">$250K – $500K</option>
                  <option value="500-1m">$500K – $1M</option>
                  <option value="1m+">$1M+</option>
                </select>
              </label>

              <label className="form-control w-full">
                <span className="label-text text-sm">
                  Why do you want to build a direct booking engine now?
                </span>
                <textarea
                  rows={3}
                  className="textarea textarea-bordered w-full"
                  placeholder="Be honest. The more context, the better we can help."
                />
              </label>

              <button type="submit" className="btn btn-primary w-full mt-2">
                Submit application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
