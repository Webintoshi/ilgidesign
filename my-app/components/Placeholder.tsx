'use client';

interface PlaceholderProps {
  id: string;
  width?: number;
  height?: number;
  className?: string;
  showLabel?: boolean;
}

export default function Placeholder({ 
  id, 
  width = 800, 
  height = 600, 
  className = '',
  showLabel = true 
}: PlaceholderProps) {
  // Hero banner için özel stil
  const isHero = id.includes('HERO_BANNER') || (width >= 1920 && height >= 1080);
  
  return (
    <div 
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        background: isHero 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          : 'linear-gradient(135deg, rgba(0, 148, 65, 0.1) 0%, rgba(0, 148, 65, 0.05) 100%)'
      }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className={isHero ? "opacity-30" : "opacity-10"}>
          <defs>
            <pattern id={`grid-${id}`} width={isHero ? "60" : "40"} height={isHero ? "60" : "40"} patternUnits="userSpaceOnUse">
              <path d={`M ${isHero ? "60" : "40"} 0 L 0 0 0 ${isHero ? "60" : "40"}`} fill="none" stroke={isHero ? "#009441" : "#009441"} strokeWidth="1"/>
            </pattern>
            {isHero && (
              <>
                <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#009441" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </>
            )}
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
          {isHero && (
            <>
              <circle cx="80%" cy="30%" r="200" fill={`url(#glow-${id})`} />
              <circle cx="20%" cy="70%" r="150" fill={`url(#glow-${id})`} />
            </>
          )}
        </svg>
      </div>
      
      {/* Animated lines for hero */}
      {isHero && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#009441]/30 to-transparent animate-pulse" />
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#009441]/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#009441]/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      )}
      
      {/* Corner markers */}
      <div 
        className={`absolute ${isHero ? 'border-[#009441]/40' : 'border-[#009441]'}`}
        style={{
          top: isHero ? '40px' : '16px',
          left: isHero ? '40px' : '16px',
          width: isHero ? '60px' : '32px',
          height: isHero ? '60px' : '32px',
          borderTop: '2px solid',
          borderLeft: '2px solid'
        }}
      />
      <div 
        className={`absolute ${isHero ? 'border-[#009441]/40' : 'border-[#009441]'}`}
        style={{
          top: isHero ? '40px' : '16px',
          right: isHero ? '40px' : '16px',
          width: isHero ? '60px' : '32px',
          height: isHero ? '60px' : '32px',
          borderTop: '2px solid',
          borderRight: '2px solid'
        }}
      />
      <div 
        className={`absolute ${isHero ? 'border-[#009441]/40' : 'border-[#009441]'}`}
        style={{
          bottom: isHero ? '40px' : '16px',
          left: isHero ? '40px' : '16px',
          width: isHero ? '60px' : '32px',
          height: isHero ? '60px' : '32px',
          borderBottom: '2px solid',
          borderLeft: '2px solid'
        }}
      />
      <div 
        className={`absolute ${isHero ? 'border-[#009441]/40' : 'border-[#009441]'}`}
        style={{
          bottom: isHero ? '40px' : '16px',
          right: isHero ? '40px' : '16px',
          width: isHero ? '60px' : '32px',
          height: isHero ? '60px' : '32px',
          borderBottom: '2px solid',
          borderRight: '2px solid'
        }}
      />
      
      {/* Label */}
      {showLabel && (
        <div className={`relative z-10 text-center px-4 ${isHero ? 'py-8' : ''}`}>
          {isHero ? (
            <>
              <div className="text-[#009441] text-sm font-mono mb-4 tracking-[0.3em] uppercase">
                Hero Banner
              </div>
              <div className="text-white/60 text-lg font-medium max-w-md mb-2">
                [{id}]
              </div>
              <div className="text-white/40 text-sm">
                {width} × {height}px
              </div>
              <div className="mt-6 text-white/30 text-xs uppercase tracking-wider">
                Görsel Eklenecek
              </div>
            </>
          ) : (
            <>
              <div className="text-[#009441] text-xs font-mono mb-2 tracking-wider">
                PLACEHOLDER
              </div>
              <div className="text-black/60 text-sm font-medium max-w-xs">
                [{id}]
              </div>
              <div className="mt-2 text-black/40 text-xs">
                {width} × {height}px
              </div>
            </>
          )}
        </div>
      )}
      
      {/* ID badge */}
      <div 
        className={`absolute bg-[#009441] text-white text-xs font-bold tracking-wider ${isHero ? 'top-8 left-1/2 -translate-x-1/2 px-4 py-2 text-sm' : 'top-4 left-1/2 -translate-x-1/2 px-3 py-1'}`}
      >
        {id}
      </div>
    </div>
  );
}

// Predefined aspect ratio placeholders
export function PlaceholderHero({ id, className = '' }: { id: string; className?: string }) {
  return <Placeholder id={id} width={1920} height={1080} className={`min-h-[600px] ${className}`} />;
}

export function PlaceholderSquare({ id, className = '' }: { id: string; className?: string }) {
  return <Placeholder id={id} width={800} height={800} className={`aspect-square ${className}`} />;
}

export function PlaceholderCard({ id, className = '' }: { id: string; className?: string }) {
  return <Placeholder id={id} width={800} height={600} className={`aspect-[4/3] ${className}`} />;
}

export function PlaceholderLogo({ id, className = '' }: { id: string; className?: string }) {
  return (
    <div className={`relative bg-gray-100 flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 ${className}`}>
      <Placeholder id={id} width={200} height={100} className="h-16 w-auto" />
    </div>
  );
}

export function PlaceholderTeam({ id, className = '' }: { id: string; className?: string }) {
  return <Placeholder id={id} width={400} height={500} className={`aspect-[4/5] ${className}`} />;
}
