import { Typography } from "@mui/material";
const index = (props) => {
  let { main, label, value, maxLength, recordLink } = props;
  let string = value.join(", ");
  if (maxLength && string.length > maxLength) {
    string = string.substring(0, maxLength) + " ...";
  }
  if (main) {
    return (
      <Typography
        onClick={(_) => (window.location = recordLink)}
        {...props}
        component="a"
        variant="h4"
        href={recordLink}
        sx={{
          color: "primary.main",
          fontWeight: "bold",
          cursor: "pointer",
          marginBottom: "5px",
          "&:hover": {
            textDecoration: "underline",
            color: "primary.dark",
          },
        }}
      >
        {value.map((e, i) => <span key={e}> {i !== 0 && <span>|</span>} {e} </span>)}
      </Typography>
    );
  }
console.log(value)
  return (
    <Typography variant="subtitle1" color="text.primary" component="div">
      <strong>{label}</strong>:  {value.map((e, i) => <span key={e}> {i !== 0 && <span style={{color:"#DA1A32"}}>|</span>} {e} </span>)}
    </Typography>
  );
};

index.propTypes = {};

export default index;
