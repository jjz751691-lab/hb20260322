import React, { useState } from 'react';
import { Target } from 'lucide-react';

export function IndustryAcademiaPanel() {
  const [activeTab, setActiveTab] = useState('关键技术');
  const tabs = ['关键技术', '创新团队', '协同创新', '国际交流'];

  return (
    <div className="absolute inset-0 flex flex-col p-2">
      {/* Tabs */}
      <div className="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/10 shrink-0 mb-3 w-fit self-end backdrop-blur-md shadow-xl">
        {tabs.map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)} 
            className={`px-3 py-1 text-[10px] font-bold rounded-lg transition-all duration-300 ${activeTab === tab ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)] border border-cyan-400/30' : 'text-slate-400 hover:text-cyan-300 hover:bg-white/5'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-0 relative">
        {activeTab === '关键技术' && <KeyTechnologies />}
        {activeTab !== '关键技术' && (
          <div className="w-full h-full flex items-center justify-center glass-card border-white/10 rounded-xl">
            <span className="text-slate-400 font-bold text-xs animate-pulse">{activeTab} 内容建设中...</span>
          </div>
        )}
      </div>
    </div>
  );
}

function KeyTechnologies() {
  const techs = [
    {
      id: '01',
      title: '迭代升级“天工”指挥平台',
      points: [
        '全面支撑七段式业务，解决人影国省一体化平台缺失的问题',
        '体系化优势突出，打造新一代人影业务基座'
      ],
      color: 'text-blue-400',
      bg: 'bg-blue-500',
      border: 'border-blue-400/30',
      gradient: 'from-blue-500/20 to-transparent',
      align: 'right',
      x: 20, y: 20
    },
    {
      id: '02',
      title: '集合作业效果定量评估成套技术',
      points: [
        '初步解决评估科学性、定量化不足的问题',
        '构建首个面向不同服务场景的评估成套技术'
      ],
      color: 'text-indigo-400',
      bg: 'bg-indigo-500',
      border: 'border-indigo-400/30',
      gradient: 'from-indigo-500/20 to-transparent',
      align: 'left',
      x: 80, y: 20
    },
    {
      id: '03',
      title: '研制新型暖云催化剂',
      points: [
        '解决当前暖云催化效率不高的难题',
        '新配方产品定型并投入应用'
      ],
      color: 'text-amber-400',
      bg: 'bg-amber-500',
      border: 'border-amber-400/30',
      gradient: 'from-amber-500/20 to-transparent',
      align: 'left',
      x: 80, y: 80
    },
    {
      id: '04',
      title: '创新无人机人影应用技术',
      points: [
        '弥补高原、高山、港口等地区作业力量不足的问题',
        '实现无人机对人影的软硬件支撑应用融合'
      ],
      color: 'text-emerald-400',
      bg: 'bg-emerald-500',
      border: 'border-emerald-400/30',
      gradient: 'from-emerald-500/20 to-transparent',
      align: 'right',
      x: 20, y: 80
    }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Neuron Light Beams (SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <filter id="beam-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="beam-grad-1" x1="50%" y1="50%" x2="20%" y2="20%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam-grad-2" x1="50%" y1="50%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam-grad-3" x1="50%" y1="50%" x2="80%" y2="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="beam-grad-4" x1="50%" y1="50%" x2="20%" y2="80%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Beams */}
        <path d="M 50 50 Q 35 35 20 20" fill="none" stroke="url(#beam-grad-1)" strokeWidth="0.5" filter="url(#beam-glow)" className="animate-pulse" />
        <path d="M 50 50 Q 65 35 80 20" fill="none" stroke="url(#beam-grad-2)" strokeWidth="0.5" filter="url(#beam-glow)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <path d="M 50 50 Q 65 65 80 80" fill="none" stroke="url(#beam-grad-3)" strokeWidth="0.5" filter="url(#beam-glow)" className="animate-pulse" style={{ animationDelay: '1s' }} />
        <path d="M 50 50 Q 35 65 20 80" fill="none" stroke="url(#beam-grad-4)" strokeWidth="0.5" filter="url(#beam-glow)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        {/* Moving data pulses */}
        <circle r="0.8" fill="#fff" filter="url(#beam-glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 50 50 Q 35 35 20 20" />
        </circle>
        <circle r="0.8" fill="#fff" filter="url(#beam-glow)">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M 50 50 Q 65 35 80 20" />
        </circle>
        <circle r="0.8" fill="#fff" filter="url(#beam-glow)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M 50 50 Q 65 65 80 80" />
        </circle>
        <circle r="0.8" fill="#fff" filter="url(#beam-glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 50 50 Q 35 65 20 80" />
        </circle>
      </svg>

      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 frosted-sphere flex items-center justify-center z-10 group cursor-pointer transition-transform duration-500 hover:scale-110">
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-300/40 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.5)] group-hover:bg-cyan-400/30 transition-colors">
          <Target className="w-8 h-8 text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 animate-ping opacity-50"></div>
      </div>

      {/* 4 Corners Content */}
      <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1 p-1 z-10 relative pointer-events-none">
        {/* Top Left - 01 */}
        <div className="flex flex-col justify-center pb-2 pr-16 relative pointer-events-auto">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 frosted-sphere flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <span className="text-blue-300 font-bold text-xs refractive-text">01</span>
          </div>
          <h4 className={`text-[10px] font-bold ${techs[0].color} mb-1 flex items-center gap-1 justify-end`}>
            {techs[0].title}
            <div className={`w-1 h-1 rounded-full ${techs[0].bg} shadow-[0_0_5px_currentColor]`}></div>
          </h4>
          <ul className="flex flex-col gap-0.5 text-right">
            {techs[0].points.map((p, i) => (
              <li key={i} className="text-[8px] text-slate-300 leading-tight scale-90 origin-right">{p}</li>
            ))}
          </ul>
        </div>

        {/* Top Right - 02 */}
        <div className="flex flex-col justify-center pb-2 pl-16 relative pointer-events-auto">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 frosted-sphere flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <span className="text-indigo-300 font-bold text-xs refractive-text">02</span>
          </div>
          <h4 className={`text-[10px] font-bold ${techs[1].color} mb-1 flex items-center gap-1`}>
            <div className={`w-1 h-1 rounded-full ${techs[1].bg} shadow-[0_0_5px_currentColor]`}></div>
            {techs[1].title}
          </h4>
          <ul className="flex flex-col gap-0.5">
            {techs[1].points.map((p, i) => (
              <li key={i} className="text-[8px] text-slate-300 leading-tight scale-90 origin-left flex items-start gap-1">
                <span className="mt-1 w-0.5 h-0.5 rounded-full bg-slate-500 shrink-0"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Left - 04 */}
        <div className="flex flex-col justify-center pt-2 pr-16 relative pointer-events-auto">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 frosted-sphere flex items-center justify-center shadow-[0_0_15px_rgba(52,211,153,0.3)]">
            <span className="text-emerald-300 font-bold text-xs refractive-text">04</span>
          </div>
          <h4 className={`text-[10px] font-bold ${techs[3].color} mb-1 flex items-center gap-1 justify-end`}>
            {techs[3].title}
            <div className={`w-1 h-1 rounded-full ${techs[3].bg} shadow-[0_0_5px_currentColor]`}></div>
          </h4>
          <ul className="flex flex-col gap-0.5 text-right">
            {techs[3].points.map((p, i) => (
              <li key={i} className="text-[8px] text-slate-300 leading-tight scale-90 origin-right">{p}</li>
            ))}
          </ul>
        </div>

        {/* Bottom Right - 03 */}
        <div className="flex flex-col justify-center pt-2 pl-16 relative pointer-events-auto">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 frosted-sphere flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <span className="text-amber-300 font-bold text-xs refractive-text">03</span>
          </div>
          <h4 className={`text-[10px] font-bold ${techs[2].color} mb-1 flex items-center gap-1`}>
            <div className={`w-1 h-1 rounded-full ${techs[2].bg} shadow-[0_0_5px_currentColor]`}></div>
            {techs[2].title}
          </h4>
          <ul className="flex flex-col gap-0.5">
            {techs[2].points.map((p, i) => (
              <li key={i} className="text-[8px] text-slate-300 leading-tight scale-90 origin-left flex items-start gap-1">
                <span className="mt-1 w-0.5 h-0.5 rounded-full bg-slate-500 shrink-0"></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
