export default class ProductsSchema {
  static schema = {
    name: 'Subtitles',
    primaryKey: 'id',
    properties: {
      id: {
        type: 'int',
        indexed: true,
      },
      title: 'int',
      subtitle: 'string',
    },
  };
}
