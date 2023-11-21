import { Divider, Grid, Typography } from "@mui/joy";
import PropTypes from "prop-types";
const index = (props) => {
  let { main, value, label, showMore } = props;
  let flattenArrayValue = _.flattenDeep(value).map((e) =>
    e.replace(/\n/g, " ")
  );
  if (main) {
    return (
      <Typography {...props} gutterBottom level="h3" sx={{ pb: 2 }}>
        {value.join(", ")}
      </Typography>
    );
  }
  return (
    <>
      <Divider style={{ width: "auto" }} />
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          py: 2,
        }}
      >
        <Grid xs={4} sx={{ alignSelf: { xs: "start", md: "center" } }}>
          <Typography
            variant="plain"
            color="primary"
            component="div"
            fontSize="lg"
            level="p"
            fontWeight={700}
          >
            {label}
          </Typography>
        </Grid>
        <Grid xs sx={{ alignSelf: { xs: "start", md: "center" } }}>
          {flattenArrayValue.map((v, i) => (
            <Typography
              key={i}
              level="p"
              component="div"
              sx={{ display: "block" }}
            >
              {v}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

index.propTypes = {
  showMore: PropTypes.bool,
};

export default index;
