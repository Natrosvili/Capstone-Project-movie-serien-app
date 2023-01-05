import SeriesSection from "../components/SeriesSection";
import {H1} from "./movies";

export default function Series() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Series</H1>
        <SeriesSection genre="Action" />
        <SeriesSection genre="Adventure" />
        <SeriesSection genre="Comedy" />
        <SeriesSection genre="Drama" />
      </section>
    </>
  );
}
