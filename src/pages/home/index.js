import template from './template.marko';
import {photos} from '../../../photos';

export default async function (_, res) {
  template.stream ({photos}).pipe (res);
}
