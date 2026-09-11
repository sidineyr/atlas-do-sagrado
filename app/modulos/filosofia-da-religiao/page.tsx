import type { Metadata } from "next";
import { ModulePageView } from "../../components/module-page-view";
export const metadata: Metadata = { alternates: { canonical: "/modulos/filosofia-da-religiao" }, title: "Filosofia da religião · Atlas do Sagrado" };
export default function Page() { return <ModulePageView slug="filosofia-da-religiao" />; }
