import * as XLSX from 'xlsx';

export class ExcelReader {
    static readData(filePath: string, sheetName: string) {
        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        const data = XLSX.utils.sheet_to_json(worksheet);

        console.log('data');

        return data;
         
    }
   
}