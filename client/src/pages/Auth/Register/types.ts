import type { ChangeEvent } from "react";

export interface IOnboarding {
    step: number;
    component: React.FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void; value?: string; }>;
    field: string;
}