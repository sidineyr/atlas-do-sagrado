import type { Metadata } from "next";
import { ModulePageView } from "../../components/module-page-view";
export const metadata: Metadata = { alternates: { canonical: "/modulos/tradicoes-do-oriente" }, title: "Tradições do Sul e do Leste da Ásia · Atlas do Sagrado" };
export default function Page() { return <ModulePageView slug="tradicoes-do-oriente" />; }
