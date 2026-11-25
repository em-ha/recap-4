import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (<div className="color-card" style={{ backgroundColor: color.hex, color: color.contrastText }}>
    <h2 className="color-card-headline">{color.hex}</h2>
    <p>{color.role}</p>
    <button type="button" onClick={() => setShowConfirmation(true)}>Delete</button>
    {showConfirmation && (
      <>
    <br /><p className="color-card-headline">Really delete?</p>
    <button type="button" onClick={() => onDeleteColor(color.id)}>Confirm</button>
    <button type="button" onClick={() => setShowConfirmation(false)}>Cancel</button>
    </>)}
    </div>);
}
