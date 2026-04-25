export const metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von FlavorNest Vietnam gemäß DSGVO.',
}

export default function PrivacyPage() {
    return (
        <main className="max-w-4xl mx-auto pt-[160px] pb-20 px-6 text-[#4B2E1A]">
            <h1 className="text-3xl font-bold mb-3">Datenschutzerklärung</h1>
            <p className="text-sm text-[#4B2E1A]/60 mb-10">Stand: April 2026</p>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">1. Verantwortlicher</h2>
                <p className="leading-relaxed mb-2">
                    Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <div className="space-y-1">
                    <p>Quan Huy Nguyen</p>
                    <p>Dr.-Salvador-Allende-Straße</p>
                    <p>99880 Waltershausen, Deutschland</p>
                    <p>E-Mail: contact@flavornest.de</p>
                </div>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
                <p className="leading-relaxed">
                    Wir verarbeiten personenbezogene Daten der Nutzer unserer Website grundsätzlich nur, soweit dies zur Bereitstellung
                    einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt
                    regelmäßig nur nach Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO) oder auf Grundlage unseres berechtigten
                    Interesses (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">3. Hosting & Server-Logfiles (Vercel)</h2>
                <p className="leading-relaxed mb-3">
                    Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Beim Aufruf der Seite
                    erhebt Vercel automatisch Informationen, die der Browser des Nutzers übermittelt:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>IP-Adresse (anonymisiert)</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Aufgerufene URL und Referrer-URL</li>
                    <li>Verwendeter Browser und Betriebssystem</li>
                </ul>
                <p className="leading-relaxed">
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an stabiler und sicherer Bereitstellung).
                    Die Datenübermittlung in die USA erfolgt auf Basis der EU-Standardvertragsklauseln.
                    Datenschutzerklärung von Vercel:{' '}

                    <a
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D97706] underline hover:text-[#B45309]"
                    >
                        vercel.com/legal/privacy-policy
                    </a>
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">4. Vercel Analytics</h2>
                <p className="leading-relaxed">
                    Wir nutzen Vercel Analytics, einen cookielosen Webanalysedienst von Vercel Inc. Vercel Analytics erhebt anonymisierte
                    Nutzungsdaten (Seitenaufrufe, Geräte-Typ, ungefähre geografische Region auf Länderebene) ohne Verwendung von Cookies
                    oder Cross-Site-Tracking. Es werden keine persönlich identifizierbaren Daten gespeichert. Rechtsgrundlage ist
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der statistischen Analyse zur Verbesserung des Angebots).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">5. Google Analytics</h2>
                <p className="leading-relaxed mb-3">
                    Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street,
                    Dublin 4, Irland (&bdquo;Google&ldquo;). Google Analytics verwendet Cookies, die eine Analyse der Nutzung der Website durch Sie
                    ermöglichen. Die durch das Cookie erzeugten Informationen werden in der Regel an einen Server von Google in den USA
                    übertragen und dort gespeichert.
                </p>
                <p className="leading-relaxed mb-3">
                    Wir haben die IP-Anonymisierung aktiviert (Funktion <code>anonymizeIp</code>), sodass die IP-Adresse von Google
                    innerhalb der EU bzw. EWR zuvor gekürzt wird. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server
                    von Google in den USA übertragen und dort gekürzt.
                </p>
                <p className="leading-relaxed mb-3">
                    Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 Abs. 1 TTDSG).
                    Die Einwilligung kann jederzeit mit Wirkung für die Zukunft widerrufen werden.
                </p>
                <p className="leading-relaxed">
                    Sie können das Tracking durch Google Analytics zudem verhindern, indem Sie das Browser-Add-on installieren:{' '}

                    <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D97706] underline hover:text-[#B45309]"
                    >
                        tools.google.com/dlpage/gaoptout
                    </a>
                    . Datenschutzerklärung von Google:{' '}

                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D97706] underline hover:text-[#B45309]"
                    >
                        policies.google.com/privacy
                    </a>
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">6. Cookies und lokale Speicherung</h2>
                <p className="leading-relaxed mb-3">
                    Diese Website verwendet Cookies und Browser-LocalStorage. Technisch notwendige Speicherung (z. B. <code>fn_favorites</code>{' '}
                    für Ihre Lieblingsrezepte, <code>fn_avatar</code> für Ihr Profilbild) erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                    bzw. § 25 Abs. 2 Nr. 2 TTDSG. Diese Daten werden ausschließlich lokal in Ihrem Browser gespeichert und nicht an uns übertragen.
                </p>
                <p className="leading-relaxed">
                    Analyse-Cookies (Google Analytics) werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt. Sie können Cookies in den
                    Einstellungen Ihres Browsers jederzeit löschen oder das Setzen von Cookies generell deaktivieren.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">7. Nutzerkonto & Authentifizierung</h2>
                <p className="leading-relaxed">
                    Bei der Registrierung und Anmeldung über NextAuth verarbeiten wir Ihre E-Mail-Adresse, ggf. Name und Profilbild
                    (sofern Sie sich über einen OAuth-Anbieter anmelden). Die Daten werden ausschließlich zur Authentifizierung und
                    Bereitstellung Ihres Nutzerkontos verwendet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">8. Ihre Rechte als betroffene Person</h2>
                <p className="leading-relaxed mb-3">
                    Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                    <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                    <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                    <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                    <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                    <li>Recht auf Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p className="leading-relaxed">
                    Zudem steht Ihnen das Recht zu, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
                    personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-xl font-bold mb-3">9. Kontakt zum Datenschutz</h2>
                <p className="leading-relaxed">
                    Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung,
                    Sperrung oder Löschung von Daten sowie Widerruf erteilter Einwilligungen wenden Sie sich bitte an:{' '}

                    <a
                        href="mailto:contact@flavornest.vn"
                        className="text-[#D97706] underline hover:text-[#B45309]"
                    >
                        contact@flavornest.de
                    </a>
                </p>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-3">10. Aktualität dieser Datenschutzerklärung</h2>
                <p className="leading-relaxed">
                    Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung
                    unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
                    diese Datenschutzerklärung zu ändern.
                </p>
            </section>
        </main>
    )
}
