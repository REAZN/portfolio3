import 'styles/style.scss'
import "styles/overide.scss"

export default function MyApp({ Component, pageProps, router }) {

  return (
        <Component {...pageProps} key={router.route}/>
  )
}

