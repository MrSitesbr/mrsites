import { MessageCircle, Phone, CheckCircle2, Zap, Bot, Search, Sparkles, Shield, Rocket, Star, Mail, Instagram, MapPin, Globe } from "lucide-react";
import walterHeroImg from "@/assets/walter-hero.jpg";
import walterImg from "@/assets/walter-portrait.jpg";
import walterPhoneImg from "@/assets/walter-phone.jpg";
import logo from "@/assets/mr-sites-logo.png";

const WALTER = {
  nome: "Walter Araujo",
  apelido: "Mr. Sites",
  telefone: "(11) 97469-8846",
  whatsappNumero: "5511974698846",
  email: "contato@mrsites.com",
  instagram: "@mrsites",
  endereco: "Av. Paulista, 1639 — São Paulo/SP",
  enderecoOnline: "Atendimento 100% online — Brasil inteiro",
};

const waLink = (msg: string) =>
  `https://wa.me/${WALTER.whatsappNumero}?text=${encodeURIComponent(msg)}`;

const CTAPrimary = ({ children, message, className = "" }: { children: React.ReactNode; message: string; className?: string }) => (
  <a
    href={waLink(message)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 bg-primary text-primary-foreground font-black uppercase tracking-wide rounded-full px-6 py-3.5 text-sm hover:scale-105 transition-smooth shadow-glow ${className}`}
  >
    <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
    {children}
  </a>
);

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 md:py-28 px-4 ${className}`}>
    <div className="container mx-auto max-w-6xl">{children}</div>
  </section>
);

const Index = () => {
  const mensagemPadrao = "Olá Walter! Vi o site do Mr. Sites e quero criar meu site com chat inteligente.";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* TOP BAR — compacta */}
      <div className="bg-primary text-primary-foreground text-[11px] font-bold overflow-hidden border-b border-primary/20">
        <div className="flex animate-marquee whitespace-nowrap py-1.5">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 px-4 shrink-0">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3" /> SITE NO AR EM 24H
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Bot className="w-3 h-3" /> CHAT IA QUE VENDE 24/7
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Search className="w-3 h-3" /> SEO GOOGLE + CHATGPT
              </span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
        <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="Mr. Sites" className="w-11 h-11 object-contain" width={44} height={44} />
            <div>
              <div className="font-black text-base tracking-tight">MR. SITES</div>
              <div className="text-[10px] text-muted-foreground font-semibold uppercase">Walter Araujo</div>
            </div>
          </a>
          <CTAPrimary message={mensagemPadrao}>Quero meu site</CTAPrimary>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative container mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest mb-4">
                <span className="h-px w-6 bg-primary" />
                Criação de Sites Inteligentes
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Seu site pronto, inteligente e profissional <span className="text-primary">em menos de 24h</span>.
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                Sites que <strong className="text-foreground">comunicam, vendem e trabalham por você</strong> com chat de IA 24/7. Foque no que importa — fazer seu negócio crescer. Mr. Sites cuida do resto.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <CTAPrimary message={mensagemPadrao} className="text-base px-8 py-4">Quero meu site em 24h</CTAPrimary>
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-md">
                {[
                  { icon: Shield, label: "Design", desc: "estratégico" },
                  { icon: Zap, label: "Tecnologia", desc: "inteligente" },
                  { icon: Rocket, label: "Entrega", desc: "em 24h" },
                ].map((f, i) => (
                  <div key={i}>
                    <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-2">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-xs font-black uppercase">{f.label}</div>
                    <div className="text-[11px] text-muted-foreground">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src={walterHeroImg}
                alt="Walter Araujo Mr. Sites"
                className="w-full rounded-xl"
                loading="lazy"
                width={500}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <Section id="beneficios" className="bg-card">
        <div className="grid md:grid-cols-4 gap-5">
          {[
            { icon: Rocket, title: "Site em 24h", desc: "Pronto pra usar" },
            { icon: Bot, title: "Chat IA 24/7", desc: "Que vende sozinho" },
            { icon: Search, title: "SEO Google", desc: "Primeira página" },
            { icon: Star, title: "Profissional", desc: "Que impressiona" },
          ].map((b, i) => (
            <div key={i} className="p-6 rounded-lg bg-background border border-white/5">
              <b.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-black text-sm uppercase mb-1">{b.title}</h3>
              <p className="text-xs text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOBRE */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-bold text-xs uppercase mb-4 rounded-full">Quem é</div>
            <h2 className="text-3xl md:text-4xl font-black uppercase mb-5 leading-tight">
              Precisa de Site? <span className="text-primary">Melhor Chamar o Mr. Sites.</span>
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Especialista em <strong className="text-foreground">criação de sites profissionais, rápidos, com chat inteligente IA 24/7 e SEO</strong> para Google e ChatGPT. Sites que realmente funcionam e trazem resultado.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Com mais de uma década criando sites que vendem para empresas de todos os portes — do MEI à média empresa. <strong className="text-foreground">Atendimento direto, sem secretária. WhatsApp aberto, resposta em 5 minutos.</strong>
            </p>
            <CTAPrimary message={`${mensagemPadrao} Quero conhecer o trabalho.`}>Ver Portfólio</CTAPrimary>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-5 py-2 font-black uppercase z-10 rounded-full text-sm">
              Mr. Sites
            </div>
            <img
              src={walterImg}
              alt="Walter Araujo"
              className="w-full rounded-xl border-2 border-primary/20 shadow-card"
              loading="lazy"
              width={500}
              height={600}
            />
          </div>
        </div>
      </Section>

      {/* CHAT IA */}
      <Section id="chat-ia" className="bg-card">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 font-bold text-xs uppercase mb-4 rounded-full">Tecnologia</div>
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">
            Seu Site Com <span className="text-primary">Chat Inteligente</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conversa de verdade com seu visitante. Entende o que ele quer, tira dúvida, mostra preço e <strong className="text-foreground">fecha venda sozinho</strong> — 24 horas por dia, 365 dias por ano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={walterPhoneImg}
              alt="Chat IA no celular"
              className="w-full rounded-xl border border-white/10"
              loading="lazy"
              width={400}
              height={600}
            />
          </div>
          <div className="space-y-4">
            {[
              { icon: Bot, title: "IA Treinada", desc: "Aprende seu negócio completamente" },
              { icon: MessageCircle, title: "Conversa Real", desc: "Em português natural e fluido" },
              { icon: Rocket, title: "Fecha Venda", desc: "Envia pagamento, agenda reunião" },
              { icon: Phone, title: "Whatsapp", desc: "Lead quente cai no seu WhatsApp" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-background border border-white/5">
                <div className="flex gap-3">
                  <item.icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-black uppercase text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA FAIXA */}
      <div className="bg-gradient-blue py-10 border-y border-primary/20">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="text-2xl md:text-3xl font-black uppercase">Tá Sem Site? Liga pro Mr. Sites.</h3>
            <p className="font-medium text-white/80 mt-1">Análise grátis + proposta com IA. Sem compromisso.</p>
          </div>
          <CTAPrimary message={`${mensagemPadrao} Quero análise gratuita.`} className="bg-white text-primary hover:bg-gray-100">
            Chamar Agora
          </CTAPrimary>
        </div>
      </div>

      {/* FAQ */}
      <Section id="faq">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">Respostas diretas sobre criação de sites com IA</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {[
            { q: "Em quanto tempo meu site fica pronto?", a: "24-48 horas. Landing page: 24h. Site institucional: 24-48h. E-commerce: 5-7 dias." },
            { q: "Como funciona o chat inteligente?", a: "Treinado com conteúdo da sua empresa. Conversa, qualifica leads, mostra preço, agenda reunião e envia pro seu WhatsApp." },
            { q: "Preciso entender de tecnologia?", a: "Não. Mr. Sites cuida de tudo. Você manda áudio no WhatsApp, recebe site pronto." },
            { q: "O site funciona no celular?", a: "Obrigatoriamente. Mobile-first com 100/100 no PageSpeed." },
            { q: "O site aparece no Google e ChatGPT?", a: "Sim. SEO técnico, GEO e AEO inclusos. Schema markup, meta tags, conteúdo otimizado." },
          ].map((f, i) => (
            <details key={i} className="group border border-white/5 rounded-lg p-5 cursor-pointer hover:bg-card transition-smooth">
              <summary className="font-black uppercase flex justify-between items-center">
                {f.q}
                <span className="text-primary text-2xl group-open:rotate-45 transition-smooth">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-gradient-blue text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-5">
              Melhor Chamar o <span className="text-white">Mr. Sites</span>.
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Seu site profissional com chat inteligente está a uma mensagem de distância. Rápido, seguro e que realmente funciona.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAPrimary message={`${mensagemPadrao} Quero fechar negócio.`} className="bg-white text-primary hover:bg-gray-100">
                Whatsapp Agora
              </CTAPrimary>
              <a href={`tel:+${WALTER.whatsappNumero}`} className="inline-flex items-center gap-2 border border-white text-white font-black uppercase px-6 py-3.5 rounded-full hover:bg-white/10 transition-smooth">
                <Phone className="w-4 h-4" /> Ligar
              </a>
            </div>
            <div className="mt-6 text-sm text-white/70">
              Atendimento 7 dias por semana • Brasil inteiro • 100% online
            </div>
          </div>
          <div className="hidden md:block relative">
            <img
              src={walterPhoneImg}
              alt="Walter online"
              className="w-full rounded-xl border border-white/20"
              loading="lazy"
              width={400}
              height={600}
            />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-background border-t border-white/5 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="font-black text-lg uppercase mb-3">Mr. Sites</div>
              <p className="text-sm text-muted-foreground mb-3">
                Especialista em criação de sites profissionais, rápidos, com chat IA 24/7 e SEO. Sites que vendem.
              </p>
              <p className="text-xs text-muted-foreground/60">Sites • Landing Pages • E-commerce • Chat IA</p>
            </div>
            <div>
              <div className="font-black text-primary uppercase mb-3 text-sm">Contato</div>
              <p className="text-sm flex items-center gap-2 mb-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href={waLink(mensagemPadrao)} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-smooth">
                  {WALTER.telefone}
                </a>
              </p>
              <p className="text-sm flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${WALTER.email}`} className="hover:text-primary transition-smooth">
                  {WALTER.email}
                </a>
              </p>
              <p className="text-sm flex items-center gap-2 mb-2">
                <Instagram className="w-4 h-4 text-primary" />
                {WALTER.instagram}
              </p>
              <p className="text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{WALTER.endereco}</span>
              </p>
            </div>
            <div>
              <div className="font-black text-primary uppercase mb-3 text-sm">Endereço Online</div>
              <p className="text-sm flex items-start gap-2">
                <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{WALTER.enderecoOnline}</span>
              </p>
              <div className="mt-6">
                <div className="font-black text-primary uppercase text-xs tracking-wider mb-2">Tecnologias</div>
                <p className="text-xs text-muted-foreground">React • Next.js • Astro • TypeScript • OpenAI • Claude • Gemini</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} mrsites.com — Walter Araujo. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={waLink(mensagemPadrao)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full border border-primary/30 hover:scale-110 transition-smooth animate-pulse-glow shadow-glow"
      >
        <MessageCircle className="w-6 h-6" strokeWidth={2.5} />
      </a>
    </div>
  );
};

export default Index;
