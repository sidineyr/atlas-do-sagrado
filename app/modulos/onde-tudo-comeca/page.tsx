import type { Metadata } from "next";
import { ModulePageView } from "../../components/module-page-view";
export const metadata: Metadata = { alternates: { canonical: "/modulos/onde-tudo-comeca" }, title: "Onde tudo começa? · Atlas do Sagrado" };
export default function Page() { return <ModulePageView slug="onde-tudo-comeca" />; }
