import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const FramerMotion_Utils = {
  Popup: {
    init: {
      opacity: 0,
      scale: .6
    },

    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      scale: 1
    },
  },

  down: {
    init: {
      opacity: .4,
      y: -20
    },

    exit: {
      opacity: 0,
      y: -10,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },
  Bigdown: {
    init: {
      opacity: 0,
      y: -80
    },

    exit: {
      opacity: 0,
      y: -40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },

  up: {
    init: {
      opacity: .4,
      y: 20
    },

    exit: {
      opacity: 0,
      y: 10,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  },
  Bigup: {
    init: {
      opacity: .4,
      y: 80
    },

    exit: {
      opacity: 0,
      y: 40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      y: 0
    },
  }
  ,
  ShowSlowlly: {
    init: {
      opacity: 0,
      // y: 80
    },

    exit: {
      opacity: 0,
      // y: 40,
      transition: {
        type: "keyframes",
        duration: .12
      }
    },
    anim: {
      opacity: 1,
      // y: 0
    },
  }
}