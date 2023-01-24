import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const MyPagination = () => {
  // const [page, setPage] = React.useState(1);
  // const handleChange = (event, value) => {
  //   setPage(value);
  // };

  // return (
  //   <Stack spacing={2}>
  //     <Typography>Page: {page}</Typography>
  //     <Pagination count={10} page={page} onChange={handleChange} />
  //   </Stack>
  // );

  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
    </Stack>
  );
};

export default MyPagination;
