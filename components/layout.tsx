import Header from "./header/header"
import Footer from "./footer/footer"
export default function Layout({ children }:any) {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer />
    </>
  )
}