import fetch from "node-fetch";
import * as cheerio from "cheerio";
import cron from "node-cron";
import { NextResponse } from "next/server";

export interface TableRow {
  position: string;
  team: string;
  matches: string;
  points: string;
  wins: string;
  draws: string;
  losses: string;
  goals: string;
  isTomtex: boolean;
  values: any[];
  logoUrl: string;
}

let cachedData: { A: TableRow[]; B: TableRow[] } | null = null;
let lastUpdated: string | null = null;

async function fetchTable(url: string): Promise<TableRow[]> {
  if (!url) return [];
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

async function updateCache() {
  const [tableA, tableB] = await Promise.all([
    fetchTable(process.env.LINK_A || ""),
    fetchTable(process.env.LINK_B || ""),
  ]);
  cachedData = { A: tableA, B: tableB };
  lastUpdated = new Date().toISOString();
  console.log("Cache updated:", lastUpdated);
}

cron.schedule("0 20 * * *", async () => {
  try {
    await updateCache();
  } catch (err) {
    console.error("Error updating cache:", err);
  }
});

export async function GET() {
  if (!cachedData) {
    console.log("Cache empty, fetching for first time...");
    await updateCache();
  }
  return NextResponse.json({ ...cachedData, lastUpdated });
}
