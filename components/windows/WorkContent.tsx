"use client";

import { useMemo, useState } from "react";
import { Folder, LayoutGrid, ShoppingBag, FlaskConical, UserRound, Banknote, Radar } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { useWindowManager } from "@/lib/window-context";
import type { ProjectCategory } from "@/lib/types";

const CATEGORIES: { label: string; value: ProjectCategory | "All projects"; icon: typeof Folder }[] = [
  { label: "All projects", value: "All projects", icon: LayoutGrid },
  { label: "Brands", value: "Brands", icon: Folder },
  { label: "E-commerce", value: "E-commerce", icon: ShoppingBag },
  { label: "Experiments", value: "Experiments", icon: FlaskConical },
];

export function WorkContent() {
  const [filter, setFilter] = useState<ProjectCategory | "All projects">("All projects");
  const { openWindow } = useWindowManager();

  const projects = useMemo(
    () =>
      filter === "All projects"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <div className="flex h-full">
      <aside className="hidden w-48 shrink-0 flex-col gap-5 overflow-y-auto border-r border-black/5 bg-black/[0.02] p-3 text-sm sm:flex dark:border-white/5 dark:bg-white/[0.02]">
        <div>
          <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            Favorites
          </p>
          <div className="flex flex-col gap-0.5">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              const active = filter === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-left transition ${
                    active
                      ? "bg-blue-500 text-white"
                      : "text-neutral-600 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" strokeWidth={2} />
                  <span className="truncate">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="px-2 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
            System
          </p>
          <div className="flex flex-col gap-0.5">
            <button
              onClick={() => openWindow("about")}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-neutral-600 transition hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
            >
              <UserRound className="h-4 w-4 shrink-0" strokeWidth={2} />
              About Me
            </button>
            <button
              onClick={() => openWindow("process")}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-neutral-600 transition hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
            >
              <Banknote className="h-4 w-4 shrink-0" strokeWidth={2} />
              Process &amp; Pricing
            </button>
            <button
              onClick={() => openWindow("contact")}
              className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-left text-neutral-600 transition hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
            >
              <Radar className="h-4 w-4 shrink-0" strokeWidth={2} />
              Contact
            </button>
          </div>
        </div>
      </aside>

      <div className="thin-scrollbar min-w-0 flex-1 overflow-y-auto p-4">
        <div className="mb-3 flex items-center justify-between sm:hidden">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value as ProjectCategory | "All projects")}
            className="w-full rounded-lg border border-black/10 bg-white px-3 py-1.5 text-sm dark:border-white/10 dark:bg-neutral-800"
          >
            {CATEGORIES.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/5 dark:bg-neutral-800/60"
            >
              <div className={`h-24 w-full bg-gradient-to-br ${project.gradient}`} />
              <div className="p-3.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                    {project.name}
                  </h3>
                </div>
                <p className="text-[11px] text-neutral-400">{project.domain}</p>
                <p className="mt-2 text-[13px] leading-snug text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-medium text-neutral-500 dark:bg-white/10 dark:text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
