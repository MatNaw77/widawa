'use client'
import React, { useEffect } from "react";

// Do parsowania HTML po stronie klienta (możesz też użyć DOMParser)
// import cheerio from "cheerio";

export function Table() {
  useEffect(() => {
    const fetchAndScrape = async () => {
      try {
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const targetUrl =
          "https://www.laczynaspilka.pl/rozgrywki?season=e9d66181-d03e-4bb3-b889-4da848f4831d&leagueGroup=e978c8e5-d903-4a89-b6b5-8d5da6c567ee&leagueId=337bb869-0b42-484f-8eca-0c8842a13ec9&subLeague=b7d2c55b-e2af-44e2-9df2-3f6e05dc1768&enumType=ZpnAndLeagueAndPlay&group=b93b253a-1cad-4892-b97a-6417f98559a3&voivodeship=c38a66b8-8d8e-49b9-8772-948c097d885a&isAdvanceMode=false&genderType=Male";

        const response = await fetch(proxyUrl + targetUrl);
        const htmlText = await response.text();

        // Parsujemy HTML za pomocą cheerio
        // const $ = cheerio.load(htmlText);

        // // Przykładowo pobierzmy wszystkie wiersze z tabeli wyników (dostosuj selektor)
        // const rows: any = [];

        // $("table tbody tr").each((index: any, element: any) => {
        //   const columns: any = [];
        //   $(element)
        //     .find("td")
        //     .each((i: any, el: any) => {
        //       columns.push($(el).text().trim());
        //     });
        //   rows.push(columns);
        // });

        console.log("Zescrapowane dane z tabeli:", htmlText);
      } catch (error) {
        console.error("Błąd podczas scrapowania:", error);
      }
    };

    fetchAndScrape();
  }, []);

  return <div>Sprawdź konsolę, żeby zobaczyć dane z Łączy Nas Piłka</div>;
};
