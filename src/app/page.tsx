"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingCart, ExternalLink, Grid3X3, Trophy, MousePointer2, TrendingUp, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';

// --- CONFIGURAÇÕES DO DONO ---

// LISTA DE BLOCOS VENDIDOS
const SOLD_BLOCKS: any[] = [
    // Quando vender, descomente e preencha aqui:
    /*
    { 
        id: 1, 
        x: 50, y: 50, width: 40, height: 40, 
        color: 'bg-white', 
        name: 'Cliente 1', 
        link: 'https://google.com',
        image: '/cliente1.png' 
    },
    */
];

// RANKINGS
const TOP_INVESTORS = [
  { id: 1, name: 'Disponível', value: 'R$ 0' },
  { id: 2, name: 'Disponível', value: 'R$ 0' },
  { id: 3, name: 'Disponível', value: 'R$ 0' },
];

const TOP_LINKS = [
  { id: 1, name: 'SeuLink.com', clicks: '0' },
  { id: 2, name: 'Disponível', clicks: '0' },
  { id: 3, name: 'Disponível', clicks: '0' },
];

export default function PixelPage() {
  const [width, setWidth] = useState(20);
  const [height, setHeight] = useState(20);
  const [activeRankTab, setActiveRankTab] = useState<'investors' | 'links'>('investors');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ESTADO PARA EVITAR O ERRO DE HIDRATAÇÃO
  const [mounted, setMounted] = useState(false);

  // Valores
  const PIXELS_SOLD = 0;
  const TOTAL_PIXELS = 1000000;
  const PRICE_PER_PIXEL = 1; 
  const WHATSAPP_NUMBER = "5527999203006"; 

  // Ativa a renderização apenas após o carregamento do navegador
  useEffect(() => {
    setMounted(true);
  }, []);

  // Função WhatsApp Blindada
  const abrirWhatsApp = (tipo: 'compra' | 'patrocinio' | 'duvida') => {
    let mensagem = "";
    const larguraAtual = Number(width);
    const alturaAtual = Number(height);
    const totalPixels = larguraAtual * alturaAtual;
    const totalPreco = totalPixels * PRICE_PER_PIXEL;

    if (tipo === 'compra') {
        mensagem = `Olá! Quero comprar um espaço no site.\n\nTamanho: ${larguraAtual}x${alturaAtual}\nTotal de Pixels: ${totalPixels}\nValor: R$ ${totalPreco},00\n\nQual a chave PIX?`;
    } else if (tipo === 'patrocinio') {
        mensagem = "Olá! Tenho interesse em ser Patrocinador do site.";
    } else {
        mensagem = "Olá! Tenho uma dúvida sobre o projeto.";
    }

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}&v=${Date.now()}`;
    window.open(link, '_blank');
  };

  // Se não estiver montado ainda, retorna null para não quebrar a tela
  if (!mounted) return <div className="min-h-screen bg-slate-50"></div>;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform shadow-md">
              <Grid3X3 className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-900">Um Milhão de <span className="text-indigo-600">Pixels</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#comprar" className="hover:text-indigo-600 transition-colors">Comprar Espaço</a>
            <a href="#mural" className="hover:text-indigo-600 transition-colors">Ver Mural</a>
            <button 
                onClick={() => abrirWhatsApp('duvida')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-green-200 text-sm flex items-center gap-2 hover:-translate-y-0.5">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4 invert brightness-0" alt="" />
                (27) 99920-3006
            </button>
          </div>

          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-200 p-4 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
                <a href="#comprar" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-700 py-2">Comprar Bloco</a>
                <a href="#mural" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-slate-700 py-2">Ver Mural</a>
                <button onClick={() => abrirWhatsApp('duvida')} className="bg-green-500 text-white py-3 rounded-xl font-bold w-full flex justify-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-5 h-5 invert brightness-0" alt="" />
                    Chamar no WhatsApp
                </button>
            </div>
        )}
      </nav>

      {/* LAYOUT PRINCIPAL */}
      <main className="max-w-[1400px] mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* COLUNA ESQUERDA */}
            <div className="lg:col-span-9 space-y-8">
                
                {/* HERO CARD */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600"></div>
                    <div className="text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-4 border border-indigo-100">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Vendas Abertas
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
                            Faça parte da história.
                        </h1>
                        <p className="text-slate-500 text-lg max-w-lg">Garanta seu espaço vitalício no mural mais disputado da internet. Sem mensalidades.</p>
                    </div>
                    
                    <div className="flex gap-6 md:gap-8 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Disponíveis</p>
                            <p className="text-3xl font-black text-slate-900 tracking-tighter">
                                {(TOTAL_PIXELS - PIXELS_SOLD).toLocaleString()}
                            </p>
                        </div>
                        <div className="w-px bg-slate-200"></div>
                        <div className="text-center">
                            <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1">Valor Atual</p>
                            <p className="text-3xl font-black text-green-600 tracking-tighter">
                                R$ {PRICE_PER_PIXEL.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* MURAL GIGANTE */}
                <div id="mural" className="bg-slate-900 rounded-3xl p-1 md:p-4 overflow-hidden border-4 border-slate-900 shadow-2xl relative group">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur text-white px-4 py-1 rounded-full text-xs font-bold md:hidden z-20 pointer-events-none">
                        ↔ Arraste para navegar
                    </div>
                    
                    <div className="overflow-x-auto custom-scrollbar">
                        <div 
                            className="relative bg-white mx-auto shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
                            style={{ width: '1000px', height: '1000px' }} 
                        >
                            <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            
                            {/* RENDERIZAÇÃO DOS BLOCOS */}
                            {SOLD_BLOCKS.map((block: any) => (
                                <a 
                                    href={block.link} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={block.id}
                                    className={`absolute ${block.color || 'bg-white'} border border-black/10 hover:brightness-110 hover:scale-[1.02] hover:shadow-xl hover:z-50 transition-all duration-200 cursor-pointer flex items-center justify-center overflow-hidden group/block`}
                                    style={{ left: block.x, top: block.y, width: block.width, height: block.height }}
                                    title={`${block.name} - Clique para visitar`}
                                >
                                    {block.image ? (
                                        <img src={block.image} alt={block.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-[10px] font-bold text-slate-900/50 uppercase truncate px-1 select-none text-center">
                                            {block.name}
                                        </span>
                                    )}
                                </a>
                            ))}
                            
                            {/* Marca d'água de fundo (Só aparece se estiver vazio) */}
                            {SOLD_BLOCKS.length === 0 && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
                                    <span className="text-[120px] font-black uppercase -rotate-12 select-none text-center">
                                        Espaço<br/>Disponível
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* SEÇÃO DE COMPRA */}
                <div id="comprar" className="bg-indigo-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <div className="max-w-3xl mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Crie seu espaço sob medida.</h2>
                            <p className="text-indigo-200 text-lg">Use os controles abaixo para definir o formato exato.</p>
                        </div>
                        
                        <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 mb-8 shadow-inner">
                            <div className="grid md:grid-cols-2 gap-10 mb-8">
                                {/* Slider Largura */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-sm font-bold text-indigo-300 uppercase tracking-wider">Largura</label>
                                        <span className="text-2xl font-bold text-white bg-indigo-800 px-3 py-1 rounded-lg border border-indigo-700 min-w-[80px] text-center">{width}px</span>
                                    </div>
                                    <input 
                                        type="range" min="10" max="200" step="10" value={width}
                                        onChange={(e) => setWidth(Number(e.target.value))}
                                        className="w-full h-4 bg-indigo-950 rounded-full appearance-none cursor-pointer accent-green-400 hover:accent-green-300 transition-all"
                                    />
                                    <div className="flex justify-between text-xs text-indigo-400 mt-2 font-mono">
                                        <span>10px (Mín)</span>
                                        <span>200px (Máx)</span>
                                    </div>
                                </div>

                                {/* Slider Altura */}
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-sm font-bold text-indigo-300 uppercase tracking-wider">Altura</label>
                                        <span className="text-2xl font-bold text-white bg-indigo-800 px-3 py-1 rounded-lg border border-indigo-700 min-w-[80px] text-center">{height}px</span>
                                    </div>
                                    <input 
                                        type="range" min="10" max="200" step="10" value={height}
                                        onChange={(e) => setHeight(Number(e.target.value))}
                                        className="w-full h-4 bg-indigo-950 rounded-full appearance-none cursor-pointer accent-green-400 hover:accent-green-300 transition-all"
                                    />
                                    <div className="flex justify-between text-xs text-indigo-400 mt-2 font-mono">
                                        <span>10px (Mín)</span>
                                        <span>200px (Máx)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Resumo */}
                            <div className="bg-indigo-950/80 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-800/50">
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <div className="bg-slate-800/50 p-2 rounded-lg border border-white/5 border-dashed">
                                        <div 
                                            className="bg-gradient-to-br from-green-400 to-emerald-600 shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all duration-300 rounded-sm"
                                            style={{ 
                                                width: `${Math.min(width, 100)}px`, 
                                                height: `${Math.min(height, 100)}px` 
                                            }}
                                        >
                                            <div className="w-full h-full flex items-center justify-center text-[8px] text-white/50 uppercase font-bold">
                                                Logo
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-indigo-400 uppercase font-bold tracking-widest mb-1">Formato</p>
                                        <p className="font-bold text-xl text-white">{width}x{height} pixels</p>
                                    </div>
                                </div>

                                <div className="text-center md:text-right w-full md:w-auto bg-white/5 md:bg-transparent p-4 md:p-0 rounded-xl">
                                    <p className="text-[10px] text-indigo-300 uppercase font-bold tracking-widest mb-1">Total</p>
                                    <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">
                                        R$ {(width * height * PRICE_PER_PIXEL)},00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOTÃO DE COMPRA (COM WHATSAPP DINÂMICO) */}
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <button 
                                onClick={() => abrirWhatsApp('compra')}
                                className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-white text-lg font-bold px-10 py-5 rounded-full shadow-xl shadow-green-900/30 transition-all hover:-translate-y-1 hover:shadow-green-500/30 flex items-center justify-center gap-3 active:scale-95 cursor-pointer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-6 h-6 invert brightness-0" alt="" />
                                Comprar Bloco {width}x{height}
                            </button>
                            <div className="flex items-center gap-4 text-sm text-indigo-200 font-medium">
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-400" /> PIX</span>
                                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-green-400" /> Vitalício</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMO FUNCIONA */}
                <div className="grid md:grid-cols-3 gap-6 pt-8">
                    {[
                        { icon: ShoppingCart, title: '1. Escolha & Pague', desc: 'Defina o tamanho e pague via PIX no WhatsApp.' },
                        { icon: ExternalLink, title: '2. Envie os Dados', desc: 'Mande sua Logo e Link no chat.' },
                        { icon: CheckCircle2, title: '3. Publicação', desc: 'Subimos seu bloco manualmente em até 24h.' }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
                            <step.icon className="w-8 h-8 text-indigo-600 mb-2" />
                            <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-sm text-slate-500">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* SIDEBAR DIREITA */}
            <div className="lg:col-span-3 space-y-6">
                
                {/* PATROCINADOR */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute top-0 right-0 bg-white/20 backdrop-blur px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase tracking-wider">Patrocinador</div>
                    <div className="mt-6 mb-6 relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-2xl">💎</div>
                        <h3 className="text-xl font-black leading-tight">Sua Marca Aqui</h3>
                        <p className="text-blue-100 text-sm mt-2 font-medium">Domine o topo do site.</p>
                    </div>
                    <button onClick={() => abrirWhatsApp('patrocinio')} className="w-full bg-white text-blue-700 font-bold py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center gap-2">
                        Seja o Patrocinador <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* ESTATÍSTICAS */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <TrendingUp className="w-4 h-4 text-green-500" /> Performance
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Vendidos</p>
                                <p className="font-bold text-slate-800">
                                    {PIXELS_SOLD.toLocaleString()}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] font-bold text-slate-400 uppercase">Preço Base</p>
                                <p className="font-bold text-green-600">R$ 1,00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RANKINGS */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden sticky top-24">
                    <div className="flex border-b border-slate-100">
                        <button onClick={() => setActiveRankTab('investors')} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeRankTab === 'investors' ? 'text-indigo-600 bg-indigo-50/50 border-b-2 border-indigo-600' : 'text-slate-400 hover:bg-slate-50'}`}>Top Sócios</button>
                        <button onClick={() => setActiveRankTab('links')} className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-colors ${activeRankTab === 'links' ? 'text-indigo-600 bg-indigo-50/50 border-b-2 border-indigo-600' : 'text-slate-400 hover:bg-slate-50'}`}>Mais Clicados</button>
                    </div>
                    <div className="p-2">
                        {activeRankTab === 'investors' ? (
                            <ul className="space-y-1">
                                {TOP_INVESTORS.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-default">
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                                            <span className="text-sm font-bold text-slate-700">{item.name}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md border border-green-100">{item.value}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className="space-y-1">
                                {TOP_LINKS.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <MousePointer2 className="w-4 h-4 text-slate-400" />
                                            <span className="text-sm font-bold text-slate-700 truncate">{item.name}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{item.clicks}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-20 py-10 text-center">
        <p className="text-slate-500 text-sm">© 2025. Desafio 30K.</p>
      </footer>
      
      {/* BOTÃO FLUTUANTE */}
      <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 animate-bounce hover:animate-none">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-8 h-8 invert brightness-0" alt="WhatsApp" />
      </a>
    </div>
  );
}{}