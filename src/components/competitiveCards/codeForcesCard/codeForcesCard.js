import React from "react";

const CodeforcesCard = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <a
        href="https://codeforces.com/profile/VanshVala"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://codeforces-readme-stats.vercel.app/api/card?username=VanshVala&theme=codeSTACKr&disable_animations=false&show_icons=true&force_username=true"
          alt="Codeforces Profile"
          style={{
            width: "100%",
            maxWidth: "750px",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
          }}
        />
      </a>
    </div>
  );
};

export default CodeforcesCard;
