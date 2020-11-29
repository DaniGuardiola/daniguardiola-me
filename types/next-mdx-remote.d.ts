interface Scope {
  [key: string]: unknown
}

declare module 'next-mdx-remote/hydrate' {
  type HydrateOptions = {
    components: {
      [key: string]: React.ComponentType<any>
    }
  }

  export interface Source {
    compiledSource: string
    renderedOutput: string
    scope?: Scope
  }

  let hydrate: (source: Source, options?: HydrateOptions) => JSX.Element
  export default hydrate
}

declare module 'next-mdx-remote/render-to-string' {
  type RenderToStringOptions = {
    components?: {
      [key: string]: React.ComponentType<any>
    }
    mdxOptions?: unknown
    scope?: Scope
  }

  let renderToString: (
    source: string,
    options?: RenderToStringOptions
  ) => Promise<Source>
  export default renderToString
}
