const fs = require("fs");
const https = require("https");

const GITHUB_TOKEN = "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";
const GITHUB_USERNAME = 'VanshVala23';

const ERR = {
  noUserName: "Github Username or Token is missing in environment variables.",
  requestFailed: "The request to GitHub didn't succeed."
};

if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
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
      pinnedItems(first: 6, types: [REPOSITORY]) {
        totalCount
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

  res.on("data", d => {
    responseData += d;
  });

  res.on("end", () => {
    if (res.statusCode === 200) {
      fs.writeFile("./public/profile.json", responseData, err => {
        if (err) return console.error("Error writing file:", err);
        console.log("Saved file to public/profile.json");
      });
    } else {
      console.error(`GitHub API Error. Status code: ${res.statusCode}`);
      console.error("Response:", responseData);
    }
  });
});

req.on("error", error => {
  console.error("Request Error:", error.message);
});

req.write(data);
req.end();
