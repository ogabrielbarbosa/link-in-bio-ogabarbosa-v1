"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Recriação do <image-slot> do Claude Design: mostra um placeholder
 * hachurado até a imagem real carregar. Se o arquivo não existir,
 * mantém o placeholder em vez de exibir o ícone de imagem quebrada.
 */
export default function SlotImage({ src, alt = "", placeholder = "", className = "", style }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  // Quando a imagem vem do cache ela pode terminar de carregar antes do
  // React anexar o onLoad — nesse caso o onLoad nunca dispara. Checamos
  // img.complete na montagem para não ficar preso no placeholder.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <span
      className={`img-slot ${loaded ? "has-img" : ""} ${className}`.trim()}
      data-placeholder={placeholder}
      style={style}
    >
      {src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      ) : null}
    </span>
  );
}
