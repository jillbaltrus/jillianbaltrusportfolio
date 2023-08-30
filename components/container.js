import {useEffect, useState} from "react";
import {Box} from "@mui/material";

export const Container = ({
  children
}) => {
  const [isClientRendered, setIsClientRendered] = useState(false);

  useEffect(() => {
    setIsClientRendered(true);
  }, []);

  return (
    <Box
      sx={{
        visibility: 'hidden',
        transition: 'visibility 0s, opacity 1s ease-in',
        opacity: 0,
        '&.visible': {
          visibility: 'visible',
          opacity: 1,
        },
      }}
      className={isClientRendered ? 'visible' : null}
    >
      {children}
    </Box>
  )
}