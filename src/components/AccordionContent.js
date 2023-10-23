import React from "react";
import styled from "styled-components";

const AccStyle = styled.div`
  & .acc-description {
    color: ${(props) => props.theme.warmGrey950};
    font-size: 20px;
    font-family: ${(props) => props.theme.regularFontFamily};
    letter-spacing: -0.59px;
    line-height: 25.2px;
  }

  & .acc-values {
    font-family: ${(props) => props.theme.mediumFontFamily};
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
    font-size: 18px;
  }
`;
function AccordionContent(props) {
  const { points, description } = props.option;
  return (
    <AccStyle>
      <p className="acc-description">{description}</p>
      <div className="acc-values">
        {points.map((point) => (
          <div>{point}</div>
        ))}
      </div>
    </AccStyle>
  );
}

export default AccordionContent;
