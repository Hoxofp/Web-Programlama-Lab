import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'
import UIKit from './pages/UIKit'

function App() {
    const [showUIKit, setShowUIKit] = useState(false)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
            {/* Skip Link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
            >
                Ana icerige atla
            </a>

            {/* Dark Mode Toggle */}
            <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
                aria-label="Tema degistir"
            >
                <span className="dark:hidden">&#9790;</span>
                <span className="hidden dark:inline">&#9728;</span>
            </button>

            {/* Header */}
            <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
                        Ahmet Mervan Erman
                    </h1>
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap gap-2">
                            <li>
                                <button
                                    onClick={() => setShowUIKit(false)}
                                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${!showUIKit
                                            ? 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    Portfolyo
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowUIKit(true)}
                                    className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${showUIKit
                                            ? 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-300'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    UI Kit
                                </button>
                            </li>
                            {!showUIKit && (
                                <>
                                    <li>
                                        <a
                                            href="#hakkimda"
                                            className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Hakkimda
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#projeler"
                                            className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Projeler
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#iletisim"
                                            className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                                        >
                                            Iletisim
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>

            {showUIKit ? (
                <UIKit />
            ) : (
                <>
                    {/* Main Content */}
                    <main id="main-content">
                        {/* Hero / Hakkımda */}
                        <section id="hakkimda" className="py-16 px-4">
                            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
                                <figure className="shrink-0">
                                    <img
                                        src="/image.png"
                                        alt="Ahmet Mervan Erman vesikalik fotografi"
                                        className="w-40 h-40 rounded-full object-cover shadow-lg"
                                    />
                                </figure>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                                        Hakkimda
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                        Merhaba! Ben Ahmet Mervan Erman, 235541061 numarali ogrenciyim.
                                        Web Tasarimi ve Programlama dersi kapsaminda modern web teknolojileri ogreniyorum.
                                        Frontend gelistirici olarak modern web teknolojileriyle kullanici dostu arayuzler olusturuyorum.
                                    </p>
                                    <ul className="flex flex-wrap gap-2" role="list" aria-label="Beceri etiketleri">
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">HTML5</li>
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">CSS3</li>
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">JavaScript</li>
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                                        <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Projelerim */}
                        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                                    Projelerim
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <Card
                                        variant="elevated"
                                        title="Proje 1: Hello World"
                                        image="https://via.placeholder.com/400x200"
                                        imageAlt="LAB-1 ekran goruntusu"
                                    >
                                        <p>LAB-1 kapsaminda yapilan ilk React projesi.</p>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">React</span>
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">Vite</span>
                                        </div>
                                    </Card>

                                    <Card
                                        variant="elevated"
                                        title="Proje 2: Semantik Portfolyo"
                                        image="https://via.placeholder.com/400x200"
                                        imageAlt="LAB-2 ekran goruntusu"
                                    >
                                        <p>LAB-2 kapsaminda yapilan semantik ve erisilebilir web sayfasi.</p>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">HTML5</span>
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">CSS3</span>
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">A11y</span>
                                        </div>
                                    </Card>

                                    <Card
                                        variant="elevated"
                                        title="Proje 3: Responsive Tasarim"
                                        image="https://via.placeholder.com/400x200"
                                        imageAlt="LAB-3 ekran goruntusu"
                                    >
                                        <p>LAB-3 kapsaminda modern CSS, Flexbox ve Grid ile responsive portfolyo.</p>
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">Flexbox</span>
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">Grid</span>
                                            <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded text-xs">Responsive</span>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </section>

                        {/* İletişim */}
                        <section id="iletisim" className="py-16 px-4">
                            <div className="max-w-lg mx-auto">
                                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                                    Iletisim
                                </h2>
                                <form className="space-y-4" action="#" method="POST" noValidate>
                                    <Input id="name" label="Ad Soyad" required placeholder="Ahmet Mervan Erman" />
                                    <Input id="email" label="E-posta" type="email" required placeholder="ornek@mail.com" />
                                    <div className="space-y-1">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                        >
                                            Mesajiniz
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            required
                                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors"
                                            placeholder="Mesajinizi buraya yazin..."
                                        />
                                    </div>
                                    <Button variant="primary" size="lg" type="submit" className="w-full">
                                        Gonder
                                    </Button>
                                </form>
                            </div>
                        </section>
                    </main>

                    {/* Footer */}
                    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
                        <p>&copy; 2025 Ahmet Mervan Erman. Tum haklari saklidir.</p>
                    </footer>
                </>
            )}
        </div>
    )
}

export default App