import data from "../api/tmdb.json";
import SeriesPageSection from "../../components/SeriesPageSection";
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
    <>{reload && <SeriesPageSection data={data.series[seriesId - 1]} />}</>
  );
}
