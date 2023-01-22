import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MyCards = ({ image, country, population, region, capital }) => {
  return (
    <Card className="myCards" variant="standard" disableUnderline>
      <CardMedia sx={{ height: 300 }} image={image} title="flag" />
      <CardContent>
        <Typography variant="h1" component="div">
          {country}
        </Typography>
        <Typography>{population}</Typography>
        <Typography>{region}</Typography>
        <Typography>{capital}</Typography>
      </CardContent>
    </Card>
  );
};

export default MyCards;
