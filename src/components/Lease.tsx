import Link from "next/link";
import React from "react";

const Lease: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-[13vh]"> 
      <button className="mb-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"><Link href='/account'>&larr; Back</Link></button>
      <h2 className="text-gray-900 font-semibold text-lg">Trent Carie &mdash; <span className="text-gray-600">August 21, 2023</span></h2>
      <h1 className="text-2xl font-bold mt-4">The Importance of Mindful Living</h1>
      <p className="text-gray-700 mt-2">
        Mindful living is about being fully present in each moment, allowing us to enjoy life to the fullest while reducing stress and anxiety. It involves practices such as meditation, gratitude, and conscious decision-making that lead to a more fulfilling life.
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>Practice daily mindfulness meditation.</li>
        <li>Limit distractions and be present in conversations.</li>
        <li>Maintain a gratitude journal to appreciate the small things.</li>
        <li>Take deep breaths to ground yourself in the moment.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        By incorporating these small habits into your routine, you can develop a more positive mindset and a balanced lifestyle. Mindfulness helps in reducing stress, increasing focus, and improving overall well-being.
      </p>
      <ul className="list-disc list-inside mt-4 text-gray-700">
        <li>Enhances emotional intelligence and self-awareness.</li>
        <li>Boosts overall happiness and contentment.</li>
      </ul>
      <p className="text-gray-700 mt-4">
        If you are looking to bring mindfulness into your daily life, start with small steps and stay consistent. Over time, you will notice the positive impact it has on your mental clarity and well-being.
      </p>
    </div>
  );
};

export default Lease;