import { NextResponse } from "next/server";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { TableRow } from "@/Components/Table/useTableData";

async function fetchTable(url: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const decoder = new TextDecoder("windows-1250");
  const html = decoder.decode(buffer);
  const htmlFixed = html
    .replace(/¦/g, "Ś")
    .replace(/±/g, "ą")
    .replace(/¶/g, "ś");
  const $ = cheerio.load(htmlFixed);
  const results: TableRow[] = [];

  const table = $("table.main2").first();

  table.find("tr").each((i, el) => {
    if (i < 4) return;
    const cells = $(el).find("td");
    if (cells.length >= 8) {
      results.push({
        position: $(cells[0]).text().trim(),
        team: $(cells[1]).text().trim(),
        matches: $(cells[2]).text().trim(),
        points: $(cells[3]).text().trim(),
        wins: $(cells[4]).text().trim(),
        draws: $(cells[5]).text().trim(),
        losses: $(cells[6]).text().trim(),
        goals: $(cells[7]).text().trim(),
        isTomtex: false,
        values: [],
        logoUrl: "",
      });
    }
  });

  return results;
}

export async function GET() {
  const [tableA, tableB] = await Promise.all([
    fetchTable(process.env.LINK_A || ""),
    fetchTable(process.env.LINK_B || ""),
  ]);

  return NextResponse.json({ A: tableA, B: tableB });
}
