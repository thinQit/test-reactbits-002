"use client";
import React from "react";
import { BackgroundGradientAnimation } from "@/components/ui/backgrounds/background-gradient-animation";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroGradientBlobProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  gradientStart?: string;
  gradientEnd?: string;
  blobColors?: { first?: string; second?: string; third?: string; fourth?: string; fifth?: string };
}

export default function HeroGradientBlob({
  title = "Ship product updates in hours, not weeks",
  subtitle = "A modern SaaS platform for engineering and ops teams to automate releases, monitor impact, and scale confidently.",
  ctaLabel = "Start Free",
  ctaHref = "#",
  secondaryCtaLabel = "Request Demo",
  secondaryCtaHref = "#",
  gradientStart = "rgb(124, 58, 237)",
  gradientEnd = "rgb(37, 99, 235)",
  blobColors,
}: HeroGradientBlobProps) {
  var titleWords = title.split(" ").map(function (w) {
    return { text: w };
  });
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart={gradientStart}
      gradientBackgroundEnd={gradientEnd}
      firstColor={blobColors && blobColors.first ? blobColors.first : "99, 102, 241"}
      secondColor={blobColors && blobColors.second ? blobColors.second : "168, 85, 247"}
      thirdColor={blobColors && blobColors.third ? blobColors.third : "147, 197, 253"}
      fourthColor={blobColors && blobColors.fourth ? blobColors.fourth : "124, 58, 237"}
      fifthColor={blobColors && blobColors.fifth ? blobColors.fifth : "37, 99, 235"}
      containerClassName="min-h-screen"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center animate-fade-in-up">
        <TypewriterEffect words={titleWords} className="text-primary-foreground" cursorClassName="bg-primary-foreground" />
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80 md:text-xl">{subtitle}</p>}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
