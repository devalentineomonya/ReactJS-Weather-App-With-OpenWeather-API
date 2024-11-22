import { weatherIconMappings } from "@/lib/iconMap"
import Image from "next/image"

interface IconComponentProps {
  weatherCode: string
  x?: string
  className?: string
}

export default function IconComponent({
  weatherCode,
  x,
  className,
}: IconComponentProps) {
  const iconNameKey = x ? `${weatherCode}${x}` : weatherCode
  const iconName = weatherIconMappings[iconNameKey]
const currentDir = process.cwd()
console.log(currentDir)
  return (
    <div className={`relative invert-0 dark:invert ${className}`}>
      <Image
        fill
        alt={weatherCode}
        src={`/icons/wi-${iconName}.svg`}
        className="select-none"
      />
    </div>
  )
}
