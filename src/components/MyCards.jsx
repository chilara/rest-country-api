import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const MyCards = ({ image, country, population, region, capital }) => {
  return (
    <Card className="myCards" variant="standard" disableUnderline>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="flag"
        style={{ width: 300, marginBottom: 20 }}
      />
      <CardContent style={{ height: 150 }}>
        <Typography variant="h6">
          <strong>{country}</strong>
        </Typography>
        <div style={{ marginTop: 20 }}>
          <Typography>
            <strong>Population:</strong> {population}
          </Typography>
          <Typography>
            <strong>Region:</strong> {region}
          </Typography>
          <Typography>
            <strong>Capital:</strong> {capital}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyCards;
