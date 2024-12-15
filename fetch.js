const fs = require("fs");
const https = require("https");

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "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";  // If you are using a token, provide it here, or leave it empty if not needed.
const GITHUB_USERNAME = process.env.GITHUB_USERNAME||"Vanshvala23";  // Only the username, not the full URL
const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub username in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (!GITHUB_USERNAME) {
  throw new Error(ERR.noUserName);
}

const data = JSON.stringify({
  query: `
  {
    user(login: "${GITHUB_USERNAME}") { 
      name
      bio
      avatarUrl
      location
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  }`
});


const default_options = {
  hostname: "api.github.com",
  path: "/graphql",
  port: 443,
  method: "POST",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "Node"
  }
};

const req = https.request(default_options, res => {
  let responseData = "";

  console.log(`statusCode: ${res.statusCode}`);
  if (res.statusCode !== 200) {
    throw new Error(ERR.requestFailed);
  }

  res.on("data", d => {
    responseData += d;
  });

  res.on("end", () => {
    fs.writeFile("./public/profile.json", responseData, function (err) {
      if (err) return console.log(err);
      console.log("saved file to public/profile.json");
    });
  });
});

req.on("error", error => {
  throw error;
});

req.write(data);
req.end();
