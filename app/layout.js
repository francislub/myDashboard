import './ui/globals.css';

export const metadata = {
    title: 'NALONGO LWOKYAZA FOUNDATION',
    description: 'Developed by Francis and TroyMoses',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
           
            <body>
                { children }
            </body>
        </html>
    )
}