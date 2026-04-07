"use client";
import React from "react";
import { Shield, Zap, Sparkles, Globe, Cpu, Workflow, Timer, FileText, BarChart3, Bell, Users, Calendar } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from "@/components/ui/effects/3d-card-effect";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesCards3DProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Timer, FileText, BarChart3, Bell, Users, Calendar, 
  Shield,
  Zap,
  Sparkles,
  Globe,
  Cpu,
  Workflow,
};

export default function FeaturesCards3D({
  badge = 'Core Capabilities',
  headline = 'Everything your team needs to ship faster',
  subheadline = 'Powerful building blocks for automation, observability, and secure collaboration.',
  features = [],
}: Partial<FeaturesCards3DProps>) {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <CardContainer key={index} className="inter-var">
                <CardBody className="card-hover relative group/card w-auto h-auto rounded-xl p-6 border border-border bg-card">
                  <CardItem translateZ="50" className="mb-4 text-primary">
                    <Icon className="h-8 w-8" />
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-bold text-foreground">
                    {feature.title}
                  </CardItem>
                  <CardItem as="p" translateZ="40" className="text-muted-foreground mt-2 text-sm">
                    {feature.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>
      </div>
    </section>
  );
}
