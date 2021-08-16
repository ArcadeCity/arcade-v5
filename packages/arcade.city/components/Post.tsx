import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { Navbar } from './Navbar'

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  return (
    <div
      className='pointer-events-auto overflow-y-scroll'
      style={{ zIndex: 9000 }}
    >
      <Navbar />
      <main>
        <article className='xl:divide-y xl:divide-gray-200'>
          <div className='prose z-50' style={{ zIndex: 999 }}>
            <div className='divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2'>
              <div className='max-w-none pt-10 pb-8'>
                <MDXProvider>{children}</MDXProvider>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}
