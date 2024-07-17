import React from "react";
import { toast } from "react-toastify";

function SingleColor({ color, index }) {
  const { hex, weight } = color;
  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(`#${hex}`);
      toast.success("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  }
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor;
