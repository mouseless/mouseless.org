import mermaid from "mermaid";

const themeVariables = {
  primaryColor: "#FA465B",
  primaryTextColor: "#F7F7F7",
  primaryBorderColor: "#FA465B",
  lineColor: "#D5DBDB",
  secondaryColor: "#031819",
  secondaryTextColor: "#E9EBEB",
  secondaryBorderColor: "#031819",
  tertiaryColor: "#154245",
  activationBkgColor: "#FA465B",
  quadrant1Fill: "#255759",
  quadrant2Fill: "#154245",
  quadrant3Fill: "#092C2E",
  quadrant4Fill: "#154245",
  quadrantInternalBorderStrokeFill: "#031819",
  quadrantExternalBorderStrokeFill: "#031819"
};

export default defineNuxtPlugin(() => {
  mermaid.initialize({ startOnLoad: false, theme: "base", themeVariables });
  return {
    provide: {
      mermaid
    }
  };
});