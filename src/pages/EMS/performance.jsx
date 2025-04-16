import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Performance = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", reviewer: "Manager", rating: 4, feedback: "Great teamwork and leadership skills." },
    { id: 2, name: "Jane Smith", reviewer: "Team Lead", rating: 3, feedback: "Needs improvement in time management." },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    reviewer: "",
    rating: "",
    feedback: "",
  });

  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    const { name, reviewer, rating, feedback } = newReview;
    setIsFormComplete(name && reviewer && rating && feedback);
  }, [newReview]);

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormComplete) {
      setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
      setNewReview({ name: "", reviewer: "", rating: "", feedback: "" });
    }
  };

  const handleSort = () => {
    const sorted = [...reviews].sort((a, b) =>
      sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
    );
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setReviews(sorted);
  };

  const filteredReviews = reviews.filter((review) =>
    review.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-5 px-4">
      {/* Form Section */}
      <div className="card mx-auto max-w-2xl shadow">
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Performance Review</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Employee Name"
              value={newReview.name}
              onChange={handleChange}
              className="form-control"
              required
            />
            <input
              type="text"
              name="reviewer"
              placeholder="Reviewer Name"
              value={newReview.reviewer}
              onChange={handleChange}
              className="form-control"
              required
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              value={newReview.rating}
              onChange={handleChange}
              className="form-control text-lg"
              required
            />
            <input
              type="text"
              name="feedback"
              placeholder="Feedback"
              value={newReview.feedback}
              onChange={handleChange}
              className="form-control"
              required
            />
            <button
              type="submit"
              disabled={!isFormComplete}
              className={`btn w-full mt-2 ${
                isFormComplete ? "btn-primary" : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="card mt-6 shadow">
        <div className="card-body">
          <div className="d-flex flex-wrap justify-between align-items-center gap-3 mb-3">
            <h5 className="card-title mb-0">Employee Performance Reviews</h5>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <input
                type="text"
                placeholder="Search by name..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="form-control"
              />
              <button onClick={handleSort} className="btn btn-info text-white">
                Sort by Rating {sortOrder === "asc" ? "⬆️" : "⬇️"}
              </button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Reviewer</th>
                  <th>Rating</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {filteredReviews.map((review) => (
                  <tr key={review.id}>
                    <td>{review.id}</td>
                    <td>{review.name}</td>
                    <td>{review.reviewer}</td>
                    <td>
                      {Array.from({ length: review.rating }, (_, index) => (
                        <FaStar key={index} color="gold" className="me-1 d-inline-block" />
                      ))}
                    </td>
                    <td>{review.feedback}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
