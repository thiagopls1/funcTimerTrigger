import { app } from '@azure/functions'
import { timerTrigger } from './functions/funcTimerTriggerMsLearn' 

app.timer('timerTrigger', {
  schedule: '0 */5 * * * *',
  handler: timerTrigger
})