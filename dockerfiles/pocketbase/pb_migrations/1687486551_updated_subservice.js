migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gedsqft2xgu8o90")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kxo5qdp9",
    "name": "idService",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "zti5oqw0mv91fdj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gedsqft2xgu8o90")

  // remove
  collection.schema.removeField("kxo5qdp9")

  return dao.saveCollection(collection)
})
