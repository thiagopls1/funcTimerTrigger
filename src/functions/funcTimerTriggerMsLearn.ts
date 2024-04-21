import { InvocationContext, Timer} from '@azure/functions'

export async function timerTrigger(myTimer: Timer, context: InvocationContext): Promise<void> {
  context.log('Timer function processed request')
}