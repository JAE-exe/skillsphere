import { motion } from "framer-motion";

const ServiceDetailsPage = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="bg-white text-[#333333] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          Professional Logo Design Service
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Logo Design Service"
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Service Description
              </h2>
              <p className="mb-4">
                Get a professional, unique logo design that perfectly represents
                your brand. Our experienced designers will work closely with you
                to create a logo that captures your vision and stands out in the
                market.
              </p>
              <ul className="list-disc list-inside">
                <li>3 initial concepts</li>
                <li>Unlimited revisions</li>
                <li>Full copyright ownership</li>
                <li>High-resolution files in multiple formats</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Provider&apos;s Portfolio
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <img
                    key={item}
                    src={`/placeholder.svg?height=150&width=150&text=Portfolio ${item}`}
                    alt={`Portfolio item ${item}`}
                    className="w-full h-[150px] object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Client Reviews and Testimonials
              </h2>
              {[
                {
                  name: "John Doe",
                  rating: 5,
                  comment: "Excellent work! Exceeded my expectations.",
                },
                {
                  name: "Jane Smith",
                  rating: 4,
                  comment: "Great communication and timely delivery.",
                },
                {
                  name: "Mike Johnson",
                  rating: 5,
                  comment: "Fantastic designs. Will definitely use again!",
                },
              ].map((review, index) => (
                <div key={index} className="mb-4 pb-4 border-b last:border-b-0">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#6200EA] text-white rounded-full flex items-center justify-center mr-2">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold">{review.name}</span>
                    <div className="ml-auto flex">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-1"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg mb-8 sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold">$299</span>
                <span className="ml-2 text-gray-600">per logo</span>
              </div>
              <div className="mb-4">
                <span className="font-semibold">Delivery Time:</span> 5-7 days
              </div>
              <div className="mb-6">
                <span className="font-semibold">Rating:</span> 4.9 (120 reviews)
              </div>
              <button className="w-full bg-[#6200EA] text-white py-3 px-6 rounded-lg hover:bg-[#5000C0] transition-colors duration-300">
                Order Now
              </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                About the Provider
              </h2>
              <div className="flex items-center mb-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Provider"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">Jane Designer</h3>
                  <p className="text-sm text-gray-600">
                    Professional Logo Designer
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                With over 10 years of experience in branding and logo design,
                I&apos;m passionate about creating unique and memorable visual
                identities for businesses of all sizes.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#6200EA] text-white px-2 py-1 rounded-full text-xs">
                  Logo Design
                </span>
                <span className="bg-[#6200EA] text-white px-2 py-1 rounded-full text-xs">
                  Branding
                </span>
                <span className="bg-[#6200EA] text-white px-2 py-1 rounded-full text-xs">
                  Graphic Design
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
