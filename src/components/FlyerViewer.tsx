"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function isPdf(url: string) {
  return url.toLowerCase().split("?")[0].endsWith(".pdf");
}

export default function FlyerViewer({ flyerPath, title }: { flyerPath: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (error) {
    // The page header above already renders a persistent "Download" link for
    // this exact file, so no need to repeat it here — that would just be a
    // second, adjacent link to the same destination for keyboard/AT users.
    return (
      <div className="flex flex-col items-center gap-4 py-12 text-center text-parchment/55">
        <p className="text-sm">Unable to display flyer inline. Use the Download link above to view it.</p>
      </div>
    );
  }

  if (!isPdf(flyerPath)) {
    return (
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={flyerPath}
          alt={`${title} flyer`}
          className="w-full max-w-2xl shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {!loaded && (
        <div className="py-16 text-xs uppercase tracking-[0.16em] text-parchment/60">
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
