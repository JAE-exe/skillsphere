"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Check } from "lucide-react"; // Removed unused imports

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      user: "Alice",
      rating: 4,
      comment: "Great course!",
      approved: true,
    },
    {
      id: 2,
      user: "Bob",
      rating: 5,
      comment: "Excellent content and delivery.",
      approved: true,
    },
    {
      id: 3,
      user: "Charlie",
      rating: 3,
      comment: "Good, but could be better.",
      approved: false,
    },
  ]);

  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleCommentChange = (e) => {
    setNewReview((prev) => ({ ...prev, comment: e.target.value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (newReview.rating === 0 || newReview.comment.trim() === "") return;
    const newId = Math.max(...reviews.map((r) => r.id)) + 1;
    setReviews([
      ...reviews,
      { ...newReview, id: newId, user: "Anonymous", approved: false },
    ]);
    setNewReview({ rating: 0, comment: "" });
  };

  const handleApprove = (id) => {
    setReviews(
      reviews.map((r) => (r.id === id ? { ...r, approved: true } : r))
    );
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Course Reviews
      </h1>

      {/* Review Form */}
      <form
        onSubmit={handleSubmitReview}
        className="mb-12 bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Leave a Review
        </h2>
        <div className="flex mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleRatingChange(star)}
              className={`text-3xl ${
                star <= newReview.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </motion.button>
          ))}
        </div>
        <textarea
          value={newReview.comment}
          onChange={handleCommentChange}
          placeholder="Write your review here..."
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows={4}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#6200EA] text-white px-6 py-2 rounded-full font-semibold"
          type="submit"
        >
          Submit Review
        </motion.button>
      </form>

      {/* Reviews List */}
      <div className="space-y-6">
        <AnimatePresence>
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className={`bg-gray-100 p-6 rounded-lg shadow-md ${
                !review.approved ? "border-l-4 border-yellow-500" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{review.user}</h3>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={
                          star <= review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {!review.approved && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleApprove(review.id)}
                      className="text-green-500 hover:text-green-600"
                    >
                      <Check size={20} />
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(review.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </motion.button>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
              {!review.approved && (
                <p className="text-yellow-600 mt-2 text-sm">Pending approval</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
