"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { MenuItem } from "@/types/menu";

interface MenuCardProps {
    item: MenuItem;
    index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
    const hasImage = !!item.image;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.5)] border border-white/[0.06] transition-all duration-500 ease-out hover:border-[rgb(var(--brandWine)/0.5)] hover:shadow-[0_20px_60px_-15px_rgba(188,21,33,0.25)] hover:-translate-y-2"
        >
            {/* Subtle inner glow on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[rgb(var(--brandWine)/0.08)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image Section */}
            {hasImage && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                        src={item.image!}
                        alt={item.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--panel))] via-transparent to-transparent opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
                    {/* Premium vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]" />
                </div>
            )}

            {/* Content */}
            <div className="relative flex flex-1 flex-col p-5">
                {/* Title */}
                <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[rgb(var(--brandWine))]">
                    {item.name}
                </h3>

                {/* Description */}
                {item.description && (
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50 line-clamp-2">
                        {item.description}
                    </p>
                )}

                {/* Footer: Weight */}
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                    {item.weight && (
                        <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                            {item.weight}
                        </span>
                    )}
                </div>
            </div>

            {/* Hover corner accent */}
            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[rgb(var(--brandWine)/0.2)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.article>
    );
}
