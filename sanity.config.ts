import { defineConfig } from "sanity";
import { structureTool, type StructureBuilder } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schema";

/**
 * Neurovyn yonetim paneli. Siteye /studio adresinde gomulu calisir.
 *
 * "Site Ayarlari" tek kayitlik bir belgedir; listede degil, dogrudan
 * duzenleme ekrani olarak acilir.
 */

const singletons = new Set(["siteSettings"]);

function structure(S: StructureBuilder) {
  return S.list()
    .title("Neurovyn")
    .items([
      S.listItem()
        .title("Site Ayarları")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      S.divider(),

      S.listItem()
        .title("Sayfa Metinleri")
        .schemaType("pageContent")
        .child(S.documentTypeList("pageContent").title("Sayfa Metinleri")),

      S.listItem()
        .title("Değer Ürettiğimiz Alanlar")
        .schemaType("valueArea")
        .child(S.documentTypeList("valueArea").title("Alanlar").defaultOrdering([{ field: "order", direction: "asc" }])),

      S.divider(),

      S.listItem()
        .title("Blog Yazıları")
        .schemaType("post")
        .child(
          S.documentTypeList("post")
            .title("Blog Yazıları")
            .defaultOrdering([{ field: "publishedAt", direction: "desc" }]),
        ),

      S.listItem()
        .title("Blog Kategorileri")
        .schemaType("category")
        .child(S.documentTypeList("category").title("Kategoriler")),

      S.divider(),

      S.listItem()
        .title("Gelen Mesajlar")
        .schemaType("contactSubmission")
        .child(
          S.documentTypeList("contactSubmission")
            .title("Gelen Mesajlar")
            .defaultOrdering([{ field: "receivedAt", direction: "desc" }]),
        ),
    ]);
}

export default defineConfig({
  name: "neurovyn",
  title: "Neurovyn Yönetim Paneli",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    /* Tek kayitlik belgeler "yeni olustur" menusunde gorunmesin */
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletons.has(context.schemaType)
        ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : input,
  },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
