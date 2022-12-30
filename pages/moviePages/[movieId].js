import data from "../api/tmdb.json";
import MoviePageSection from "../../components/MoviePageSection";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";

export default function MoviePage() {
  const router = useRouter();
  const {movieId} = router.query;
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setReload(true);
    }
  }, [router.isReady]);

  return <>{reload && <MoviePageSection data={data.movie[movieId - 1]} />}</>;
}
