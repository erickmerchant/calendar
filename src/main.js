import {html} from '@erickmerchant/framework/main.js'

const [, year, month] = window.location.pathname.split('/')

const now = new Date()

const date = new Date(
  year != null && year !== '' ? Number(year) : now.getFullYear(),
  month != null && month !== '' ? Number(month) - 1 : now.getMonth()
)

export const getDefaultState = () => {
  return {
    date
  }
}

export const createComponent = ({app, classes}) => {
  return (state) => html`
    <body class=${classes.app}>
      <header
        class=${classes.top}
        style=${`--background-image: url("https://source.unsplash.com/1280x1280/?nature,${state.date.toLocaleDateString(
          'en-US',
          {
            month: 'long'
          }
        )}")`}
      >
        <h1 class=${classes.h1}>
          ${state.date.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
        </h1>
      </header>
      <main class=${classes.bottom}>
        <div class=${classes.grid}>
          <div class=${classes.weekDay}>Sunday</div>
          <div class=${classes.weekDay}>Monday</div>
          <div class=${classes.weekDay}>Tuesday</div>
          <div class=${classes.weekDay}>Wednesday</div>
          <div class=${classes.weekDay}>Thursday</div>
          <div class=${classes.weekDay}>Friday</div>
          <div class=${classes.weekDay}>Saturday</div>
          ${{
            *[Symbol.iterator]() {
              const year = state.date.getFullYear()
              const month = state.date.getMonth()
              const daysInTheMonth = new Date(year, month + 1, 0).getDate()

              yield html`
                <div
                  class=${classes.day}
                  style=${`--x: ${new Date(year, month, 1).getDay() + 1}`}
                >
                  1
                </div>
              `

              let i = 2

              do {
                yield html`
                  <div class=${classes.day}>${i}</div>
                `

                i++
              } while (i <= daysInTheMonth)
            }
          }}
        </div>
      </main>
    </body>
  `
}
