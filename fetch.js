const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config(); // Loads environment variables from .env

// Get environment variables (GitHub Token and Username)
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "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";
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "VanshVala23";

// Error messages for easier debugging
const ERR = {
  noUserName: "GitHub Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed: "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  rateLimitError: "GitHub API rate limit exceeded. Try again after some time.",
  genericError: "An error occurred while fetching the data."
};

// Ensure that both the username and token are present
if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
  throw new Error(ERR.noUserName);
}

console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

// GraphQL query for GitHub profile data
const query = JSON.stringify({
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

// HTTP request options for GitHub GraphQL API
const requestOptions = {
  hostname: "api.github.com",
  path: "/graphql",
  port: 443,
  method: "POST",
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    "User-Agent": "Node"
  }
};

// Function to make the API request
const fetchDataFromGitHub = () => {
  return new Promise((resolve, reject) => {
    const req = https.request(requestOptions, (res) => {
      let responseData = "";

      console.log(`statusCode: ${res.statusCode}`);

      // Handle rate-limited or failed requests
      if (res.statusCode === 403) {
        reject(ERR.rateLimitError);
        return;
      } else if (res.statusCode !== 200) {
        reject(ERR.requestFailed);
        return;
      }

      res.on("data", (chunk) => {
        responseData += chunk;
      });

      res.on("end", () => {
        try {
          // Parse the JSON response and log the data for debugging
          const data = JSON.parse(responseData);
          if (data.errors) {
            reject(`GitHub API Error: ${data.errors[0].message}`);
            return;
          }

          console.log("Profile data fetched successfully");
          resolve(data);
        } catch (err) {
          reject(ERR.genericError);
        }
      });
    });

    req.on("error", (err) => {
      reject(`Request Error: ${err.message}`);
    });

    req.write(query); // Send the GraphQL query
    req.end();
  });
};

// Save the fetched data to a JSON file
const saveDataToFile = (data) => {
  fs.writeFile("./public/profile.json", JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log("Error saving file:", err);
    } else {
      console.log("Profile data saved to ./public/profile.json");
    }
  });
};

// Main function to handle fetching and saving the data
const main = async () => {
  try {
    const data = await fetchDataFromGitHub();
    saveDataToFile(data);
  } catch (error) {
    console.error(error); // Log errors to the console
  }
};

main();
