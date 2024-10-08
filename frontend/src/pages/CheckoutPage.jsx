import { useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Paypal, CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-[#333333] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="bg-[#6200EA] text-white py-4 px-6">
            <h1 className="text-2xl font-bold">Checkout</h1>
          </div>
          {step === 1 ? (
            <motion.div
              className="p-6"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold">
                    Advanced Web Development Course
                  </h3>
                  <p className="text-gray-600">12-week online course</p>
                  <p className="text-lg font-bold mt-2">$499.00</p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === "credit-card"}
                        onChange={() => setPaymentMethod("credit-card")}
                        className="form-radio text-[#6200EA] focus:ring-[#6200EA]"
                      />
                      <CreditCard className="text-[#6200EA]" />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="payment-method"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="form-radio text-[#6200EA] focus:ring-[#6200EA]"
                      />
                      <Paypal className="text-[#6200EA]" />
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">
                    Billing Information
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                    <div className="col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zip"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6200EA]"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#6200EA] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Place Order
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="p-6 text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Order Confirmed!</h2>
              <p className="text-gray-600 mb-4">
                Thank you for your purchase. You will receive a confirmation
                email shortly.
              </p>
              <p className="font-semibold">Order Number: #12345</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CheckoutPage;
