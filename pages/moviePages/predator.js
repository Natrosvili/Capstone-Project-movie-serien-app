import data from "../api/tmdb.json";
import MoviePageSection from "../../components/MoviePageSection";

export default function Predator() {
  return (
    <MoviePageSection
      trailerUrl={data.movie[0].trailer}
      img={data.movie[0].image}
      title={data.movie[0].title}
      year={data.movie[0].year}
      plot={data.movie[0].plot}
      country={data.movie[0].country}
      genre={data.movie[0].genre}
      release={data.movie[0].release}
      director={data.movie[0].director}
      production={data.movie[0].production}
      buy1={""}
      buy2={""}
      buy3={""}
      buy4={""}
      buy5={""}
      buyIcon1={""}
      buyIcon2={""}
      buyIcon3={""}
      buyIcon4={""}
      buyIcon5={""}
      stream1={data.movie[0].providerRent[0]}
      stream2={""}
      stream3={""}
      stream4={""}
      stream5={""}
      streamIcon1={"tabler:brand-disney"}
      streamIcon2={""}
      streamIcon3={""}
      streamIcon4={""}
      streamIcon5={""}
    />
  );
}
