/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// import { RiFirebaseFill } from "react-icons/ri";
// import { FaGithub } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { SiKotlin } from "react-icons/si";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vansh Vala",
  title: "Hi all, I'm Vansh",
  subTitle: emoji(
    "A passionate Full Stack Web Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mbHbatD_XjrfSkqaH09V1Temw-IwZb3Y/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/VanshVala23",
  linkedin: "https://www.linkedin.com/in/vansh-vala-ba2ba3249/",
  gmail: "vanshvala01@gmail.com",
  instagram: "https://instagram.com/vansh_vala4104",
  discord: "https://discord.gg/df9Y7XfgzP",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Discord Chat and Music bot using JavaScript"),
    emoji("🔥 Event Handler of LeetCode with my buddies."),
  ],

  softwareSkills: [
    {
      skillName: "Tailwindcss",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Discord",
      fontAwesomeClassname: "fab fa-discord"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname:"fas fa-fire"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Parul University",
      logo: require("./assets/images/Parul-Logo.jpeg"),
      subHeader: "Currently pursuing Bachelors in Computer Science and Engineering",
      duration: "June 2022 - April 2026",
      desc: "Participated in the Hackathon and other Events.",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cyber-Security",
      progressPercentage: "45%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack developer",
      company: "MrLoggage",
      companylogo: require('./assets/images/Mr Loggage[1].png'),
      date: "June 2024 – Aug 2025",
      desc: "Web Developer and Server side developer"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Infosys Certificate of DBMS",
      subtitle:
        "Accompalished the DBMS course from Infosys and I am proud of myself.",
      image: require("./assets/images/R.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "DBMS Certificate",
          url: "https://www.linkedin.com/posts/vansh-vala_certificate-activity-7148314441107894272-sxXC?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title:'Award Letter from MrLoggage',
      subtitle: "Award Letter from MrLoggage",
      image: require('./assets/images/Mr Loggage[1].png'),
      imageAlt: "MrLoggage",
      footerLink:[
        {
          name: "Award Letter",
          url: "https://www.linkedin.com/posts/vansh-vala_internship-mrloggage-careergrowth-activity-7212136237246083074-9dll?utm_source=share&utm_medium=member_desktop"
        },
      ]
    },
    {
      title:"Vadodara Hackathon 5.0",
      subtitle: "Participated in Vadodara Hackathon 5.0 and selected for Institute level of SIH 2024",
      image: require("./assets/images/Hackathon.png"),
      imageAlt: "Vadodara Hackathon 5.0",
      footerLink:[
        {
          name: "Participation Certificate",
          url: "https://www.linkedin.com/posts/vansh-vala_certificate-of-participation-activity-7247129731400163330-k6Cs?utm_source=share&utm_medium=member_desktop",
        }
      ]
    },
    {
      title:'NEP Debate Competition',
      subtitle: "Participated in NEP Debate Competition and won the 2nd position.",
      image:require('./assets/images/Parul-Logo.jpeg'),
      imageAlt: "NEP Debate Competition",
      footerLink:[
        {
          name: "Certificate",
          url: "https://www.linkedin.com/posts/vansh-vala_debate-completition-certificate-activity-7255483180948828161-OuY9?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    {
      title:'MERN Stack Certificate',
      subtitle: "Completed the MERN Stack course from SkillUp and I am proud of myself.",
      image: require("./assets/images/mern.jpeg"),
      imageAlt: "MERN Stack Certificate",
      footerLink:[
        {
          name: "Certification",
          url: "https://www.linkedin.com/posts/vansh-vala_certified-full-stack-mern-developer-activity-7254144780895457280-MoJ5?utm_source=share&utm_medium=member_desktop"
        }
      ]
    },
    // {
    //   title: "Discord Developer",
    //   subtitle:
    //     "Developed a Discord chat bot that can talk with him and added an admin system.",
    //   image: require("./assets/images/Discord.png"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Discord Developer project",
    //       url: "https://www.linkedin.com/posts/vansh-vala-ba2ba3249_explainations-activity-7152620765664706560-j4Cp?utm_source=share&utm_medium=member_desktop"
    //     }
    //   ]
    // },

    // {
    //   title: "Discord Music app Developer ",
    //   subtitle: "Completed a Music developer from Discord",
    //   image: require("./assets/images/Discord.png"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://www.linkedin.com/posts/vansh-vala-ba2ba3249_explainations-activity-7152620765664706560-j4Cp?utm_source=share&utm_medium=member_desktop"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9825021852",
  email_address: "vanshvala01@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "@vala_vansh", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails,
  isHireable,
  contactInfo,
};
