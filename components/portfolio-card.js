import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";

export default function PortfolioCard({ cardData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const allImages = [cardData.image, ...cardData.otherImages];

  return (
    <ImageListItem key={cardData.id}>
      <img
        src={`${cardData.image}`}
        alt={cardData.title}
        onClick={handleModalOpen}
        loading="lazy"
        style={{
          opacity: hover ? 0.7 : 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ImageListItemBar
        sx={{
          height: "65px",
          "& .MuiImageListItemBar-title": {
            fontSize: "22px",
            fontFamily: "Playfair Display",
          },
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
        title={cardData.title}
      />

      <Dialog
        width={700}
        open={modalOpen}
        onClose={handleModalClose}
        scroll={"paper"}
      >
        <DialogTitle
          style={{
            paddingBottom: 0,
            marginBottom: 0,
            fontFamily: "Playfair Display",
          }}
          variant="h4"
        >
          {cardData.title}
        </DialogTitle>
        <DialogTitle
          style={{
            paddingTop: 0,
            marginTop: 0,
            paddingBottom: 4,
            marginInlineStart: 5,
            fontFamily: "Lora",
          }}
          variant="h6"
        >
          {cardData.year}
        </DialogTitle>

        <Divider sx={{ borderBottomWidth: 3 }} />

        <DialogContent sx={{ paddingTop: 1, paddingLeft: 0, paddingRight: 0 }}>
          <DialogContentText
            sx={{ paddingLeft: 3, paddingRight: 3, fontFamily: "Lora" }}
          >
            <b>Skills: </b>
            {cardData.skills.join(", ")}
          </DialogContentText>

          <Divider
            sx={{ borderBottomWidth: 3, marginTop: 1, marginBottom: 1 }}
          />

          <DialogContentText
            sx={{ paddingLeft: 3, paddingRight: 3, fontFamily: "Lora" }}
          >
            {cardData.description}
          </DialogContentText>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            {allImages.map((image) => (
              <img
                key={image}
                src={image}
                alt={cardData.title}
                style={imageStyle}
                width={550}
              />
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </ImageListItem>
  );
}

const imageStyle = {
  marginBottom: 20,
};
