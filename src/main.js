import {html} from '@erickmerchant/framework/main.js'

const now = new Date()

export const defaultState = {
  date: now
}

export const createComponent = ({app, classes}) => {
  return (state) => html`
    <body class=${classes.app}></body>
  `
}
