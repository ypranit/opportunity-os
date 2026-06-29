import { PageHeader } from "@/components/dashboard/dashboard-ui";
import { DocumentUploadZone } from "@/components/dashboard/document-upload-zone";

export default function DocumentsPage() {
  return (
    <div>
      <PageHeader
        title="Upload Documents"
        description="Upload your documents to build your profile. AI parsing will be enabled in a future update."
      />
      <DocumentUploadZone />
    </div>
  );
}
