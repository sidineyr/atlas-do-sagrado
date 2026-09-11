const PAGE_WIDTH = 842;
const PAGE_HEIGHT = 595;

function pdfText(value: string) {
  return value
    .normalize("NFC")
    .replace(/[–—]/g, "-")
    .split("")
    .map((char) => {
      if (char === "\\" || char === "(" || char === ")") return `\\${char}`;
      const code = char.charCodeAt(0);
      if (code >= 32 && code <= 126) return char;
      if (code <= 255) return `\\${code.toString(8).padStart(3, "0")}`;
      return "?";
    })
    .join("");
}

function centered(text: string, y: number, size: number, font = "F1") {
  const estimatedWidth = text.length * size * (font === "F2" ? 0.56 : 0.5);
  const x = Math.max(60, (PAGE_WIDTH - estimatedWidth) / 2);
  return `BT /${font} ${size} Tf ${x.toFixed(1)} ${y} Td (${pdfText(text)}) Tj ET`;
}

function latin1Bytes(value: string) {
  const bytes = new Uint8Array(value.length);
  for (let index = 0; index < value.length; index += 1) bytes[index] = value.charCodeAt(index) & 255;
  return bytes;
}

export function buildCertificatePdf({
  studentName,
  issuedOn,
  certificateId,
}: {
  studentName: string;
  issuedOn: string;
  certificateId: string;
}) {
  const content = [
    "q",
    "0.09 0.08 0.17 RG 3 w 24 24 794 547 re S",
    "0.74 0.53 0.20 RG 1 w 35 35 772 525 re S",
    "0.74 0.53 0.20 rg",
    "421 520 m 429 504 l 447 502 l 433 490 l 437 472 l 421 481 l 405 472 l 409 490 l 395 502 l 413 504 l h f",
    "0.09 0.08 0.17 rg",
    centered("ATLAS DO SAGRADO", 448, 14, "F2"),
    centered("CERTIFICADO SIMBÓLICO", 390, 30, "F2"),
    centered("Certificamos que", 337, 15),
    "0.74 0.53 0.20 rg",
    centered(studentName, 286, Math.max(22, Math.min(34, 42 - studentName.length * 0.22)), "F2"),
    "0.09 0.08 0.17 rg",
    centered("percorreu integralmente a trilha introdutória História das Religiões,", 238, 15),
    centered("composta por oito módulos de leitura autônoma, sem avaliação.", 212, 15),
    "0.74 0.53 0.20 RG 1 w 250 183 m 592 183 l S",
    centered(`Emitido em ${issuedOn}  |  Identificador ${certificateId}`, 150, 11),
    centered("Idealizado por Sidiney Rodrigues  |  Criado com ChatGPT", 105, 12, "F2"),
    centered("Documento simbólico, sem equivalência acadêmica ou profissional.", 78, 10),
    "Q",
  ].join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>`,
    `<< /Length ${latin1Bytes(content).length} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
  ];

  let pdf = "%PDF-1.4\n%âãÏÓ\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets[index + 1] = latin1Bytes(pdf).length;
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = latin1Bytes(pdf).length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return latin1Bytes(pdf);
}
