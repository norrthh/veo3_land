"use client"


import {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    const [yandexLink, setYandexLink] = useState('https://t.me/Veo_33_bot?start=yndx_');

    useEffect(() => {
        const raw = localStorage.getItem('_ym_uid');
        const ymUid = raw ? raw.replace(/^"|"$/g, '') : ''; // убираем внешние кавычки
        setYandexLink('https://t.me/Veo_33_bot?start=yndx_' + ymUid);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-blue-50">
            {/* Header */}
            <header className="py-6 px-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold text-purple-700">VideoAI</div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features"
                           className="text-gray-700 hover:text-purple-600 transition-colors">Возможности</a>
                        <a href="#examples"
                           className="text-gray-700 hover:text-purple-600 transition-colors">Примеры</a>
                        <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors">Цены</a>
                        <a href="#contact"
                           className="text-gray-700 hover:text-purple-600 transition-colors">Контакты</a>
                    </nav>

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
                <div className="max-w-4xl mx-auto text-center">
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

            {/* Features Section */}
            <section id="features" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
                        Возможности
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div
                            className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in-up cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI видео генерация</h3>
                            <p className="text-gray-600">Создание профессионального видеоконтента с помощью
                                искусственного интеллекта</p>
                        </div>

                        <div
                            className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in-up cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">YouTube Shorts</h3>
                            <p className="text-gray-600">Создание вертикальных видео для социальных сетей и мобильных
                                платформ</p>
                        </div>

                        <div
                            className="bg-white/60 backdrop-blur-sm p-6 rounded-lg shadow-md animate-fade-in-up cursor-pointer hover:shadow-lg transition-shadow duration-300">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Фото в HD видео</h3>
                            <p className="text-gray-600">Возможность превратить любое фото в HD видео с анимацией и
                                эффектами</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Examples Section */}
            <section id="examples" className="py-20 px-4 bg-white/20 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">
                        Примеры работ
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="animate-fade-in-up cursor-pointer">
                            <div
                                className="bg-white/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Professional AI generated video content creation showcase with modern technology interface, sleek design, purple and blue color scheme, futuristic digital art style, high quality rendering, cinematic lighting, tech innovation atmosphere&width=400&height=300&seq=veo3-example1&orientation=landscape"
                                    alt="Пример работы 1"
                                    className="w-full h-64 object-cover object-top"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">AI видео генерация</h3>
                                    <p className="text-gray-600 text-sm">Создание контента с помощью ИИ</p>
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in-up cursor-pointer">
                            <div
                                className="bg-white/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://readdy.ai/api/search-image?query=YouTube Shorts vertical video format creation tool interface, mobile-first design, purple gradient colors, modern video editing workspace, clean minimalist style, professional quality output preview&width=400&height=300&seq=veo3-example2&orientation=landscape"
                                    alt="Пример работы 2"
                                    className="w-full h-64 object-cover object-top"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">YouTube Shorts</h3>
                                    <p className="text-gray-600 text-sm">Вертикальные видео для социальных сетей</p>
                                </div>
                            </div>
                        </div>

                        <div className="animate-fade-in-up cursor-pointer">
                            <div
                                className="bg-white/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://readdy.ai/api/search-image?query=HD photo to video transformation process demonstration, before and after comparison, high definition quality enhancement, purple technology theme, sleek interface design, professional video production results&width=400&height=300&seq=veo3-example3&orientation=landscape"
                                    alt="Пример работы 3"
                                    className="w-full h-64 object-cover object-top"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-800">Фото в HD видео</h3>
                                    <p className="text-gray-600 text-sm">Превращение статичных изображений в видео</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            {/*<section id="pricing" className="py-20 px-4">*/}
            {/*    <div className="max-w-6xl mx-auto">*/}
            {/*        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in-up">*/}
            {/*            Тарифы*/}
            {/*        </h2>*/}
            {/*        <div className="grid md:grid-cols-3 gap-8">*/}
            {/*            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg">*/}
            {/*                <h3 className="text-2xl font-bold text-gray-800 mb-2">Базовый</h3>*/}
            {/*                <div className="text-3xl font-bold text-purple-600 mb-4">$9<span className="text-lg text-gray-600">/месяц</span></div>*/}
            {/*                <ul className="space-y-3 mb-8">*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 видео в месяц</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> HD качество</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Базовые эффекты</li>*/}
            {/*                </ul>*/}
            {/*                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">*/}
            {/*                    Выбрать план*/}
            {/*                </button>*/}
            {/*            </div>*/}

            {/*            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border-2 border-purple-500">*/}
            {/*                <div className="text-center mb-4">*/}
            {/*                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Популярный</span>*/}
            {/*                </div>*/}
            {/*                <h3 className="text-2xl font-bold text-gray-800 mb-2">Про</h3>*/}
            {/*                <div className="text-3xl font-bold text-purple-600 mb-4">$29<span className="text-lg text-gray-600">/месяц</span></div>*/}
            {/*                <ul className="space-y-3 mb-8">*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 100 видео в месяц</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4K качество</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Премиум эффекты</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Приоритетная поддержка</li>*/}
            {/*                </ul>*/}
            {/*                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">*/}
            {/*                    Выбрать план*/}
            {/*                </button>*/}
            {/*            </div>*/}

            {/*            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-lg shadow-lg">*/}
            {/*                <h3 className="text-2xl font-bold text-gray-800 mb-2">Энтерпрайз</h3>*/}
            {/*                <div className="text-3xl font-bold text-purple-600 mb-4">$99<span className="text-lg text-gray-600">/месяц</span></div>*/}
            {/*                <ul className="space-y-3 mb-8">*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Безлимитные видео</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8K качество</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Все эффекты</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> API доступ</li>*/}
            {/*                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Персональный менеджер</li>*/}
            {/*                </ul>*/}
            {/*                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">*/}
            {/*                    Связаться с нами*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Contact Section */}
            <section id="contact" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                        Готовы начать?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Присоединяйтесь к тысячам создателей контента, которые уже используют наш ИИ для создания
                        потрясающих видео
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href={yandexLink}>
                            <button
                                className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg">
                                Начать бесплатно
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">VideoAI</h3>
                            <p className="text-gray-400">Создавайте профессиональные видео с помощью искусственного
                                интеллекта</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Продукт</h4>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Возможности</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Цены</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Поддержка</h4>
                            <ul className="space-y-2">
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Документация</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Помощь</a>
                                </li>
                                <li><a href="#"
                                       className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Компания</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a>
                                </li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Карьера</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400">&copy; 2024 VideoAI. Все права защищены.</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out;
                }
            `}</style>
        </div>
    );
}