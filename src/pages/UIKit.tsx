import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                UI Kit
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
                Tum component varyantlari tek bir sayfada sergilenmektedir.
            </p>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Buttons
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    4 renk varyanti: primary, secondary, danger, ghost
                </p>
                {/* Varyant 1-4: Renk varyantlari */}
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    3 boyut varyanti: sm, md, lg
                </p>
                {/* Boyut varyantlari */}
                <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Disabled durumu
                </p>
                {/* Disabled */}
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary" disabled>
                        Disabled Primary
                    </Button>
                    <Button variant="danger" disabled>
                        Disabled Danger
                    </Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Inputs
                </h2>
                {/* Varyant 5: Normal */}
                <Input
                    id="ui-name"
                    label="Normal Input"
                    placeholder="Bir sey yazin..."
                />
                {/* Varyant 6: Hatali */}
                <Input
                    id="ui-err"
                    label="Hatali Input"
                    error="Bu alan zorunludur"
                />
                {/* Varyant 7: Help text */}
                <Input
                    id="ui-help"
                    label="Help Text"
                    type="email"
                    helpText="E-posta adresinizi girin"
                />
                {/* Varyant 8: Disabled */}
                <Input
                    id="ui-dis"
                    label="Disabled"
                    disabled
                    value="Duzenlenemez"
                />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Cards
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Elevated */}
                    <Card variant="elevated" title="Elevated Card">
                        <p>Golge ile yukseltilmis kart.</p>
                    </Card>
                    {/* Outlined */}
                    <Card variant="outlined" title="Outlined Card">
                        <p>Cerceveli kart.</p>
                    </Card>
                    {/* Filled with footer */}
                    <Card
                        variant="filled"
                        title="Filled Card"
                        footer={<Button size="sm">Detay</Button>}
                    >
                        <p>Dolgulu arka plan ve footer.</p>
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    Alerts
                </h2>
                <Alert variant="info" title="Bilgi">
                    Bilgilendirme mesaji.
                </Alert>
                <Alert variant="success" title="Basarili">
                    Islem tamamlandi.
                </Alert>
                <Alert variant="warning" title="Uyari">
                    Dikkat edilmesi gereken durum.
                </Alert>
                <Alert variant="error" title="Hata" dismissible>
                    Bir hata olustu. Bu alert kapatilabilir.
                </Alert>
            </section>
        </div>
    )
}
