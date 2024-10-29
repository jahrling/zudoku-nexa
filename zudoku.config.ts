import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
    page: {
      pageTitle: "Documentations",
      logo: {
        src: {
          light: "/logos/nexa_logo.svg",
          dark: "/logos/nexa_logo.svg"
        },
        "width": "99px"
      }
    },
         // ...
    theme: {
     light: {
          primary: "227 100% 36.3%",
          primaryForeground: "0 0% 100%"
      },
      dark: {
          primary: "227 100% 36.3%",
          primaryForeground: "0 0% 100%"
        }
      },
      // ... 
    // ...
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["introduction", "example"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/vendor.json",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
