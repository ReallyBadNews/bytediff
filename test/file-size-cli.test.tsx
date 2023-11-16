import { describe, expect, it } from "vitest";
import { render } from "ink-testing-library";
import FileSizeCLI from "../file-size";

const GREEN_COLOR_CODE = "\u001b[32m"; // ANSI escape code for green
const RED_COLOR_CODE = "\u001b[31m"; // ANSI escape code for red

describe("<FileSizeCLI />", () => {
  it("shows the correct percentage reduction", () => {
    const { lastFrame } = render(
      <FileSizeCLI originalSizeKb={1000} newSizeKb={800} />
    );
    expect(lastFrame()).toContain("20.00%");
    expect(lastFrame()).toContain("800");
    expect(lastFrame()).toContain("1000");
  });

  it("shows green text for size reduction", () => {
    const { lastFrame } = render(
      <FileSizeCLI originalSizeKb={1000} newSizeKb={800} />
    );
    expect(lastFrame()).toContain(GREEN_COLOR_CODE);
  });

  it("shows red text for size increase", () => {
    const { lastFrame } = render(
      <FileSizeCLI originalSizeKb={800} newSizeKb={1000} />
    );
    expect(lastFrame()).toContain(RED_COLOR_CODE);
  });
});
