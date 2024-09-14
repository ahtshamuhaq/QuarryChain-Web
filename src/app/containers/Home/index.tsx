import { Ecosystem } from "./components/Ecosystem";
import { Introduction } from "./components/Introduction";
import { Performance } from "./components/Performance";
import { Roadmap } from './components/Roadmap';
import { Summary } from "./components/Summary";
import { Video } from "./components/Video";

export function Home() {
  return (
    <>  
      <Introduction />
      <Performance />
      <Video />
      <Ecosystem />
      <Summary />
      <Roadmap />
    </>
  );
}
