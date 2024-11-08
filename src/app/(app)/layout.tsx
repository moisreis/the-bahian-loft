import '../../styles/globals.scss';

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body>
        <main>{children}</main>
        </body>
        </html>
    )
}