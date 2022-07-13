import Enzyme from 'enzyme';
import { EnzymeAdapter } from 'enzyme';

Enzyme.configure({
  adapter: newAdapter(),
  disableLifecycleMethods: true,
});
