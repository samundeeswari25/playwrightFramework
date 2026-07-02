# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login\Login.spec.ts >> Read Excel Data
- Location: tests\login\Login.spec.ts:17:5

# Error details

```
Error: File not found: ./testData/testdata.xlsx
```

# Test source

```ts
  1  | import ExcelJS from 'exceljs';
  2  | 
  3  | export class ExcelReader {
  4  |   static async readData(filePath: string, sheetNumber: number, row: number, column: number) {
  5  |     const workbook = new ExcelJS.Workbook();
> 6  |     await workbook.xlsx.readFile(filePath);
     |     ^ Error: File not found: ./testData/testdata.xlsx
  7  | 
  8  |     const sheet = workbook.getWorksheet(sheetNumber);
  9  |     return sheet?.getRow(row).getCell(column).value;
  10 |   }
  11 | }
```