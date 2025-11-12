import mermaid from "mermaid";

const mermaidOptions = {
  theme: "base",
  flowchart: {
    useMaxWidth: false
  },
  quadrantChart: {
    xAxisPosition: "bottom"
  }
};

function getCSSVariable(variable, fallback) {
  if(typeof document === "undefined") { return fallback; }

  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

const themeVariables = {
  fontFamily: getCSSVariable("--font-default", "system-ui"),
  fontSize: getCSSVariable("--font-size", "18px"),
  primaryColor: getCSSVariable("--color-mermaid-primary", "black"),
  primaryTextColor: getCSSVariable("--color-light-link", "lightgray"),
  primaryBorderColor: getCSSVariable("--color-mermaid-primary", "black"),
  lineColor: getCSSVariable("--color-mermaid-line", "gray"),
  secondaryColor: getCSSVariable("--color-mermaid-secondary", "darkgray"),
  secondaryTextColor: getCSSVariable("--color-light-link", "lightgray"),
  secondaryBorderColor: getCSSVariable("--color-mermaid-secondary", "darkgray"),
  tertiaryColor: getCSSVariable("--color-mermaid-tertiary", "darkgray"),
  activationBkgColor: getCSSVariable("--color-mermaid-primary", "black"),
  quadrant1Fill: getCSSVariable("--color-mermaid-fill1", "black"),
  quadrant2Fill: getCSSVariable("--color-mermaid-tertiary", "darkgray"),
  quadrant3Fill: getCSSVariable("--color-dark-box-bg", "black"),
  quadrant4Fill: getCSSVariable("--color-mermaid-tertiary", "darkgray"),
  quadrantInternalBorderStrokeFill: getCSSVariable("--color-mermaid-secondary", "darkgray"),
  quadrantExternalBorderStrokeFill: getCSSVariable("--color-mermaid-secondary", "darkgray")
};

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false, ...mermaidOptions, themeVariables });
  return {
    provide: {
      mermaid
    }
  };
});
