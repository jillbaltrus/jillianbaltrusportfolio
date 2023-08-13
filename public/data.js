export default [
  {
    id: 2,
    title: "Turtle Hub",
    image: "images/turtlehub1.png",
    description:
      "Turtle Hub is a React application I'm building on a 3-person team to manage our sorority's calendar. This application will be used to create, discover and RSVP to events. In addition, each member will have their own account and public profile in order to help manage attendance. In addition to the React application, we also built a Node.js server to handle HTTP requests that operate on event and user data, such as creating or deleting an event, RSVPing or un-RSVPing from an event, registering for a new account, or updating a profile. We're using a MongoDB NoSQL database with the Mongoose ODM to store and manage our data. The Node server acts as the middleman between our database and React application's services, communicating through HTTP requests. In addition, we're integrating the Google Maps API into the application to plot event locations on an interactive map. This project has been a lot of fun and allowed me to work on all areas on the tech stack, which I really enjoy! We're aiming to wrap this project up by Fall 2023.",
    year: 2023,
    otherImages: ["images/turtlehub2.png", "images/turtlehub3.png"],
    skills: [
      "JavaScript",
      "ReactJS",
      "RESTful API",
      "NodeJS",
      "NoSQL",
      "MongoDB",
      "Express",
      "Redux",
      "Mongoose",
    ],
  },
  {
    id: 1,
    title: "Artist Mood Ring",
    image: "images/artistmoodring.png",
    description:
      "Artist Mood Ring is a fun application for users to search any artist on Spotify and see an analysis of their top tracks' characteristics. I built this app using plain JavaScript, Bootstrap and Express. It utilizes Spotify's API to search artists by name, retrieve their top 10 tracks, and retrieve the qualitative scores for each of those songs. It then aggregates them into a single score for each metric, to be displayed on the UI.",
    year: 2022,
    otherImages: [],
    skills: ["JavaScript", "Express", "RESTful API", "Bootstrap"],
  },
  {
    id: 3,
    title: "Attack on Hogwarts",
    image: "images/attack-on-hogwarts1.png",
    description:
      "Attack on Hogwarts is a Harry Potter themed first-person shooter video game I made on a 4-person team using the Unity3D game engine. The game consists of 3 distinct levels, each with their own distinct goal and setting from the Harry Potter universe. We also included some interactions with beloved characters, including Dumbledore, Hagrid and Voldemort himself. We developed 25 C# scripts to control game logic and mechanics, including finite state machine behavior and transitions for NPCs. We also incorporated background music, sound effects, visual effects, and both custom and public assets and models to create an immersive and engaging gameplay experience. You can play the game at https://msuzuki1.itch.io/finalproject.",
    year: 2022,
    otherImages: ["images/attack-on-hogwarts2.png"],
    skills: ["C#", "Unity3D"],
  },
  {
    id: 7,
    title: "Bored in Boston",
    image: "images/boredinboston1.png",
    description:
      "Bored in Boston is an interactive terminal program used to generate a business recommendation in the Boston area based on Yelp data and user input. The first step in developing this project was writing a Python web scraper script to generate CSV files of Yelp data using Selenium. The Java program translates the CSV file data into business objects. The program runs using a model and controller, which the user interacts with via the command line. By responding to prompts, the user filters down businesses and eventually receives a personalized recommendation.",
    year: 2021,
    otherImages: ["images/boredinboston2.png"],
    skills: ["Java", "Python", "Selenium"],
  },
  {
    id: 4,
    title: "Everything Celtics",
    image: "images/everythingceltics1.png",
    description:
      "Everything Celtics is an app developed with React Native and JavaScript for retrieving and displaying Celtics data, including team rosters, games schedule and outcomes, and performance statistics. The app uses a public NBA API to fetch data using asynchornous loading techniques. The app has a thematic and clean UI with a smart navigation system.",
    year: 2023,
    otherImages: ["images/everythingceltics2.png", "images/everything-celtics3.png"],
    skills: ["JavaScript", "React Native", "RESTful API", "Expo"],
  },
  {
    id: 6,
    title: "Tuiter UI",
    image: "images/tuiter-ui2.png",
    description:
      "This is a simple UI project I developed while learning React and improving my UI design skills. In this project, I was attempting to emulate Twitter (get it, Tuiter?), but only visually. I developed Home and Explore pages with dummy content. In addition, users are able to post a Tuit from the Explore page (new Tuits are not persisted between sessions). In addition, users can like or dislike posted Tuits and navigate between pages via the sidebar.",
    year: 2023,
    otherImages: ["images/tuiter-screenshot.png"],
    skills: ["React", "CSS", "Bootstrap"],
  },
  {
    id: 5,
    title: "Marble Solitaire",
    image: "images/marblesolitaire.png",
    description:
      "Marble Solitaire is a command line single-player game built with Java, based on the real-world board game Marble Solitaire. Users can play with completeley customizable board configurations. The program uses a model and controller to handle game logic and user input.",
    year: 2020,
    otherImages: [],
    skills: ["Java"],
  },
];
