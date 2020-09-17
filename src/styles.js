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

export const styles = {
  app: `
    display: grid;
    background-color: hsl(200, 0%, 90%);
    color: hsl(200, 0%, 10%);
    font: 16px/1.5 system-ui;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    overflow: visible;
    margin: 1em;
  `,
  top: `
    grid-row: 1;
  `,
  bottom: `
    grid-row: 2;
  `,
  h1: `
    font-weight: bold;
    font-size: 3em;
  `,
  grid: `
    display: grid;
    grid-template-columns: repeat(7, calc((100% - 3em) / 7));
    gap: 0.5em;
    padding-bottom: 1em;
  `,
  weekDay: `
    text-align: center;
    padding: 1em;
    font-weight: bold;
    grid-row: 1;
  `,
  day: `
    grid-column: var(--x);
    grid-row: var(--y);
    border: 1px solid currentColor;
    background: white;
    height: 0;
    overflow: visible;
    padding-top: 0.5em;
    padding-right: 0.5em;
    padding-left: 0.5em;
    padding-bottom: 100%;
  `
}
