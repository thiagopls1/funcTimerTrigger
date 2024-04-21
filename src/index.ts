import { app } from '@azure/functions'
import { timerTrigger } from './functions/timerTrigger' 
import { httpTrigger } from './functions/httpTrigger';
import { storageBlobTrigger } from './functions/storageBlobTrigger';

app.timer('timerTrigger', {
  schedule: '*/20 * * * * *',
  handler: timerTrigger
})


app.http('httpTrigger', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: httpTrigger
});

app.storageBlob('storageBlobTrigger', {
  path: 'sample-workitems/{name}',
  connection: process.env.BLOB_CONNECTION_STRING,
  handler: storageBlobTrigger
})