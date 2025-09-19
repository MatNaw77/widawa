"use client";

import React, { useState } from "react";
import { useTableData } from "./useTableData";
import { TableHeader } from "./components/TableHeader";
import { TableRowComponent } from "./components/TableRowComponent";
import { TabButton } from "./components/TabButton";

const HEADERS = ["", "Drużyna", "Mecze", "Punkty", "Z", "R", "P", "Bramki"];
const TABS = ["A", "B"] as const;

export function Table() {
  const { tables, loading } = useTableData();
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const rows = tables[activeTab] || [];

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Ładowanie...</div>;
  }

  return (
    <div className="mt-30 mb-10 flex flex-col items-center w-full">
      <div className="flex w-[70%] md:w-[90%]">
        {TABS.map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            isActive={activeTab === tab}
            onClick={setActiveTab}
          />
        ))}
      </div>

      {/* Table */}
      <div className="w-[70%] md:w-[90%] mt-4 overflow-x-auto md:overflow-x-visible border border-t-0 border-gray-300 rounded-b-lg shadow">
        <table className="table-fixed md:w-full min-w-[600px] border-collapse">
          <TableHeader headers={HEADERS} />
          <tbody>
            {rows.map((row, i) => (
              <TableRowComponent key={i} row={row} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
