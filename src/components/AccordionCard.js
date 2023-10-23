import React from "react";
import styled from "styled-components";
import { motion, useAnimate } from "framer-motion";
import Card from "./Card";
import AccordionContent from "./AccordionContent";
import downArrow from "../assets/icons/caret-down.svg";
import upArrow from "../assets/icons/caret-up.svg";
import rigthChevron from "../assets/icons/chevron-right.svg";

const CARD_OPTIONS = [
  {
    id: "1",
    cardType: "listing",
    title: "List with us",
    offerText: "Estimated offer",
    priceRange: "$$445K–$550K",
    recommended: true,
    description:
      "A top local agent will help you list for more money. We’ll lock in your final cash offer for 60 days.",
    points: [
      "Offer Lock included",
      "More visibility, more buyers",
      "Local agent assistance",
    ],
  },
  {
    id: "2",
    cardType: "selling",
    title: "Sell to us",
    offerText: "Estimated offer",
    priceRange: "$445K–$550K",
    description:
      "We’ll buy your home directly. Choose your close date and move on your schedule.",
    points: [
      "All-cash offer",
      "The fastest way to sell",
      "Skip showings & repairs",
    ],
  },
];
const CARD_OFFSET = 15;
const CARD_OFFSET_OTHER = -98;
const CARD_JUMP = 200;
const SCALE_FACTOR = 0.8;

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
    align-tems: center;

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
        letter-spacing: var(--170-med-letter-spacing);
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

  & .gradient {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 100%
    );
    height: 24px;
  }
`;

function AccordionCard() {
  const [options, setOptions] = React.useState(CARD_OPTIONS);
  const [active, setActive] = React.useState(options.length - 1);

  const [scope, animate] = useAnimate();

  const toggleCard = (index) => {
    setActive(index);
    const otherCard = document.querySelector(".list--hidden");
    const currentCard = document.querySelector(".list--active");
    const pushBack = animate(
      currentCard,
      {
        y: CARD_JUMP,
      },
      {
        transition: {
          type: "spring",
          stiffness: 1000,
        },
      }
    );

    // bring white card front
    const pushFront = animate(
      otherCard,
      {
        y: -CARD_JUMP,
      },
      {
        transition: {
          type: "spring",
          stiffness: 1000,
        },
      }
    );

    pushBack.then(() => {
      animate(
        currentCard,
        {
          y: [null, CARD_OFFSET_OTHER],

          zIndex: [null, 0],
          scale: [null, SCALE_FACTOR],
        }
        // {
        //   transition: {
        //     ease: "linear",
        //     duration: 5,
        //     y: { duration: 5 }
        //   }
        // }
      );
    });

    pushFront.then(() => {
      animate(otherCard, {
        y: [null, CARD_OFFSET],
        zIndex: [null, 1],
        scale: [null, 1],
      });
    });
  };

  const toggleAccordion = (index) => {
    if (index === active) {
      return;
    }
    setActive(index);
    toggleCard(index);
  };

  return (
    <AppView>
      <div className="cmp-card">
        <div className="card-section">
          <ul ref={scope}>
            {options?.map((option, index) => {
              const isActive = index == active;
              return (
                <motion.li
                  key={option.id}
                  onClick={isActive ? null : (e) => toggleAccordion(index)}
                  initial={{
                    scale: isActive ? 1 : SCALE_FACTOR,
                    y: isActive ? CARD_OFFSET : CARD_OFFSET_OTHER,
                  }}
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
