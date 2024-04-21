import { app } from '@azure/functions'
import { timerTrigger } from './functions/timerTrigger' 

app.timer('timerTrigger', {
  schedule: '*/20 * * * * *',
  handler: timerTrigger
})