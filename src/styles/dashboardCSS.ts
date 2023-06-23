import { createGlobalStyle } from "styled-components";

export const DashboardStyle = createGlobalStyle`
.header-height{height: 100px !important};
//
// Card
//
body{
  background-color:"red"
}
// Base
.card {
    box-shadow: $card-box-shadow;
    border: 0;

    // Header
    > .card-header {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        min-height: $card-header-height;
        padding: 0 $card-px;
        background-color: transparent;

        // Title
        .card-title {
            display: flex;
            align-items: center;
            margin: $card-header-py;
            margin-left: 0;

            &.flex-column {
                align-items: flex-start;
                justify-content: center;
            }

            .card-icon {
                margin-right: 0.75rem;
                line-height: 0;

                i {
                    font-size: 1.25rem;
                    color: $gray-600;
                    line-height: 0;

                    &:after,
                    &:before {
                        line-height: 0;
                    }
                }

                .svg-icon {
                    @include svg-icon-size(24px);
                    @include svg-icon-color($gray-600);
                }
            }

            &,
            .card-label {
                font-weight: 500;
                font-size: 1.275rem;
                color: $dark;
            }

            .card-label {
                margin: 0 0.75rem 0 0;
                flex-wrap: wrap;
            }

            // Description
            small {
                color: $text-muted;
                font-size: 1rem;
            }

            // Headings
            h1, h2, h3, h4, h5, h6 {
                margin-bottom: 0;
            }
        }

        // Toolbar
        .card-toolbar {
            display: flex;
            align-items: center;
            margin: $card-header-py 0;
            flex-wrap: wrap;
        }
    }

    // Body
    > .card-body {
         padding: $card-py $card-px;
    }

    // Footer
    > .card-footer {
        padding: $card-py $card-px;
        background-color: transparent;
    }

    // Scroll
    .card-scroll {
        position: relative;
        overflow: auto;
    }

    // Reset padding x
    &.card-px-0 {
        .card-header,
        .card-body,
        .card-footer {
            padding-left: 0;
            padding-right: 0;
        }
    }

    // Dashed style
    &.card-dashed {
        box-shadow: none;
        border: 1px dashed $card-border-dashed-color;

        > .card-header {
            border-bottom: 1px dashed $card-border-dashed-color;
        }

        > .card-footer {
            border-top: 1px dashed $card-border-dashed-color;
        }
    }

    // Bordered style
    &.card-bordered {
        box-shadow: none;
        border: 1px solid $card-border-color;
    }

    // Flush borders
    &.card-flush {
        > .card-header {
            border-bottom: 0;
        }

        > .card-footer {
            border-top: 0;
        }
    }
}

// Responsive stretch heights
.card {
    @each $breakpoint in map-keys($grid-breakpoints) {
    	@include media-breakpoint-up($breakpoint) {
    		$infix: breakpoint-infix($breakpoint, $grid-breakpoints);

            // Stretch
            &.card#{$infix}-stretch {
                height: calc(100% - var(--bs-gutter-y));
            }

            // Stretch 75
            &.card#{$infix}-stretch-75 {
                height: calc(75% - var(--bs-gutter-y));
            }

            // Stretch 50
            &.card#{$infix}-stretch-50 {
                height: calc(50% - var(--bs-gutter-y));
            }

             // Stretch 33
            &.card#{$infix}-stretch-33 {
                height: calc(33.333% - var(--bs-gutter-y));
            }

            // Stretch 25
            &.card#{$infix}-stretch-25 {
                height: calc(25% - var(--bs-gutter-y));
            }

            // Header stretch
            .card-header#{$infix}-stretch {
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                align-items: stretch;
    
                .card-toolbar {
                    margin: 0;
                    align-items: stretch;
                }
            }
        }
    }
}

// Utilities
.card-p {
    padding: $card-py $card-px !important;
}

.card-px {
    padding-left: $card-px !important;
    padding-right: $card-px !important;
}

.card-py {
    padding-top: $card-py !important;
    padding-bottom: $card-py !important;
}

.card-rounded {
    border-radius: $card-border-radius;
}

.card-rounded-start {
    border-top-left-radius: $card-border-radius;
    border-bottom-left-radius: $card-border-radius;
}

.card-rounded-end {
    border-top-right-radius: $card-border-radius;
    border-bottom-right-radius: $card-border-radius;
}

.card-rounded-top {
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;
}

.card-rounded-bottom {
    border-bottom-left-radius: $card-border-radius;
    border-bottom-right-radius: $card-border-radius;
}

// Mobile mode
@include media-breakpoint-down(md) {
    .card {
        > .card-header:not(.flex-nowrap) {
            padding-top: $card-header-py;
            padding-bottom: $card-header-py;
        }
    }
}
//
// Base styles
//

.accordion {
  // scss-docs-start accordion-css-vars
  --#{$prefix}accordion-color: #{$accordion-color};
  --#{$prefix}accordion-bg: #{$accordion-bg};
  --#{$prefix}accordion-transition: #{$accordion-transition};
  --#{$prefix}accordion-border-color: #{$accordion-border-color};
  --#{$prefix}accordion-border-width: #{$accordion-border-width};
  --#{$prefix}accordion-border-radius: #{$accordion-border-radius};
  --#{$prefix}accordion-inner-border-radius: #{$accordion-inner-border-radius};
  --#{$prefix}accordion-btn-padding-x: #{$accordion-button-padding-x};
  --#{$prefix}accordion-btn-padding-y: #{$accordion-button-padding-y};
  --#{$prefix}accordion-btn-color: #{$accordion-button-color};
  --#{$prefix}accordion-btn-bg: #{$accordion-button-bg};
  --#{$prefix}accordion-btn-icon: #{escape-svg($accordion-button-icon)};
  --#{$prefix}accordion-btn-icon-width: #{$accordion-icon-width};
  --#{$prefix}accordion-btn-icon-transform: #{$accordion-icon-transform};
  --#{$prefix}accordion-btn-icon-transition: #{$accordion-icon-transition};
  --#{$prefix}accordion-btn-active-icon: #{escape-svg($accordion-button-active-icon)};
  --#{$prefix}accordion-btn-focus-border-color: #{$accordion-button-focus-border-color};
  --#{$prefix}accordion-btn-focus-box-shadow: #{$accordion-button-focus-box-shadow};
  --#{$prefix}accordion-body-padding-x: #{$accordion-body-padding-x};
  --#{$prefix}accordion-body-padding-y: #{$accordion-body-padding-y};
  --#{$prefix}accordion-active-color: #{$accordion-button-active-color};
  --#{$prefix}accordion-active-bg: #{$accordion-button-active-bg};
  // scss-docs-end accordion-css-vars
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--#{$prefix}accordion-btn-padding-y) var(--#{$prefix}accordion-btn-padding-x);
  @include font-size($font-size-base);
  color: var(--#{$prefix}accordion-btn-color);
  text-align: left; // Reset button style
  background-color: var(--#{$prefix}accordion-btn-bg);
  border: 0;
  @include border-radius(0);
  overflow-anchor: none;
  @include transition(var(--#{$prefix}accordion-transition));

  &:not(.collapsed) {
    color: var(--#{$prefix}accordion-active-color);
    background-color: var(--#{$prefix}accordion-active-bg);
    box-shadow: inset 0 calc(-1 * var(--#{$prefix}accordion-border-width)) 0 var(--#{$prefix}accordion-border-color); // stylelint-disable-line function-disallowed-list

    &::after {
      background-image: var(--#{$prefix}accordion-btn-active-icon);
      transform: var(--#{$prefix}accordion-btn-icon-transform);
    }
  }

  // Accordion icon
  &::after {
    flex-shrink: 0;
    width: var(--#{$prefix}accordion-btn-icon-width);
    height: var(--#{$prefix}accordion-btn-icon-width);
    margin-left: auto;
    content: "";
    background-image: var(--#{$prefix}accordion-btn-icon);
    background-repeat: no-repeat;
    background-size: var(--#{$prefix}accordion-btn-icon-width);
    @include transition(var(--#{$prefix}accordion-btn-icon-transition));
  }

  &:hover {
    z-index: 2;
  }

  &:focus {
    z-index: 3;
    border-color: var(--#{$prefix}accordion-btn-focus-border-color);
    outline: 0;
    box-shadow: var(--#{$prefix}accordion-btn-focus-box-shadow);
  }
}

.accordion-header {
  margin-bottom: 0;
}

.accordion-item {
  color: var(--#{$prefix}accordion-color);
  background-color: var(--#{$prefix}accordion-bg);
  border: var(--#{$prefix}accordion-border-width) solid var(--#{$prefix}accordion-border-color);

  &:first-of-type {
    @include border-top-radius(var(--#{$prefix}accordion-border-radius));

    .accordion-button {
      @include border-top-radius(var(--#{$prefix}accordion-inner-border-radius));
    }
  }

  &:not(:first-of-type) {
    border-top: 0;
  }

  // Only set a border-radius on the last item if the accordion is collapsed
  &:last-of-type {
    @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));

    .accordion-button {
      &.collapsed {
        @include border-bottom-radius(var(--#{$prefix}accordion-inner-border-radius));
      }
    }

    .accordion-collapse {
      @include border-bottom-radius(var(--#{$prefix}accordion-border-radius));
    }
  }
}

.accordion-body {
  padding: var(--#{$prefix}accordion-body-padding-y) var(--#{$prefix}accordion-body-padding-x);
}


// Flush accordion items
//
// Remove borders and border-radius to keep accordion items edge-to-edge.

.accordion-flush {
  .accordion-collapse {
    border-width: 0;
  }

  .accordion-item {
    border-right: 0;
    border-left: 0;
    @include border-radius(0);

    &:first-child { border-top: 0; }
    &:last-child { border-bottom: 0; }

    .accordion-button {
      &,
      &.collapsed {
        @include border-radius(0);
      }
    }
  }
}

`;
