import {render, RenderOptions} from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import Router from 'next/router'
import { ReactElement } from 'react'

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <RouterContext.Provider value={Router}>
        {children}
    </RouterContext.Provider>
   
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}