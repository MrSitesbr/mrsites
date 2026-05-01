import { MessageCircle, Phone, CircleCheck as CheckCircle2, Globe, Bot, Code2, Rocket, Search, Clock, Shield, Zap, TrendingUp, Star, TriangleAlert as AlertTriangle, Mail, Instagram, Sparkles, MousePointerClick, Smartphone, BrainCircuit, ShoppingCart, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/walter-hero.jpg";
import walterImg from "@/assets/walter-portrait.jpg";
import walterPhoneImg from "@/assets/walter-phone.jpg";
import chatMockupImg from "@/assets/ai-chat-mockup.jpg";
import neonBgImg from "@/assets/neon-tech-bg.jpg";

// DADOS DO MR. SITES
const WALTER = {
  nome: "Walter Araujo",
  apelido: "Mr. Sites",
  titulo: "O Guru da Criação de Sites",
  telefone: "(11) 99999-0001",
  whatsappNumero: "5511999990001",
  email: "walter@mrsites.com.br",
  instagram: "@mrsites",
  endereco: "Atendimento 100% online — Brasil inteiro",
};

const waLink = (msg: string) =>
  `https://wa.me/${WALTER.whatsappNumero}?text=${encodeURIComponent(msg)}`;

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
  const mensagemPadrao = "Olá Walter! Vi o site do Mr. Sites e quero criar meu site com chat inteligente.";

  return (
    <div className="min-h-screen bg-background">
      {/* TOP BAR URGENTE NEON */}
      <div className="bg-accent text-accent-foreground text-xs md:text-sm font-bold overflow-hidden border-b-2 border-foreground">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 shrink-0">
              <span className="flex items-center gap-2"><AlertTriangle className="w-4 h-4" /> ATENÇÃO: vagas de criação de site SAINDO RÁPIDO essa semana</span>
              <span>•</span>
              <span>Seu primeiro site no ar em 7 dias</span>
              <span>•</span>
              <span>Chat com IA que vende 24h: GRÁTIS no plano</span>
              <span>•</span>
              <span className="flex items-center gap-2"><Zap className="w-4 h-4" /> Resposta em 5 minutos no WhatsApp do Mr. Sites</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-foreground text-primary border-b-4 border-primary">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-vapor text-primary-foreground flex items-center justify-center font-black text-xl border-2 border-primary">M</div>
            <div>
              <div className="font-black text-sm md:text-base leading-tight">MR. SITES — WALTER ARAUJO</div>
              <div className="text-[10px] md:text-xs text-[hsl(var(--cyan-neon))] font-medium">O Guru da Criação de Sites • IA + SEO</div>
            </div>
          </a>
          <CTAWhats size="sm" message={mensagemPadrao} className="hidden md:inline-flex">
            QUERO MEU SITE
          </CTAWhats>
          <a href={waLink(mensagemPadrao)} target="_blank" rel="noopener noreferrer" className="md:hidden bg-whatsapp text-whatsapp-foreground p-2 border-2 border-primary">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-foreground overflow-hidden border-b-4 border-foreground">
        <img src={heroImg} alt="Walter Araujo Mr. Sites — guru de criação de sites com chat inteligente IA 24/7" className="absolute inset-0 w-full h-full object-cover opacity-70" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/85 to-foreground/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 font-black text-xs md:text-sm uppercase mb-6 border-2 border-foreground shadow-bold-magenta">
              <Sparkles className="w-4 h-4 fill-current" /> Melhor Chamar o Mr. Sites!
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mb-6 uppercase text-primary">
              Sites <span className="bg-accent text-accent-foreground px-2 inline-block">Que Realmente Funcionam</span> Com Chat Inteligente Que Vende <span className="bg-[hsl(var(--neon-green))] text-[hsl(var(--neon-green-foreground))] px-2 inline-block">24/7</span>
            </h1>
            <p className="text-lg md:text-xl text-primary/90 mb-8 leading-relaxed max-w-2xl font-medium">
              Você quer seu <strong className="text-[hsl(var(--cyan-neon))]">primeiro site</strong>, um <strong className="text-[hsl(var(--cyan-neon))]">site rápido</strong>, profissional, ranqueado no <strong className="text-[hsl(var(--neon-green))]">Google e no ChatGPT</strong>, com um <strong className="text-accent">chatbot inteligente que conversa com seus clientes e fecha venda</strong> enquanto você dorme? Eu, <strong className="text-primary">Walter Araujo, o Mr. Sites</strong>, faço pra você. Rápido, sem enrolação, com tecnologia de ponta.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CTAWhats size="lg" message={`${mensagemPadrao} Quero ver os planos.`} className="animate-pulse-urgent">
                QUERO MEU SITE COM IA
              </CTAWhats>
              <a href={`tel:+5511999990001`} className="inline-flex items-center gap-3 bg-[hsl(var(--cyan-neon))] text-[hsl(var(--cyan-neon-foreground))] font-black uppercase px-8 py-6 border-2 border-foreground shadow-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-smooth">
                <Phone className="w-5 h-5" /> {WALTER.telefone}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-primary/80 font-semibold">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--neon-green))]" /> No ar em 7 dias</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> Chat IA 24h incluso</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[hsl(var(--cyan-neon))]" /> SEO Google + ChatGPT</div>
            </div>
          </div>
        </div>
        <div className="tape-neon h-4 w-full relative" aria-hidden />
      </section>

      {/* BENEFÍCIOS RÁPIDOS — 4 CORES NEON */}
      <Section className="bg-foreground border-b-4 border-foreground">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Rocket, title: "Site no Ar em 7 Dias", desc: "Mandou os textos, Mr. Sites coloca no ar. Fim.", color: "primary", fg: "primary-foreground" },
            { icon: Bot, title: "Chat IA 24/7", desc: "Robô inteligente conversa, qualifica e fecha venda.", color: "accent", fg: "accent-foreground" },
            { icon: Search, title: "SEO Google + ChatGPT", desc: "Você aparece quando o cliente procura. E quando a IA responde.", color: "cyan-neon", fg: "cyan-neon-foreground" },
            { icon: TrendingUp, title: "Site Que Vende", desc: "Não é cartão de visita. É máquina de gerar cliente.", color: "neon-green", fg: "neon-green-foreground" },
          ].map((b, i) => (
            <div key={i} className={`bg-[hsl(var(--${b.color}))] text-[hsl(var(--${b.fg}))] p-6 border-2 border-primary shadow-bold-yellow`}>
              <b.icon className="w-10 h-10 mb-3" strokeWidth={2} />
              <h3 className="font-black text-xl uppercase mb-2">{b.title}</h3>
              <p className="opacity-80 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE — APRESENTAÇÃO MR SITES */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-accent text-accent-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">O Guru</div>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 leading-tight">
              Precisa de Site? <span className="text-accent">Melhor Chamar o Mr. Sites.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Se você está procurando <strong>criação de site profissional</strong>, quer fazer seu <strong>primeiro site</strong>, precisa de um <strong>site rápido que carrega em 1 segundo</strong>, ou já tem um site que <strong>não funciona, não aparece no Google e não traz cliente nenhum</strong> — você chegou no lugar certo. Eu sou o <strong>Walter Araujo, o Mr. Sites</strong>, especialista em desenvolvimento web, SEO e inteligência artificial aplicada a vendas.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Crio <strong>sites institucionais, landing pages, sites para empresa, lojas virtuais, sites para profissional liberal, sites para clínica, sites para advogado, sites para restaurante, sites para imobiliária</strong> — todos com <strong className="text-accent">chat inteligente integrado que conversa com o visitante, qualifica o lead e fecha venda 24 horas por dia, 7 dias por semana</strong>. Sem você precisar responder mensagem na madrugada.
            </p>
            <CTAWhats size="lg" message={`${mensagemPadrao} Quero conhecer o trabalho.`}>
              Quero Ver O Que O Mr. Sites Faz
            </CTAWhats>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-accent text-accent-foreground px-6 py-3 font-black uppercase z-10 border-2 border-foreground shadow-bold rotate-[-3deg]">
              Mr. Sites
            </div>
            <img src={walterImg} alt="Walter Araujo Mr. Sites guru de criação de sites com inteligência artificial" className="w-full border-4 border-foreground shadow-bold-magenta" loading="lazy" width={1024} height={1280} />
            <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--neon-green))] text-[hsl(var(--neon-green-foreground))] px-6 py-3 font-black uppercase border-2 border-foreground shadow-bold rotate-[2deg]">
              IA + SEO
            </div>
          </div>
        </div>
      </Section>

      {/* CHAT IA EM DESTAQUE */}
      <Section id="chat-ia" className="bg-foreground text-primary">
        <div className="text-center mb-12">
          <div className="inline-block bg-[hsl(var(--neon-green))] text-[hsl(var(--neon-green-foreground))] px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-primary">A Tecnologia Que Muda Tudo</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
            Seu Site Com <span className="text-accent">Chat Inteligente</span> Que <span className="text-[hsl(var(--cyan-neon))]">Vende Sozinho</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Esquece formulário de contato que ninguém preenche. O <strong>chatbot com IA</strong> do Mr. Sites <strong>conversa de verdade</strong> com seu visitante, entende o que ele quer, tira dúvida, mostra preço, agenda visita e <strong>fecha negócio</strong> — tudo em português, 24 horas por dia, sem você levantar um dedo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={chatMockupImg} alt="Mockup de site com chat inteligente IA fechando venda 24/7 — Mr. Sites" className="w-full border-4 border-[hsl(var(--cyan-neon))] shadow-bold-cyan" loading="lazy" width={1280} height={960} />
          <div className="grid gap-4">
            {[
              { icon: BrainCircuit, title: "IA treinada com seu negócio", desc: "Aprende seus produtos, preços, condições, FAQ. Conversa como se fosse você." },
              { icon: ShoppingCart, title: "Fecha venda direto no chat", desc: "Envia link de pagamento, agenda reunião, faz orçamento automático." },
              { icon: Clock, title: "24 horas, 7 dias por semana", desc: "Cliente curioso às 3 da manhã? Já é cliente fechado às 8." },
              { icon: BadgeCheck, title: "Integra com WhatsApp", desc: "Lead quente cai direto no seu WhatsApp pra você só passar a chave." },
            ].map((item, i) => (
              <div key={i} className="bg-primary text-primary-foreground p-5 border-2 border-primary shadow-bold-magenta flex gap-4">
                <item.icon className="w-10 h-10 shrink-0" strokeWidth={2} />
                <div>
                  <h3 className="font-black uppercase text-lg mb-1">{item.title}</h3>
                  <p className="text-sm opacity-85">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <CTAWhats size="lg" message={`${mensagemPadrao} Quero o chat IA no meu site.`}>
            Quero Esse Robô Vendendo Pra Mim
          </CTAWhats>
        </div>
      </Section>

      {/* TIPOS DE SITES */}
      <Section id="tipos">
        <div className="text-center mb-12">
          <div className="inline-block bg-[hsl(var(--cyan-neon))] text-[hsl(var(--cyan-neon-foreground))] px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Catálogo Completo</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight mb-4">
            Todo Tipo de Site Que Sua Empresa Precisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Do <strong>primeiro site simples e barato</strong> até o <strong>e-commerce robusto com IA</strong>. Da landing page que converte na hora ao site institucional completo. Tá tudo aqui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Globe, title: "Site Institucional Profissional", color: "primary", items: ["Site profissional para empresa", "Site rápido que carrega em 1 segundo", "Site responsivo (celular, tablet, desktop)", "Design moderno e personalizado", "Páginas: Home, Sobre, Serviços, Contato, Blog", "Hospedagem inclusa e domínio configurado", "Certificado SSL (cadeado verde)", "Painel para você editar textos sem programador"] },
            { icon: MousePointerClick, title: "Landing Page Que Converte", color: "accent", items: ["Landing page para captar lead", "Página de vendas com copy persuasivo", "Botão WhatsApp flutuante", "Formulário inteligente integrado ao seu CRM", "Pixel Facebook, Google Ads e TikTok", "Otimizada para anúncios pagos", "Carregamento ultra-rápido (Core Web Vitals 100)", "A/B test e analytics configurado"] },
            { icon: ShoppingCart, title: "E-commerce e Loja Virtual", color: "cyan-neon", items: ["Loja virtual completa", "Pagamento Pix, cartão, boleto", "Integração com Correios e transportadoras", "Carrinho abandonado com recuperação por IA", "Catálogo de produtos ilimitado", "Cupons de desconto", "Avaliações de clientes", "Painel administrativo simples"] },
            { icon: Bot, title: "Site com Chat IA Avançado", color: "neon-green", items: ["Chatbot com inteligência artificial", "Atendimento automático 24/7", "Qualificação de leads em tempo real", "Agendamento automático de reuniões", "Envio de orçamento na hora", "Integração com WhatsApp Business API", "Memória de conversas anteriores", "Treinamento personalizado pra sua empresa"] },
          ].map((cat, i) => (
            <div key={i} className="bg-background border-2 border-foreground shadow-bold p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className={`bg-[hsl(var(--${cat.color}))] text-[hsl(var(--${cat.color}-foreground))] p-3 border-2 border-foreground`}>
                  <cat.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase">{cat.title}</h3>
              </div>
              <ul className="space-y-2">
                {cat.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className={`w-4 h-4 text-[hsl(var(--${cat.color}))] shrink-0 mt-0.5`} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <CTAWhats size="sm" message={`${mensagemPadrao} Interesse: ${cat.title}.`} className="mt-5 w-full justify-center">
                Quero Esse Site
              </CTAWhats>
            </div>
          ))}
        </div>
      </Section>

      {/* FAIXA NEON CHAMATIVA */}
      <div className="bg-gradient-neon py-8 border-y-4 border-foreground">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-foreground">
            <h3 className="text-2xl md:text-4xl font-black uppercase leading-tight">Tá Sem Site? <span className="block md:inline">Liga pro Mr. Sites.</span></h3>
            <p className="font-bold">Análise grátis do seu negócio + proposta de site com IA. Sem compromisso.</p>
          </div>
          <CTAWhats size="lg" message={`${mensagemPadrao} Quero análise gratuita.`} className="animate-pulse-urgent">
            CHAMAR O MR. SITES
          </CTAWhats>
        </div>
      </div>

      {/* CONTEÚDO SEO MASSIVO */}
      <Section id="conteudo" className="bg-muted">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <img src={chatMockupImg} alt="Site profissional com chat inteligente IA criado pelo Mr. Sites" className="w-full h-64 object-cover border-2 border-accent shadow-bold-magenta" loading="lazy" width={1280} height={960} />
          <img src={neonBgImg} alt="Tecnologia de criação de sites rápidos com SEO Google e ChatGPT" className="w-full h-64 object-cover border-2 border-[hsl(var(--cyan-neon))] shadow-bold-cyan" loading="lazy" width={1920} height={1080} />
          <img src={walterPhoneImg} alt="Walter Araujo Mr. Sites mostrando site com chatbot que vende 24/7" className="w-full h-64 object-cover border-2 border-[hsl(var(--neon-green))] shadow-bold-green" loading="lazy" width={1024} height={1280} />
        </div>

        <article className="prose prose-lg max-w-none text-foreground">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-6">Por Que Ter um Site Profissional Com Chat Inteligente É o Melhor Investimento Que Você Faz Esse Ano</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Em 2026, ter um <strong>site profissional</strong> não é mais luxo, é sobrevivência. Quem não aparece no <strong>Google</strong>, no <strong>ChatGPT</strong>, no <strong>Perplexity</strong>, no <strong>Bing IA</strong>, no <strong>Gemini</strong> e nas demais ferramentas de busca por inteligência artificial — simplesmente não existe pro cliente moderno. E quem tem site mas o site é <strong>lento, feio, não funciona no celular, não tem chat, não converte visita em venda</strong> — está pior ainda, porque está pagando hospedagem pra perder cliente. É exatamente aí que entra o <strong>Mr. Sites</strong>, o guru da <strong>criação de sites rápidos, profissionais e que realmente funcionam</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A demanda por <strong>desenvolvimento de sites profissionais</strong> explodiu nos últimos anos com a chegada da inteligência artificial, dos assistentes virtuais, dos chatbots conversacionais e da nova realidade do marketing digital. Empresas como advogados, médicos, dentistas, clínicas, psicólogos, nutricionistas, personal trainers, consultores, contadores, arquitetos, designers, fotógrafos, restaurantes, lojas, distribuidoras, indústrias, imobiliárias, corretores, autônomos, infoprodutores, coaches, mentores, agências, startups, profissionais liberais e até influenciadores procuram <strong>criar site profissional rápido</strong>, <strong>fazer primeiro site</strong>, <strong>contratar agência de criação de sites</strong> ou <strong>desenvolvedor freelancer de site</strong> porque entenderam: site bom é máquina de cliente.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Site Rápido: Por Que Velocidade É Tudo no Google e no ChatGPT</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Site rápido</strong> não é vaidade técnica, é sobrevivência. O Google penaliza site lento desde 2018 com o <strong>Core Web Vitals</strong>. ChatGPT e Perplexity preferem citar fontes que carregam instantaneamente. Visitante que espera mais de 3 segundos pra carregar — vai embora e não volta nunca mais. O <strong>Mr. Sites</strong> entrega <strong>sites com pontuação 100/100 no PageSpeed Insights</strong>, <strong>imagens otimizadas em WebP e AVIF</strong>, <strong>cache inteligente</strong>, <strong>CDN global</strong>, <strong>código limpo sem plugins inúteis</strong>, <strong>servidor profissional brasileiro</strong>. Resultado: seu site abre em menos de 1 segundo no celular do seu cliente, mesmo na pior internet.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Diferente de <strong>construtor de site genérico</strong> tipo Wix, Webflow básico, Wordpress entupido de plugin ou aquele <strong>site barato feito por sobrinho</strong> que parece template de 2010, o Mr. Sites desenvolve com tecnologia de ponta: <strong>React, Next.js, Astro, Vite, Tailwind CSS, TypeScript</strong>. Resultado profissional, código limpo, manutenção fácil, escalabilidade garantida. <strong>Site moderno, site bonito, site rápido, site seguro, site que dá orgulho de mostrar pro cliente</strong>.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Chatbot Inteligente: O Vendedor Que Não Dorme, Não Falta e Não Pede Aumento</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A grande revolução de 2025/2026 nos sites é a <strong>integração de inteligência artificial conversacional</strong>. O <strong>chatbot com IA</strong> que o Mr. Sites instala no seu site não é aquele bot bobo de palavra-chave que responde tudo errado. É um <strong>assistente virtual treinado especificamente com o conteúdo da sua empresa</strong> — seus produtos, seus preços, suas condições de pagamento, seu horário de atendimento, sua política de garantia, seu FAQ, seu portfólio. Ele conversa em <strong>português natural</strong>, entende contexto, lembra do que o cliente falou antes, faz perguntas inteligentes, tira objeção, mostra benefício, oferece desconto e <strong>fecha venda direto no chat</strong> — enviando link de pagamento, agendando reunião no Google Calendar, criando orçamento em PDF, encaminhando o lead quente direto pro seu WhatsApp.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Atendimento 24 horas por dia, 7 dias por semana, 365 dias por ano</strong>. Domingo de Páscoa às 4 da manhã, se um cliente entra no seu site procurando seu produto — o chat IA atende, conversa, vende. Você acorda segunda-feira com o pedido fechado, o pagamento aprovado e o cliente esperando você só confirmar a entrega. <strong>É site que trabalha enquanto você dorme</strong>. É a tecnologia que separa o profissional do amador, o negócio que escala do negócio que estagna.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">SEO Para Google E SEO Para ChatGPT: A Nova Era da Busca</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>SEO (Search Engine Optimization)</strong> não é mais só sobre aparecer no Google. É sobre aparecer também no <strong>ChatGPT, Perplexity, Claude, Gemini, Bing Chat, Copilot, You.com, Brave Search</strong> e em todas as ferramentas de busca por inteligência artificial que estão dominando a forma como as pessoas pesquisam. O <strong>GEO (Generative Engine Optimization)</strong> e o <strong>AEO (Answer Engine Optimization)</strong> são as novas fronteiras do marketing digital — e o Mr. Sites já trabalha com isso há tempos.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Todo site entregue pelo <strong>Mr. Sites</strong> sai com: <strong>schema markup JSON-LD completo</strong> (organização, produtos, FAQ, breadcrumb, artigo), <strong>meta tags otimizadas</strong>, <strong>Open Graph e Twitter Cards</strong>, <strong>sitemap.xml e robots.txt</strong> configurados, <strong>URLs amigáveis e canônicas</strong>, <strong>tags H1, H2, H3 hierárquicas</strong>, <strong>alt text descritivo em todas as imagens</strong>, <strong>conteúdo otimizado para palavras-chave de cauda longa</strong>, <strong>blog integrado para autoridade temática</strong>, <strong>linkagem interna estratégica</strong>, <strong>velocidade de carregamento perfeita</strong>, <strong>mobile-first design</strong>, <strong>HTTPS com SSL</strong>, <strong>integração Google Analytics 4 e Search Console</strong>. Tudo o que o Google ama. Tudo o que o ChatGPT cita.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Primeiro Site? Mr. Sites Faz Sem Drama</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Se você nunca teve site, sente medo de "tecnologia", acha que vai ser caro, demorado, complicado — relaxa. O Mr. Sites é especialista em <strong>fazer primeiro site para iniciante</strong>. Processo simples: você manda um áudio no WhatsApp contando o que faz, pra quem vende, qual o objetivo do site. O Walter (Mr. Sites) define junto com você as páginas, as cores, o estilo. Em 7 dias úteis seu <strong>primeiro site profissional está no ar</strong>, com domínio próprio (seunegocio.com.br), e-mail profissional (contato@seunegocio.com.br), hospedagem inclusa no primeiro ano, chat inteligente já treinado e pronto pra atender. Sem dor de cabeça, sem complicação, sem você precisar entender de nada técnico.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Por Que Falar Com o Mr. Sites Antes de Qualquer Construtor de Site Genérico</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Construtor de site (Wix, Squarespace, Webflow básico, Wordpress.com) entrega o que todo mundo já tem: site lento, template repetido, limitado, dependente da plataforma. Quando você quer crescer, descobre que tá preso. O <strong>Mr. Sites</strong> entrega o que ninguém mostra: <strong>site sob medida</strong>, com a sua identidade visual, com o seu chat IA, com o seu SEO específico, com a sua integração com WhatsApp, Instagram, TikTok, Google Meu Negócio, Pix, Stripe, Asaas, Mercado Pago, RD Station, ActiveCampaign, HubSpot. Tudo conversando entre si. Tudo gerando dados. Tudo gerando venda.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Mais de uma década criando sites que vendem para empresas de todos os portes — do MEI iniciante à média empresa em expansão. <strong>Walter Araujo</strong>, conhecido como <strong>Mr. Sites</strong>, é especialista em <strong>criação de sites profissionais</strong>, <strong>desenvolvimento web</strong>, <strong>landing pages de alta conversão</strong>, <strong>SEO técnico e de conteúdo</strong>, <strong>integração de chatbots com inteligência artificial</strong>, <strong>otimização para mecanismos generativos (GEO/AEO)</strong>, <strong>e-commerce</strong>, <strong>automação de marketing</strong> e <strong>tráfego pago</strong>. Atendimento direto, sem secretária, sem proposta enrolada de 40 páginas. WhatsApp aberto, resposta em 5 minutos, do primeiro "oi" até a chave do site na sua mão.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Quanto Custa Fazer um Site com o Mr. Sites? O Cenário Real</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            O preço de um <strong>site profissional</strong> varia conforme o tipo, a quantidade de páginas, as integrações necessárias, o nível de personalização e se inclui ou não o <strong>chat com inteligência artificial</strong>. Landing pages simples saem mais em conta. Sites institucionais com 5 a 10 páginas e chat IA têm valor intermediário. E-commerces completos com automação são investimentos maiores — mas se pagam no primeiro mês de operação. O Mr. Sites oferece <strong>planos mensais acessíveis</strong> que incluem hospedagem, manutenção, atualizações, suporte e o chat IA treinado — sem você precisar pagar tudo de uma vez. Trabalha também com <strong>pacotes fechados</strong> pra quem prefere comprar e ficar dono do site.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A previsão para os próximos anos é de <strong>valorização contínua dos serviços de criação de sites com IA</strong>, conforme as empresas vão entendendo que <strong>chatbot que vende vale mais que vendedor humano em vários cenários</strong>. Quem investir agora vai pagar menos. Quem deixar pro ano que vem vai bater no peito vendo o concorrente faturar com site que ele não tem. <strong>Fica a dica do Mr. Sites</strong>.
          </p>

          <h3 className="text-2xl font-black uppercase mt-8 mb-4">Termos Que Você Provavelmente Procurou no Google e no ChatGPT — Aqui Tem Tudo</h3>
          <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            criação de sites • criar site profissional • criar site rápido • criar primeiro site • fazer site do zero • desenvolvimento de sites • desenvolvedor de sites freelancer • agência de criação de sites • empresa de criação de sites • criação de sites profissionais para empresa • site profissional barato • site profissional rápido • site rápido que carrega em 1 segundo • site moderno 2026 • site responsivo mobile first • site institucional • site institucional para pequena empresa • site para advogado • site para médico • site para dentista • site para clínica • site para psicólogo • site para nutricionista • site para personal trainer • site para consultor • site para contador • site para arquiteto • site para designer • site para fotógrafo • site para restaurante • site para lanchonete • site para pizzaria • site para loja • site para distribuidora • site para indústria • site para imobiliária • site para corretor • site para autônomo • site para mei • site para infoprodutor • site para coach • site para mentor • site para agência • site para startup • landing page • criar landing page • landing page de alta conversão • landing page que vende • página de vendas • página de captura de leads • squeeze page • sales page • criação de landing page • landing page para anúncios • landing page para google ads • landing page para facebook ads • landing page para instagram ads • landing page para tiktok ads • loja virtual • criar loja virtual • e-commerce • desenvolvimento de e-commerce • loja online • shopify alternativa • woocommerce alternativa • pagamento online • pix no site • cartão de crédito no site • boleto no site • integração com correios • carrinho abandonado • recuperação de carrinho • chatbot • chatbot inteligente • chatbot com ia • chatbot com inteligência artificial • criar chatbot para site • robô que vende • atendimento automático 24 horas • atendimento 24/7 • atendente virtual • assistente virtual • bot de atendimento • bot que vende • bot que conversa • chat ia para site • chat gpt no meu site • integrar chatgpt no site • integrar openai no site • api openai • api gemini • api anthropic claude • inteligência artificial para vendas • ia para empresa • ia conversacional • atendimento conversacional • whatsapp business api • integração whatsapp api oficial • whatsapp no site • botão whatsapp no site • chat whatsapp flutuante • seo • seo google • seo para google • seo para chatgpt • seo para perplexity • seo para bing • seo para gemini • geo generative engine optimization • aeo answer engine optimization • aparecer no chatgpt • aparecer no google • primeira página do google • ranquear no google • posicionamento no google • palavras chave • cauda longa • long tail keywords • schema markup • dados estruturados json-ld • core web vitals • pagespeed insights • google search console • google analytics 4 • ga4 • tag manager • pixel facebook • pixel tiktok • google ads • facebook ads • instagram ads • tiktok ads • linkedin ads • marketing digital • tráfego pago • tráfego orgânico • inbound marketing • outbound marketing • automação de marketing • rd station • activecampaign • hubspot • crm integrado ao site • mailchimp • email marketing • newsletter • blog para empresa • blog corporativo • marketing de conteúdo • content marketing • copywriting • copy persuasivo • neuromarketing • gatilhos mentais • prova social • escassez • urgência • autoridade • reciprocidade • design ui ux • design responsivo • mobile first • acessibilidade web wcag • velocidade de site • otimização de site • otimização de imagens webp avif • lazy loading • cdn cloudflare • hospedagem de site • hospedagem brasileira • hospedagem nuvem • domínio próprio • registro de domínio • email profissional • google workspace • microsoft 365 • certificado ssl https • cadeado verde no site • segurança do site • backup automático • manutenção de site • atualização de site • suporte de site • dashboard administrativo • painel para editar site • cms • headless cms • react • next.js • astro • vite • tailwind css • typescript • node.js • supabase • firebase • vercel • netlify • cloudflare pages • walter araujo • mr sites • mister sites • o guru dos sites • especialista em sites • melhor profissional de sites • melhor agência de sites • melhor desenvolvedor de sites • criar site no brasil • criar site em português • criar site profissional barato e rápido • quanto custa fazer um site • preço de site profissional • orçamento de site • cotação de site • site com chat inteligente • site com bot vendedor • site que funciona de verdade • site que dá resultado • site que aparece no google • site que aparece no chatgpt • site que vende sozinho • site que trabalha 24 horas.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            É muita coisa. E é justamente por isso que você precisa do <strong>Mr. Sites</strong>. Em vez de ficar pulando de freelancer em freelancer, recebendo proposta enrolada, esperando 6 meses por um site que sai feio, lento e sem chat — você manda uma mensagem no WhatsApp, conta o seu negócio, e o Walter volta com uma <strong>proposta direta, prazo curto, preço justo e tecnologia de ponta</strong>. Simples assim. Tempo é dinheiro, e em internet tempo perdido é cliente perdido pro concorrente.
          </p>
        </article>

        <div className="mt-10 p-8 bg-foreground text-primary border-2 border-foreground shadow-bold-magenta text-center">
          <h3 className="text-2xl md:text-4xl font-black uppercase mb-4">Chega de Site Fraco. Bora Fazer o Seu?</h3>
          <CTAWhats size="lg" message={`${mensagemPadrao} Bora fazer meu site.`}>
            MANDA MENSAGEM PRO MR. SITES
          </CTAWhats>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section id="depoimentos">
        <div className="text-center mb-12">
          <div className="inline-block bg-[hsl(var(--neon-green))] text-[hsl(var(--neon-green-foreground))] px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Clientes do Mr. Sites</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Quem Já Tem Site Com IA Não Volta Mais Pra Trás</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { nome: "Renata S.", empresa: "Clínica de Estética — SP", depo: "Tava perdendo cliente pra clínica concorrente que aparecia no Google. O Mr. Sites refez meu site e em 60 dias eu já tava em primeiro lugar. O chat fecha agendamento até de madrugada.", color: "accent" },
            { nome: "Diego P.", empresa: "Distribuidora — RJ", depo: "Meu primeiro site da vida, fiz com o Walter. No ar em 6 dias. Em 3 meses o chat IA já tinha fechado mais de 80 pedidos sozinho. Investimento se pagou no primeiro mês.", color: "cyan-neon" },
            { nome: "Camila T.", empresa: "Coach — Online", depo: "O ChatGPT começou a me indicar quando alguém pergunta sobre coach de carreira. SEO do Mr. Sites é outro nível. E o chat conversa exatamente como eu falaria. Surreal.", color: "neon-green" },
          ].map((d, i) => (
            <div key={i} className={`bg-background p-6 border-2 border-foreground shadow-bold-${d.color === 'accent' ? 'magenta' : d.color === 'cyan-neon' ? 'cyan' : 'green'}`}>
              <div className={`flex gap-1 mb-3 text-[hsl(var(--${d.color}))]`}>
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
          <div className="inline-block bg-accent text-accent-foreground px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-primary">Perguntou, Mr. Sites Responde</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight">Dúvidas Sobre Criação de Sites com IA</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "Quanto custa fazer um site com o Mr. Sites?", a: "Depende do tipo (landing page, institucional, e-commerce) e se inclui chat IA. Trabalho com planos mensais acessíveis (com hospedagem e manutenção inclusas) e pacotes fechados. Manda sua necessidade no WhatsApp e o Walter volta com proposta direta em 1 hora." },
            { q: "Em quanto tempo meu site fica pronto?", a: "Landing page: 3 a 5 dias úteis. Site institucional: 7 a 10 dias úteis. E-commerce: 15 a 30 dias. Chat IA é configurado junto e treinado em paralelo." },
            { q: "Como funciona o chat inteligente?", a: "O chat usa inteligência artificial (GPT, Claude, Gemini) treinada com o conteúdo da sua empresa. Conversa em português natural, qualifica leads, mostra preço, agenda reunião, envia link de pagamento e encaminha lead quente pro seu WhatsApp. Funciona 24/7." },
            { q: "Eu preciso entender de tecnologia?", a: "Zero. Mr. Sites cuida de tudo: domínio, hospedagem, e-mail, configuração, treinamento da IA. Você manda os textos por áudio no WhatsApp e recebe o site pronto pra usar." },
            { q: "O site funciona no celular?", a: "Obrigatoriamente. Todo site Mr. Sites é mobile-first, responsivo, com pontuação 100/100 no PageSpeed Insights tanto desktop quanto mobile. Em 2026, mais de 70% do tráfego é celular." },
            { q: "O site aparece no Google e no ChatGPT?", a: "Sim. SEO técnico e SEO generativo (GEO/AEO) inclusos. Schema markup, meta tags, sitemap, conteúdo otimizado, integração Search Console e Analytics. Resultados começam em 30-90 dias." },
            { q: "Atendem todo o Brasil?", a: "Sim. Atendimento 100% online via WhatsApp, Google Meet e e-mail. Cliente em qualquer cidade do Brasil ou exterior." },
          ].map((f, i) => (
            <details key={i} className="bg-background text-foreground border-2 border-accent p-5 group">
              <summary className="font-black uppercase cursor-pointer flex justify-between items-center">
                {f.q}
                <span className="text-accent text-2xl group-open:rotate-45 transition-smooth">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-gradient-vapor text-primary-foreground">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-foreground text-primary px-3 py-1 font-black text-xs uppercase mb-4 border-2 border-foreground">Última Chamada</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-6 text-primary">
              Melhor Chamar o <span className="text-stroke">Mr. Sites</span>.
            </h2>
            <p className="text-lg mb-8 font-medium text-primary">
              Seu site profissional com chat inteligente está a uma mensagem de distância. Site rápido, SEO de Google e ChatGPT, robô vendendo 24/7 — o Mr. Sites entrega tudo. Sem enrolação. Do jeito certo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAWhats size="lg" message={`${mensagemPadrao} Quero fechar negócio.`} className="animate-pulse-urgent">
                WHATSAPP AGORA
              </CTAWhats>
              <a href={`tel:+55${WALTER.whatsappNumero}`} className="inline-flex items-center gap-3 bg-foreground text-primary font-black uppercase px-8 py-6 border-2 border-foreground shadow-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-smooth text-lg">
                <Phone className="w-5 h-5" /> LIGAR
              </a>
            </div>
            <div className="mt-6 text-sm font-bold text-primary">
              Atendimento 7 dias por semana • Brasil inteiro • 100% online
            </div>
          </div>
          <div className="relative">
            <div className="bg-foreground p-2 border-4 border-foreground shadow-bold-cyan rotate-2">
              <img src={walterPhoneImg} alt="Walter Araujo Mr. Sites mostrando site com chat IA que vende 24/7" className="w-full" loading="lazy" width={1024} height={1280} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[hsl(var(--neon-green))] text-[hsl(var(--neon-green-foreground))] px-6 py-3 font-black uppercase border-2 border-foreground shadow-bold rotate-[-4deg] text-lg animate-pulse-urgent">
              Online Agora!
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-foreground text-primary/70 py-10 px-4 border-t-4 border-accent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-black text-primary text-xl uppercase mb-2">Mr. Sites</div>
              <p className="text-sm mb-3">Walter Araujo, especialista em criação de sites profissionais, rápidos, com chat inteligente IA 24/7 e SEO para Google e ChatGPT. Sites que realmente funcionam.</p>
              <p className="text-xs">Sites • Landing Pages • E-commerce • Chat IA • SEO</p>
            </div>
            <div>
              <div className="font-black text-[hsl(var(--cyan-neon))] uppercase mb-2">Walter Araujo — Mr. Sites</div>
              <p className="text-sm flex items-center gap-2 mt-1"><MessageCircle className="w-3 h-3" /> WhatsApp: {WALTER.telefone}</p>
              <p className="text-sm flex items-center gap-2"><Mail className="w-3 h-3" /> {WALTER.email}</p>
              <p className="text-sm flex items-center gap-2"><Instagram className="w-3 h-3" /> {WALTER.instagram}</p>
              <p className="text-sm flex items-start gap-2 mt-1"><Globe className="w-3 h-3 mt-1 shrink-0" /> {WALTER.endereco}</p>
            </div>
            <div>
              <div className="font-black text-[hsl(var(--neon-green))] uppercase mb-2">Tecnologias</div>
              <p className="text-sm">React • Next.js • Astro • Tailwind • TypeScript • OpenAI • Claude • Gemini • Supabase • Vercel • Cloudflare • SEO • GEO • AEO</p>
            </div>
          </div>
          <div className="border-t border-accent/30 pt-6 text-xs text-center">
            © {new Date().getFullYear()} mrsites.com.br — Walter Araujo. Todos os direitos reservados. Criação de sites profissionais com inteligência artificial.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={waLink(mensagemPadrao)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com o Mr. Sites no WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-4 rounded-full border-2 border-foreground shadow-bold-magenta hover:scale-110 transition-smooth animate-pulse-urgent"
      >
        <MessageCircle className="w-7 h-7" strokeWidth={2.5} />
      </a>
    </div>
  );
};

export default Index;
