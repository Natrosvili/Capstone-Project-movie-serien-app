import Link from "next/link";
import {StyledSection, H2, StyledArticle, Photo} from "./MoviesSection";

export default function SeriesSection({
  genre,
  imgSrc1,
  imgSrc2,
  href1,
  href2,
  name1,
  name2,
  year1,
  year2,
}) {
  return (
    <>
      <StyledSection>
        <H2>{genre}</H2>
        <hr />
        <StyledArticle>
          <div>
            <Link className="link" href={href1}>
              <Photo
                src={imgSrc1}
                width={100}
                height={100}
                alt="series's image"
              />
            </Link>
            <Link className="link" href={href1}>
              <h3>{name1}</h3>
            </Link>
            <span>{year1}</span>
          </div>
          <div>
            <Link className="link" href={href2}>
              <Photo
                src={imgSrc2}
                width={100}
                height={100}
                alt="series's image"
              />
            </Link>
            <Link className="link" href={href2}>
              <h3>{name2}</h3>
            </Link>
            <span>{year2}</span>
          </div>
        </StyledArticle>
        <hr />
      </StyledSection>
    </>
  );
}
