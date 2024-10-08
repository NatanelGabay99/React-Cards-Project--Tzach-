import { Typography } from "@mui/material";

export default function LoopComponent() {
  let arr = ["one", "two", "three"];

  return (
    <div>
      {arr.map((value) => (
        <Typography variant="body2" key={value}>
          {value}
        </Typography>
      ))}
    </div>
  );
}