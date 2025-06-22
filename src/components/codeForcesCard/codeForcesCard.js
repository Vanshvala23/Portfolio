import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { codeforcesCard } from '../../portfolio'; // ✅ Ensure this is correctly exported
import './card.scss'; // Optional additional styling

const rankColors = {
  newbie: 'bg-gray-500',
  pupil: 'bg-green-500',
  specialist: 'bg-cyan-500',
  expert: 'bg-blue-500',
  'candidate master': 'bg-purple-600',
  master: 'bg-orange-500',
  'international master': 'bg-orange-700',
  grandmaster: 'bg-red-500',
  'international grandmaster': 'bg-red-600',
  'legendary grandmaster': 'bg-pink-600',
};

const CodeforcesCard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [solvedCount, setSolvedCount] = useState(0);
  const [contestInfo, setContestInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = codeforcesCard?.handles?.[0];

  useEffect(() => {
    if (!codeforcesCard.display || !username) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const [infoRes, statusRes, contestRes] = await Promise.all([
          axios.get(`https://codeforces.com/api/user.info?handles=${username}`),
          axios.get(`https://codeforces.com/api/user.status?handle=${username}`),
          axios.get(`https://codeforces.com/api/user.rating?handle=${username}`),
        ]);

        setUserInfo(infoRes.data.result[0]);

        const solvedSet = new Set();
        statusRes.data.result.forEach((sub) => {
          if (sub.verdict === 'OK') {
            solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
          }
        });

        setSolvedCount(solvedSet.size);
        setContestInfo(contestRes.data.result);
      } catch (err) {
        console.error('❌ Codeforces API Error:', err);
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [username]);

  // ✅ Display nothing if not visible
  if (!codeforcesCard.display) return null;

  // ✅ Show loading indicator
  if (loading) {
    return (
      <div className="text-center text-indigo-400 py-10">
        🔄 Fetching Codeforces data...
      </div>
    );
  }

  // ✅ Show error if API fails
  if (error) {
    return (
      <p className="text-red-500 text-center py-6">
        ❌ Failed to load Codeforces data: {error.message}
      </p>
    );
  }

  if (!userInfo) return null;

  const rank = userInfo.rank?.toLowerCase();
  const colorClass = rankColors[rank] || 'bg-gray-400';

  return (
    <section className="bg-white dark:bg-[#1f1f2e] p-6 rounded-2xl shadow-2xl mb-12 transition-transform transform hover:scale-[1.01]">
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 text-center">
        🔥 Codeforces Profile
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={userInfo.avatar ? `https:${userInfo.avatar}` : '/default-avatar.png'}
          alt={`${userInfo.handle} avatar`}
          className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{userInfo.handle}</h3>
          <div className={`inline-block mt-2 px-3 py-1 text-sm font-semibold text-white rounded-full ${colorClass}`}>
            {userInfo.rank?.toUpperCase() || 'UNRATED'}
          </div>
          {userInfo.rating && (
            <p className="mt-1 text-green-400 font-medium">
              Rating: {userInfo.rating}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
          <p className="text-gray-400 text-sm">🔝 Max Rating</p>
          <p className="text-green-400 text-xl font-bold">{userInfo.maxRating || 'N/A'}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
          <p className="text-gray-400 text-sm">📈 Max Rank</p>
          <p className="text-purple-400 text-xl font-bold capitalize">{userInfo.maxRank || 'N/A'}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
          <p className="text-gray-400 text-sm">✅ Problems Solved</p>
          <p className="text-indigo-400 text-xl font-bold">{solvedCount}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow">
          <p className="text-gray-400 text-sm">🏁 Contests Participated</p>
          <p className="text-yellow-400 text-xl font-bold">{contestInfo.length}</p>
        </div>
        {contestInfo.length > 0 && (
          <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow sm:col-span-2">
            <p className="text-gray-400 text-sm">🕹 Last Contest</p>
            <p className="text-pink-400 text-xl font-bold">{contestInfo.at(-1)?.contestName}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CodeforcesCard;
