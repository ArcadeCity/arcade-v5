import { useRouter } from 'next/router'

export default function Post({ meta, children, posts }) {
  const router = useRouter()
  return <p>hey</p>
}
