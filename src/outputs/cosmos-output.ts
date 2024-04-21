import { output } from "@azure/functions";

export const cosmosOutput = output.cosmosDB({
  databaseName: 'func-io-learn-db',
  containerName: 'Bookmarks',
  partitionKey: '/id',
  connection: 'CosmosDbConnectionSetting',
  createIfNotExists: true
})