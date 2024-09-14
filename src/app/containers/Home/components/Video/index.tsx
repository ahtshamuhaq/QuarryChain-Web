import { Container } from "./Video.styles";
import ReactPlayer from "react-player";

export function Video() {
  return (
    <Container>
      <ReactPlayer
        width={1000}
        height={700}
        url={
          "https://www.youtube.com/watch?v=71rlDJuSipI"
        }
      />
    </Container>
  );
}
