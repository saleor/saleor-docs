import { Brain, CircleDollarSign, Package, Settings, Tag } from "lucide-react";
import React from "react";

const ICONS = {
  financial: CircleDollarSign,
  operations: Package,
  attention: Brain,
  settings: Settings,
  "product-insights": Tag,
};

const LABELS = {
  financial: "Financial",
  operations: "Operations",
  attention: "Attention",
  settings: "Settings",
  "product-insights": "Product Insights",
};

/**
 * Named Pulse surface with the same Lucide mark used in the overview table.
 */
export function PulseSurface({ name, size = 16, strong = false }) {
  const Icon = ICONS[name];
  const label = LABELS[name];

  if (!Icon || !label) {
    throw new Error(`Unknown Pulse surface: ${name}`);
  }

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        verticalAlign: "text-bottom",
      }}
    >
      <Icon size={size} strokeWidth={1.5} aria-hidden="true" />
      {strong ? <strong>{label}</strong> : label}
    </span>
  );
}
