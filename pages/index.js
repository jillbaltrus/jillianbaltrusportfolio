import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import { Avatar, Box, ImageList, Typography, useMediaQuery } from "@mui/material";
import Head from "next/head";
import PortfolioCard from "../components/portfolio-card";
import data from "../public/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const mdAndUp = useMediaQuery('(min-width:768px)');

  return (
    <div>
      <Head>
        <title>Jillian Baltrus Portfolio</title>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Lora&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.gradientBox}>
          <Box
            display="flex"
            flexDirection={mdAndUp ? "row" : "column"}
            alignItems="center"
            justifyContent="center"
            paddingTop={3}
          >
            <Avatar
              sx={{ width: 150, 
                height: 150, 
                border: "3px solid white",
                marginLeft: 2
              }}
              src={"/images/avatar.png"}
              alt="Jillian"
            />
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems="center"
              justifyContent="center"
            >
              <h1 className={styles.title}>Hi, I'm Jillian.</h1>
              <h3 className={styles.bio}>
                I'm a software engineer earning my B.S. in Computer
                Science from Northeastern University, expected August 2023. This
                portfolio is a collection of my significant technical projects
                from the past few years. Please take a look, and reach out if
                you would like to connect!
              </h3>
              <Box
                display="flex"
                flexDirection={"row"}
                sx={{ marginBottom: 2 }}
              >
                <Box sx={{ flexDirection: "column", marginRight: 3 }}>
                  <a href="mailto:baltrus.j@northeastern.edu">
                    <Box display="flex" flexDirection={"row"}>
                      <EmailIcon sx={{ fill: "#FFF", width: "40px" }} />
                      <Typography className={styles.whitePlayfair} sx={{ fontFamily: 'Playfair Display' }}>
                        baltrus.j@northeastern.edu
                      </Typography>
                    </Box>
                  </a>
                  <Box display="flex" flexDirection={"row"}>
                    <PhoneIcon sx={{ fill: "#FFF", width: "40px" }} />
                    <Typography className={styles.whiteDigits} sx={{ marginRight: 3, fontFamily: 'Lora' }}>
                      +1 617-462-9266
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ flexDirection: "column" }}>
                  <a href="https://github.com/jillbaltrus">
                    <Box display="flex" flexDirection={"row"}>
                      <GitHubIcon sx={{ fill: "#FFF", width: "40px" }} />
                      <Typography className={styles.whitePlayfair} sx={{ fontFamily: 'Playfair Display' }}>
                        jillbaltrus
                      </Typography>
                    </Box>
                  </a>
                  <a href="https://www.linkedin.com/in/jillian-baltrus-51970a207/">
                    <Box display="flex" flexDirection={"row"}>
                      <LinkedInIcon sx={{ fill: "#FFF", width: "40px" }} />
                      <Typography
                        className={styles.whitePlayfair}
                        sx={{ fontFamily: 'Playfair Display' }}
                      >
                        Jillian Baltrus
                      </Typography>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
        <div className={styles.container}>
          <ImageList variant="masonry" cols={mdAndUp ? 2 : 1} gap={36}>
            {data.map((item) => (
              <PortfolioCard key={item.id} cardData={item} />
            ))}
          </ImageList>
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: serif, sans-serif, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue;
          background: #faf9f6;
        }
        * {
          box-sizing: border-box;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
