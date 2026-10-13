export function FloatingTerminalCard() {
  return (
    <div className="absolute -bottom-6 -right-2 sm:-right-8 z-10 rotate-2 animate-float">
      <div className="relative group">
        {/* Glow effect - enhanced */}
        <div className="absolute inset-0 bg-brew/30 blur-3xl rounded-lg opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Card */}
        <div
          className="relative bg-card/95 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden w-[17rem] sm:w-[19rem] transition-all duration-300 group-hover:-translate-y-1"
          style={{
            transform: 'perspective(800px) rotateX(2deg) rotateY(-3deg)',
            boxShadow: `
              0 20px 50px -12px rgba(0,0,0,0.5),
              0 0 20px -4px rgba(217,119,6,0.2),
              inset 0 1px 0 0 rgba(255,255,255,0.08),
              inset 0 -1px 0 0 rgba(217,119,6,0.1)
            `,
          }}
        >
          {/* Specular highlight - top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3) 50%, transparent)',
            }}
          />

          {/* Rim lighting - right edge */}
          <div
            className="absolute top-0 right-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, rgba(217,119,6,0.4), rgba(217,119,6,0.1) 50%, transparent)',
            }}
          />
          {/* Terminal title bar */}
          <div className="bg-gradient-to-r from-brew/10 to-copper/10 px-3 py-2 border-b border-white/10 flex items-center gap-1.5">
            <div className="flex gap-1.5">
              <div className="size-2.5 rounded-full bg-brew opacity-60" />
              <div className="size-2.5 rounded-full bg-copper opacity-40" />
              <div className="size-2.5 rounded-full bg-amber opacity-40" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground ml-2">brewscope</span>
          </div>

          {/* Terminal content */}
          <div className="p-4 font-mono text-[11px] leading-relaxed space-y-1.5">
            <div className="flex items-start gap-2">
              <span className="text-brew select-none">$</span>
              <span className="text-foreground/90">brewscope describe</span>
            </div>
            <div className="text-foreground/70 pl-4 space-y-0.5">
              <div>Formulae: <span className="text-brew font-medium">247</span> installed</div>
              <div>Casks: <span className="text-brew font-medium">83</span> applications</div>
            </div>
            <div className="flex items-center gap-2 pt-1 pl-4">
              <span className="text-dracula-green text-[10px]">✓</span>
              <span className="text-foreground/60 text-[10px]">read-only scan complete</span>
            </div>
            <div className="flex items-center gap-1 pl-4 pt-0.5">
              <span className="text-brew">$</span>
              <span className="w-1.5 h-3 bg-brew/70 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
