"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function FlyerViewer({ flyerPath, title }: { flyerPath: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center text-parchment/55">
        <p className="text-sm">Unable to display flyer inline.</p>
        <a href={flyerPath} download className="accent-btn px-5 py-2 text-xs">
          Download Flyer
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {!loaded && (
        <div className="py-16 text-xs uppercase tracking-[0.16em] text-parchment/35">
          Loading flyer…
        </div>
      )}
      <Document
        file={flyerPath}
        onLoadSuccess={() => setLoaded(true)}
        onLoadError={() => setError(true)}
        className={loaded ? "w-full max-w-2xl mx-auto" : "hidden"}
      >
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="w-full shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          width={typeof window !== "undefined" ? Math.min(window.innerWidth - 80, 800) : 800}
        />
      </Document>
    </div>
  );
}
