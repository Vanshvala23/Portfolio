const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/codeforces/:username', async (req, res) => {
  const username = req.params.username;

  try {
    const [info, status, contests] = await Promise.all([
      axios.get(`https://codeforces.com/api/user.info?handles=${username}`),
      axios.get(`https://codeforces.com/api/user.status?handle=${username}`),
      axios.get(`https://codeforces.com/api/user.rating?handle=${username}`)
    ]);

    const userInfo = info.data.result[0];

    const solvedSet = new Set();
    status.data.result.forEach(sub => {
      if (sub.verdict === 'OK') {
        solvedSet.add(`${sub.problem.contestId}-${sub.problem.index}`);
      }
    });

    res.json({
      userInfo,
      solvedCount: solvedSet.size,
      contestInfo: contests.data.result
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from Codeforces', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Codeforces proxy server running on http://localhost:${PORT}`);
});
