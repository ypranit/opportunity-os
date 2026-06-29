import type { ReactNode } from "react";

export interface NavItem {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface OpportunityPreview {
  id: string;
  title: string;
  organization: string;
  deadline: string;
  category: string;
  eligibilityScore: number | null;
}

export interface DeadlinePreview {
  id: string;
  title: string;
  date: string;
  daysLeft: number;
}

export interface ActivityItem {
  id: string;
  action: string;
  timestamp: string;
}

export type DocumentType =
  | "resume"
  | "marksheet"
  | "certificate"
  | "id_proof"
  | "bonafide";

export interface DocumentUploadType {
  id: DocumentType;
  label: string;
  description: string;
  accept: string;
}
