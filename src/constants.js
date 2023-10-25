const CARD_OFFSET_TOP = 32;
const CARD_OFFSET_BOTTOM = 65;
const CARD_JUMP = 200;
const SCALE_FACTOR = 0.8;
const DURATION = 1;
const DELAY = 0.4; // so total will be 1.4s

const CARD_TRANSITION = {
  ease: "easeInOut",
  y: {
      duration: DURATION,
      delay: DELAY // adding a delay before animation 
  },
  scale: {
    duration: DURATION,
    delay: DURATION / 5 * 1 // 5 keyframes, we want to delay it to run on 1st frame
  },
  zIndex: {
      delay: DURATION / 5 * 3// 5 keyframes, we want to delay it to run on 2nd frame
  }
};

export const CARD_VARIANTS = {
    atBack: {
      y: -CARD_OFFSET_BOTTOM,
      zIndex: 0,
      scale: SCALE_FACTOR
    },
    atFront: {
      y: CARD_OFFSET_TOP,
      zIndex: 1,
      scale: 1
    },
    goUp: {
      y: [null, -CARD_JUMP, CARD_OFFSET_TOP, CARD_OFFSET_TOP + 10, CARD_OFFSET_TOP],
      zIndex: [null, 1],
      scale: [null,1],
      transition: CARD_TRANSITION
    },
    goDown: {
      y: [null, CARD_JUMP, -CARD_OFFSET_BOTTOM, -CARD_OFFSET_BOTTOM - 10, -CARD_OFFSET_BOTTOM],
      zIndex: [null, 0],
      scale: [null,SCALE_FACTOR],
      transition: CARD_TRANSITION
    }
};

export const CARD_OPTIONS = [
  {
    id: "1",
    cardType: "listing",
    title: "List with us",
    offerText: "Estimated offer",
    priceRange: "$445K–$550K",
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

