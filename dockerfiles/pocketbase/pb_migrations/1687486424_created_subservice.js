migrate((db) => {
  const collection = new Collection({
    "id": "gedsqft2xgu8o90",
    "created": "2023-06-23 02:13:44.527Z",
    "updated": "2023-06-23 02:13:44.527Z",
    "name": "subservice",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "de9homzi",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "iqwehtcc",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "if2wizph",
        "name": "start",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gapn7fuo",
        "name": "end",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gedsqft2xgu8o90");

  return dao.deleteCollection(collection);
})
