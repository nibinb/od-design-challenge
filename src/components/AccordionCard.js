import React from "react";
import styled from "styled-components";
import { motion, useAnimate } from "framer-motion";
import Card from "./Card";
import AccordionContent from "./AccordionContent";
import downArrow from "../assets/icons/caret-down.svg";
import upArrow from "../assets/icons/caret-up.svg";
import rigthChevron from "../assets/icons/chevron-right.svg";
import {CARD_OPTIONS, CARD_VARIANTS} from '../constants'

const AppView = styled.div`
  display: flex;
  justify-content: center;
  & .cmp-card {
    position: relative;
    display: flex;
    font-family: ${(props) => props.theme.regularFontFamily};
    flex: 1;
    gap: 32px;
    justify-content: center;
    max-width: 912px;
  }

  & .cmp-compare {
    display: flex;
    margin-top: 32px;

    .cmp-compare__text {
      color: ${(props) => props.theme.blue500};
      font-family: ${(props) => props.theme.mediumFontFamily};
      font-size: 20px;
    }

    .cmp-compare__icon {
      width: 16px;
      height: 16px;
      background-image: url(${rigthChevron});
    }
  }

  & .card-section {
    display: flex;
    justify-content: center;
    height: 440px;
    width: 444px;
    flex-direction: column;
    align-items: center;

    ul {
      position: relative;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 440px;
    }

    .list {
      position: absolute;
      list-style: none;

      &.list--hidden {
        cursor: pointer;
      }
    }
  }

  & .options {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 366px;
    gap: 32px;
  }

  & .list-section {
    .cmp-accordion-header {
      align-items: center;
      display: flex;

      .cmp-accordion-header__title {
        color: ${(props) => props.theme.warmGrey700};
        flex: 1;
        font-family: ${(props) => props.theme.mediumFontFamily};
        font-size: ${(props) => props.theme.medFontSize};
        letter-spacing: -0.896px;
        line-height: 110%;
      }
      .cmp-accordion-header__icon {
        background-image: url(${downArrow});
        height: 11px;
        width: 18px;
      }
    }
    &.list-section--hidden {
      cursor: pointer;
    }
    &.list-section--active {
      .cmp-accordion-header__title {
        color: ${(props) => props.theme.warmGrey950};
      }
      .cmp-accordion-header__icon {
        background-image: url(${upArrow});
      }
    }
  }
`;

function AccordionCard() {
  const [options] = React.useState(CARD_OPTIONS);
  const [active, setActive] = React.useState(options.length - 1);

  const toggleAccordion = (index) => {
    if (index === active) {
      return;
    }
    setActive(index);
  };

  return (
    <AppView>
      <div className="cmp-card">
        <div className="card-section">
          <ul>
            {options?.map((option, index) => {
              const isActive = index == active;
              return (
                <motion.li
                  key={option.id}
                  onClick={() => toggleAccordion(index)}
                  variants={CARD_VARIANTS}
                  animate={isActive ? "goUp" : "goDown"}
                  initial={false}
                  className={
                    isActive ? "list list--active" : "list list--hidden"
                  }
                >
                  <Card option={option}></Card>
                </motion.li>
              );
            })}
          </ul>
          <div className="cmp-compare">
            <div className="cmp-compare__text">Compare Options</div>
            <div className="cmp-compare__icon"></div>
          </div>
        </div>
        <div className="options">
          {options.map((option, index) => {
            const isActive = index == active;
            return (
              <div
              key={option.id}
                className={`list-section ${
                  isActive ? "list-section--active" : "list-section--hidden"
                }`}
              >
                <div
                  className="cmp-accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="cmp-accordion-header__title">
                    {option.title}
                  </div>
                  <div className="cmp-accordion-header__icon" style={{}}></div>
                </div>
                <motion.div
                  variants={{
                    open: { height: "auto" },
                    collapsed: { height: 0 },
                  }}
                  initial={isActive ? "open" : "collapsed"}
                  animate={isActive ? "open" : "collapsed"}
                  style={{ overflow: "hidden" }}
                >
                  <AccordionContent option={option}></AccordionContent>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </AppView>
  );
}

export default AccordionCard;
