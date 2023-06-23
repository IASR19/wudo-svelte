migrate((db) => {
  const collection = new Collection({
    "id": "zti5oqw0mv91fdj",
    "created": "2023-06-23 02:09:47.978Z",
    "updated": "2023-06-23 02:09:47.978Z",
    "name": "service",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bgyemo7y",
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
        "id": "a1wd4jbs",
        "name": "description",
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
        "id": "pjmyhjt0",
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
        "id": "of6fifi6",
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
  const collection = dao.findCollectionByNameOrId("zti5oqw0mv91fdj");

  return dao.deleteCollection(collection);
})
