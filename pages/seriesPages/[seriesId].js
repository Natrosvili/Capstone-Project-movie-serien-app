import data from "../api/tmdb.json";
import MoviesSeriesPageSection from "../../components/MoviesSeriesPageSection";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";

export default function SeriesPage() {
  const router = useRouter();
  const {seriesId} = router.query;
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setReload(true);
    }
  }, [router.isReady]);

  return (
    <>
      {reload && (
        <MoviesSeriesPageSection
          data={data.series[seriesId - 1]}
          altImage="series' image"
          text="Watch The Latest Season"
        />
      )}
    </>
  );
}
