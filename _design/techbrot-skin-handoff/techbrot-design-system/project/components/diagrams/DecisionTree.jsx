import React from "react";

/**
 * Binary decision tree rendered as SVG.
 * node: { label, yes?, no?, result?: boolean }
 * Leaf nodes (result: true) render in cobalt.
 */
function countLeaves(node) {
  if (!node.yes && !node.no) return 1;
  return (node.yes ? countLeaves(node.yes) : 0) + (node.no ? countLeaves(node.no) : 0);
}

const LEAF_W = 168;
const ROW_H = 96;
const BOX_W = 156;
const BOX_H = 48;

function layout(node, depth, leftLeaf, out) {
  const leaves = countLeaves(node);
  const x = (leftLeaf + leaves / 2) * LEAF_W;
  const y = depth * ROW_H + BOX_H / 2;
  const item = { node, x, y, children: [] };
  out.push(item);
  let offset = leftLeaf;
  if (node.yes) {
    const child = layout(node.yes, depth + 1, offset, out);
    item.children.push({ child, label: "Yes" });
    offset += countLeaves(node.yes);
  }
  if (node.no) {
    const child = layout(node.no, depth + 1, offset, out);
    item.children.push({ child, label: "No" });
  }
  return item;
}

function depthOf(node) {
  if (!node.yes && !node.no) return 1;
  return 1 + Math.max(node.yes ? depthOf(node.yes) : 0, node.no ? depthOf(node.no) : 0);
}

export function DecisionTree({ root, caption, style }) {
  if (!root) return null;
  const items = [];
  layout(root, 0, 0, items);
  const width = countLeaves(root) * LEAF_W;
  const height = depthOf(root) * ROW_H - (ROW_H - BOX_H) + 8;
  return (
    <figure style={{ margin: 0, fontFamily: "var(--font-sans)", ...style }}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        style={{ width: "100%", height: "auto", display: "block" }}
        role="img"
        aria-label={caption || "Decision tree"}
      >
        {items.map((it, i) =>
          it.children.map((c, j) => (
            <g key={`${i}-${j}`}>
              <path
                d={`M${it.x} ${it.y + BOX_H / 2} V${it.y + BOX_H / 2 + 16} H${c.child.x} V${c.child.y - BOX_H / 2}`}
                fill="none"
                stroke="var(--line-strong)"
                strokeWidth="1.5"
              />
              <text
                x={c.child.x + (c.label === "Yes" ? -8 : 8)}
                y={c.child.y - BOX_H / 2 - 7}
                textAnchor={c.label === "Yes" ? "end" : "start"}
                fontSize="11"
                fontFamily="var(--font-mono)"
                fill="var(--ink-500)"
              >
                {c.label}
              </text>
            </g>
          ))
        )}
        {items.map((it, i) => {
          const isLeaf = !it.node.yes && !it.node.no;
          return (
            <g key={i}>
              <rect
                x={it.x - BOX_W / 2}
                y={it.y - BOX_H / 2}
                width={BOX_W}
                height={BOX_H}
                rx="6"
                fill={isLeaf ? "var(--cobalt-50)" : "var(--surface)"}
                stroke={isLeaf ? "var(--cobalt-600)" : "var(--line-strong)"}
                strokeWidth="1.25"
              />
              {String(it.node.label)
                .split("\n")
                .map((line, li, arr) => (
                  <text
                    key={li}
                    x={it.x}
                    y={it.y + (li - (arr.length - 1) / 2) * 15}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="12.5"
                    fontWeight={isLeaf ? 600 : 500}
                    fontFamily="var(--font-sans)"
                    fill={isLeaf ? "var(--cobalt-700)" : "var(--ink-900)"}
                  >
                    {line}
                  </text>
                ))}
            </g>
          );
        })}
      </svg>
      {caption && (
        <figcaption style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: 12 }}>{caption}</figcaption>
      )}
    </figure>
  );
}
