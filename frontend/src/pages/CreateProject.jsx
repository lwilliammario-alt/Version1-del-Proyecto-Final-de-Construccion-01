import { useState } from "react";
import "../App.css";

function CreateProject() {
  const [name, setName] = useState("");
  const [storeType, setStoreType] = useState("");
  const [area, setArea] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !storeType || !area) {
      setError("Todos los campos son obligatorios.");
      setMessage("");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("http://localhost:5282/api/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          storeType,
          area: parseFloat(area),
        }),
      });

      if (response.ok) {
        const text = await response.text();
        setMessage(text || "Proyecto registrado correctamente.");
        setName("");
        setStoreType("");
        setArea("");
      } else {
        const errText = await response.text();
        setError(errText || "Error al registrar el proyecto.");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor backend.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Registrar Nuevo Proyecto</h2>
      {message && <div className="alert-success">{message}</div>}
      {error && <div className="alert-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">Nombre del Proyecto</label>
          <input
            id="name"
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ej. Smart Boutique A"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="storeType">Tipo de Tienda</label>
          <input
            id="storeType"
            className="form-input"
            type="text"
            value={storeType}
            onChange={(e) => setStoreType(e.target.value)}
            placeholder="Ej. Boutique, Supermercado"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="area">Área (m²)</label>
          <input
            id="area"
            className="form-input"
            type="number"
            step="0.1"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Ej. 120.5"
          />
        </div>
        <button className="form-button" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar Proyecto"}
        </button>
      </form>
    </div>
  );
}

export default CreateProject;