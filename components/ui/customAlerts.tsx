interface ASTNode {
  type: string;
  value?: string;
  children?: ASTNode[];
  data?: {
    hName?: string;
    hProperties?: {
      className?: string;
    };
  };
}

export function customAlerts() {
  return (tree: ASTNode) => {
    for (const node of tree.children ?? []) {
      if (node.type !== "blockquote" || !node.children) continue;

      const [firstPara] = node.children;
      const [text] =
        firstPara?.type === "paragraph" ? (firstPara.children ?? []) : [];

      if (text?.type !== "text" || !text.value) continue;

      const m = text.value.match(/^\[!([a-zA-Z0-9_-]+)\]\s*/);

      if (!m) continue;

      const type = m[1].toLowerCase();
      text.value = text.value.slice(m[0].length);

      node.children = [
        {
          type: "paragraph",
          data: {
            hName: "div",
            hProperties: { className: "markdown-alert-title" },
          },
          children: [
            { type: "text", value: type[0].toUpperCase() + type.slice(1) },
          ],
        },
        ...node.children,
      ];

      node.data = {
        hName: "div",
        hProperties: { className: `markdown-alert markdown-alert-${type}` },
      };
    }
  };
}
