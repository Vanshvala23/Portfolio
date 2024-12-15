import React, { useState, useEffect, lazy, Suspense } from "react";
import { openSource } from "../../portfolio";
import Loading from "../loading/Loading";
import Contact from "../contact/Contact";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

export default function Profile() {
  const [prof, setRepo] = useState([]);

  function setProfileFunction(array) {
    setRepo(array);
  }

  useEffect(() => {
    if (openSource.showGithubProfile === "true") {
      const getProfileData = () => {
        fetch("/profile.json")
          .then((result) => {
            if (result.ok) {
              return result.json();
            }
          })
          .then((response) => {
            setProfileFunction(response.data.user);
          })
          .catch((error) => {
            console.error(
              `${error} (because of this error GitHub contact section could not be displayed)`
            );
            setProfileFunction("Error");
          });
      };
      getProfileData();
    }
  }, []);

  return (
    <>
    <Suspense fallback={renderLoader()}>
      <GithubProfileCard prof={prof} key={prof.id} />
    </Suspense>
    <Contact />
    </>
    
  );
}
