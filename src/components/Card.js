import React from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  width: 444px;
  height: 320px;
  border-radius: 28px;
  transform-origin: top center;
  color: white;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 0px rgba(3, 4, 7, 0.08), 0px 2px 5px 0px rgba(3, 4, 7, 0.08), 0px 9px 9px 0px rgba(3, 4, 7, 0.07), 0px 20px 12px 0px rgba(3, 4, 7, 0.04), 0px 35px 14px 0px rgba(3, 4, 7, 0.01), 0px 55px 15px 0px rgba(3, 4, 7, 0.00);
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  
  & .padding-left-7 {
    padding-left: 7px;
  }
  &.card--listing {
    background: #f5f4f3;
    color: ${(props) => props.theme.warmGrey900};
  }
  &.card--selling {
    background: black;
    color: #fff;
  }

  & .card__offer-text {
  }

  & .card__title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .card__title {
      font-size: 20px;
      line-height: 120%; /* 24px */
      letter-spacing: -0.48px;
    }

    & .cmp-recommended {
      background-color: #0040e6;
      display: inline-flex;
      padding: 5px 12px 4px 13px;
      justify-content: center;
      align-items: center;
      border-radius: 14px;
      color: #ffffff;
    }
  }

  & .card__price {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & .card__price-wrapper {
    font-family: ${(props) => props.theme.mediumFontFamily};
    font-size: 56px;
    line-height: 100%;
    letter-spacing: -1.904px;
  }
`;
const Card = (props) => {
  const { cardType, title, offerText, priceRange, recommended } = props.option;
  return (
    <CardStyle
      className={
        cardType == "listing" ? "card card--listing" : "card card--selling"
      }
    >
      <div className="card__title-wrapper">
        <div className="card__title padding-left-7">{title}</div>
        {recommended && <div className="cmp-recommended">Recommended</div>}
      </div>
      <div className="card__price">
        <div className="card__offer-text padding-left-7">{offerText}</div>
        <div className="card__price-wrapper">{priceRange}</div>
      </div>
    </CardStyle>
  );
};

export default Card;
