import realm from 'realm';

import SubtitleSchema from '../schemas/SubtitleSchema';

export default function getRealm(): ProgressPromise {
  return realm.open({
    schema: [SubtitleSchema],
  });
}
