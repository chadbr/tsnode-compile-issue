import { CodeListLogic } from './code-list.logic';
import { suite, test } from '@testdeck/mocha';
import { assert, expect } from 'chai';

@suite('CodeList logic test')
export class CodeListLogicTest {

  // static async before(): Promise<void> { }

  // static async after(): Promise<void> { }

  // public async before(): Promise<void> { }

  // public async after() { }

  @test('should read')
  public async read(): Promise<void> {

    const result = await CodeListLogic.getCodeList('en-US', 'state');
    if (result) {
      expect('01').to.equal(result.codes[0].code);
      expect('Alabama').to.equal(result.codes[0].codeText);
    } else {
      assert.fail('code list not found!');
    }
  }

  @test('should read proppant type')
  public async readProppantType(): Promise<void> {

    const result = await CodeListLogic.getCodeList('en-US', 'proppant-type');
    if (result) {

      expect('any').to.equal(result.codes[0].code);
      expect('(any)').to.equal(result.codes[0].codeText);

      expect('fracSand').to.equal(result.codes[1].code);
      expect('Frac Sand').to.equal(result.codes[1].codeText);
    } else {
      assert.fail('code list not found!');
    }
  }

  @test('should return undefined')
  public async readJunk(): Promise<void> {

    try {
      const result = await CodeListLogic.getCodeList('en-US', 'fubar');
      expect(undefined).to.equal(result);
    } catch {
      assert.fail('code list should not except out');
    }
  }
}
