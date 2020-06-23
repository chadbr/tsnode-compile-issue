
export interface ICode {
  listType: string;
  culture: string;
  code: string;
  codeText: string;
  order?: any;
}

export interface ICodeList {
  listType: string;
  culture: string;
  codes: Array<ICode>;
}

export class CodeListLogic {

  private static cache: { [key: string]: ICodeList } = {};

  public static async getCodeList(
    culture: string,
    listType: string
  ): Promise<ICodeList | undefined> {

    const key = CodeListLogic.getCacheKey(culture, listType);
    let list: ICodeList | undefined = CodeListLogic.cache[key];
    if (list) {
      return list;
    }

    list = await CodeListLogic.getCodeListNoCache(culture, listType);
    CodeListLogic.cache[key] = list ?? {} as ICodeList;
    return list;
  }

  private static async getCodeListNoCache(
    culture: string,
    listType: string
  ): Promise<ICodeList | undefined> {

    const list: ICodeList = {
      listType,
      culture,
      codes:
      [{
        listType,
        culture,
        code: 'code1',
        codeText: 'some test 1'
      },
      {
        listType,
        culture,
        code: 'code2',
        codeText: 'some test 2'
      }]
    };
    return list;
  }

  private static getCacheKey(
    culture: string,
    listType: string
  ): string {

    return `${culture}:${listType}`;
  }

  public static async addCodeListFromFolder(
    codeListFolder: string,
    culture: string,
    listType: string,
  ) {

    const list: ICodeList = {
      listType,
      culture,
      codes:
      [{
        listType,
        culture,
        code: 'code1',
        codeText: 'some test 1'
      },
      {
        listType,
        culture,
        code: 'code2',
        codeText: 'some test 2'
      }]
    };

    CodeListLogic.cache[CodeListLogic.getCacheKey(culture, listType)] =
      list ?? {} as ICodeList;
  }
}
