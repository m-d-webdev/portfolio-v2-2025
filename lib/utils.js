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

export const TechIcones = {
  nextjs: "/nextjs-13.svg",
  Nextjs: "/nextjs-13.svg",
  Next: "/nextjs-13.svg",
  next: "/nextjs-13.svg",
  nodejs: "/nodejs-icon.svg",
  react: "/react-2.svg",
  reactnative: "/react-2.svg",
  tailwind: "/tailwind-css-2.svg",
  tailwindcss: "/tailwind-css-2.svg",
  emailjs: "/tailwind-css-2.svg",
  socketio: "/socket-io.svg",
  redis: "/redis.svg",
  prisma: "/prisma-2.svg",
  mongodb: "/mongodb-icon-2.svg",
  mysql: "/mysql-4.svg",
  express: "/express-109.svg",
  git: "/express-109.svg",
  stripe: "/stripe-3.svg",
  axios: "/axios.svg",
  api: "/api.png",
  publicapi: "/api.png",
  redux: "/redux.svg",
  firebase: "/firebase-2.svg"
}
