export const _start = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
    font: inherit;
  }

  html {
    height: 100%;
  }
`

export const classes = {
  app: `
    display: grid;
    background-color: hsl(0, 0%, 99%);
    color: hsl(200, 0%, 10%);
    font: 16px/1.5 system-ui;
    display: grid;
    height: 100%;
    overflow: visible;
  `,
  top: `
    min-height: 100vw;
    background-image: var(--background-image);
    background-size: cover;
    font-size: 6vw;
    padding: 1em;

    @media (orientation: landscape) {
      height: 100vh;
    }
  `,
  bottom: `
    font-size: 2vw;
  `,
  h1: `
    font-weight: bold;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
  `,
  grid: `
    display: grid;
    grid-template-columns: repeat(7, calc((100% - 3em) / 7));
    gap: 0.5em;
    padding: 1em;
  `,
  weekDay: `
    text-align: center;
    padding: 1em;
    font-weight: bold;
  `,
  day: `
    grid-column: var(--x, auto);
    border: 1px solid currentColor;
    background: #fff;
    padding: 0.5em;
    height: calc((100vw - 3em) / 7);
  `
}
