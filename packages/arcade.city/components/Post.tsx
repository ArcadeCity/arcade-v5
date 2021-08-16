import { useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { Navbar } from './Navbar'
import tinytime from 'tinytime'

const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export default function Post({ meta, children, posts }: any) {
  const router = useRouter()

  const components = {
    a: ExternalLink,
  }

  return (
    <div
      className='absolute w-full h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-y-auto'
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
    >
      <Navbar />
      <div className='pt-28 text-lg max-w-prose mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          {/* <img
            className='mb-8 w-auto h-96 rounded-xl border-2 border-minsk shadow-lg'
            src={imgAuthoritarian}
          /> */}
        </div>
        <h1>
          <span className='block text-3xl text-center leading-8 font-extrabold tracking-wider text-white sm:text-5xl'>
            {meta.title}
          </span>
        </h1>
        <span className='mt-4 block text-base text-center text-bluebell font-semibold tracking-wide'>
          <time dateTime={meta.date}>
            {postDateTemplate.render(new Date(meta.date))}
          </time>
        </span>
      </div>
      <div className='mb-16 prose prose-lg text-white mx-auto'>
        <div className='divide-y divide-gray-200 xl:pb-0 xl:col-span-3 xl:row-span-2'>
          <div className='max-w-none pt-6 pb-8'>
            <MDXProvider components={components}>{children}</MDXProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExternalLink = (props: any) => {
  // if (props.href.includes('arcade.city') || props.href[0] === '/') {
  //   return <a href={props.href}>{props.children}</a>
  // }
  return (
    <a href={props.href} target='_blank' rel='noopener noreferrer'>
      {props.children}
    </a>
  )
}
