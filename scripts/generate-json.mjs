#!/usr/bin/env node

/**
 * generate-json.mjs
 * Parsea el README.md y genera portfolios.json
 * Sin dependencias externas — solo Node.js nativo
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const README_PATH = resolve(ROOT, 'README.md');
const OUTPUT_PATH = resolve(ROOT, 'portfolios.json');

// Regex patterns
const COUNTRY_REGEX = /^## .+\s+(.+)$/;
const PORTFOLIO_REGEX = /^- \[(.+?)\]\((.+?)\)\s*(?:-\s*(.+))?$/;

// Países conocidos para filtrar secciones que no son países
const KNOWN_COUNTRIES = new Set([
  'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia',
  'Costa Rica', 'Cuba', 'Ecuador', 'El Salvador', 'Guatemala',
  'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay',
  'Perú', 'Puerto Rico', 'República Dominicana', 'Uruguay', 'Venezuela'
]);

function parseReadme() {
  let content;

  try {
    content = readFileSync(README_PATH, 'utf-8');
  } catch (err) {
    console.error(`Error: No se pudo leer ${README_PATH}`);
    console.error(`  ${err.message}`);
    process.exit(1);
  }

  const lines = content.split('\n');
  const portfolios = [];
  let currentCountry = null;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detectar sección de país
    const countryMatch = trimmed.match(COUNTRY_REGEX);
    if (countryMatch) {
      const countryName = countryMatch[1].trim();
      if (KNOWN_COUNTRIES.has(countryName)) {
        currentCountry = countryName;
      } else {
        currentCountry = null;
      }
      continue;
    }

    // Detectar entrada de portafolio
    if (currentCountry) {
      const portfolioMatch = trimmed.match(PORTFOLIO_REGEX);
      if (portfolioMatch) {
        portfolios.push({
          name: portfolioMatch[1].trim(),
          url: portfolioMatch[2].trim(),
          role: portfolioMatch[3] ? portfolioMatch[3].trim() : null,
          country: currentCountry
        });
      }
    }
  }

  return portfolios;
}

function generateJSON(portfolios) {
  const countriesWithEntries = new Set(portfolios.map(p => p.country));

  const data = {
    metadata: {
      total: portfolios.length,
      countries: countriesWithEntries.size,
      countriesTotal: KNOWN_COUNTRIES.size,
      lastUpdated: new Date().toISOString()
    },
    portfolios
  };

  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2) + '\n', 'utf-8');

  return data.metadata;
}

// Ejecutar
const portfolios = parseReadme();
const metadata = generateJSON(portfolios);

console.log(`✓ Generated portfolios.json — ${metadata.total} portfolios from ${metadata.countries} countries`);
