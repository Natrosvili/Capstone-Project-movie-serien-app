import SeriesSection from "../components/SeriesSection";
import neueFischePhoto from "../public/images/other/neuefische.jpeg";
import {H1} from "./movies";

export default function Series() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Series</H1>
        <SeriesSection
          genre={"Action"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <SeriesSection
          genre={"Adventure"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <SeriesSection
          genre={"Comedy"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <SeriesSection
          genre={"Drama"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
      </section>
    </>
  );
}
