import {BackgroundImage} from "../pages/main";
import curtains from "../public/images/other/curtains.jpg";
import {StyledIcon} from "./ShareSection";
import SocialMediaSection1 from "./SocialMediaSection1";
import {
  MainSection,
  FlexContainer,
  StyledSection,
  InfoSection,
  Container1,
  Container2,
  Container3,
  ImageMovie,
  StreamingSection,
  H2,
  GridContainer,
  StyledLink,
} from "./MoviePageSection";

export default function SeriesPageSection({data}) {
  function getIcon(provider) {
    if (provider.includes("apple")) {
      return "simple-icons:appletv";
    } else if (provider.includes("amazon")) {
      return "ri:amazon-fill";
    } else if (provider.includes("youtube")) {
      return "carbon:logo-youtube";
    } else if (provider.includes("google")) {
      return "mdi:google-play";
    } else if (provider.includes("netflix")) {
      return "mdi:netflix";
    } else if (provider.includes("rakuten")) {
      return "simple-icons:rakuten";
    } else if (provider.includes("sky")) {
      return "simple-icons:sky";
    } else if (provider.includes("disneyplus")) {
      return "tabler:brand-disney";
    } else {
      return "";
    }
  }

  return (
    <>
      <MainSection>
        <div>
          <BackgroundImage primary src={curtains} alt="curtains" />
          <StyledSection>
            <FlexContainer>
              <iframe src={data?.trailer} title="video"></iframe>
            </FlexContainer>
            <SocialMediaSection1 />
          </StyledSection>
        </div>
        <InfoSection>
          <Container1>
            <ImageMovie src={data?.image} alt="movie's Image" />
          </Container1>
          <Container2>
            <h1>
              {data?.title} ({data?.year})
            </h1>
            <p>{data?.plot}</p>
          </Container2>
          <Container3>
            <table>
              <tbody>
                <tr>
                  <th>Country:</th>
                  <td>{data?.country}</td>
                </tr>
                <tr>
                  <th>Genre:</th>
                  <td>{data?.genre}</td>
                </tr>
                <tr>
                  <th>Release:</th>
                  <td>{data?.release}</td>
                </tr>
                <tr>
                  <th>Director:</th>
                  <td>{data?.director}</td>
                </tr>
                <tr>
                  <th>Production:</th>
                  <td>{data?.production}</td>
                </tr>
              </tbody>
            </table>
          </Container3>
        </InfoSection>
        <StreamingSection>
          <H2>Watch The Latest Season</H2>
          <section>
            <GridContainer>
              <h3>Buy</h3>
              {data?.providerBuy?.map((link, index) => {
                return (
                  <StyledLink key={index} href={link}>
                    <StyledIcon primary icon={getIcon(link)} width="50" />
                  </StyledLink>
                );
              })}
            </GridContainer>
            <GridContainer>
              <h3>Stream</h3>
              {data?.providerRent?.map((link, index) => {
                return (
                  <StyledLink key={index} href={link}>
                    <StyledIcon primary icon={getIcon(link)} width="50" />
                  </StyledLink>
                );
              })}
            </GridContainer>
          </section>
        </StreamingSection>
      </MainSection>
    </>
  );
}
