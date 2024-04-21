import {
  HttpRequest,
  HttpResponseInit,
  InvocationContext,
  input,
} from "@azure/functions";
import { Bookmark } from "../types/bookmark";
import { cosmosOutput } from "../outputs/cosmos-output";

export async function postCosmosHttpTrigger(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);
  const bookmark: Bookmark = await request.json() as Bookmark;
  context.log(bookmark);
  if (!bookmark) {
    return {
      status: 400,
      body: "Bookmark must be set at request body",
    };
  }

  context.extraOutputs.set(cosmosOutput, bookmark)

  return {
    body: `Posted bookmark ${bookmark.id}`,
  };
}
