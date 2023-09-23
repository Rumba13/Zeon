import "./styles.scss";
import { Aside } from "../../../widgets/aside";
import { Footer } from "../../../widgets/footer";
import { Header } from "../../../widgets/header";
import React from "react";
import { Breadcrumb } from 'antd';

type PropsType = {
    children: React.ReactNode | React.ReactNode[]
}

export function Layout({ children }: PropsType) {
    return (
        <>
            <Header />

            <main className="main">
                <Breadcrumb className="bread-crumbs" separator=">" items={[
                    { title: "Главная", href: "11" },
                    { title: "Компьютеры и сети", href: "11" },
                    { title: "Компьютеры и комплектующие", href: "11" },
                    { title: "Блоки питания", href: "11" },
                    { title: "Блок питания be quiet! Pure Power 11 700W CM BN299"},
                ]} />
                <Aside />
                {children}
            </main>

            <Footer />
        </>
    )
}