import { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FileDown, GraduationCap, Printer } from 'lucide-react';
import { QcmPdfDocument } from './PdfDocument';
import { qcmData } from './qcm-data';

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-screen bg-slate-100 flex flex-col font-sans overflow-hidden">
      {/* Top Application Bar */}
      <header className="h-14 bg-blue-900 text-white flex items-center justify-between px-6 shadow-md z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-blue-900" />
          </div>
          <h1 className="text-lg font-semibold tracking-tight">Générateur de Recueils EMD <span className="opacity-60 text-sm font-normal hidden sm:inline">| Médecine Dentaire</span></h1>
        </div>
        <div className="flex gap-4">
          <button className="hidden sm:flex items-center gap-2 bg-blue-800 hover:bg-blue-700 px-4 py-1.5 rounded text-sm transition-colors">
            <Printer className="w-4 h-4" /> Aperçu Avant Impression
          </button>
          
          {isClient && (
            <PDFDownloadLink
              document={<QcmPdfDocument />}
              fileName="QCM_Anatomie_Medecine_Dentaire.pdf"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-1.5 rounded text-sm font-bold transition-colors"
            >
              {({ loading }) => (
                <>
                  <FileDown className="w-4 h-4" />
                  {loading ? 'Génération...' : 'Télécharger PDF'}
                </>
              )}
            </PDFDownloadLink>
          )}
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
      {/* Sidebar Controls */}
        <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 shrink-0 overflow-y-auto hidden lg:flex">
          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Paramètres du Document</h2>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-600">Module / Cours</label>
                <select className="border border-slate-300 rounded p-2 text-sm bg-slate-50">
                  <option>Anatomie Cervico-Faciale</option>
                  <option>Odontologie Conservatrice</option>
                  <option>Parodontologie</option>
                  <option>Chirurgie Buccale</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-600">Nombre de Questions</label>
                <input type="number" readOnly value="60" className="border border-slate-300 rounded p-2 text-sm bg-slate-50 cursor-not-allowed text-slate-500" />
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200"></div>

          <div>
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Statistiques</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                <div className="text-xl font-bold text-blue-900">60</div>
                <div className="text-[10px] text-slate-500">QCM Total (Généré)</div>
              </div>
              <div className="bg-slate-50 p-3 rounded border border-slate-100">
                <div className="text-xl font-bold text-green-600">100%</div>
                <div className="text-[10px] text-slate-500">Corrigés</div>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-blue-50 border border-blue-100 p-4 rounded">
            <p className="text-[11px] text-blue-800 leading-relaxed">
              <strong>Note:</strong> Ce recueil affiche un aperçu de 20 questions ultra-réalistes créées sur-mesure. Le document PDF final génère l'ensemble des questions demandées (<strong>60 QCMs</strong>) afin de correspondre au format d'examen exigé.
            </p>
          </div>
        </aside>

      {/* Document Preview Area */}
        <main className="flex-1 p-4 sm:p-8 bg-slate-200 flex justify-center overflow-y-auto">
        {/* A4 Page Simulation */}
          <div className="w-full max-w-[700px] bg-white shadow-2xl p-6 sm:p-10 flex flex-col min-h-full">
          {/* Page Header */}
            <div className="flex flex-col items-center mb-6 text-center border-b pb-4 border-slate-200">
              <div className="w-12 h-12 bg-slate-100 rounded-full mb-3 flex items-center justify-center border border-slate-300 text-slate-400">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h1 className="text-blue-900 font-bold text-lg uppercase tracking-tight">QCM — Anatomie Cervico-Faciale</h1>
              <p className="text-slate-600 text-xs font-medium uppercase mt-1">Niveau Examen Médecine Dentaire (EMD)</p>
              <div className="w-48 h-[1px] bg-slate-900 my-3"></div>
            </div>

          {/* QCM Section */}
            <div className="flex-1">
              {qcmData.map((qcm) => {
                const correctLetters = qcm.options.filter(o => o.isCorrect).map(o => o.letter).join(', ');

                return (
                  <div key={qcm.id} className="mb-6 pb-6 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
                    <h3 className="text-blue-700 font-bold text-sm mb-2">QCM {qcm.id}. {qcm.question}</h3>
                    
                    {qcm.vignette && (
                      <p className="italic bg-yellow-50 text-yellow-800 text-[11px] p-2 mb-3 border-l-2 border-yellow-200 leading-relaxed">
                        Vignette clinique : {qcm.vignette}
                      </p>
                    )}
                    
                    <div className="grid grid-cols-1 gap-1 text-xs mb-3">
                      {qcm.options.map((opt) => (
                        <p key={opt.letter}><span className="font-bold">{opt.letter}.</span> {opt.text}</p>
                      ))}
                    </div>
                    
                    <div className="bg-green-50 border border-green-100 p-3 rounded">
                      <p className="text-green-700 font-bold text-[11px] mb-1">Réponse : {correctLetters}</p>
                      <div className="space-y-1.5 mt-2">
                        {qcm.options.map(opt => (
                          <div key={opt.letter} className="text-green-800 text-[10px] leading-relaxed italic">
                            <span className="font-bold">{opt.letter} :</span> {opt.justification}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          {/* Page Footer */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 border-t pt-4 mt-8">
              <div>Faculté de Médecine Dentaire</div>
              <div className="italic hidden sm:block">Recueil de QCM Officiel</div>
              <div>EMD - Anatomie</div>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom Status Bar */}
      <footer className="h-8 bg-slate-800 text-slate-400 flex items-center px-4 text-[10px] justify-between shrink-0">
        <div className="flex gap-4">
          <span className="hidden sm:inline">Mode: Édition Professionnelle</span>
          <span>Format: A4 Standard</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Document Prêt</span>
          <span className="hidden sm:inline">Zoom: 100%</span>
        </div>
      </footer>
    </div>
  );
}
