import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils/DateStringToDate';
import { MatchResultEnum } from './utils/MatchResultEnum';

type MatchData = [Date, string, string, number, number, MatchResultEnum, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [dateStringToDate(row[0]), row[1], row[2], parseInt(row[3]), parseInt(row[4]), row[5] as MatchResultEnum, row[6]];
  }
}
