"use client";

import { useCallback, useState } from "react";
import type { DocumentType, DocumentUploadType } from "@/types/dashboard";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

const documentTypes: DocumentUploadType[] = [
  {
    id: "resume",
    label: "Resume",
    description: "PDF or DOCX of your latest resume",
    accept: ".pdf,.doc,.docx",
  },
  {
    id: "marksheet",
    label: "Marksheet",
    description: "Academic transcripts and grade reports",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    id: "certificate",
    label: "Certificates",
    description: "Achievement and course certificates",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    id: "id_proof",
    label: "ID Proof",
    description: "Government-issued identification",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
  {
    id: "bonafide",
    label: "Bonafide",
    description: "Institution bonafide certificate",
    accept: ".pdf,.jpg,.jpeg,.png",
  },
];

type UploadStatus = "idle" | "uploading" | "success" | "error";

interface UploadState {
  status: UploadStatus;
  message: string;
}

export function DocumentUploadZone() {
  const [activeType, setActiveType] = useState<DocumentType>("resume");
  const [dragOver, setDragOver] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>({ status: "idle", message: "" });

  const activeDoc = documentTypes.find((doc) => doc.id === activeType)!;

  const uploadFile = useCallback(
    async (file: File) => {
      setUploadState({ status: "uploading", message: "" });

      try {
        const supabase = createBrowserSupabaseClient();
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setUploadState({ status: "error", message: "You must be signed in to upload." });
          return;
        }

        const path = `${user.id}/${activeType}/${Date.now()}-${file.name}`;
        const { error } = await supabase.storage.from("documents").upload(path, file, {
          upsert: false,
        });

        if (error) {
          const isBucketMissing = error.message.toLowerCase().includes("bucket");
          setUploadState({
            status: "error",
            message: isBucketMissing
              ? "Storage bucket not configured yet. UI ready — create a 'documents' bucket in Supabase."
              : error.message,
          });
          return;
        }

        setUploadState({
          status: "success",
          message: `${activeDoc.label} uploaded successfully.`,
        });
      } catch {
        setUploadState({ status: "error", message: "Upload failed. Please try again." });
      }
    },
    [activeType, activeDoc.label],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) void uploadFile(file);
    },
    [uploadFile],
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {documentTypes.map((doc) => (
          <button
            key={doc.id}
            type="button"
            onClick={() => {
              setActiveType(doc.id);
              setUploadState({ status: "idle", message: "" });
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeType === doc.id
                ? "gradient-bg text-white shadow-md"
                : "glass text-muted hover:text-foreground"
            }`}
          >
            {doc.label}
          </button>
        ))}
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`glass relative rounded-2xl border-2 border-dashed p-10 text-center transition ${
          dragOver ? "border-indigo-500 bg-indigo-500/5" : "border-black/10 dark:border-white/10"
        }`}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
        </div>

        <h3 className="text-lg font-semibold">Upload {activeDoc.label}</h3>
        <p className="mt-2 text-sm text-muted">{activeDoc.description}</p>
        <p className="mt-1 text-xs text-muted">Drag and drop or browse files</p>

        <label className="mt-6 inline-block cursor-pointer">
          <span className="gradient-bg rounded-full px-6 py-2.5 text-sm font-semibold text-white">
            {uploadState.status === "uploading" ? "Uploading…" : "Browse Files"}
          </span>
          <input
            type="file"
            className="sr-only"
            accept={activeDoc.accept}
            disabled={uploadState.status === "uploading"}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) void uploadFile(file);
            }}
          />
        </label>
      </div>

      {uploadState.message && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            uploadState.status === "success"
              ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
              : uploadState.status === "error"
                ? "border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300"
                : "border-indigo-500/20 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
          }`}
          role="status"
        >
          {uploadState.message}
        </div>
      )}
    </div>
  );
}
