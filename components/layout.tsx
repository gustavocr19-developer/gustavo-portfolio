import Navbar from './navbar'
import Footer from './footer'
interface Props {
    children: React.ReactElement | React.ReactElement[]
}
export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
