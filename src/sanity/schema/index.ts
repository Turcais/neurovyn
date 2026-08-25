import type { SchemaTypeDefinition } from "sanity";
import { siteSettings } from "./site-settings";
import { post } from "./post";
import { category } from "./category";
import { valueArea } from "./value-area";
import { pageContent } from "./page-content";
import { contactSubmission } from "./contact-submission";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  pageContent,
  post,
  category,
  valueArea,
  contactSubmission,
];
