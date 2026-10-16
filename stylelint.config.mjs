/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html/astro"],
  rules: {
    "scss/dollar-variable-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: [
          "after-comment",
          "inside-single-line-block",
          "after-dollar-variable",
        ],
      },
    ],
    "alpha-value-notation": [
      "number",
      {
        exceptProperties: [
          "opacity",
          "fill-opacity",
          "flood-opacity",
          "stop-opacity",
          "stroke-opacity",
        ],
      },
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: [
          "after-comment",
          "inside-single-line-block",
          "after-custom-property",
        ],
      },
    ],
    "media-feature-range-notation": ["prefix"],
    "property-no-vendor-prefix": [
      true,
      {
        ignoreProperties: ["-webkit-text-size-adjust"],
      },
    ],
  },
};
