import data from "../api/tmdb.json";
import MoviePageSection from "../../components/MoviePageSection";

export default function Womanking() {
  return (
    <MoviePageSection
      trailerUrl={data.movie[1].trailer}
      img={data.movie[1].image}
      title={data.movie[1].title}
      year={data.movie[1].year}
      plot={data.movie[1].plot}
      country={data.movie[1].country}
      genre={data.movie[1].genre}
      release={data.movie[1].release}
      director={data.movie[1].director}
      production={data.movie[1].production}
      buy1={data.movie[1].providerBuy[0]}
      buy2={data.movie[1].providerBuy[1]}
      buy3={data.movie[1].providerBuy[2]}
      buy4={data.movie[1].providerBuy[3]}
      buy5={""}
      buyIcon1={"simple-icons:appletv"}
      buyIcon2={"carbon:logo-youtube"}
      buyIcon3={"ri:amazon-fill"}
      buyIcon4={"mdi:google-play"}
      buyIcon5={""}
      stream1={data.movie[1].providerRent[0]}
      stream2={data.movie[1].providerRent[1]}
      stream3={data.movie[1].providerRent[2]}
      stream4={data.movie[1].providerRent[3]}
      stream5={""}
      streamIcon1={"ri:amazon-fill"}
      streamIcon2={"mdi:google-play"}
      streamIcon3={"carbon:logo-youtube"}
      streamIcon4={"simple-icons:appletv"}
      streamIcon5={""}
    />
  );
}
