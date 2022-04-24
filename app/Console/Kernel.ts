import { ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  /**
   * Register the commands for the application.
   *
   * @return void
   */
  protected commands = [
    import('@athenna/artisan/src/Commands/List'),
    import('@athenna/artisan/src/Commands/Build'),
    import('@athenna/artisan/src/Commands/Serve'),
    import('@athenna/artisan/src/Commands/Eslint/Fix'),
    import('@athenna/artisan/src/Commands/Route/List'),
    import('@athenna/artisan/src/Commands/Make/Facade'),
    import('@athenna/artisan/src/Commands/Make/Command'),
    import('@athenna/artisan/src/Commands/Make/Service'),
    import('@athenna/artisan/src/Commands/Make/Provider'),
    import('@athenna/artisan/src/Commands/Make/Exception'),
    import('@athenna/artisan/src/Commands/Make/Controller'),
    import('@athenna/artisan/src/Commands/Make/Middleware'),
  ]
}
