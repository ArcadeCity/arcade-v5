declare global {
  interface Console {
    tron: any
  }
}

export const log = (...props: any) => {
  __DEV__ && console.tron && console.tron.log && console.tron.log(...props)
}

export const display = (props: any) => {
  __DEV__ && console.tron.display(props)
}
