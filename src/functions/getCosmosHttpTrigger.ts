import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
} from "@azure/functions";
import { Bookmark } from "../types/bookmark";
import { cosmosInput } from "../inputs/cosmos-input";

export async function getCosmosHttpTrigger(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  const bookmarkItem = <Bookmark>context.extraInputs.get(cosmosInput);
  context.log(context.extraInputs);
  if (!bookmarkItem) {
    return {
      status: 404,
      body: "Bookmark not found",
    };
  }

  return {
    body: `Found bookmark item: Id: ${bookmarkItem.id}, Url: ${bookmarkItem.url}`,
  };
}
