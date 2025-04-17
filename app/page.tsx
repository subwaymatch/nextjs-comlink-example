export default function Page() {
  return (
    <div style={{ padding: "24px" }}>
      <h1>Next.js Comlink Examples</h1>
      <ul style={{ marginTop: "16px", listStyleType: "none", padding: 0 }}>
        <li style={{ marginBottom: "8px" }}>
          <a
            href="/basic"
            style={{ textDecoration: "underline", color: "#0070f3" }}
          >
            Basic Comlink Example
          </a>
        </li>
        <li style={{ marginBottom: "8px" }}>
          <a
            href="/singleton"
            style={{ textDecoration: "underline", color: "#0070f3" }}
          >
            Singleton Worker Example
          </a>
        </li>
        <li style={{ marginBottom: "8px" }}>
          <a
            href="/non-singleton"
            style={{ textDecoration: "underline", color: "#0070f3" }}
          >
            Non-Singleton Worker Example
          </a>
        </li>
      </ul>
    </div>
  );
}
