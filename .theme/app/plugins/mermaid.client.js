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

function getCSSVariable(variable) {
  if(typeof document === "undefined") { return ""; }

  return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
}

const themeVariables = {
  fontFamily: getCSSVariable("--font-default"),
  fontSize: getCSSVariable("--font-size"),
  primaryColor: getCSSVariable("--color-mermaid-primary"),
  primaryTextColor: getCSSVariable("--color-light-link"),
  primaryBorderColor: getCSSVariable("--color-mermaid-primary"),
  lineColor: getCSSVariable("--color-mermaid-line"),
  secondaryColor: getCSSVariable("--color-mermaid-secondary"),
  secondaryTextColor: getCSSVariable("--color-light-link"),
  secondaryBorderColor: getCSSVariable("--color-mermaid-secondary"),
  tertiaryColor: getCSSVariable("--color-mermaid-tertiary"),
  activationBkgColor: getCSSVariable("--color-mermaid-primary"),
  quadrant1Fill: getCSSVariable("--color-mermaid-fill1"),
  quadrant2Fill: getCSSVariable("--color-mermaid-tertiary"),
  quadrant3Fill: getCSSVariable("--color-dark-box-bg"),
  quadrant4Fill: getCSSVariable("--color-mermaid-tertiary"),
  quadrantInternalBorderStrokeFill: getCSSVariable("--color-mermaid-secondary"),
  quadrantExternalBorderStrokeFill: getCSSVariable("--color-mermaid-secondary")
};

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false, ...mermaidOptions, themeVariables });
  return {
    provide: {
      mermaid
    }
  };
});
