import '../../styles/globals.scss';
import Header from '../../parts/Header/Header';

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    )
}