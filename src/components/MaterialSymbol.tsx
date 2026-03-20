type MaterialSymbolProps = {
  className?: string
  name: string
}

export function MaterialSymbol({
  className = '',
  name,
}: MaterialSymbolProps) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined ${className}`.trim()}
    >
      {name}
    </span>
  )
}
