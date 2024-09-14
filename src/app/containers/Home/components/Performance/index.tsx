import { assetPaths } from "../../../../common/constants";
import {
  Container,
  Content,
  StyledTitle,
  DataContainer,
  ChartAndMarketCapContainer,
  ChartImage,
  ChartCardContainer,
  CardsContainer,
  SingleCardContainer,
  DisclaimerContainer,
  StyledSpan,
} from "./Perfomance.styles";
import { PerformanceCard } from "./components/PerfomanceCard";
import {
  totalMarketCapData,
  currentPriceData,
  transactionVolumeData,
  transactionCountData,
} from "./constant";

export function Performance() {
  return (
    <Container>
      <Content>
        <StyledTitle>Quarry Market Performance</StyledTitle>
        <DataContainer>
          <ChartAndMarketCapContainer>
            <ChartImage src={assetPaths.CHART} />
            <ChartCardContainer>
              <PerformanceCard data={totalMarketCapData} />
            </ChartCardContainer>
          </ChartAndMarketCapContainer>
        </DataContainer>
        <CardsContainer>
          {[currentPriceData, transactionVolumeData, transactionCountData].map(
            (data, index) => (
              <SingleCardContainer key={index++}>
                <PerformanceCard data={data} />
              </SingleCardContainer>
            )
          )}
        </CardsContainer>
        <DisclaimerContainer>
          <StyledSpan>
            Numbers represented by this figure are for display purposes only.
            They do not represent actual data.
          </StyledSpan>
        </DisclaimerContainer>
      </Content>
    </Container>
  );
}
