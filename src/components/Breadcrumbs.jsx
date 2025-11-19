import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ labels = {} }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  let path = "";

  return (
    <nav className="breadcrumbs button-transparent" style={{ padding: "10px 0" }}>
      <Link to="/">Home</Link>

      {segments.map((seg, i) => {
        path += `/${seg}`;
        const label = labels[seg] || decodeURI(seg);

        return (
          <span key={i}>
            {" / "}
            <Link to={path}>{label}</Link>
          </span>
        );
      })}
    </nav>
  );
}
