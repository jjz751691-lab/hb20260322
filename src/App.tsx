import React, { useState, useEffect, useRef } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Plane, Rocket, TrendingUp, ShieldCheck, Cpu, Layout, Globe } from 'lucide-react';
import { FifteenthFiveYearPlanPanel } from './components/FifteenthFiveYearPlanPanel';
import { IndustryAcademiaPanel } from './components/IndustryAcademiaPanel';
import { SocialServicesTimeline } from './components/SocialServicesTimeline';
import { WorkSituationPanel } from './components/WorkSituationPanel';

const responsibilities = [
  "拟定发展规划与标准规范",
  "业务指导与技术支持",
  "国家级系统建设与运维",
  "重大服务与跨区作业组织",
  "重点工程与科技项目实施",
  "安全监督技术管理",
  "协调会议与标委会工作",
  "基础理论与应用技术研究",
  "新技术新装备研发推广",
  "作业效果评估与效益分析",
  "国际交流合作与科普宣传"
];

const intlCoopData = [
  { country: "阿联酋", desc: "联合行动意向纪要 / 无人机出海" },
  { country: "沙 特", desc: "空中国王360飞机改装集成" },
  { country: "泰 国", desc: "暖云催化合作 / 云室实验平台出口" },
  { country: "韩 国", desc: "连续4年举行中韩人影学术研讨会" },
  { country: "多 边", desc: "摩洛哥、巴基斯坦等一带一路交流" },
];

function AutoScrollIntlList({ items }: { items: { country: string, desc: string }[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isHovering) return;

    let animationId: number;
    const scrollStep = () => {
      if (el) {
        el.scrollTop += 0.3;
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <div 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        ref={scrollRef}
        className="h-full overflow-y-auto no-scrollbar"
      >
        {[...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 py-1.5 border-b border-white/5 last:border-0">
            <span className="text-amber-400 font-bold text-[10px] w-12 shrink-0">{item.country}</span>
            <span className="text-slate-200 text-[10px] truncate">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutoScrollList({ items }: { items: string[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isHovering) return;

    let animationId: number;
    const scrollStep = () => {
      if (el) {
        el.scrollTop += 0.3; // Slower scroll speed
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering]);

  return (
    <div 
      className="relative h-[160px] w-full overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div 
        ref={scrollRef}
        className="overflow-y-auto no-scrollbar h-full flex flex-col gap-2.5 pb-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...items, ...items].map((text, i) => (
          <div key={i} className="group relative glass-card px-3 py-2.5 text-[11px] text-slate-200 leading-relaxed flex items-start gap-2.5 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all duration-300 shrink-0 shadow-lg">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors rounded-l-lg"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5 shadow-[0_0_8px_rgba(34,211,238,0.9)] group-hover:scale-150 transition-transform"></div>
            <span className="tracking-wide flex-1">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const sysHeaders = ["过程预报\n与作业展望", "潜力预报\n与作业计划", "条件预报\n与作业预案", "监测预警\n与方案设计", "跟踪监测\n与作业指挥", "作业分析\n与效果评估", "安全管理"];
const sysData = [
  {
    lvl: "国家级\n(区域)", lvlBg: "#e6c8d8", plat: "国家级人影综合业务平台", platBg: "#f4e8ee",
    cells: [
      { r: "开展干旱、森林草原火险等级、空气污染等作业需求分析、作业过程预报和作业展望。", p: "人影作业过程预报与作业展望指导专报。" },
      { r: "开展作业潜力预报，制定发布作业计划，适时组织开展专题会商。", p: "人影作业潜力预报和作业计划指导产品。" },
      { r: "运行CMA-CPEF-SEED模式系统，发布云宏微观和作业预案预估产品，开展作业条件预报和作业预案制定。", p: "人影作业条件预报和作业预案指导产品。" },
      { r: "发布多源观测资料的云降水监测反演产品及重点区域作业条件监测预警产品。", p: "云降水监测指导产品；重点区域作业条件监测预警产品。" },
      { r: "开展跨区域空地一体化作业，申请飞机作业空域，飞机实时通讯，跟踪指挥飞机作业；跟踪监测地面作业。", p: "飞机作业修订指令、地面作业指令、空域申请产品。" },
      { r: "针对全国人工增雨雪作业，开展作业效果评估。", p: "全国人工增雨雪作业日报；全国人影作业信息报；全国人工增雨雪年度报告。" },
      { r: "国家级飞机保障工作评价；飞机作业物资使用情况统计；弹药库存及质量监管；全国地面作业装备运行管理。", p: "国家人影飞机月度运行质量通报、催化剂使用情况月报；全国人影弹药质量通报；全国地面作业装备运行状况月报。" }
    ]
  },
  {
    lvl: "省级", lvlBg: "#a3d4b6", plat: "省（区、市）人影综合业务平台", platBg: "#cce8d6",
    cells: [
      { r: "基于国家级指导产品和本省需求，开展需求分析、作业过程预报和作业展望。", p: "XX省人影作业过程预报与作业展望指导专报。" },
      { r: "基于国家级指导产品，开展本省作业潜力预报，制定发布作业计划。", p: "XX省人影作业潜力预报和作业计划指导产品。" },
      { r: "基于国家级指导产品，开展本省作业条件预报和作业预案制定。对国家级模式产品的云宏观检验。", p: "XX省人影作业条件预报和作业预案指导产品。" },
      { r: "国家级产品释用，发展本省作业条件监测预警客观产品，制作本省作业方案设计产品。", p: "XX省人影作业条件监测预警产品；XX省作业方案设计。" },
      { r: "飞机作业方案设计和滚动修订，飞机作业跟踪指挥。地面作业指令制作、滚动修订及作业指导。", p: "飞机作业方案、飞机作业修订指令、地面作业指令、空域申请产品。" },
      { r: "针对本省人工增雨雪/防雹作业，开展作业效果评估。", p: "XX省人工增雨雪作业日报；XX省人工防雹作业日报；XX省人工增雨雪年度报告。" },
      { r: "人影飞机保障工作评价；飞机作业物资使用统计；弹药库存及质量监管；地面作业装备运行管理。", p: "XX省人影飞机运行维护报告、催化剂使用情况月报；XX省人影弹药使用情况月报、地面作业装备运行情况通报。" }
    ]
  },
  {
    lvl: "市县级", lvlBg: "#a3ccee", plat: "省（区、市）人影综合业务平台（客户端，APP）", platBg: "#e6f0fa",
    sp: ["作业飞机"],
    cells: [
      null, null, null,
      { r: "应用上级指导产品及本地资料，加强作业条件监测，制作地面作业方案。", p: "XX市人影作业方案。" },
      { r: "制作发布地面作业指令，科学实施地面作业，实时上报作业信息。", p: "作业指令，作业信息。" },
      null,
      { r: "本级装备、弹药库存信息上报。", p: "无" }
    ]
  },
  {
    lvl: "作业点", lvlBg: "#e8b9b9", plat: "省（区、市）人影综合业务平台（客户端，APP）", platBg: "#e6f0fa",
    sp: ["高炮", "火箭"],
    cells: [
      null, null, null,
      { r: "做好飞机和地面作业准备。", p: "无" },
      { r: "实施飞机和地面作业，上报作业信息。", p: "作业信息。" },
      null,
      { r: "弹药物联网系统终端数据、地面作业装备数据采集及信息上传。", p: "无" }
    ]
  }
];

function BusinessSystemTable() {
  const [activeStage, setActiveStage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage(prev => (prev + 1) % sysHeaders.length);
    }, 6000); // 6 seconds per stage
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isHovering) return;

    let animationId: number;
    const scrollStep = () => {
      if (el && el.scrollHeight > el.clientHeight) {
        el.scrollTop += 0.3;
        if (el.scrollTop >= el.scrollHeight / 2) {
          el.scrollTop = 0;
        }
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationId);
  }, [isHovering, activeStage]); // Reset scroll behavior on stage change

  const currentStageName = sysHeaders[activeStage].replace('\n', '');

  return (
    <div className="w-full h-full flex flex-col glass-card relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1 bg-cyan-900/30 w-full z-10">
        <div 
          className="h-full bg-cyan-400 transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          style={{ width: `${((activeStage + 1) / sysHeaders.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
          <span className="text-cyan-100 font-bold text-xs tracking-widest">
            {currentStageName}
          </span>
        </div>
        <div className="flex gap-1">
          {sysHeaders.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeStage ? 'bg-cyan-400 scale-125 shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'bg-slate-600'}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 relative min-h-0"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <div 
          ref={scrollRef}
          className="h-full overflow-y-auto no-scrollbar pb-4"
          style={{ scrollBehavior: 'auto' }}
        >
          <div className="p-2 flex flex-col gap-2">
            {[...sysData, ...sysData].map((row, i) => {
            const cell = row.cells[activeStage];
            if (!cell) return null; // 只要没有工作职责，就直接不显示该层级

            return (
              <div key={i} className="group flex flex-col glass-card border-white/5 overflow-hidden shrink-0 shadow-lg hover:border-cyan-500/30 transition-all duration-300 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-colors" style={{ backgroundColor: row.lvlBg }}></div>
                {/* Level Header */}
                <div className="px-3 py-1.5 flex items-center justify-between bg-white/5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[11px] tracking-wide" style={{ color: row.lvlBg, textShadow: `0 0 8px ${row.lvlBg}80` }}>
                      {row.lvl.replace('\n', '')}
                    </span>
                    <span className="text-[9px] text-cyan-100/70 bg-white/5 px-1.5 py-0.5 rounded truncate max-w-[150px] border border-white/10">
                      {row.plat}
                    </span>
                  </div>
                </div>

                {/* Level Work */}
                <div className="p-3 flex flex-col gap-2 text-[11px]">
                  {row.sp && (
                    <div className="flex flex-wrap gap-1.5 mb-1">
                      {row.sp.map(item => (
                        <span key={item} className="bg-cyan-500/10 text-cyan-100 border border-cyan-500/20 px-2 py-0.5 rounded text-[9px] shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-sm bg-blue-400 shrink-0 mt-1 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
                    <div className="text-slate-300 leading-relaxed group-hover:text-cyan-50 transition-colors">
                      <span className="text-blue-300 font-bold mr-1.5">工作职责:</span>
                      {cell.r}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <div className="w-1.5 h-1.5 rounded-sm bg-emerald-400 shrink-0 mt-1 shadow-[0_0_5px_rgba(52,211,153,0.8)]"></div>
                    <div className="text-slate-300 leading-relaxed group-hover:text-cyan-50 transition-colors">
                      <span className="text-emerald-300 font-bold mr-1.5">业务产品:</span>
                      {cell.p}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scaleX = width / 1920;
      const scaleY = height / 1080;
      setScale(Math.min(scaleX, scaleY));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen dynamic-bg flex items-center justify-center overflow-hidden relative">
      {/* Ambient Fluid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen">
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vh] bg-[radial-gradient(circle,rgba(14,165,233,0.4)_0%,transparent_60%)] blur-[120px] ambient-blob-1"></div>
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[70vh] bg-[radial-gradient(circle,rgba(59,130,246,0.4)_0%,transparent_60%)] blur-[130px] ambient-blob-2"></div>
        <div className="absolute -bottom-[10%] left-[10%] w-[70vw] h-[50vh] bg-[radial-gradient(circle,rgba(45,212,191,0.35)_0%,transparent_60%)] blur-[140px] ambient-blob-3"></div>
        <div className="absolute top-[10%] left-[30%] w-[40vw] h-[40vh] bg-[radial-gradient(circle,rgba(99,102,241,0.35)_0%,transparent_60%)] blur-[110px] ambient-blob-1" style={{ animationDelay: '-10s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="floating-particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--tw-translate-x': `${(Math.random() - 0.5) * 200}px`,
              '--tw-translate-y': `${(Math.random() - 0.5) * 200}px`,
              '--float-duration': `${Math.random() * 10 + 10}s`,
              '--float-delay': `${Math.random() * -20}s`,
            } as any}
          ></div>
        ))}
      </div>

      <div 
        className="font-sans text-slate-200 relative flex flex-col origin-center shrink-0 z-10"
        style={{ 
          width: '1920px', 
          height: '1080px',
          transform: `scale(${scale})`
        }}
      >
        {/* Header */}
        <header className="h-[10%] flex items-center justify-between px-6 relative z-10 border-b border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          {/* Left: Logo & Title */}
          <div className="flex items-center space-x-3 w-[25%] relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-8 bg-cyan-400"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wider drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">人工影响天气中心</span>
              <span className="text-[10px] text-cyan-400 tracking-widest uppercase mt-0.5">Weather Modification Center</span>
            </div>
          </div>
          
          {/* Center: Main Title */}
          <div className="flex items-center justify-center space-x-6 w-[50%]">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-widest drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              人工影响天气中心综合汇报大屏
            </h1>
          </div>

          {/* Right: Time */}
          <div className="w-[25%] flex justify-end text-cyan-400 font-bold text-lg tracking-wider drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
            {currentTime.toLocaleString('zh-CN', { hour12: false }).replace(/\//g, '-')}
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 h-[90%] relative z-10 overflow-hidden">
          <CenterOverviewView />
        </main>

        {/* Bottom glow effect */}
        <div className="h-4 w-full bg-gradient-to-t from-cyan-500/10 to-transparent absolute bottom-0 z-0 pointer-events-none"></div>
      </div>
    </div>
  );
}

// ==========================================
// Comprehensive System Panel Component
// ==========================================
function ComprehensiveSystemPanel({ className = '' }: { className?: string }) {
  const [sysTab, setSysTab] = useState<'业务体系' | '制度体系' | '标准规范体系'>('业务体系');

  const ruleData = [
    { name: '法规政策制度', value: 18, color: '#38bdf8' },
    { name: '工程管理', value: 8, color: '#34d399' },
    { name: '业务规范', value: 30, color: '#a78bfa' }
  ];

  const standardData = [
    { title: '基础标准', items: ['术语', '编码格式', '培训'] },
    { title: '作业条件', items: ['作业技术预报', '作业条件预警', '作业条件监测', '作业条件识别', '作业条件分析'] },
    { title: '作业技术', items: ['作业方案与技术要求', '作业操作规范与规程', '作业调度与指挥'] },
    { title: '作业评估', items: ['作业效果检验', '云水资源评估', '作业效益评估'] },
    { title: '设施设备', items: ['探测装备', '作业装备', '催化剂', '站点建设', '试验设施'] },
    { title: '安全保障', items: ['作业安全技术和管理', '装备运输储存', '空域申请与使用', '岗位管理'] }
  ];

  return (
    <Panel 
      title="中心综合体系" 
      className={className}
      extra={
        <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10 backdrop-blur-md">
          <button onClick={() => setSysTab('业务体系')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${sysTab === '业务体系' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>业务体系</button>
          <button onClick={() => setSysTab('制度体系')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${sysTab === '制度体系' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>制度体系</button>
          <button onClick={() => setSysTab('标准规范体系')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${sysTab === '标准规范体系' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>标准规范体系</button>
        </div>
      }
    >
      <div className="w-full h-full border border-white/5 rounded-xl bg-white/5 relative overflow-hidden min-h-0">
        {sysTab === '业务体系' && (
          <div className="absolute inset-0 flex flex-col p-2">
            <div className="text-xs font-bold text-cyan-300 mb-1.5 self-start shrink-0">1. 形成“横向到边、纵向到底”业务体系</div>
            <div className="flex-1 w-full border border-cyan-500/20 overflow-hidden rounded min-h-0 flex flex-col">
              <BusinessSystemTable />
            </div>
          </div>
        )}
        {sysTab === '制度体系' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
            <div className="text-xs font-bold text-cyan-300 mb-1 self-start w-full shrink-0">2. 制度体系 (56个+)</div>
            <div className="flex-1 w-full flex items-center justify-center relative min-h-0">
              <div className="w-full h-full absolute inset-0">
                <ResponsiveContainer>
                  <PieChart>
                    <defs>
                      <filter id="glow-sys" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {/* Background Track */}
                    <Pie 
                      data={[{value: 1}]} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius="55%" 
                      outerRadius="85%" 
                      stroke="none" 
                      fill="rgba(255,255,255,0.05)"
                      isAnimationActive={false}
                    />
                    {/* Main Donut */}
                    <Pie 
                      data={ruleData} 
                      cx="50%" 
                      cy="50%" 
                      innerRadius="55%" 
                      outerRadius="85%" 
                      stroke="rgba(255,255,255,0.15)" 
                      strokeWidth={1} 
                      dataKey="value"
                      paddingAngle={6}
                      cornerRadius={16}
                      isAnimationActive={true}
                    >
                      {ruleData.map((e, i) => <Cell key={i} fill={e.color} style={{ filter: 'url(#glow-sys)', opacity: 0.9 }} className="outline-none hover:opacity-100 transition-opacity duration-300" />)}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: '#22d3ee', borderRadius: '12px', fontSize: '11px', padding: '6px 10px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#e2e8f0' }} cursor={false} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-cyan-300" style={{ textShadow: '0 0 10px rgba(34,211,238,0.5)' }}>56<span className="text-sm">+</span></span>
                <span className="text-[10px] text-slate-400">总计</span>
              </div>
            </div>
            <div className="w-full flex justify-center gap-3 mt-2 flex-wrap shrink-0">
              {ruleData.map((e, i) => (
                <div key={i} className="flex items-center gap-1 text-[11px]">
                  <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: e.color }}></span>
                  <span className="text-slate-300">{e.name}</span>
                  <span className="font-mono text-cyan-400 font-bold">{e.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {sysTab === '标准规范体系' && (
          <div className="absolute inset-0 flex flex-col p-2 pt-1">
            {/* Top Stats */}
            <div className="flex items-center justify-between mb-2 px-1 border-b border-cyan-500/20 pb-2 shrink-0">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">126</span>
                <span className="text-[10px] text-slate-400">项总计</span>
              </div>
              <div className="flex gap-1.5">
                <div className="flex flex-col items-center glass-card border-white/10 px-2 py-0.5">
                  <span className="text-[9px] text-slate-400">国家标准</span>
                  <span className="text-xs font-bold text-amber-400">7</span>
                </div>
                <div className="flex flex-col items-center glass-card border-white/10 px-2 py-0.5">
                  <span className="text-[9px] text-slate-400">行业标准</span>
                  <span className="text-xs font-bold text-emerald-400">37</span>
                </div>
                <div className="flex flex-col items-center glass-card border-white/10 px-2 py-0.5">
                  <span className="text-[9px] text-slate-400">地方标准</span>
                  <span className="text-xs font-bold text-cyan-400">82</span>
                </div>
              </div>
            </div>

            {/* Categories Grid & Books */}
            <div className="flex-1 flex gap-2 overflow-hidden min-h-0">
              {/* Left: 3x2 Grid */}
              <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-1.5 min-h-0">
                {standardData.map((category, idx) => (
                  <div key={idx} className="flex flex-col h-full overflow-hidden border border-white/5 rounded glass-card shadow-inner">
                    <div className="bg-white/5 text-cyan-100 text-center text-[10px] font-bold py-1 border-b border-white/5 shrink-0">
                      {category.title}
                    </div>
                    <div className="flex-1 p-1 flex justify-center gap-2 overflow-hidden">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mb-1 shrink-0 shadow-[0_0_4px_rgba(34,211,238,0.8)]"></div>
                          <div className="flex flex-col items-center text-slate-300 text-[9px] leading-[1.2] overflow-y-auto no-scrollbar font-medium tracking-widest">
                            {item.split('').map((char, charIdx) => (
                              <span key={charIdx}>{char}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Books */}
              <div className="w-[90px] shrink-0 flex flex-col gap-2 overflow-y-auto no-scrollbar">
                {/* Book 1 */}
                <div className="relative flex-1 min-h-[70px] bg-gradient-to-br from-cyan-900 to-blue-900 rounded shadow-[4px_4px_10px_rgba(0,0,0,0.3)] overflow-hidden border border-cyan-500/40 border-l-[4px] border-l-cyan-400 flex flex-col items-center justify-center p-1.5 group hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-white/5 transform rotate-45 translate-x-4 -translate-y-4"></div>
                  <div className="text-cyan-50 text-[9px] font-bold text-center leading-tight drop-shadow-md z-10">人工影响天气<br/>文件选编</div>
                  <div className="text-cyan-200 text-[7px] text-center mt-1 drop-shadow-md z-10 bg-black/20 px-1 py-0.5 rounded">(2021年版)</div>
                  <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Book 2 */}
                <div className="relative flex-1 min-h-[70px] bg-gradient-to-br from-slate-100 to-slate-300 rounded shadow-[4px_4px_10px_rgba(0,0,0,0.3)] overflow-hidden border border-slate-400 border-l-[4px] border-l-slate-600 flex flex-col items-center pt-3 group hover:scale-[1.02] transition-transform cursor-pointer">
                  <div className="border-y border-slate-400 py-1 mb-1 z-10 w-[85%]">
                    <div className="text-slate-800 text-[8px] font-serif font-bold text-center tracking-tighter leading-tight">人工影响天气<br/>标准汇编</div>
                  </div>
                  <div className="text-slate-600 text-[6px] text-center z-10 font-medium">2000年-2022年</div>
                  <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-red-900/80 to-red-700/60" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }}></div>
                  <div className="absolute bottom-1.5 right-1.5 w-4 h-4 rounded-full border border-white/40 bg-white/20 flex items-center justify-center z-10 shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Panel>
  );
}
// ==========================================
// Engineering Construction Panel Content
// ==========================================
function EngineeringConstructionPanelContent() {
  const projects = [
    { name: '国家工程', desc: '联指大楼已验收交付', status: '已完成', statusColor: 'text-emerald-400 border-emerald-500/50 bg-emerald-900/30', indicator: 'bg-emerald-400' },
    { name: '东北/西北工程', desc: '全线工程已建设完成', status: '已完成', statusColor: 'text-emerald-400 border-emerald-500/50 bg-emerald-900/30', indicator: 'bg-emerald-400' },
    { name: '中部工程', desc: '指导飞机、指挥系统建设，承担丹江口增雨试验', status: '已完成', statusColor: 'text-emerald-400 border-emerald-500/50 bg-emerald-900/30', indicator: 'bg-emerald-400' },
    { name: '西南工程', desc: '实施中：派首席科学家指导飞机、指挥系统建设', status: '实施中', statusColor: 'text-amber-400 border-amber-500/50 bg-amber-900/30', indicator: 'bg-amber-400' },
    { name: '华北工程', desc: '已立项启动：开展研究试验与系统建设', status: '启动中', statusColor: 'text-amber-400 border-amber-500/50 bg-amber-900/30', indicator: 'bg-amber-400' },
    { name: '东南工程', desc: '申报阶段：已上报国家发改委', status: '待批复', statusColor: 'text-slate-400 border-slate-500/50 bg-white/[0.05]', indicator: 'bg-slate-400' },
  ];

  const images = [
    { seed: 'drone', alt: '无人机' },
    { seed: 'group1', alt: '合影1' },
    { seed: 'group2', alt: '合影2' }
  ];

  return (
    <div className="absolute inset-0 flex gap-2 overflow-hidden p-1.5 pt-2">
      {/* Left: Projects List */}
      <div className="flex-[1.5] flex flex-col gap-1.5 overflow-y-auto no-scrollbar pr-1 pb-1">
        <div className="text-cyan-300 font-bold text-[11px] mb-0.5 flex items-center gap-1.5 shrink-0">
          <div className="w-1 h-3.5 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
          1.组建工作专班强化技术指导
        </div>
        {projects.map((p, i) => (
          <div key={i} className="glass-card border-white/5 p-1.5 flex justify-between items-center relative overflow-hidden shrink-0 hover:bg-white/10 transition-colors">
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${p.indicator} shadow-[0_0_5px_currentColor]`}></div>
            <div className="flex flex-col pl-1.5 min-w-0 pr-2">
              <span className="text-cyan-100 font-bold text-[10px] truncate">{p.name}</span>
              <span className="text-slate-400 text-[8px] truncate mt-0.5" title={p.desc}>{p.desc}</span>
            </div>
            <div className={`shrink-0 px-1.5 py-0.5 rounded-full border text-[8px] font-bold backdrop-blur-sm ${p.statusColor}`}>
              {p.status}
            </div>
          </div>
        ))}
      </div>

      {/* Right: Images */}
      <div className="flex-1 flex flex-col gap-1.5 overflow-y-auto no-scrollbar pb-1 pr-1">
        {images.map((img, i) => (
          <div key={i} className="flex flex-col rounded overflow-hidden border border-cyan-500/30 shrink-0 shadow-sm">
            <div className="h-16 bg-white/[0.05] relative">
              <img src={`https://picsum.photos/seed/${img.seed}/200/100`} alt={img.alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>
            <div className="bg-blue-600/90 text-white text-[7px] text-center py-0.5 truncate px-1 font-medium tracking-wider">
              全国人影现代化建设现场会 - 2023.06 张掖
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// Tiangong Platform Compact Panel Content
// ==========================================
function TiangongPlatformCompactPanel() {
  return (
    <div className="absolute inset-0 flex flex-col p-1.5 gap-1.5 overflow-hidden">
      {/* Top: Text Info */}
      <div className="flex gap-2 shrink-0">
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-cyan-300 font-bold text-[10px] leading-tight flex items-center gap-1">
            <div className="w-0.5 h-2.5 bg-cyan-400"></div>
            2. “天工”平台迭代升级
          </div>
          <div className="text-[8px] text-cyan-100 bg-white/[0.05] p-1 rounded border border-white/10 leading-tight backdrop-blur-sm">
            <span className="text-red-400 font-bold">路线：</span>3年逐年迭代，全面支持人影“七段”实时业务。
          </div>
        </div>
        <div className="flex-[1.5] flex flex-col justify-center gap-0.5 text-[8px] text-slate-300 glass-card border-white/5 p-1">
          <div className="truncate"><span className="text-red-300 font-bold">国省一体：</span>一套平台两级部署，上下联通</div>
          <div className="truncate"><span className="text-red-300 font-bold">组件化：</span>微服务、算法组件化、“积木化”</div>
          <div className="truncate"><span className="text-red-300 font-bold">算法众创：</span>开放中试平台，征集加入算法仓库</div>
        </div>
      </div>

      {/* Bottom: Horizontal Timeline */}
      <div className="flex-1 relative flex items-center mt-1">
        {/* Connecting Line */}
        <div className="absolute left-[10%] right-[10%] top-[10px] h-[2px] bg-white/10 z-0"></div>
        <div className="absolute left-[10%] right-[50%] top-[10px] h-[2px] bg-cyan-500 z-0 shadow-[0_0_5px_rgba(6,182,212,0.8)]"></div>

        {/* 2023 */}
        <div className="flex-1 flex flex-col items-center z-10 relative">
          <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-transparent mb-1 shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
          <div className="text-cyan-300 font-bold text-[9px]">2023年</div>
          <div className="text-cyan-100 text-[7px] text-center leading-tight mt-0.5">五段→七段<br/>初步覆盖</div>
        </div>

        {/* 2024 */}
        <div className="flex-1 flex flex-col items-center z-10 relative">
          <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-transparent mb-1 shadow-[0_0_5px_rgba(245,158,11,0.8)]"></div>
          <div className="text-cyan-300 font-bold text-[9px]">2024年</div>
          <div className="text-cyan-100 text-[7px] text-center leading-tight mt-0.5">平台整合<br/>上下联通</div>
        </div>

        {/* 现阶段 */}
        <div className="flex-[1.2] flex flex-col items-center z-10 relative -mt-1">
          <div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-transparent mb-0.5 flex items-center justify-center shadow-[0_0_8px_rgba(16,185,129,1)]">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <div className="text-emerald-400 font-bold text-[9px]">现阶段</div>
          <div className="bg-emerald-900/60 border border-emerald-500/50 rounded px-1 py-0.5 text-emerald-100 text-[7px] text-center leading-tight mt-0.5 shadow-lg backdrop-blur-sm">
            4系统已整合<br/>部署<span className="text-red-400 font-bold text-[8px]">21</span>省
          </div>
        </div>

        {/* 2025 */}
        <div className="flex-1 flex flex-col items-center z-10 relative">
          <div className="w-3 h-3 rounded-full bg-purple-500 border-2 border-slate-800 mb-1 shadow-[0_0_5px_rgba(168,85,247,0.8)]"></div>
          <div className="text-cyan-300 font-bold text-[9px]">2025年</div>
          <div className="text-cyan-100 text-[7px] text-center leading-tight mt-0.5">组件化/众创<br/>发布3.0版</div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Equipment Construction Panel Content
// ==========================================
function EquipmentConstructionPanelContent() {
  const items = [
    {
      icon: <Plane className="w-3 h-3 text-blue-400" />,
      title: "高性能飞机",
      desc: "实现从无到有，现役10余架，未来2年新增6架",
      highlight: "10余架"
    },
    {
      icon: <Rocket className="w-3 h-3 text-emerald-400" />,
      title: "无人机",
      desc: "大中小型先行先试，全域全时保障",
      highlight: "全域保障"
    },
    {
      icon: <TrendingUp className="w-3 h-3 text-amber-400" />,
      title: "作业能力",
      desc: "飞机作业能力较10年前提升近5倍",
      highlight: "提升5倍"
    },
    {
      icon: <ShieldCheck className="w-3 h-3 text-purple-400" />,
      title: "地面站点",
      desc: "高安全等级站点占比增至89%",
      highlight: "达89%"
    },
    {
      icon: <Cpu className="w-3 h-3 text-cyan-400" />,
      title: "弹药保障",
      desc: "瞎火率降30倍，物联网覆盖超75%",
      highlight: "超75%"
    }
  ];

  return (
    <div className="absolute inset-0 flex flex-col p-1.5 gap-1 overflow-y-auto no-scrollbar">
      <div className="text-cyan-300 font-bold text-[10px] flex items-center gap-1.5 shrink-0 mb-0.5">
        <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
        <span>3. 作业装备核心能力提升</span>
      </div>
      
      <div className="flex flex-col gap-1 flex-1 justify-between">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 glass-card border-white/5 p-1 hover:bg-white/10 transition-colors">
            <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10 backdrop-blur-sm">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] font-bold text-slate-200">{item.title}</span>
                <span className="text-[9px] font-bold text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]">{item.highlight}</span>
              </div>
              <div className="text-[8px] text-slate-400 truncate mt-0.5" title={item.desc}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// Field Test Bases Panel Content
// ==========================================
function FieldTestBasesPanelContent() {
  const bases = [
    { id: 1, name: "新疆巴州", desc: "人工增水研究试验", top: "25%", left: "20%", color: "text-purple-400", bg: "bg-purple-500", border: "border-purple-500/50" },
    { id: 2, name: "青海三江源", desc: "无人机增雪补冰", top: "45%", left: "35%", color: "text-red-400", bg: "bg-red-500", border: "border-red-500/50" },
    { id: 3, name: "西藏一江两河", desc: "无人机增雪补冰", top: "65%", left: "15%", color: "text-emerald-400", bg: "bg-emerald-500", border: "border-emerald-500/50" },
    { id: 4, name: "丹江口水库", desc: "人工增雨(雪)试验", top: "55%", left: "65%", color: "text-amber-400", bg: "bg-amber-500", border: "border-amber-500/50" },
    { id: 5, name: "贵州威宁", desc: "防雹及雹云结构分析", top: "75%", left: "55%", color: "text-rose-400", bg: "bg-rose-500", border: "border-rose-500/50" },
    { id: 6, name: "庐山", desc: "暖云催化与数据集", top: "65%", left: "75%", color: "text-blue-400", bg: "bg-blue-500", border: "border-blue-500/50" },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 flex flex-col p-1.5 gap-1 overflow-hidden">
      <div className="text-cyan-300 font-bold text-[10px] flex items-center gap-1.5 shrink-0 mb-0.5">
        <div className="w-1 h-3 bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
        <span>4. 场外试验基地全国布局</span>
      </div>
      
      <div className="flex flex-1 gap-1.5 min-h-0">
        {/* Abstract Map Area */}
        <div className="flex-[0.8] relative bg-white/[0.02] rounded border border-cyan-500/30 overflow-hidden shadow-inner">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d41a_1px,transparent_1px),linear-gradient(to_bottom,#06b6d41a_1px,transparent_1px)] bg-[size:10px_10px]"></div>
          
          {/* Radar Sweep */}
          <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(6,182,212,0.15)_60deg,transparent_60deg)] animate-[spin_4s_linear_infinite] rounded-full pointer-events-none"></div>

          {/* Map Outline (Abstract Polygon) */}
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="10,20 30,10 60,15 90,30 95,60 85,80 60,90 40,85 15,65" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>

          {/* Nodes */}
          {bases.map(base => (
            <div 
              key={base.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
              style={{ top: base.top, left: base.left, zIndex: hoveredId === base.id ? 10 : 1 }}
              onMouseEnter={() => setHoveredId(base.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Outer Ping */}
              <div className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${base.bg} ${hoveredId === base.id ? 'scale-150' : ''}`}></div>
              
              {/* Inner Dot */}
              <div className={`relative w-2 h-2 rounded-full ${base.bg} border border-white shadow-[0_0_8px_rgba(255,255,255,0.8)]`}></div>
              
              {/* Connecting line to center (optional, for tech feel) */}
              {hoveredId === base.id && (
                <svg className="absolute top-1/2 left-1/2 w-[100px] h-[100px] pointer-events-none overflow-visible z-0" style={{ transform: 'translate(-50%, -50%)' }}>
                  <circle cx="50%" cy="50%" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className={`${base.color} opacity-50 animate-pulse`} />
                  <circle cx="50%" cy="50%" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" className={`${base.color} opacity-30 animate-[spin_10s_linear_infinite]`} />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* List Area */}
        <div className="flex-[1.2] flex flex-col gap-1 overflow-y-auto no-scrollbar pr-1">
          {bases.map(base => (
            <div 
              key={base.id}
              className={`flex flex-col p-1 rounded border transition-all duration-300 cursor-pointer ${hoveredId === base.id ? `bg-white/10 ${base.border} shadow-[0_0_10px_rgba(0,0,0,0.5)] scale-[1.02]` : 'bg-white/5 border-white/5 hover:bg-white/10'}`}
              onMouseEnter={() => setHoveredId(base.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${base.bg} shadow-[0_0_5px_currentColor] ${base.color}`}></div>
                <span className={`text-[9px] font-bold ${base.color}`}>{base.name}</span>
              </div>
              <div className="text-[7.5px] text-slate-300 mt-0.5 leading-tight pl-2.5">
                {base.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Center Map Section with Tabs
// ==========================================
function CenterMapSection() {
  const [activeTab, setActiveTab] = useState(1); // 0: 人影概述, 1: 工作态势, 2: 社会服务
  
  const tabs = ["人影概述", "工作态势", "社会服务"];
  
  const titleNode = (
    <div className="flex items-center justify-center gap-12">
      {tabs.map((tab, idx) => (
        <button
          key={idx}
          onClick={() => setActiveTab(idx)}
          className={`relative px-4 py-1 text-2xl font-bold tracking-widest transition-all duration-500 ${
            activeTab === idx 
              ? 'text-cyan-100 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-110' 
              : 'text-slate-500 hover:text-cyan-400/70'
          }`}
        >
          {tab}
          {activeTab === idx && (
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <Panel title={titleNode} className="flex-[2.5] relative" titleCenter>
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {activeTab === 0 && (
          <div className="w-full h-full glass-card border-dashed border-cyan-500/30 flex items-center justify-center shadow-inner transition-all duration-500">
            <span className="text-2xl font-bold text-slate-400 tracking-widest">人影概述三维展示区</span>
          </div>
        )}
        {activeTab === 1 && (
          <div className="w-full h-full glass-card border-white/5 shadow-inner overflow-hidden">
            <WorkSituationPanel />
          </div>
        )}
        {activeTab === 2 && (
          <div className="w-full h-full glass-card border-white/5 shadow-inner overflow-hidden">
            <SocialServicesTimeline />
          </div>
        )}
      </div>
    </Panel>
  );
}
// ==========================================
// View 2: 中心概况 (Center Overview Layout)
// ==========================================
function CenterOverviewView() {
  const [compTab, setCompTab] = useState<'org' | 'personnel'>('org');
  const [overviewTab, setOverviewTab] = useState<'position' | 'duties'>('position');
  const [tiangongTab, setTiangongTab] = useState<'工作专班' | '“天工”平台'>('“天工”平台');

  const eduData = [
    {name:'博士', value:25, color:'#67e8f9', dark:'#164e63'}, 
    {name:'硕士', value:45, color:'#3b82f6', dark:'#1e3a8a'}, 
    {name:'本科及以下', value:30, color:'#6366f1', dark:'#312e81'}
  ];
  const titleData = [
    {name:'正研级', value:15, color:'#34d399', dark:'#064e3b'}, 
    {name:'副研级', value:35, color:'#2dd4bf', dark:'#134e4a'}, 
    {name:'中级', value:40, color:'#38bdf8', dark:'#0c4a6e'}, 
    {name:'初级', value:10, color:'#818cf8', dark:'#3730a3'}
  ];
  const ageData = [
    {name:'35岁以下', value:45, color:'#fcd34d', dark:'#78350f'}, 
    {name:'36-45岁', value:35, color:'#fb923c', dark:'#7c2d12'}, 
    {name:'46岁以上', value:20, color:'#f87171', dark:'#7f1d1d'}
  ];

  return (
    <div className="flex gap-4 h-full w-full">
      {/* Left Column - 3.2 */}
      <div className="flex flex-col gap-4 min-w-0" style={{ flex: 3.2 }}>
        
        {/* Top Wrapper - 2.5 Ratio to match CenterMapSection */}
        <div className="flex flex-col gap-4 flex-[2.5] min-h-0">
          {/* 1. 中心概况 (定位、职责可切换) - Shrinked height */}
          <div className="glass-panel ios-squircle mirror-edge flex flex-col p-4 relative group liquid-border-anim flex-[0.7] min-h-0">
            <div className="flex items-center justify-between mb-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="layered-glass-icon w-8 h-8">
                  {overviewTab === 'position' ? <Plane className="w-4 h-4 text-cyan-300" /> : <ShieldCheck className="w-4 h-4 text-cyan-300" />}
                </div>
                <h2 className="text-lg font-bold refractive-text tracking-widest">中心概况</h2>
              </div>
              <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10 backdrop-blur-md">
                <button onClick={() => setOverviewTab('position')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${overviewTab === 'position' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>定位</button>
                <button onClick={() => setOverviewTab('duties')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${overviewTab === 'duties' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>职责</button>
              </div>
            </div>
            
            <div className="flex-1 min-h-0 relative">
              {overviewTab === 'position' ? (
                <div className="flex flex-row gap-2 w-full h-full">
                  {[
                    { text: "国家级人工影响天气业务中心", icon: <ShieldCheck className="w-3 h-3 text-cyan-300 mb-1" /> },
                    { text: "跨区域联合作业协调指挥中心", icon: <Plane className="w-3 h-3 text-cyan-300 mb-1" /> },
                    { text: "人影科研与技术装备研发基地", icon: <Cpu className="w-3 h-3 text-cyan-300 mb-1" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 glass-card border-white/10 p-2 flex flex-col items-center justify-center text-center hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-500 shadow-2xl relative overflow-hidden group/item cursor-default">
                      {/* Liquid Glass Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-1000"></div>
                      
                      <div className="relative z-10 flex flex-col items-center">
                        {item.icon}
                        <span className="text-cyan-100 font-bold text-[9px] leading-tight tracking-tighter drop-shadow-md">{item.text}</span>
                      </div>
                      
                      {/* Inner Glow */}
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="w-full h-full relative">
                  <AutoScrollList items={responsibilities} />
                </div>
              )}
            </div>
          </div>

          {/* 2. 发展历程 */}
          <div className="glass-panel ios-squircle mirror-edge flex flex-col p-4 relative group shrink-0 h-[140px] liquid-border-anim">
            <div className="flex items-center gap-3 mb-2 shrink-0">
              <div className="layered-glass-icon w-8 h-8">
                <TrendingUp className="w-4 h-4 text-cyan-300" />
              </div>
              <h2 className="text-lg font-bold refractive-text tracking-widest">发展历程</h2>
            </div>
            <div className="w-full h-full relative rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-md border border-white/5 shadow-inner">
              {/* Misty effect background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_70%)] blur-md"></div>
              <svg viewBox="0 0 200 60" className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="xMidYMid meet">
                {/* Flowing light ribbon */}
                <path d="M 10,40 C 40,40 50,20 80,20 C 110,20 130,35 160,35 C 180,35 190,15 210,15" fill="none" stroke="url(#ribbonGradient)" strokeWidth="3" strokeLinecap="round" filter="url(#glow)" />
                
                <defs>
                  <linearGradient id="ribbonGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#a5f3fc" stopOpacity="1" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Glowing nodes and dates */}
                <g transform="translate(25, 30)">
                  <circle cx="0" cy="0" r="3" fill="#fff" filter="url(#glow)" />
                  <circle cx="0" cy="0" r="1.5" fill="#0284c7" />
                  <text x="0" y="-8" fontSize="6" textAnchor="middle" fill="#e2e8f0" fontWeight="bold" className="refractive-text">1965</text>
                  <text x="0" y="10" fontSize="4.5" textAnchor="middle" fill="#94a3b8">庐山会议</text>
                </g>
                <g transform="translate(80, 20)">
                  <circle cx="0" cy="0" r="3" fill="#fff" filter="url(#glow)" />
                  <circle cx="0" cy="0" r="1.5" fill="#0284c7" />
                  <text x="0" y="-8" fontSize="6" textAnchor="middle" fill="#e2e8f0" fontWeight="bold" className="refractive-text">1978</text>
                  <text x="0" y="10" fontSize="4.5" textAnchor="middle" fill="#94a3b8">北京成立</text>
                </g>
                <g transform="translate(135, 31)">
                  <circle cx="0" cy="0" r="3" fill="#fff" filter="url(#glow)" />
                  <circle cx="0" cy="0" r="1.5" fill="#0284c7" />
                  <text x="0" y="-8" fontSize="6" textAnchor="middle" fill="#e2e8f0" fontWeight="bold" className="refractive-text">2012</text>
                  <text x="0" y="10" fontSize="4.5" textAnchor="middle" fill="#94a3b8">中心更名</text>
                </g>
                <g transform="translate(185, 21)">
                  <circle cx="0" cy="0" r="3" fill="#fff" filter="url(#glow)" />
                  <circle cx="0" cy="0" r="1.5" fill="#0284c7" />
                  <text x="0" y="-8" fontSize="6" textAnchor="middle" fill="#e2e8f0" fontWeight="bold" className="refractive-text">2021</text>
                  <text x="0" y="10" fontSize="4.5" textAnchor="middle" fill="#94a3b8">直属机构</text>
                </g>
              </svg>
            </div>
          </div>

          {/* 3. 组织架构 (架构、人员) */}
          <div className="glass-panel ios-squircle mirror-edge flex flex-col p-4 relative group flex-[1.3] min-h-0 liquid-border-anim">
            <div className="flex items-center justify-between mb-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className="layered-glass-icon w-8 h-8">
                  <Rocket className="w-4 h-4 text-cyan-300" />
                </div>
                <h2 className="text-lg font-bold refractive-text tracking-widest">组织架构</h2>
              </div>
              <div className="flex gap-1 bg-white/5 p-0.5 rounded-lg border border-white/10 backdrop-blur-md">
                <button onClick={() => setCompTab('org')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${compTab === 'org' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>架构</button>
                <button onClick={() => setCompTab('personnel')} className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all duration-300 ${compTab === 'personnel' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_10px_rgba(34,211,238,0.4)]' : 'text-slate-400 hover:text-cyan-300'}`}>人员</button>
              </div>
            </div>
            
            <div className="w-full h-full relative overflow-hidden">
              {compTab === 'org' ? (
                <div className="w-full h-full flex flex-col items-center justify-start overflow-y-auto no-scrollbar pb-2">
                  <div className="bg-gradient-to-r from-cyan-900/80 to-blue-900/80 border border-cyan-400/50 px-4 py-2 rounded-xl text-xs font-bold text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.3)] z-10 text-center">
                    中国气象局人工影响天气中心
                  </div>
                  <div className="w-px h-5 bg-cyan-500/50"></div>
                  <div className="w-[90%] border-t border-cyan-500/50 flex justify-between relative">
                    <div className="w-px h-3 bg-cyan-500/50 absolute left-0"></div>
                    <div className="w-px h-3 bg-cyan-500/50 absolute left-1/2 -translate-x-1/2"></div>
                    <div className="w-px h-3 bg-cyan-500/50 absolute right-0"></div>
                  </div>
                  <div className="flex justify-between w-full px-1 mt-3">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center w-[31%] gap-1.5">
                      <div className="bg-white/10 border border-white/10 py-1 rounded-lg text-[10px] font-bold text-cyan-200 w-full text-center shadow-sm">管理机构</div>
                      <div className="flex flex-col gap-1 w-full">
                        {['办公室', '业务科技处', '计划财务处', '人事处'].map(d => (
                          <div key={d} className="glass-card border-white/5 py-1 text-[9px] text-slate-300 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-colors cursor-default rounded-md">{d}</div>
                        ))}
                      </div>
                    </div>
                    {/* Column 2 */}
                    <div className="flex flex-col items-center w-[31%] gap-1.5">
                      <div className="bg-white/10 border border-white/10 py-1 rounded-lg text-[10px] font-bold text-cyan-200 w-full text-center shadow-sm">业务处室</div>
                      <div className="flex flex-col gap-1 w-full">
                        {['灾害天气指挥室', '云降水物理室', '航空作业管理室', '效果评估室'].map(d => (
                          <div key={d} className="glass-card border-white/5 py-1 text-[9px] text-slate-300 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-colors cursor-default rounded-md">{d}</div>
                        ))}
                      </div>
                    </div>
                    {/* Column 3 */}
                    <div className="flex flex-col items-center w-[31%] gap-1.5">
                      <div className="bg-white/10 border border-white/10 py-1 rounded-lg text-[10px] font-bold text-cyan-200 w-full text-center shadow-sm">科研团队</div>
                      <div className="flex flex-col gap-1 w-full">
                        {['重点实验室', '创新团队', '博士后工作站', '野外试验基地'].map(d => (
                          <div key={d} className="glass-card border-white/5 py-1 text-[9px] text-slate-300 text-center hover:bg-white/10 hover:border-cyan-500/30 transition-colors cursor-default rounded-md">{d}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-between px-1">
                  {/* Chart 1: 学历 */}
                  <div className="flex flex-col items-center w-[32%] h-full">
                    <div className="text-[11px] font-bold text-cyan-300 mb-2">学历结构</div>
                    <div className="w-full h-28 relative">
                      <ResponsiveContainer>
                        <PieChart>
                          <defs>
                            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          {/* Background Track */}
                          <Pie data={[{value: 1}]} cx="50%" cy="50%" innerRadius={28} outerRadius={40} stroke="none" fill="rgba(255,255,255,0.02)" isAnimationActive={false} />
                          {/* Main Donut */}
                          <Pie data={eduData} cx="50%" cy="50%" innerRadius={28} outerRadius={40} paddingAngle={4} cornerRadius={16} stroke="rgba(255,255,255,0.05)" strokeWidth={1} dataKey="value">
                            {eduData.map((e, i) => <Cell key={i} fill={e.color} style={{ filter: 'url(#glow-cyan)', opacity: 0.8 }} className="outline-none hover:opacity-100 transition-opacity duration-300" />)}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: '#22d3ee', borderRadius: '12px', fontSize: '10px', padding: '6px 10px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#e2e8f0' }} cursor={false} />
                        </PieChart>
                      </ResponsiveContainer>
                      {/* Center Icon/Text */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-1">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center backdrop-blur-sm shadow-[inset_0_0_10px_rgba(34,211,238,0.2)]">
                          <span className="text-[10px] font-bold text-cyan-200">学历</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-1 w-full px-2">
                      {eduData.map((e, i) => (
                        <div key={i} className="flex justify-between items-center text-[9px]">
                          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: e.color, color: e.color }}></span><span className="text-slate-200">{e.name}</span></span>
                          <span className="text-cyan-100 font-mono font-bold">{e.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Chart 2: 职称 */}
                  <div className="flex flex-col items-center w-[32%] h-full">
                    <div className="text-[11px] font-bold text-emerald-300 mb-2">职称结构</div>
                    <div className="w-full h-28 relative">
                      <ResponsiveContainer>
                        <PieChart>
                          <defs>
                            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          <Pie data={[{value: 1}]} cx="50%" cy="50%" innerRadius={28} outerRadius={40} stroke="none" fill="rgba(255,255,255,0.02)" isAnimationActive={false} />
                          <Pie data={titleData} cx="50%" cy="50%" innerRadius={28} outerRadius={40} paddingAngle={4} cornerRadius={16} stroke="rgba(255,255,255,0.05)" strokeWidth={1} dataKey="value">
                            {titleData.map((e, i) => <Cell key={i} fill={e.color} style={{ filter: 'url(#glow-emerald)', opacity: 0.8 }} className="outline-none hover:opacity-100 transition-opacity duration-300" />)}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: '#10b981', borderRadius: '12px', fontSize: '10px', padding: '6px 10px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#e2e8f0' }} cursor={false} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-1">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center backdrop-blur-sm shadow-[inset_0_0_10px_rgba(16,185,129,0.2)]">
                          <span className="text-[10px] font-bold text-emerald-200">职称</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-1 w-full px-2">
                      {titleData.map((e, i) => (
                        <div key={i} className="flex justify-between items-center text-[9px]">
                          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: e.color, color: e.color }}></span><span className="text-slate-200">{e.name}</span></span>
                          <span className="text-emerald-100 font-mono font-bold">{e.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart 3: 年龄 */}
                  <div className="flex flex-col items-center w-[32%] h-full">
                    <div className="text-[11px] font-bold text-amber-300 mb-2">年龄结构</div>
                    <div className="w-full h-28 relative">
                      <ResponsiveContainer>
                        <PieChart>
                          <defs>
                            <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
                              <feGaussianBlur stdDeviation="4" result="blur" />
                              <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                          </defs>
                          <Pie data={[{value: 1}]} cx="50%" cy="50%" innerRadius={28} outerRadius={40} stroke="none" fill="rgba(255,255,255,0.02)" isAnimationActive={false} />
                          <Pie data={ageData} cx="50%" cy="50%" innerRadius={28} outerRadius={40} paddingAngle={4} cornerRadius={16} stroke="rgba(255,255,255,0.05)" strokeWidth={1} dataKey="value">
                            {ageData.map((e, i) => <Cell key={i} fill={e.color} style={{ filter: 'url(#glow-amber)', opacity: 0.8 }} className="outline-none hover:opacity-100 transition-opacity duration-300" />)}
                          </Pie>
                          <Tooltip contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.8)', borderColor: '#f59e0b', borderRadius: '12px', fontSize: '10px', padding: '6px 10px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} itemStyle={{ color: '#e2e8f0' }} cursor={false} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pb-1">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center backdrop-blur-sm shadow-[inset_0_0_10px_rgba(245,158,11,0.2)]">
                          <span className="text-[10px] font-bold text-amber-200">年龄</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 mt-1 w-full px-2">
                      {ageData.map((e, i) => (
                        <div key={i} className="flex justify-between items-center text-[9px]">
                          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor]" style={{ backgroundColor: e.color, color: e.color }}></span><span className="text-slate-200">{e.name}</span></span>
                          <span className="text-amber-100 font-mono font-bold">{e.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 4. 国际合作与出海动态 - Flex-1 to match bottom row of center column */}
        <div className="glass-panel ios-squircle mirror-edge flex flex-col p-4 relative group flex-[1] min-h-0 liquid-border-anim">
          <div className="flex items-center gap-3 mb-3 shrink-0">
            <div className="layered-glass-icon w-8 h-8">
              <Globe className="w-4 h-4 text-cyan-300" />
            </div>
            <h2 className="text-lg font-bold refractive-text tracking-widest">国际合作</h2>
          </div>
          
          <div className="flex flex-col h-full min-h-0">
            {/* KPI Row */}
            <div className="flex justify-between gap-2 mb-3 shrink-0">
              {[
                { value: '4', unit: '项', label: '卫星云产品上线' },
                { value: '1', unit: '位', label: 'WMO专家成员' },
                { value: '10', unit: '+', label: '国际合作国家' }
              ].map((kpi, i) => (
                <div key={i} className="flex-1 bg-gradient-to-b from-cyan-500/10 to-transparent border-t-2 border-cyan-400/50 p-2 rounded-sm text-center">
                  <div className="text-lg font-black text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] font-mono">
                    {kpi.value}<span className="text-[10px] ml-0.5 font-normal">{kpi.unit}</span>
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 leading-tight">{kpi.label}</div>
                </div>
              ))}
            </div>

            {/* Scroll List */}
            <div className="flex-1 min-h-0 border-y border-dashed border-white/10 py-2">
              <AutoScrollIntlList items={intlCoopData} />
            </div>

            {/* Tags Row */}
            <div className="flex flex-wrap gap-2 mt-3 shrink-0">
              {['新舟60增雨飞机', '“妈祖”预警平台', '风云地球海外版'].map((tag, i) => (
                <span key={i} className="text-[9px] text-white bg-blue-500/20 border border-blue-500/40 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Center Column - 7.6 */}
      <div className="flex flex-col gap-4 min-w-0" style={{ flex: 7.6 }}>
        <CenterMapSection />
        <div className="flex gap-4 flex-[1]">
          <Panel 
            title="工程建设" 
            className="flex-1" 
            extra={
              <div className="flex gap-1 bg-white/[0.03] p-0.5 rounded border border-cyan-500/30">
                <button 
                  onClick={() => setTiangongTab('工作专班')} 
                  className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${tiangongTab === '工作专班' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_5px_rgba(34,211,238,0.3)]' : 'text-slate-400 hover:text-cyan-300'}`}
                >
                  工作专班
                </button>
                <button 
                  onClick={() => setTiangongTab('“天工”平台')} 
                  className={`px-2 py-1 text-[10px] font-bold rounded transition-colors ${tiangongTab === '“天工”平台' ? 'bg-cyan-500/40 text-cyan-100 shadow-[0_0_5px_rgba(34,211,238,0.3)]' : 'text-slate-400 hover:text-cyan-300'}`}
                >
                  “天工”平台
                </button>
              </div>
            }
          >
             <div className="w-full h-full bg-white/[0.02] rounded relative">
               {tiangongTab === '工作专班' ? (
                 <EngineeringConstructionPanelContent />
               ) : (
                 <TiangongPlatformCompactPanel />
               )}
             </div>
          </Panel>
          <Panel title="工程建设" className="flex-1 border-cyan-400 border-2 shadow-[0_0_10px_rgba(34,211,238,0.3)]" extra={<span className="text-[10px] text-slate-400">作业装备</span>}>
             <div className="w-full h-full bg-white/[0.02] rounded relative">
               <EquipmentConstructionPanelContent />
             </div>
          </Panel>
          <Panel title="工程建设" className="flex-1" extra={<span className="text-[10px] text-slate-400">场外试验基地</span>}>
             <div className="w-full h-full bg-white/[0.02] rounded relative">
               <FieldTestBasesPanelContent />
             </div>
          </Panel>
        </div>
      </div>

      {/* Right Column - 3.2 */}
      <div className="flex flex-col gap-4 min-w-0" style={{ flex: 3.2 }}>
        <div className="flex flex-col gap-4 flex-[2.5] min-h-0">
          <ComprehensiveSystemPanel className="flex-[1.2]" />
          <Panel title="产学研用" className="flex-[0.8]" extra={<span className="text-[10px] text-slate-400">创新驱动</span>}>
            <IndustryAcademiaPanel />
          </Panel>
        </div>
        <Panel title="工程建设" className="flex-[1]" extra={<span className="text-[10px] text-slate-400">“十五五”重点工程项目</span>}>
          <FifteenthFiveYearPlanPanel />
        </Panel>
      </div>
    </div>
  );
}

function Panel({ 
  title, 
  children, 
  className = '', 
  titleCenter = false,
  extra
}: { 
  title: React.ReactNode, 
  children?: React.ReactNode, 
  className?: string, 
  titleCenter?: boolean,
  extra?: React.ReactNode
}) {
  return (
    <div className={`relative glass-panel flex flex-col min-h-0 overflow-hidden group liquid-border-anim ${className}`}>
      {/* Subtle liquid highlight */}
      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none group-hover:translate-x-[5%] group-hover:translate-y-[5%] transition-transform duration-1000"></div>

      {/* Header */}
      <div className={`px-5 py-4 flex items-center justify-between shrink-0 relative z-10`}>
        <div className={`flex items-center ${titleCenter ? 'w-full justify-center' : ''}`}>
          {!titleCenter && <div className="w-1.5 h-4 bg-gradient-to-b from-white/40 to-white/5 mr-3 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>}
          <div className={`font-bold text-white tracking-widest ${titleCenter ? 'text-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]' : 'text-sm'}`}>{title}</div>
        </div>
        {extra && !titleCenter && (
          <div className="flex items-center">
            {extra}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pb-5 relative overflow-hidden flex flex-col min-h-0 z-10">
        {children}
      </div>
    </div>
  );
}
