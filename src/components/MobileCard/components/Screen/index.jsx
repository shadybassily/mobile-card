import "./styles.css";

export default function Screen({ children, name = "shady" }) {
  return <div className="screen">{children}</div>;
}
