import { ContributionWeek, fetchContributions } from "../../store/github";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";

import { Body2 } from "../../components/typography/body2";
import { H4 } from "../../components/typography/h4";
import { SimpleLoading } from "../../components/loading/simpleLoading";
import styled from "styled-components";
import { theme } from "../../theming/defaultTheme";

const MARGIN = 1;
const WEEKS_COUNT = 53;
const LABEL_WIDTH = 20;
const days = ["", "", "Mon", "", "Wed", "", "Fri", ""];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: auto;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelWrapper = styled.div<{ $width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $width }) => $width}px;
  margin: ${MARGIN}px;
  margin-left: 0;
`;

const MonthLabelWrapper = styled(LabelWrapper)`
  width: ${({ $width }) => $width}px;
  overflow: visible;
`;

const Square = styled.div<{ $color: string; $width: number }>`
  position: relative;
  height: ${({ $width }) => $width}px;
  width: ${({ $width }) => $width}px;
  margin: ${MARGIN}px;
  background-color: ${({ $color }) => $color};
  & .tooltip {
    visibility: hidden;
    background-color: ${theme.colors.paperContrast};
    color: ${theme.colors.paper};
    text-align: center;
    padding: 5px;
    border-radius: 6px;
    position: absolute;
    z-index: 2;
    bottom: 100%;
    left: 50%;
    width: 64px;
    margin-left: -37px;
    &:after {
      content: " ";
      position: absolute;
      top: 100%; /* At the bottom of the tooltip */
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: black transparent transparent transparent;
    }
  }
  &:hover .tooltip {
    visibility: visible;
  }
`;

interface GithubContributionsProps {}

export const GithubContributions: React.FC<GithubContributionsProps> = ({}) => {
  const contributions = useAppSelector((state) => state.github);
  const dispatch = useAppDispatch();

  const [width, setWidth] = useState(
    document.getElementById("githubContainer")?.offsetWidth ?? 375
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(document.getElementById("githubContainer")?.offsetWidth ?? 375);
    };
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (!contributions.fetching && !contributions.contributions) {
      dispatch(fetchContributions());
    }
  }, []);

  const getSquareWidth = (width: number) => {
    return (width - LABEL_WIDTH) / WEEKS_COUNT - MARGIN * 2;
  };

  let mostRecentMonth: number | null = null;

  const renderWeek = (week: ContributionWeek) => {
    let printMonth = false;
    const month = new Date(week.firstDay).getMonth();
    if (mostRecentMonth !== month) {
      printMonth = true;
      mostRecentMonth = month;
    }
    return (
      <Column key={week.firstDay}>
        <MonthLabelWrapper $width={getSquareWidth(width)}>
          {printMonth && <Body2>{months[month]}</Body2>}
        </MonthLabelWrapper>
        {week.contributionDays.map((day) => (
          <Square
            $width={getSquareWidth(width)}
            $color={day.color}
            key={day.date}
          >
            <Body2 className="tooltip">{`${day.date} ${day.contributionCount}`}</Body2>
          </Square>
        ))}
      </Column>
    );
  };

  return (
    <ContainerStyles id="githubContainer">
      {contributions.fetching && <SimpleLoading size={50} />}
      {contributions.contributions?.user.contributionsCollection
        .contributionCalendar.totalContributions && (
        <H4>
          {`${contributions.contributions?.user.contributionsCollection.contributionCalendar.totalContributions} contributions in the last year`}
        </H4>
      )}
      {contributions.contributions?.user?.contributionsCollection
        ?.contributionCalendar?.weeks && (
        <Row>
          <Column key={"daysOfWeek"}>
            {days.map((day) => (
              <LabelWrapper $width={getSquareWidth(width)}>
                <Body2>{day}</Body2>
              </LabelWrapper>
            ))}
          </Column>
          {contributions.contributions?.user?.contributionsCollection?.contributionCalendar?.weeks?.map(
            (week) => renderWeek(week)
          )}
        </Row>
      )}
    </ContainerStyles>
  );
};
