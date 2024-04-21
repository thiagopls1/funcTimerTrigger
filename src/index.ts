import { app } from '@azure/functions'
import { timerTrigger } from './functions/funcTimerTriggerMsLearn' 

app.timer('timerTrigger', {
  schedule: '*/20 * * * * *',
  handler: timerTrigger
})