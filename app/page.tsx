"use client"


import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    const [yandexLink, setYandexLink] = useState('https://t.me/Veo_33_bot?start=yndx_');

    useEffect(() => {
        const raw = localStorage.getItem('_ym_uid');
        const ymUid = raw ? raw.replace(/^"|"$/g, '') : ''; // убираем внешние кавычки

        if (ymUid === '') {
            window.location.href = '/';
        }

        setYandexLink('https://t.me/Veo_33_bot?start=yndx_' + ymUid);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-50">
            {/* Header */}
            <header className="py-6 px-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-purple-700">VideoAI</div>

                    <Link href={yandexLink}>
                        <button
                            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                            Начать
                        </button>
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center pt-[20vh]">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                        Создавайте видео с помощью <span className="text-purple-600">ИИ</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 animate-fade-in-up">
                        Превращайте фотографии в HD видео, создавайте контент для YouTube Shorts и многое другое
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                        <Link href={yandexLink}>
                            <button
                                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg">
                                Попробовать бесплатно
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}