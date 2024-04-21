import { app } from "@azure/functions";
import { timerTrigger } from "./functions/timerTrigger";
import { httpTrigger } from "./functions/httpTrigger";
import { storageBlobTrigger } from "./functions/storageBlobTrigger";
import { getCosmosHttpTrigger } from "./functions/getCosmosHttpTrigger";
import { cosmosInput } from "./inputs/cosmos-input";
import { postCosmosHttpTrigger } from "./functions/postCosmosHttpTrigger";
import { cosmosOutput } from "./outputs/cosmos-output";

app.timer("timerTrigger", {
  schedule: "*/20 * * * * *",
  handler: timerTrigger,
});

app.http("httpTrigger", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: httpTrigger,
});

app.storageBlob("storageBlobTrigger", {
  path: "sample-workitems/{name}",
  connection: "AzureWebJobsStorage",
  handler: storageBlobTrigger,
});

app.http("getCosmosHttpTrigger", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  extraInputs: [cosmosInput],
  route: 'getCosmosHttpTrigger/{id}',
  handler: getCosmosHttpTrigger,
});

app.http("postCosmosHttpTrigger", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: postCosmosHttpTrigger,
  extraOutputs: [cosmosOutput]
});
