import { useEffect, useState } from "react";
import { X, Zap, Copy, Check, MessageCircle } from "lucide-react";

const STORAGE_KEY = "mrsites_exit_popup_shown";
const COUPON = "MRSITES5";
const DURATION = 15 * 60; // 15 minutes in seconds

const waLink = (msg: string) =>
  `https://wa.me/5511974698846?text=${encodeURIComponent(msg)}`;

const fmt = (s: number) => {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return { m, s: sec };
};

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState(DURATION);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };
    const fallback = window.setTimeout(() => trigger(), 30000);

    function trigger() {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
      sessionStorage.setItem(STORAGE_KEY, "1");
      setOpen(true);
      window.clearTimeout(fallback);
      document.removeEventListener("mouseleave", onMouseLeave);
    }

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const id = window.setInterval(() => setTime((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => window.clearInterval(id);
  }, [open]);

  if (!open) return null;
  const { m, s } = fmt(time);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COUPON);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {/* ignore */}
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Promoção relâmpago Mr. Sites"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in"
    >
      <div className="relative w-full max-w-lg bg-card border-2 border-neon rounded-2xl overflow-hidden shadow-glow">
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar promoção"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-background/70 hover:bg-background flex items-center justify-center transition-smooth"
        >
          <X className="w-4 h-4" />
        </button>

        {/* faixa neon topo */}
        <div className="bg-neon text-neon-foreground py-2 px-4 flex items-center justify-center gap-2 font-black uppercase text-xs tracking-widest">
          <Zap className="w-3.5 h-3.5" strokeWidth={3} /> Promoção Relâmpago
        </div>

        <div className="p-6 md:p-8 text-center">
          <div className="text-[11px] font-black uppercase tracking-[0.2em] text-neon mb-2">Espera aí!</div>
          <h3 className="text-2xl md:text-3xl font-black leading-tight mb-3">
            Antes de ir, leva <span className="text-neon">5% OFF</span> no seu primeiro site
          </h3>
          <p className="text-sm text-muted-foreground mb-5">
            Cupom válido para a <strong className="text-foreground">criação do seu primeiro site</strong> + <strong className="text-foreground">plano anual de suporte e hospedagem</strong>.
          </p>

          {/* countdown */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="bg-background border border-neon/40 rounded-lg px-4 py-2 min-w-[68px]">
              <div className="text-2xl md:text-3xl font-black text-neon tabular-nums">{m}</div>
              <div className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">min</div>
            </div>
            <div className="text-2xl font-black text-neon">:</div>
            <div className="bg-background border border-neon/40 rounded-lg px-4 py-2 min-w-[68px]">
              <div className="text-2xl md:text-3xl font-black text-neon tabular-nums">{s}</div>
              <div className="text-[9px] font-bold uppercase text-muted-foreground tracking-widest">seg</div>
            </div>
          </div>

          {/* cupom */}
          <button
            onClick={copy}
            className="w-full group flex items-center justify-between gap-3 bg-background border-2 border-dashed border-neon rounded-xl px-4 py-3 mb-5 hover:bg-neon/5 transition-smooth"
          >
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Seu cupom</div>
              <div className="text-xl font-black tracking-widest text-neon">{COUPON}</div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-foreground">
              {copied ? <><Check className="w-4 h-4 text-neon" /> Copiado</> : <><Copy className="w-4 h-4" /> Copiar</>}
            </span>
          </button>

          <a
            href={waLink(`Olá Walter! Quero usar o cupom ${COUPON} (5% OFF) no meu primeiro site + plano anual de suporte e hospedagem.`)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 bg-neon text-neon-foreground font-black uppercase tracking-wide rounded-full px-6 py-4 text-sm hover:scale-[1.02] transition-smooth"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={3} />
            Resgatar 5% OFF agora
          </a>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Não, obrigado — quero perder o desconto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
