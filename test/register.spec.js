import { Selector } from 'testcafe';

fixture('Register')
    .page('https://animal-shelter-ui.herokuapp.com/');


test('verify register button', async (testController) => {
    const btn_element = Selector('main a').withExactText('Register animal')
    await testController.expect(btn_element.exists).ok();
 })