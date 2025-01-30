// import React, { useState } from "react";

// function ReviewForm() {
//   const [rating, setRating] = useState(0);
//   const [headline, setHeadline] = useState("");
//   const [review, setReview] = useState("");
//   const [file, setFile] = useState(null);

//   const handleRating = (rate) => {
//     setRating(rate);
//   };

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     console.log({
//       rating,
//       headline,
//       review,
//       file,
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-4">Create Review</h1>
//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">Overall rating</h2>
//         <div className="flex space-x-1">
//           {[1, 2, 3, 4, 5].map((rate) => (
//             <svg
//               key={rate}
//               className={`w-8 h-8 cursor-pointer ${
//                 rate <= rating ? "text-yellow-500" : "text-gray-300"
//               }`}
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//               onClick={() => handleRating(rate)}
//             >
//               <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.47 9.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
//             </svg>
//           ))}
//         </div>
//       </div>

//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">Add a headline</h2>
//         <input
//           type="text"
//           className="w-full p-2 border border-gray-300 rounded-md"
//           placeholder="What's most important to know?"
//           value={headline}
//           onChange={(e) => setHeadline(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">Add a photo or video</h2>
//         <input
//           type="file"
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100"
//           onChange={handleFileChange}
//         />
//       </div>

//       <div className="mb-4">
//         <h2 className="text-lg font-semibold">Add a written review</h2>
//         <textarea
//           className="w-full p-2 border border-gray-300 rounded-md"
//           rows="5"
//           placeholder="What did you like or dislike? What did you use this product for?"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         />
//       </div>

//       <button
//         className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// export default ReviewForm;


import React, { useState } from 'react';

function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [headline, setHeadline] = useState('');
  const [review, setReview] = useState('');
  const [file, setFile] = useState(null);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({
      rating,
      headline,
      review,
      file,
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create Review</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Overall rating</h2>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((rate) => (
            <svg
              key={rate}
              className={`w-10 h-10 cursor-pointer ${
                rate <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleRating(rate)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.977 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.977-2.89a1 1 0 00-1.175 0l-3.977 2.89c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.47 9.101c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
            </svg>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add a headline</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="What's most important to know?"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add a photo or video</h2>
        <div className="border border-dashed border-gray-400 p-4 rounded-lg">
          <input
            type="file"
            className="block w-full text-sm text-gray-500"
            onChange={handleFileChange}
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Add a written review</h2>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="5"
          placeholder="What did you like or dislike? What did you use this product for?"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <button
        className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default ReviewForm;