import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "VideoAI - Создавайте видео с помощью ИИ",
    description: "Превращайте фотографии в HD видео, создавайте контент для YouTube Shorts с помощью искусственного интеллекта",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <head>
            {/* Yandex.Metrika noscript fallback */}
            <noscript>
                <div>
                    <img
                        src="https://mc.yandex.ru/watch/103720410"
                        style={{position: 'absolute', left: '-9999px'}}
                        alt=""
                    />
                </div>
            </noscript>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* Yandex.Metrika counter - загружается после body */}
        <Script
            id="yandex-metrika"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                            (function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=103720410', 'ym');
                            ym(103720410, 'init', {
                                ssr:true, 
                                webvisor:true, 
                                clickmap:true, 
                                ecommerce:"dataLayer", 
                                accurateTrackBounce:true, 
                                trackLinks:true
                            });
                        `,
            }}
        />
        </body>
        </html>
    );
}