export interface ItemNumber {
  volumeNumber: number;
  chapterNumber: number;
  sectionNumber: number;
  subsectionNumber: number;

  figureNumber: number;
  tableNumber: number;
  equationNumber: number;

  id?: string;
}

export interface TocListEntry extends ItemNumber {
  // itemNumber : ItemNumber;
  listText: string;
  id: string;
}

export class Numberer {
  itemCounter: ItemNumber;
  headerTable: Array<TocListEntry>;
  figureList: Array<TocListEntry>;
  tableList: Array<TocListEntry>;
  citekeys: { [key: string]: number };

  citeOptions: Record<string, any>;

  constructor() {
    this.itemCounter = {
      volumeNumber: 0,
      chapterNumber: 0,
      sectionNumber: 0,
      subsectionNumber: 0,

      figureNumber: 0,
      tableNumber: 0,
      equationNumber: 0,
    };
    this.headerTable = [];
    this.figureList = [];
    this.tableList = [];

    this.citekeys = {};

    this.citeOptions = {
      template: 'ieee',
      lang: 'en-US',
    };
  }

  makeVolumeNumber(title = ''): ItemNumber {
    this.itemCounter.volumeNumber += 1;
    this.itemCounter.chapterNumber = 0;
    this.itemCounter.sectionNumber = 0;
    this.itemCounter.subsectionNumber = 0;

    const id: string = ['vol', this.itemCounter.volumeNumber].join('-');

    this.headerTable.push({
      ...this.itemCounter,
      listText: title,
      id: id,
    });

    return { ...this.itemCounter, id: id };
  }

  makeChapterNumber(title: string): ItemNumber {
    this.itemCounter.chapterNumber += 1;
    this.itemCounter.sectionNumber = 0;
    this.itemCounter.subsectionNumber = 0;

    this.itemCounter.figureNumber = 0;
    this.itemCounter.tableNumber = 0;
    this.itemCounter.equationNumber = 0;

    const id: string = ['ch', this.itemCounter.volumeNumber, this.itemCounter.chapterNumber].join('-');

    const tableval: TocListEntry = {
      ...this.itemCounter,
      listText: title,
      id: id,
    };

    this.headerTable.push(tableval);

    return { ...this.itemCounter, id: id };
  }

  makeSectionNumber(title: string): ItemNumber {
    this.itemCounter.sectionNumber += 1;
    this.itemCounter.subsectionNumber = 0;

    const id: string = [
      'sec',
      this.itemCounter.volumeNumber,
      this.itemCounter.chapterNumber,
      this.itemCounter.sectionNumber,
    ].join('-');

    this.headerTable.push({
      ...this.itemCounter,
      listText: title,
      id: id,
    });

    return { ...this.itemCounter, id: id };
  }

  makeSubsectionNumber(title: string): ItemNumber {
    this.itemCounter.subsectionNumber += 1;

    const id: string = [
      'subsec',
      this.itemCounter.volumeNumber,
      this.itemCounter.chapterNumber,
      this.itemCounter.sectionNumber,
      this.itemCounter.subsectionNumber,
    ].join('-');

    this.headerTable.push({
      ...this.itemCounter,
      listText: title,
      id: id,
    });

    return { ...this.itemCounter, id: id };
  }

  makeFigureNumber(caption: string): ItemNumber {
    this.itemCounter.figureNumber += 1;
    const id: string = [
      'fig',
      this.itemCounter.volumeNumber,
      this.itemCounter.chapterNumber,
      this.itemCounter.figureNumber,
    ].join('-');

    this.figureList.push({
      ...this.itemCounter,
      listText: caption,
      id: id,
    });

    return { ...this.itemCounter, id: id };
  }

  makeTableNumber(caption: string): ItemNumber {
    this.itemCounter.tableNumber += 1;
    const id: string = [
      'tab',
      this.itemCounter.volumeNumber,
      this.itemCounter.chapterNumber,
      this.itemCounter.tableNumber,
    ].join('-');

    this.tableList.push({
      ...this.itemCounter,
      listText: caption,
      id: id,
    });

    return { ...this.itemCounter, id: id };
  }

  makeEquationNumber(): ItemNumber {
    this.itemCounter.equationNumber += 1;
    return Object.assign(this.itemCounter);
  }

  // updateXRefs() {}

  makeCitationNumber(key: string): number {
    if (key in this.citekeys) {
      return this.citekeys[key];
    } else {
      this.citekeys[key] = Object.keys(this.citekeys).length + 1;
      return this.citekeys[key];
    }
  }
}

export const DefaultNumberer: Numberer = new Numberer();
