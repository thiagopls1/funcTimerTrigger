import { input } from "@azure/functions";

export const cosmosInput = input.cosmosDB({
  databaseName: 'func-io-learn-db',
  containerName: 'Bookmarks',
  id: '{id}',
  partitionKey: '{id}',
  connection: 'CosmosDbConnectionSetting',
});
