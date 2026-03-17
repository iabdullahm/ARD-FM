'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { Building, User, Wrench, BarChart3, Users, ArrowRight, ArrowDown } from 'lucide-react';
import React from 'react';

const FlowCard = ({ title, icon: Icon, className, isCentral=false }: { title: string, icon: React.ElementType, className?: string, isCentral?: boolean }) => (
    <Card className={cn(
        "w-44 text-center glass-card shadow-lg",
        isCentral && "bg-primary text-primary-foreground glow-effect",
        className
    )}>
        <CardContent className="p-4 flex flex-col items-center justify-center gap-2 h-full">
            <Icon className="w-10 h-10" />
            <h4 className={cn("font-bold", isCentral ? "text-xl" : "text-md")}>{title}</h4>
        </CardContent>
    </Card>
);

const Connector = ({ horizontal = false, vertical = false, rtl = false, className }: { horizontal?: boolean, vertical?: boolean, rtl?: boolean, className?: string }) => (
    <div className={cn("flex items-center justify-center text-primary/50", className)}>
        {horizontal && <ArrowRight className={cn(rtl && 'rotate-180')} />}
        {vertical && <ArrowDown />}
    </div>
);


export function SolutionSection() {
    const { language, dir } = useLanguage();
    const c = content[language].solution;
    const isRTL = dir === 'rtl';

    return (
        <section id="solution" className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 fade-in-up">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold">{c.eyebrow}</span>
                    <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{c.subheadline}</p>
                </div>

                <div className="mt-24 max-w-5xl mx-auto" dir="ltr">
                    {/* Main Flow */}
                    <div className={cn("flex flex-col md:flex-row items-center justify-center gap-4", isRTL && "md:flex-row-reverse")}>
                        <FlowCard title={language === 'ar' ? 'المالك' : 'Owner'} icon={Building} />
                        <Connector horizontal rtl={isRTL} className="hidden md:flex" />
                        <Connector vertical className="flex md:hidden" />
                        
                        {/* Central Rafid Element */}
                        <div className="relative">
                            <FlowCard title="Rafid" icon={Users} isCentral={true} className="w-48 h-48" />
                            <Connector vertical className="absolute top-full left-1/2 -translate-x-1/2 !h-16" />
                        </div>
                        
                        <Connector horizontal rtl={isRTL} className="hidden md:flex" />
                        <Connector vertical className="flex md:hidden" />
                        <FlowCard title={language === 'ar' ? 'المستأجر' : 'Tenant'} icon={User} />
                    </div>
                    {/* Sub-flows */}
                    <div className="relative flex justify-center items-start mt-16 pt-16 md:pt-0 md:-mt-8">
                         <div className="absolute top-0 h-16 w-px bg-border md:hidden"></div>
                         <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                            <FlowCard title={c.modules.find(m => m.icon === 'maintenance')?.title || 'Maintenance'} icon={Wrench} />
                            <FlowCard title={c.modules.find(m => m.icon === 'reports')?.title || 'Reports'} icon={BarChart3} />
                         </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
