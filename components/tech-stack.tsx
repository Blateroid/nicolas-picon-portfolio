import Image from 'next/image';

export type TechTool = { name: string; logo: string };

export function TechStack({ tools, label = 'Tech stack' }: { tools: readonly TechTool[]; label?: string }) {
  if (!tools.length) return null;
  return <div className="tech-stack">
    <p className="small-label">{label}</p>
    <ul aria-label={label}>{tools.map(tool => <li key={tool.name} className={tool.name === 'Lovable' ? 'tech-tool-highlight' : undefined}>
      <Image src={tool.logo} alt="" width={24} height={24}/><span>{tool.name}</span>
    </li>)}</ul>
  </div>;
}
