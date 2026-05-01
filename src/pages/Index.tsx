import { MessageCircle, Phone, CircleCheck as CheckCircle2, MapPin, Warehouse, Factory, Store, Truck, Clock, Shield, Zap, TrendingUp, Star, TriangleAlert as AlertTriangle, Mail, Instagram, Globe } from "lucide-react";
import heroImg from "@/assets/hero-galpao.jpg";
import brazImg from "@/assets/corretor-braz.jpg";
import brazPhoneImg from "@/assets/ligue-para-corretor-bras-especialista-em-galpoes-comerciais-em-praia-grande.png";
import internoImg from "@/assets/galpao-interno.jpg";
import marginalImg from "@/assets/regiao-marginal.jpg";

// DADOS DO CORRETOR BRAZ MOTA
const BRAZ = {
  nome: "Braz Mota",
  creci: "CRECI 214.943",
  telefone: "(13) 99670-0802",
  telefoneFixo: "(13) 3302-8191",
  whatsappNumero: "5513996700802",
  email: "braz@vendebens.com.br",
  instagram: "@brazmota",
  endereco: "Rua Honduras, 855 - 5º Andar - Guilhermina, Praia Grande/SP",
};

const waLink = (msg: string) =>
  `https://wa.me/${BRAZ.whatsappNumero}?text=${encodeURIComponent(msg)}`;

const CTAWhats = ({ children, message, className = "", size = "md" }: { children: React.ReactNode; message: string; className?: string; size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: "px-5 py-3 text-sm",
    md: "px-7 py-4 text-base",
    lg: "px-10 py-6 text-lg md:text-xl",
  };
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 bg-whatsapp text-whatsapp-foreground font-black uppercase tracking-wide border-2 border-foreground shadow-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-smooth ${sizes[size]} ${className}`}
    >
      <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
      {children}
    </a>
  );
};

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-16 md:py-24 px-4 ${className}`}>
    <div className="container mx-auto max-w-6xl">{children}</div>
  </section>
);

const Index = () => {
  const mensagemPadrao = "Olá Braz! Vi o site e quero informações sobre galpão em Praia Grande.";

  return (
    <div className="min-h-screen bg-background">
      {/* TOP BAR URGENTE */}
      <div className="bg-destructive text-destructive-foreground text-xs md:text-sm font-bold overflow-hidden border-b-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 shrink-0">
              <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> ATENÇÃO: Galpões disponíveis SAINDO RÁPIDO na Marginal da Piaçaguera</span>
              <span>•</span>
              <span>Av. Kennedy: só restam 3 pontos comerciais</span>
              <span>•</span>
              <span>Ligue AGORA com o Braz: {BRAZ.telefone}</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Resposta em até 5 minutos no WhatsApp</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-foreground text-primary border-b-4 border-primary">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center font-black text-xl border-2 border-primary">G</div>
            <div>
              <div className="font-black text-sm md:text-base leading-tight">GALPÃO EM PRAIA GRANDE</div>
              <div className="text-[10px] md:text-xs text-primary/70 font-medium">com Corretor Braz • {BRAZ.creci}</div>
            </div>
          </a>
          <CTAWhats size="sm" message={mensagemPadrao} className="hidden md:inline-flex">
            FALAR NO WHATS
          </CTAWhats>
          <a href={waLink(mensagemPadrao)} target="_blank" rel="noopener noreferrer" className="md:hidden bg-whatsapp text-whatsapp-foreground p-2 border-2 border-primary">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-background overflow-hidden border-b-4 border-foreground">
        <img src={heroImg} alt="Galpão logístico em Praia Grande SP na marginal da expressa sul" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-black text-xs md:text-sm uppercase mb-6 border-2 border-foreground shadow-bold">
              <Star className="w-4 h-4 fill-current" /> Melhor Chamar o Braz!
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 uppercase text-foreground">
              Galpão para Alugar em <span className="bg-primary text-primary-foreground px-2 inline-block">Praia Grande SP</span> — Marginal Sul, Av. Kennedy e Zona Industrial
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl font-medium">
              Você precisa de um <strong>galpão logístico, industrial ou ponto comercial em Praia Grande</strong>? Na continuação da Rodovia dos Imigrantes, na Marginal da Piaçaguera ou na Avenida Kennedy? Eu, <strong>corretor Braz Mota</strong>, resolvo pra você. Rápido, sem enrolação e com os melhores contratos da Baixada Santista.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CTAWhats size="lg" message={`${mensagemPadrao} Tenho interesse em galpões na Marginal/Av. Kennedy.`} className="animate-pulse-urgent">
                QUERO FALAR COM O BRAZ AGORA
              </CTAWhats>
              <a href={`tel:+5513996700802`} className="inline-flex items-center gap-3 bg-foreground text-primary font-black uppercase px-8 py-6 border-2 border-foreground shadow-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-smooth">
                <Phone className="w-5 h-5" /> {BRAZ.telefone}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-foreground/80 font-semibold">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Resposta em 5 minutos</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {BRAZ.creci}</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Compra • Venda • Aluga • Permuta</div>
            </div>
          </div>
        </div>
        <div className="tape h-4 w-full relative" aria-hidden />
      </section>

      {/* BENEFÍCIOS RÁPIDOS */}
      <Section className="bg-primary text-primary-foreground border-b-4 border-foreground">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: "Resposta em 5min", desc: "Mandou mensagem, Braz responde. Fim." },
            { icon: Shield, title: "Contratos Blindados", desc: "Seu aluguel, seu CNPJ, seu pescoço. Protegidos." },
            { icon: TrendingUp, title: "Melhor m² da Região", desc: "Marginal Sul e Kennedy com preço que fecha." },
            { icon: MapPin, title: "Só Praia Grande SP", desc: "Eu conheço cada rua. Literalmente." },
          ].map((b, i) => (
            <div key={i} className="bg-foreground text-primary p-6 border-2 border-foreground shadow-bold-yellow">
              <b.icon className="w-10 h-10 mb-3 text-primary" strokeWidth={2} />
              <h3 className="font-black text-xl uppercase mb-2">{b.title}</h3>
              <p className="text-primary/80 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE - INTRODUÇÃO SEO */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">O Especialista</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Precisa de um Galpão em Praia Grande? <span className="text-accent">Melhor Chamar o Braz.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Se você está procurando <strong>galpão para alugar em Praia Grande</strong>, ponto comercial estratégico na <strong>Avenida Kennedy</strong>, depósito logístico na <strong>marginal da expressa sul</strong> (continuação da Rodovia dos Imigrantes) ou espaço industrial em zonas comerciais da cidade — você chegou no lugar certo. Eu sou o <strong>Braz, corretor de imóveis comerciais em Praia Grande SP</strong> com mais de uma década fechando negócios na Baixada Santista.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Locação de galpões logísticos, aluguel de galpões industriais, venda de pontos comerciais, terrenos para construção de centros de distribuição, lojas de rua, salões comerciais em avenidas movimentadas, espaços para indústria leve e pesada, e-commerce, transportadoras, oficinas, distribuidoras. Se o negócio é em <strong>Praia Grande</strong>, eu tenho o imóvel. E se ainda não tenho, eu acho em 48 horas.
            </p>
            <CTAWhats size="lg" message={`${mensagemPadrao} Quero conhecer o portfólio do Braz.`}>
              Quero Ver Os Galpões Disponíveis
            </CTAWhats>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-6 py-3 font-black uppercase z-10 border-2 border-foreground shadow-bold rotate-[-3deg]">
              Corretor Braz
            </div>
            <img src={brazImg} alt="Corretor Braz especialista em galpões em Praia Grande" className="w-full border-4 border-foreground shadow-bold" loading="lazy" width={1024} height={1280} />
            <div className="absolute -bottom-4 -right-4 bg-foreground text-primary px-6 py-3 font-black uppercase border-2 border-foreground shadow-bold rotate-[2deg]">
              {BRAZ.creci}
            </div>
          </div>
        </div>
      </Section>

      {/* REGIÕES ATENDIDAS */}
      <Section id="regioes" className="bg-foreground text-primary">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-primary">Territórios do Braz</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
            Onde Você Vai Encontrar Seu <span className="text-primary">Galpão Perfeito</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Esqueça a praia. Aqui o assunto é <strong>logística, indústria e comércio pesado</strong>. As regiões mais estratégicas de Praia Grande para o seu negócio decolar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Marginal da Expressa Sul",
              desc: "Continuação direta da Rodovia dos Imigrantes. Galpões logísticos em Praia Grande com acesso privilegiado a São Paulo capital, ABC e Porto de Santos. Locação de galpão na marginal Piaçaguera com pé-direito alto, docas, pátio de manobra e segurança 24h. Ideal para transportadoras, distribuidoras, e-commerce, centros de distribuição (CDs) e armazéns gerais.",
              tag: "LOGÍSTICA TOP"
            },
            {
              title: "Avenida Kennedy",
              desc: "A avenida comercial mais movimentada de Praia Grande. Pontos comerciais na Av. Kennedy para aluguel: lojas de rua, galerias, salões comerciais, espaços para franquias, clínicas, restaurantes, showrooms automotivos e conveniências. Alto fluxo de carros e pedestres, visibilidade premium para sua marca.",
              tag: "COMÉRCIO FORTE"
            },
            {
              title: "Zona Industrial de Praia Grande",
              desc: "Galpões industriais em Praia Grande para indústria leve e pesada: metalúrgicas, confecções, alimentos, químicos leves, gráficas, marcenarias. Imóveis industriais com energia trifásica, estrutura robusta, boa pé-direito, ventilação e documentação regularizada — CAR, CVS, AVCB e alvará.",
              tag: "INDÚSTRIA"
            },
            {
              title: "Rodovia dos Imigrantes (trecho final)",
              desc: "Aluguel de galpão na Imigrantes Praia Grande: o corredor logístico mais eficiente ligando a capital ao litoral. Imóveis com acesso direto a Cubatão, Santos, São Vicente e Mongaguá. Perfeitos para operações JIT (just in time), cross-docking e fulfillment.",
              tag: "CORREDOR SP-LITORAL"
            },
            {
              title: "Zonas Comerciais (Boqueirão, Tupi, Vila Sônia)",
              desc: "Pontos comerciais em Praia Grande nos bairros com mais movimento de comércio local: lojas para alugar, salões térreos, depósitos urbanos, mini galpões para estoque, pet shops, materiais de construção, autopeças, supermercados de bairro e franquias.",
              tag: "COMÉRCIO URBANO"
            },
            {
              title: "Acessos Logísticos Estratégicos",
              desc: "Galpões perto da entrada de Praia Grande, saída da Imigrantes, acesso ao Padre Manoel da Nóbrega e interligação com Guarujá via travessia. Transportadoras e empresas de entrega rápida encontram aqui a base operacional ideal para atender toda a Baixada Santista.",
              tag: "MULTIMODAL"
            },
          ].map((r, i) => (
            <div key={i} className="bg-background text-foreground p-6 border-2 border-primary shadow-bold-yellow hover:translate-x-[-4px] hover:translate-y-[-4px] transition-smooth">
              <div className="inline-block bg-primary text-primary-foreground px-2 py-1 text-[10px] font-black uppercase mb-3 border border-foreground">{r.tag}</div>
              <h3 className="text-xl font-black uppercase mb-3 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAWhats size="lg" message={`${mensagemPadrao} Quero galpão em região específica.`}>
            Me Diz Qual Região Você Quer
          </CTAWhats>
        </div>
      </Section>

      {/* TIPOS DE IMÓVEIS */}
      <Section id="tipos">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-accent-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Catálogo Completo</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
            Todo Tipo de Galpão e Ponto Comercial em Praia Grande
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Do mini galpão de 200m² até o centro de distribuição de 10.000m². Do ponto comercial de esquina na Kennedy ao complexo industrial na marginal. Tá tudo aqui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Warehouse, title: "Galpão Logístico em Praia Grande", items: ["Galpão com docas de carga e descarga", "Galpão com pé-direito alto (8m, 10m, 12m)", "Galpão com pátio de manobra para carretas", "Galpão com sistema de combate a incêndio", "Galpão para centro de distribuição (CD)", "Galpão para e-commerce e fulfillment", "Galpão para transportadora e logística reversa", "Galpão com escritório administrativo integrado"] },
            { icon: Factory, title: "Galpão Industrial em Praia Grande", items: ["Galpão industrial com energia trifásica 220/380v", "Galpão industrial com alta carga elétrica", "Galpão para indústria química leve", "Galpão para indústria alimentícia", "Galpão para metalúrgica e usinagem", "Galpão para confecção e têxtil", "Galpão com AVCB e alvará de funcionamento", "Galpão industrial com laudo ambiental regularizado"] },
            { icon: Store, title: "Pontos Comerciais em Praia Grande", items: ["Loja de rua na Avenida Kennedy", "Salão comercial térreo com vitrine", "Ponto para franquia de fast food", "Ponto para clínica médica e odontológica", "Ponto para academia e estúdio fitness", "Ponto para supermercado e mercado de bairro", "Ponto para loja de materiais de construção", "Ponto para concessionária e showroom automotivo"] },
            { icon: Truck, title: "Terrenos e Áreas Industriais", items: ["Terreno industrial em Praia Grande para construção", "Terreno comercial na Av. Kennedy", "Área para built-to-suit (BTS)", "Gleba para galpão logístico sob medida", "Terreno com zoneamento industrial", "Terreno com acesso para carretas", "Área para pátio de containers e estacionamento", "Lote para posto de combustível e conveniência"] },
          ].map((cat, i) => (
            <div key={i} className="bg-background border-2 border-foreground shadow-bold p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary text-primary-foreground p-3 border-2 border-foreground">
                  <cat.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <CTAWhats size="sm" message={`${mensagemPadrao} Interesse: ${cat.title}.`} className="mt-5 w-full justify-center">
                Quero Esse Tipo
              </CTAWhats>
            </div>
          ))}
        </div>
      </Section>

      {/* FAIXA CHAMATIVA */}
      <div className="bg-gradient-urgent py-8 border-y-4 border-foreground">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-foreground">
            <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight">Tá Na Dúvida? <span className="block md:inline">Liga pro Braz.</span></h3>
            <p className="font-bold">Análise do seu perfil + sugestão do galpão ideal. Sem compromisso.</p>
          </div>
          <CTAWhats size="lg" message={`${mensagemPadrao} Quero análise gratuita.`} className="animate-pulse-urgent">
            CHAMAR O BRAZ AGORA
          </CTAWhats>
        </div>
      </div>

      {/* SEÇÃO TEXTO SEO MASSIVO */}
      <Section id="conteudo" className="bg-muted">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <img src={internoImg} alt="Interior de galpão logístico para alugar em Praia Grande na marginal" className="w-full h-64 object-cover border-2 border-foreground shadow-bold" loading="lazy" width={1280} height={960} />
          <img src={marginalImg} alt="Galpão na marginal da Rodovia dos Imigrantes Praia Grande" className="w-full h-64 object-cover border-2 border-foreground shadow-bold" loading="lazy" width={1280} height={800} />
          <img src={heroImg} alt="Zona industrial de Praia Grande vista aérea com galpões" className="w-full h-64 object-cover border-2 border-foreground shadow-bold" loading="lazy" width={1920} height={1080} />
        </div>

        <article className="prose prose-lg max-w-none text-foreground">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Por Que Alugar Galpão em Praia Grande SP É o Melhor Negócio da Baixada Santista</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Praia Grande</strong> deixou de ser só a cidade do verão e virou um dos polos logísticos e comerciais mais estratégicos do litoral paulista. Com acesso direto pela <strong>Rodovia dos Imigrantes</strong>, ligação com Santos, Cubatão, São Vicente, Mongaguá e Itanhaém, e uma malha viária que inclui a <strong>marginal da expressa sul</strong>, a <strong>Avenida Kennedy</strong> e a <strong>Avenida Presidente Castelo Branco</strong>, a cidade se consolidou como endereço obrigatório para quem precisa de um <strong>galpão logístico, industrial ou ponto comercial</strong> de alto padrão. Se você quer <strong>alugar galpão em Praia Grande</strong>, precisa falar com quem conhece cada metro quadrado: o corretor Braz.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A demanda por <strong>galpões para aluguel em Praia Grande</strong> explodiu nos últimos anos com o crescimento do e-commerce, das transportadoras que atendem o Porto de Santos e da expansão das indústrias leves na Baixada Santista. Empresas como transportadoras, distribuidoras, operadores logísticos 3PL, centros de distribuição regionais, fulfillment de marketplaces, indústrias de alimentos, confecções e metalúrgicas procuram <strong>galpões na marginal da Piaçaguera</strong>, <strong>galpões na continuação da Imigrantes</strong> e <strong>galpões na Av. Kennedy</strong> porque essas regiões oferecem o equilíbrio perfeito entre custo de locação, acesso rodoviário, disponibilidade de mão de obra e segurança patrimonial.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Galpão Logístico em Praia Grande: Marginal da Expressa Sul é Referência</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong>marginal da expressa sul em Praia Grande</strong>, que é a continuação natural da <strong>Rodovia dos Imigrantes</strong> em direção ao litoral, é hoje o corredor logístico mais cobiçado da região. <strong>Galpões para alugar na marginal Imigrantes Praia Grande</strong> oferecem docas niveladas, pé-direito alto (de 8 a 12 metros), pátio para manobra de carretas 45 pés, portaria 24h, sistema de combate a incêndio (sprinklers), AVCB regularizado, energia trifásica de alta carga, escritórios administrativos integrados e total flexibilidade de layout. É o tipo de <strong>aluguel de galpão em Praia Grande</strong> ideal para centros de distribuição, operadores logísticos, transportadoras rodoviárias, e-commerce e empresas de fulfillment que atendem Santos, Guarujá, São Vicente, Praia Grande e o ABC paulista.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Entre os principais diferenciais dos <strong>galpões na marginal Piaçaguera</strong> estão: proximidade imediata com o <strong>Porto de Santos</strong> (um dos maiores da América Latina), acesso direto ao sistema Anchieta-Imigrantes, ligação com a Rodovia Padre Manoel da Nóbrega rumo ao sul do litoral, estacionamento amplo para frota, instalações prontas para operação 24 horas e contratos de locação flexíveis (típicos e atípicos build-to-suit). O <strong>corretor Braz</strong> trabalha com proprietários diretos de <strong>galpões na Imigrantes Praia Grande</strong> e consegue condições que portais comuns de imóveis não oferecem.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Ponto Comercial na Avenida Kennedy: Visibilidade Que Vende Sozinha</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A <strong>Avenida Kennedy em Praia Grande</strong> é a artéria comercial mais importante da cidade. Alugar um <strong>ponto comercial na Av. Kennedy Praia Grande</strong> significa colocar sua marca na rota diária de milhares de moradores e visitantes. <strong>Lojas para alugar na Kennedy</strong>, <strong>salões comerciais na Avenida Kennedy</strong>, <strong>pontos para franquia na Kennedy Praia Grande</strong>, espaços para clínicas, academias, restaurantes, cafeterias, pet shops, lojas de materiais de construção, autopeças, concessionárias, escolas de idiomas, franquias de fast food e centros médicos — tudo isso está disponível no portfólio do Braz.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Além da Kennedy, Praia Grande tem outras zonas comerciais fortes: <strong>Avenida Presidente Castelo Branco</strong>, <strong>Avenida Brasil</strong>, bairros comerciais como <strong>Boqueirão, Tupi, Vila Sônia, Mirim, Guilhermina, Ocian, Antártica, Caiçara, Real e Solemar</strong>, onde também é possível alugar <strong>salas comerciais</strong>, <strong>lojas térreas</strong>, <strong>salões de esquina</strong> e <strong>mini galpões urbanos</strong> para estoque de pequenas empresas e distribuidoras locais.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Galpão Industrial em Praia Grande: Infraestrutura Pronta Para Produzir</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Para quem busca <strong>galpão industrial para alugar em Praia Grande</strong>, a cidade oferece áreas com zoneamento apropriado, infraestrutura elétrica robusta (trifásica 220/380v, subestações próprias), abastecimento de água industrial, rede de esgoto, facilidade de licenciamento ambiental (CETESB) e proximidade com a mão de obra qualificada da Baixada Santista. <strong>Galpões industriais em Praia Grande SP</strong> atendem metalúrgicas, indústrias alimentícias, confecções, gráficas, marcenarias, fábricas de embalagens, envase, montadoras de móveis planejados, indústria náutica (produtos para esporte e lazer marítimo) e muito mais.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Por Que Falar Com o Corretor Braz Antes de Qualquer Portal de Imóveis</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Portal de imóveis mostra o que todo mundo já viu. O <strong>Braz</strong> mostra o que ninguém mostra: o <strong>galpão em Praia Grande</strong> que o proprietário ainda nem anunciou, o <strong>ponto comercial na Kennedy</strong> que vai vencer contrato em 30 dias, o <strong>galpão logístico na marginal</strong> que vai entrar em reforma e pode ser alugado pronto pra você. Informação privilegiada, rede de relacionamento consolidada com proprietários, construtores, advogados imobiliários, despachantes e contadores. É assim que se fecha negócio bom na <strong>Baixada Santista</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Com mais de dez anos no mercado imobiliário de Praia Grande e região, o <strong>corretor Braz</strong> é o especialista em <strong>locação de galpões em Praia Grande</strong>, <strong>venda de galpões em Praia Grande</strong>, <strong>aluguel de pontos comerciais em Praia Grande</strong> e intermediação de <strong>terrenos industriais em Praia Grande</strong>. Registro {BRAZ.creci}. Atendimento pessoal, resposta rápida pelo WhatsApp, visita guiada ao imóvel, análise documental completa (matrícula atualizada, IPTU, habite-se, AVCB, alvará, laudo ambiental) e acompanhamento da negociação até a assinatura do contrato. Do primeiro "oi" até a chave na sua mão.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Mercado Imobiliário Comercial e Industrial em Praia Grande: O Cenário Atual</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O preço médio do <strong>aluguel de galpão em Praia Grande</strong> varia conforme localização, metragem, pé-direito, ano de construção, instalações disponíveis e tipo de contrato. Galpões na <strong>marginal da expressa sul</strong> tendem a ter valor de m² superior aos galpões em bairros industriais mais afastados, justamente pela logística privilegiada. Pontos comerciais na <strong>Av. Kennedy</strong> também praticam valores premium em função da visibilidade e do fluxo de pessoas. Por outro lado, bairros como Vila Sônia, Tupi, Boqueirão e Caiçara oferecem opções mais acessíveis de <strong>salões comerciais e mini galpões</strong> para empresas em início de expansão.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A previsão do mercado para os próximos anos é de valorização contínua dos <strong>imóveis comerciais e industriais em Praia Grande</strong>, impulsionada pelo crescimento do e-commerce brasileiro, pela expansão do Porto de Santos, pelas obras de duplicação da Padre Manoel da Nóbrega, pela nova travessia Santos-Guarujá e pelo aumento da demanda por centros de distribuição regionais que atendam a Baixada Santista e o Vale do Ribeira. Quem alugar agora vai pagar menos. Quem deixar para o ano que vem vai bater no peito. Fica a dica do Braz.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Termos Que Você Provavelmente Procurou no Google — e Aqui Tem Tudo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            galpão para alugar praia grande sp • galpão logístico praia grande • galpão industrial praia grande • ponto comercial praia grande kennedy • aluguel de galpão na marginal imigrantes praia grande • galpão continuação da imigrantes • galpão expressa sul praia grande • galpão piaçaguera praia grande • loja para alugar av kennedy praia grande • salão comercial kennedy praia grande • galpão com docas praia grande • galpão pé direito alto baixada santista • galpão com pátio de manobra praia grande • galpão para transportadora praia grande • galpão para e-commerce praia grande • galpão para centro de distribuição praia grande • cd em praia grande • fulfillment praia grande • galpão para metalúrgica praia grande • galpão para indústria alimentícia praia grande • galpão com avcb praia grande • galpão com alvará praia grande • galpão zoneamento industrial praia grande • terreno industrial praia grande • terreno para construir galpão praia grande • built to suit praia grande • bts praia grande • galpão atípico praia grande • locação atípica praia grande • ponto para franquia praia grande • ponto para fast food kennedy • ponto para clínica praia grande • ponto para academia praia grande • ponto para restaurante praia grande • ponto para pet shop praia grande • ponto para supermercado praia grande • ponto para concessionária praia grande • loja de rua praia grande • salão térreo com vitrine praia grande • sala comercial praia grande • escritório comercial praia grande • imóvel comercial praia grande • imóvel industrial praia grande • imobiliária comercial praia grande • corretor de galpões praia grande • corretor especialista em galpões baixada santista • corretor braz praia grande • aluguel comercial praia grande • locação comercial baixada santista • galpão santos e praia grande • galpão cubatão praia grande • galpão são vicente praia grande • galpão mongaguá praia grande • galpão guarujá praia grande • galpão para alugar perto do porto de santos • galpão rodovia padre manoel da nóbrega • galpão anchieta imigrantes litoral • galpão logístico baixada santista • armazém geral praia grande • depósito para alugar praia grande • mini galpão praia grande • galpão 200m² praia grande • galpão 500m² praia grande • galpão 1000m² praia grande • galpão 2000m² praia grande • galpão 5000m² praia grande • galpão 10000m² praia grande • galpão boqueirão praia grande • galpão tupi praia grande • galpão vila sônia praia grande • galpão mirim praia grande • galpão caiçara praia grande • galpão solemar praia grande • galpão ocian praia grande • galpão guilhermina praia grande • galpão real praia grande • galpão antártica praia grande • comprar galpão em praia grande • vender galpão em praia grande • investir em galpão logístico praia grande • investimento imobiliário praia grande • retorno sobre investimento galpão • galpão pronto para ocupar praia grande • galpão novo praia grande • galpão reformado praia grande • galpão com escritório praia grande • galpão com refeitório praia grande • galpão com vestiário praia grande • galpão com estacionamento praia grande • galpão com portaria 24h praia grande • galpão com segurança patrimonial praia grande • galpão com monitoramento praia grande • galpão com energia trifásica praia grande • galpão com alta carga elétrica praia grande • galpão com subestação praia grande • galpão para oficina praia grande • galpão para autopeças praia grande • galpão para concessionária praia grande • galpão para material de construção praia grande • galpão para distribuidora de bebidas praia grande • galpão para distribuidora de alimentos praia grande • galpão para embalagens praia grande • galpão para gráfica praia grande • galpão para confecção praia grande • galpão para têxtil praia grande • galpão para marcenaria praia grande • galpão para móveis planejados praia grande • galpão para produtos náuticos praia grande • galpão para pesca e caça praia grande • galpão para suprimentos industriais praia grande • galpão com documentação regularizada praia grande • galpão com matrícula atualizada praia grande • galpão com habite-se praia grande • galpão com licença ambiental praia grande • galpão com cetesb praia grande • corretor imóveis comerciais praia grande • imobiliária galpões praia grande • especialista em locação comercial praia grande • negociador de contrato comercial praia grande • consultoria imobiliária comercial praia grande • análise de risco locatício praia grande • contrato locação atípica galpão • fiança bancária galpão praia grande • seguro fiança galpão praia grande • caução galpão praia grande • laudo de avaliação galpão praia grande • avaliação imobiliária comercial praia grande • perícia imobiliária praia grande • assessoria jurídica locação praia grande • advocacia imobiliária praia grande • regularização de galpão praia grande • averbação de construção praia grande • alvará de funcionamento praia grande • taxas e impostos galpão praia grande • iptu comercial praia grande • itbi galpão praia grande.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            É muita coisa. E é justamente por isso que você precisa do <strong>Braz</strong>. Em vez de ficar pulando de portal em portal, filtrando, ligando pra dez corretores diferentes e recebendo foto antiga de galpão que já foi alugado — você manda uma mensagem, explica o que precisa (metragem, localização preferida, tipo de operação, orçamento de aluguel, prazo de ocupação) e o Braz volta com uma seleção curada de imóveis que fazem sentido pro seu negócio. Simples assim. Tempo é dinheiro, e em locação comercial tempo perdido é oportunidade perdida.
          </p>
        </article>

        <div className="mt-10 p-8 bg-foreground text-primary border-2 border-foreground shadow-bold text-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4">Chega de Enrolação. Bora Fechar Galpão?</h3>
          <CTAWhats size="lg" message={`${mensagemPadrao} Bora fechar galpão.`}>
            MANDA MENSAGEM PRO BRAZ
          </CTAWhats>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Clientes do Braz</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Quem Já Fechou Negócio Não Conta Mentira</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { nome: "Ricardo M.", empresa: "Transportadora — Marginal Piaçaguera", depo: "Eu tava há 3 meses rodando portal de imóveis. O Braz resolveu em 1 semana. Galpão com doca, pátio e AVCB. Preço justo. Fechou na hora." },
            { nome: "Aline F.", empresa: "E-commerce — CD Praia Grande", depo: "Precisava de galpão logístico pra fulfillment do meu e-commerce. O Braz me mostrou 4 opções, todas na marginal. Escolhi, assinei, mudei. Atendimento cinco estrelas." },
            { nome: "Carlos D.", empresa: "Franquia — Av. Kennedy", depo: "Ponto comercial na Kennedy é ouro. O Braz me conseguiu uma esquina que nem tava anunciada. Fluxo absurdo. Faturamento do 1º mês pagou a reforma." },
          ].map((d, i) => (
            <div key={i} className="bg-background p-6 border-2 border-foreground shadow-bold">
              <div className="flex gap-1 mb-3 text-primary">
                {[...Array(5)].map((_, s) => <Star key={s} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-muted-foreground italic mb-4 leading-relaxed">"{d.depo}"</p>
              <div className="border-t-2 border-foreground pt-3">
                <div className="font-black uppercase">{d.nome}</div>
                <div className="text-xs text-muted-foreground">{d.empresa}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-foreground text-primary">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-primary">Perguntou, Braz Responde</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Dúvidas Sobre Alugar Galpão em Praia Grande</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Quanto custa alugar um galpão em Praia Grande?", a: "Depende de metragem, localização e infraestrutura. Galpões na marginal da expressa sul e Av. Kennedy têm valor premium. Mini galpões em bairros industriais são mais acessíveis. Mande a sua necessidade no WhatsApp e o Braz volta com valores reais do mercado em 1 hora." },
            { q: "Vocês trabalham só com galpão logístico ou também com ponto comercial?", a: "Ambos. Galpões logísticos e industriais na marginal e zona industrial, e pontos comerciais na Av. Kennedy, Castelo Branco, Avenida Brasil e demais bairros comerciais de Praia Grande." },
            { q: "Preciso de galpão urgente, em quanto tempo acho?", a: "Se a demanda for padrão (500 a 3000m², na marginal ou Kennedy), o Braz mostra opção no mesmo dia. Para demandas específicas (metragem grande, instalações especiais, zoneamento industrial exclusivo), de 48 a 72 horas." },
            { q: "Tem galpão para comprar também, não só alugar?", a: "Sim. Locação e venda. Também intermediamos terrenos industriais para quem quer construir o próprio galpão em Praia Grande (built-to-suit)." },
            { q: "Como funciona a garantia do contrato?", a: "Trabalhamos com fiança bancária, seguro fiança, caução e fiador pessoa física ou jurídica. O Braz ajuda a estruturar a melhor garantia pro seu perfil." },
            { q: "Atendem empresas de fora da Baixada Santista?", a: "Sim. A maioria dos clientes do Braz são empresas de São Paulo, ABC, interior e até de outros estados que estão expandindo operação logística para o litoral por causa do Porto de Santos." },
          ].map((f, i) => (
            <details key={i} className="bg-background text-foreground border-2 border-primary p-5 group">
              <summary className="font-black uppercase cursor-pointer flex justify-between items-center">
                {f.q}
                <span className="text-primary text-2xl group-open:rotate-45 transition-smooth">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-primary text-primary-foreground">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-foreground text-primary px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Última Chamada</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-6">
              Melhor Chamar o <span className="text-stroke">Braz</span>.
            </h2>
            <p className="text-lg mb-8 font-medium">
              Seu galpão ideal em Praia Grande tá a uma mensagem de distância. Marginal, Kennedy, zona industrial — o Braz conhece, o Braz tem, o Braz fecha. Sem enrolação. Do jeito certo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAWhats size="lg" message={`${mensagemPadrao} Quero fechar negócio.`} className="animate-pulse-urgent">
                WHATSAPP AGORA
              </CTAWhats>
              <a href={`tel:+55${BRAZ.whatsappNumero}`} className="inline-flex items-center gap-3 bg-foreground text-primary font-black uppercase px-8 py-6 border-2 border-foreground shadow-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-smooth text-lg">
                <Phone className="w-5 h-5" /> LIGAR
              </a>
            </div>
            <div className="mt-6 text-sm font-bold">
              {BRAZ.creci} • Atendimento 7 dias por semana • Baixada Santista
            </div>
          </div>
          <div className="relative">
            <div className="bg-foreground p-2 border-4 border-foreground shadow-bold rotate-2">
              <img src={brazPhoneImg} alt="Corretor Braz Mota ao telefone, atendendo cliente de galpão em Praia Grande" className="w-full" loading="lazy" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-destructive text-destructive-foreground px-6 py-3 font-black uppercase border-2 border-foreground shadow-bold rotate-[-4deg] text-lg animate-pulse-urgent">
              Online Agora!
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground text-primary/70 py-10 px-4 border-t-4 border-primary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-black text-primary text-xl uppercase mb-2">Galpão em Praia Grande</div>
              <p className="text-sm mb-3">Especialistas em locação, venda, compra e permuta de galpões logísticos, industriais, pontos comerciais, terrenos, casas, apartamentos e sítios em Praia Grande SP e Baixada Santista.</p>
              <p className="text-xs">Compra • Venda • Aluga • Permuta</p>
            </div>
            <div>
              <div className="font-black text-primary uppercase mb-2">Braz Mota — Corretor</div>
              <p className="text-sm">{BRAZ.creci}</p>
              <p className="text-sm flex items-center gap-2 mt-1"><MessageCircle className="w-3 h-3" /> WhatsApp: {BRAZ.telefone}</p>
              <p className="text-sm flex items-center gap-2"><Phone className="w-3 h-3" /> Fixo: {BRAZ.telefoneFixo}</p>
              <p className="text-sm flex items-center gap-2"><Mail className="w-3 h-3" /> {BRAZ.email}</p>
              <p className="text-sm flex items-center gap-2"><Instagram className="w-3 h-3" /> {BRAZ.instagram}</p>
              
              <p className="text-sm flex items-start gap-2 mt-1"><MapPin className="w-3 h-3 mt-1 shrink-0" /> {BRAZ.endereco}</p>
            </div>
            <div>
              <div className="font-black text-primary uppercase mb-2">Regiões Atendidas</div>
              <p className="text-sm">Marginal Expressa Sul • Av. Kennedy • Rodovia dos Imigrantes • Zonas Industriais • Boqueirão • Tupi • Vila Sônia • Guilhermina • Toda Praia Grande e Baixada Santista</p>
            </div>
          </div>
          <div className="border-t border-primary/30 pt-6 text-xs text-center">
            © {new Date().getFullYear()} galpaoempraiagrande.com.br — Todos os direitos reservados. Site desenvolvido para fins comerciais de intermediação imobiliária.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={waLink(mensagemPadrao)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com o corretor Braz no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full border-2 border-foreground shadow-bold hover:scale-110 transition-smooth animate-pulse-urgent"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
      </a>
    </div>
  );
};

export default Index;
