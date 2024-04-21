import { app } from '@azure/functions'
import { timerTrigger } from './functions/timerTrigger' 
import { httpTrigger } from './functions/httpTrigger';

app.timer('timerTrigger', {
  schedule: '*/20 * * * * *',
  handler: timerTrigger
})


app.http('httpTrigger', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: httpTrigger
});