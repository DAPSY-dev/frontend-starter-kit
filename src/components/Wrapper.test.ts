import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { describe, expect, test } from "vitest";
import Wrapper from "../components/Wrapper.astro";

describe("Wrapper", () => {
  test("renders the wrapper element", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper);
    expect(html).toContain('<div class="wrapper"></div>');
  });

  test("applies the spacing class", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper, {
      props: {
        spacing: "md",
      },
    });
    expect(html).toContain("wrapper wrapper--spacing-md");
  });

  test("applies the size class", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper, {
      props: {
        size: "md",
      },
    });
    expect(html).toContain("wrapper wrapper--size-md");
  });

  test("applies both spacing and size classes", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper, {
      props: {
        spacing: "md",
        size: "md",
      },
    });
    expect(html).toContain("wrapper wrapper--spacing-md wrapper--size-md");
  });

  test("renders slotted content", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper, {
      slots: {
        default: "<p>hello world</p>",
      },
    });
    expect(html).toContain("<p>hello world</p>");
  });

  test("renders slotted content alongside the provided classes", async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Wrapper, {
      props: {
        spacing: "md",
        size: "md",
      },
      slots: {
        default: '<p class="text">hello world</p>',
      },
    });
    expect(html).toContain(
      'class="wrapper wrapper--spacing-md wrapper--size-md"'
    );
    expect(html).toContain('<p class="text">hello world</p>');
  });
});
