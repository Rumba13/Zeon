import "./styles.scss";
import { BreadCrumbs } from "../../../entities/breadCrumbs";
import { Aside } from "../../../widgets/aside";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";

type PropsType = {
    children: React.ReactNode | React.ReactNode[]
}

export function Layout({ children }: PropsType) {
    return (
        <>
            <Header />

            <main className="main">
                <BreadCrumbs />
                <Aside />
                {children}
            </main>

            <Footer />
        </>
    )
}