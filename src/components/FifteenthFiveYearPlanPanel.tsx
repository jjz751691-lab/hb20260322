import React from 'react';

export function FifteenthFiveYearPlanPanel() {
  const projects = [
    {
      id: 1,
      title: "人工影响天气防灾减灾\n能力提升工程",
      theme: "cyan"
    },
    {
      id: 2,
      title: "人工影响天气生态保护与\n修复能力建设工程",
      theme: "emerald"
    },
    {
      id: 3,
      title: "人工影响天气重大应急\n保障能力建设工程",
      theme: "blue"
    },
    {
      id: 4,
      title: "人工影响天气作业安全\n能力提升工程",
      theme: "indigo"
    }
  ];

  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'cyan': return { 
        bg: 'bg-white/5', 
        border: 'border-white/10', 
        text: 'text-cyan-400', 
        numBg: 'bg-cyan-500', 
        shadow: 'shadow-[0_0_20px_rgba(34,211,238,0.2)]', 
        headerBg: 'bg-white/5',
        titleColor: 'text-cyan-50'
      };
      case 'emerald': return { 
        bg: 'bg-white/5', 
        border: 'border-white/10', 
        text: 'text-emerald-400', 
        numBg: 'bg-emerald-500', 
        shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]', 
        headerBg: 'bg-white/5',
        titleColor: 'text-emerald-50'
      };
      case 'blue': return { 
        bg: 'bg-white/5', 
        border: 'border-white/10', 
        text: 'text-blue-400', 
        numBg: 'bg-blue-500', 
        shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]', 
        headerBg: 'bg-white/5',
        titleColor: 'text-blue-50'
      };
      case 'indigo': return { 
        bg: 'bg-white/5', 
        border: 'border-white/10', 
        text: 'text-indigo-400', 
        numBg: 'bg-indigo-500', 
        shadow: 'shadow-[0_0_20px_rgba(99,102,241,0.2)]', 
        headerBg: 'bg-white/5',
        titleColor: 'text-indigo-50'
      };
      default: return { 
        bg: 'from-cyan-900/40 to-blue-900/10', 
        border: 'border-cyan-500/40', 
        text: 'text-cyan-300', 
        numBg: 'bg-cyan-500', 
        shadow: 'shadow-[0_0_10px_rgba(34,211,238,0.3)]', 
        headerBg: 'bg-black/20',
        titleColor: 'text-slate-100'
      };
    }
  };

  return (
    <div className="absolute inset-0 flex gap-3 p-2">
      {projects.map((project) => {
        const styles = getThemeStyles(project.theme);
        return (
          <div key={project.id} className={`flex-1 flex flex-col rounded-2xl border ${styles.border} glass-card glass-reflection overflow-hidden ${styles.shadow} relative group hover:-translate-y-2 transition-all duration-500 cursor-pointer backdrop-blur-2xl liquid-distortion`}>
            {/* Background grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none"></div>

            {/* Content */}
            <div className={`relative flex-1 p-4 flex flex-col items-center justify-center ${styles.headerBg}`}>
              {/* Decorative corners */}
              <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${styles.border} opacity-50 rounded-tl-2xl`}></div>
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 ${styles.border} opacity-30 rounded-br-2xl`}></div>
              
              <h4 className={`text-xs font-black text-center ${styles.titleColor} leading-relaxed z-10 whitespace-pre-line drop-shadow-2xl tracking-widest group-hover:scale-110 transition-transform duration-500`}>
                {project.title}
              </h4>
            </div>
            
            {/* Bottom Decoration */}
            <div className={`h-2 w-full ${styles.numBg} opacity-80 shadow-[0_0_12px_currentColor] relative z-20`}></div>
          </div>
        );
      })}
    </div>
  );
}
