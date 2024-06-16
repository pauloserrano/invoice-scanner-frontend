interface SectionHeaderProps {
  title: string
  pretitle?: string
}

export const SectionHeader = ({ title, pretitle }: SectionHeaderProps) => {
  return (
    <header>
      {pretitle && <h3 className="pretitle text-center">{pretitle}</h3>}
      {title && <h2 className="title text-center mb-8">{title}</h2>}
    </header>
  )
}
