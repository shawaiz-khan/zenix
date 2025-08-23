export interface INavLinks {
    link: string
    label: string
    children?: {
        link: string
        label: string
        description?: string
    }[]
}