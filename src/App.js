import React from "react";
import styled from "styled-components";
import { motion, useAnimate } from "framer-motion";
import Card from "./components/Card";

const CARD_OPTIONS = [
  {
    id: "1",
    cardType: "listing",
    title: "List with us",
    offerText: "Estimated offer",
    priceRange: "$$445K–$550K",
    recommended: true,
  },
  {
    id: "2",
    cardType: "selling",
    title: "Sell to us",
    offerText: "Estimated offer",
    priceRange: "$445K–$550K",
  },
];
const CARD_OFFSET = 120;
const CARD_JUMP = 200;
const SCALE_FACTOR = 0.8;

const AppView = styled.div`
  background-color: #ffffff;
  position: relative;
  display: flex;
  font-family: ${(props) => props.theme.regularFontFamily};
  height: 100vh;

  & .card-section {
    flex: 1;
    display: flex;
    justify-content: center;

    ul {
      position: relative;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .list {
      position: absolute;
      list-style: none;
    }
  }

  & .overlap-group {
    height: 443px;
    left: -14px;
    position: relative;
    top: -3px;
    width: 472px;
  }

  & .compare-options {
    align-items: center;
    display: inline-flex;
    gap: 2px;
    left: 140px;
    position: absolute;
    top: 419px;
  }

  & .text-wrapper {
    color: var(--base-collection-color-blue-blue-500);
    font-family: var(--130-med-font-family);
    font-size: var(--130-med-font-size);
    font-style: var(--130-med-font-style);
    font-weight: var(--130-med-font-weight);
    letter-spacing: var(--130-med-letter-spacing);
    line-height: var(--130-med-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .chevron {
    height: 16px !important;
    position: relative !important;
    width: 16px !important;
  }

  & .listing-card {
    height: 316px;
    left: 35px;
    position: absolute;
    top: 0;
    width: 401px;
  }

  & .selling-card {
    height: 372px;
    left: 0;
    position: absolute;
    top: 64px;
    width: 472px;
  }

  & .options {
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  & .list-section {
  }

  & .div {
    align-items: center;
    display: flex;
  }

  & .text-wrapper-2 {
    color: ${(props) => props.theme.warmGrey700};
    flex: 1;
    font-family: ${(props) => props.theme.mediumFontFamily};
    font-size: ${(props) => props.theme.medFontSize};
    font-style: normal;
    font-weight: 500;
    letter-spacing: var(--170-med-letter-spacing);
    line-height: 110%;
  }

  & .vector {
    height: 11.1px;
    position: relative;
    width: 18px;
  }

  & .p {
    color: ${(props) => props.theme.warmGrey950};
    font-size: 20px;
    font-family: ${(props) => props.theme.regularFontFamily};
    letter-spacing: -0.59px;
    line-height: 25.2px;
  }

  & .value-props {
    font-family: ${(props) => props.theme.mediumFontFamily};
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 32px;
    font-size: 18px;
  }

  & .sell-section {
    align-self: stretch;
    overflow: hidden;
    position: relative;
    width: 100%;
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

function App() {
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
          y: [null, 0],

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
                  y: isActive ? CARD_OFFSET : null,
                }}
                className={isActive ? "list list--active" : "list list--hidden"}
              >
                <Card option={option}></Card>
              </motion.li>
            );
          })}
        </ul>
        <div className="property-default"></div>
      </div>
      <div className="options">
        {options.map((option, index) => {
          const isActive = index == active;
          return (
            <div
              className={`list-section ${
                isActive ? "list-section--active" : ""
              }`}
            >
              <div className="div" onClick={() => toggleAccordion(index)}>
                <div className="text-wrapper-2">List with us</div>
                <div className="vector">&#9660;</div>
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
                <p className="p">
                  A top local agent will help you list for more money. We’ll
                  lock in your final cash offer for 60 days.
                </p>
                <div className="value-props">
                  <div>Offer Lock included</div>
                  <div>More visibility, more buyers</div>
                  <div>Local agent assistance</div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </AppView>
  );
}

export default App;
