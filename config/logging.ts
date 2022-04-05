import { Path } from '@secjs/utils'

export default {
  /*
  |--------------------------------------------------------------------------
  | Default Log Channel
  |--------------------------------------------------------------------------
  |
  | This option defines the default log channel that gets used when writing
  | messages to the logs. The name specified in this option should match
  | one of the channels defined in the "channels" configuration object.
  |
  */

  default: Env('LOG_CHANNEL', 'application'),

  /*
  |--------------------------------------------------------------------------
  | Log Channels
  |--------------------------------------------------------------------------
  |
  | Here you may configure the log channels for your application.
  |
  | Available Drivers: "console", "debug", "file".
  | Available Formatters: "context", "debug", "json", "log".
  |
  */

  channels: {
    application: {
      driver: 'console',
      formatter: 'context',
      streamType: 'stdout',
      formatterConfig: {
        level: 'INFO',
        context: 'Logger',
      },
    },
    debug: {
      driver: 'debug',
      formatter: 'context',
      namespace: 'api:main',
      formatterConfig: {
        level: 'DEBUG',
        context: 'Debugger',
      },
    },
    file: {
      driver: 'file',
      formatter: 'log',
      filePath: Path.noBuild().logs('athenna.log'),
      formatterConfig: {
        level: 'INFO',
        context: 'Logger',
      },
    },
  },
}
