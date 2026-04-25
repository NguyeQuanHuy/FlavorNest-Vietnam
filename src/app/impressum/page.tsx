export const metadata = {
    title: 'Impressum',
    description: 'Impressum von FlavorNest Vietnam gemäß § 5 TMG.',
}

export default function ImpressumPage() {
    return (
        <main className="max-w-4xl mx-auto pt-[160px] pb-20 px-6 text-[#4B2E1A]">
            <h1 className="text-3xl font-bold mb-3">Impressum</h1>
            <p className="text-sm text-[#4B2E1A]/60 mb-10">Stand: April 2026</p>

            {/* ── Angaben gemäß § 5 TMG ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-1">
                    <p><strong>Chủ sở hữu:</strong> Quan Huy Nguyen</p>
                    <p><strong>Địa chỉ:</strong> Dr.-Salvador-Allende-Straße, 99880 Waltershausen, Deutschland</p>
                </div>
            </section>

            {/* ── Kontakt ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Kontakt</h2>
                <div className="space-y-1">
                    <p>Email: contact@flavornest.vn</p>
                    <p>Telefon: +49 123 456 789</p>
                </div>
            </section>

            {/* ── Verantwortlich nach § 18 Abs. 2 MStV ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                <div className="space-y-1">
                    <p>Quan Huy Nguyen</p>
                    <p>Dr.-Salvador-Allende-Straße</p>
                    <p>99880 Waltershausen, Deutschland</p>
                </div>
            </section>

            {/* ── EU-Streitschlichtung ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">EU-Streitschlichtung</h2>
                <p className="leading-relaxed">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D97706] underline hover:text-[#B45309]"
                    >
                        https://ec.europa.eu/consumers/odr/
                    </a>
                    . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
            </section>

            {/* ── Verbraucherstreitbeilegung ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
                <p className="leading-relaxed">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            {/* ── Haftung für Inhalte ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Haftung für Inhalte</h2>
                <p className="leading-relaxed mb-3">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                    die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="leading-relaxed">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                    bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
                    konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                    diese Inhalte umgehend entfernen.
                </p>
            </section>

            {/* ── Haftung für Links ── */}
            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">Haftung für Links</h2>
                <p className="leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                    wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                    zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
            </section>

            {/* ── Urheberrecht ── */}
            <section>
                <h2 className="text-xl font-bold mb-3">Urheberrecht</h2>
                <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
            </section>
        </main>
    )
}