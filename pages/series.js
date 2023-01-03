import SeriesSection from "../components/SeriesSection";
import {H1} from "./movies";
import data from "./api/tmdb.json";

export default function Series() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Series</H1>
        <SeriesSection genre="Action" data={data} />
        <SeriesSection genre="Adventure" data={data} />
        <SeriesSection genre="Comedy" data={data} />
        <SeriesSection genre="Drama" data={data} />
      </section>
    </>
  );
}
