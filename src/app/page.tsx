import React from 'react';

// --- LISTA 1: EMPRESAS (NO QUADRO GIGANTE) ---
// Quem paga mais caro e tem logo/imagem
const pixelsVendidos = [
  {
    id: 1,
    nome: "Minha Primeira Venda",
    x: 0,      
    y: 0,      
    width: 100, 
    height: 100, 
    color: "#fff2f2ff", 
    image: "foto-thales.jpeg", 
    link: "https://www.instagram.com/thalesmylife/" 
  },
  {
    id: 2,
    nome: "D Bastos",
    x: 100,      
    y: 0,      
    width: 30, 
    height: 30, 
    color: "#fff2f2ff", 
    image: "dbastos.jpg", 
    link: "https://www.instagram.com/dbastostransporte_/" 
  },
  
  // Adicione novas empresas aqui...
];

// --- LISTA 2: APOIADORES (EMBAIXO DO QUADRO) ---
// Quem paga valores menores (só nome)
const apoiadores = [
  
  { id: 1, nome: "Thales Bastos" },
  // É só adicionar mais nomes aqui...
];

export default function Home() {
  const whatsappNumber = "5527999203006"; 
  const message = "Olá! Vi o site e quero garantir meu espaço na história.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      color: '#111',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* --- BARRA DE NAVEGAÇÃO --- */}
      <nav style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 5%', // Mais fino
        maxWidth: '1200px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ fontSize: '18px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>▦</span>
          <span>Um Milhão de <span style={{ color: '#4F46E5' }}>Pixels</span></span>
        </div>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '6px 16px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>💬</span> WhatsApp
        </a>
      </nav>

      {/* --- HERO SECTION (BEM COMPACTA AGORA) --- */}
      <section style={{
        textAlign: 'center',
        padding: '2rem 1rem 1rem 1rem', // Reduzi muito o padding
        maxWidth: '800px',
      }}>
        <h1 style={{ 
          fontSize: '2.5rem', // Um pouco menor para caber melhor
          fontWeight: '800', 
          lineHeight: '1.1', 
          marginBottom: '10px',
          color: '#111'
        }}>
          O outdoor da internet brasileira.
        </h1>

        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
          Garanta seu espaço vitalício. Pagamento único.
        </p>

        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#25D366',
            color: 'white',
            padding: '14px 32px', // Botão ainda grande, mas equilibrado
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '800',
            fontSize: '1.1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 8px 20px -5px rgba(37, 211, 102, 0.5)',
            transition: 'transform 0.2s ease',
          }}
        >
          <span>🚀</span> GARANTIR MEU PIXEL
        </a>
      </section>

      {/* --- O GRID PRINCIPAL (EMPRESAS) --- */}
      <div style={{
        padding: '10px 20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflowX: 'auto',
        marginBottom: '30px'
      }}>
        <div style={{
          width: '1000px',
          height: '1000px',
          backgroundColor: 'white',
          position: 'relative',
          backgroundImage: `
            linear-gradient(#eaeaea 1px, transparent 1px),
            linear-gradient(90deg, #eaeaea 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          border: '1px solid #ccc',
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)'
        }}>
          
          {pixelsVendidos.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.nome}
              style={{
                position: 'absolute',
                left: `${item.x}px`,
                top: `${item.y}px`,
                width: `${item.width}px`,
                height: `${item.height}px`,
                backgroundColor: item.color || '#ccc',
                backgroundImage: item.image ? `url(${item.image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
            </a>
          ))}
        </div>
      </div>

      {/* --- NOVO: SEÇÃO DE APOIADORES (NOMES) --- */}
      <section style={{
        width: '100%',
        maxWidth: '1000px',
        padding: '0 20px 40px 20px',
        textAlign: 'center'
      }}>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '700', 
          marginBottom: '20px',
          color: '#333',
          borderTop: '1px solid #ddd',
          paddingTop: '30px'
        }}>
          Apoiadores do Projeto
        </h3>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap', // Faz os nomes quebrarem linha automaticamente
          justifyContent: 'center',
          gap: '10px'
        }}>
          {apoiadores.map((apoio) => (
            <div 
              key={apoio.id}
              style={{
                backgroundColor: '#2d3748', // Cor escura tipo a da sua foto
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                border: '1px solid #4a5568'
              }}
            >
              {apoio.nome}
            </div>
          ))}
          
          {/* Botão para convidar a ser apoiador */}
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'transparent',
              color: '#4F46E5',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '600',
              border: '2px dashed #4F46E5',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            + Seu Nome Aqui
          </a>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '30px', color: '#888', fontSize: '13px', borderTop: '1px solid #eee', width: '100%' }}>
        &copy; 2025 Um Milhão de Pixels. Projeto Desafio 30 Dias.
      </footer>

    </main>
  );
}