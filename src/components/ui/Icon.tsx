// @/components/ui/Icon.tsx
import { cn } from "@/lib/utils"

export type IconName =
    | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up'
    | 'eye' | 'download' | 'upload' | 'search' | 'home' | 'email'
    | 'calendar' | 'copy' | 'check' | 'error' | 'info' | 'warning'
    | 'left' | 'right' | 'up' | 'down'
    | 'left-cross' | 'right-cross'
    | 'facebook' | 'linkedin' | 'location' | 'menu' | 'message'
    | 'phone' | 'pdf' | 'link' | 'world' | 'author' | 'kurul'
    | 'cilt' | 'computer' | 'briefcase' | 'dashboard' | 'analytic'
    | 'audit' | 'stats' | 'chart-decrease' | 'pie-chart' | 'presentation'
    | 'city' | 'climate' | 'nature' | 'target' | 'throphy'
    | 'transaction' | 'promotion' | 'shopping-list' | 'mobile-banking'
    | 'multimedia-player' | 'search-file' | 'chat' | 'sticky-notes'
    | 'stamp' | 'stapler' | 'tape' | 'table-lamp' | 'pencil-ruler'
    | 'roadmap-location' | 'focus' | 'id-card' | 'number' | 'vector'
    | 'mask-group' | 'mask-group-1'

interface IconProps {
    name: IconName;
    size?: number | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    alt?: string;
    href?: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
}

// Size mapping
const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
}

export function Icon({ name, size = 'md', className, alt, href, target }: IconProps) {
    const pixelSize = typeof size === 'number' ? size : sizeMap[size]
    const iconPath = `/icons/${name}.svg`

    const sharedProps = {
        role: "img" as const,
        "aria-label": alt || name,
        className: cn("inline-block bg-current", className),
        style: {
            width: pixelSize,
            height: pixelSize,
            maskImage: `url(${iconPath})`,
            WebkitMaskImage: `url(${iconPath})`,
            maskRepeat: 'no-repeat' as const,
            maskPosition: 'center',
            maskSize: 'contain'
        }
    }

    if (href) {
        return <a href={href} target={target} {...sharedProps} />
    }

    return <span {...sharedProps} />
}
export default Icon
