import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ content }: { content: string }) {
  return (
    <div className="article-body font-body" style={{ fontSize: "14px", lineHeight: 1.7 }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: (p) => (
            <h2 className="font-headline" style={{ fontSize: "22px", margin: "24px 0 12px" }} {...p} />
          ),
          h2: (p) => (
            <h2 className="font-headline" style={{ fontSize: "20px", margin: "20px 0 10px" }} {...p} />
          ),
          h3: (p) => (
            <h3 className="font-headline" style={{ fontSize: "17px", margin: "16px 0 8px" }} {...p} />
          ),
          p: ({ children, ...props }) => (
            <p className="font-body" style={{ marginBottom: "12px" }} {...props}>
              {children}
            </p>
          ),
          ul: (p) => <ul style={{ margin: "0 0 12px 1.2em", listStyle: "disc" }} {...p} />,
          ol: (p) => <ol style={{ margin: "0 0 12px 1.2em" }} {...p} />,
          blockquote: (p) => (
            <blockquote className="pullquote font-headline" style={{ margin: "16px 0" }} {...p} />
          ),
          code: ({ className, children, ...props }) => {
            const isBlock = className?.includes("language-");
            if (isBlock) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code
                style={{
                  background: "var(--paper-dark)",
                  padding: "1px 4px",
                  fontSize: "0.9em",
                }}
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: (p) => <pre {...p} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
